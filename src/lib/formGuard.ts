import { createHash, createHmac, randomBytes, timingSafeEqual } from 'node:crypto';

// Anti-bot guard shared by the public forms (/api/proposal, /api/checklist-download).
// Layers, cheapest first: honeypot, same-site Origin, signed form token with a
// time trap, in-memory rate limit, content heuristics, optional Turnstile.
// Spam gets a silent fake success: bots learn nothing.

const MIN_AGE_MS = 3_000;
const MAX_AGE_MS = 24 * 60 * 60 * 1000;
export const HONEYPOT_FIELD = 'fax';

function key(): Buffer | null {
  const secret = process.env.FORM_SECRET || process.env.RESEND_API_KEY;
  if (!secret) return null;
  return createHash('sha256').update(`pallanca-info-forms-v1:${secret}`).digest();
}
const sign = (payload: string, k: Buffer) => createHmac('sha256', k).update(payload).digest('base64url');

export function issueToken(): string | null {
  const k = key();
  if (!k) return null;
  const payload = `${Date.now()}.${randomBytes(9).toString('base64url')}`;
  return `${payload}.${sign(payload, k)}`;
}

type TokenCheck = 'ok' | 'bad' | 'too-fast' | 'expired';
function checkToken(token: unknown): TokenCheck {
  if (typeof token !== 'string' || !token) return 'bad';
  const k = key();
  if (!k) return 'bad';
  const parts = token.split('.');
  if (parts.length !== 3) return 'bad';
  const expected = Buffer.from(sign(`${parts[0]}.${parts[1]}`, k));
  const got = Buffer.from(parts[2]);
  if (expected.length !== got.length || !timingSafeEqual(expected, got)) return 'bad';
  const age = Date.now() - Number(parts[0]);
  if (!Number.isFinite(age) || age < 0) return 'bad';
  if (age < MIN_AGE_MS) return 'too-fast';
  if (age > MAX_AGE_MS) return 'expired';
  return 'ok';
}

export function clientIp(req: Request): string {
  const real = req.headers.get('x-real-ip');
  if (real && real.trim()) return real.trim();
  const xff = req.headers.get('x-forwarded-for');
  if (xff) {
    const parts = xff.split(',').map((s) => s.trim()).filter(Boolean);
    if (parts.length) return parts[parts.length - 1]; // never the spoofable leftmost
  }
  return 'unknown';
}

const ALLOWED_HOSTS = new Set(['pallanca.info', 'www.pallanca.info', 'localhost']);
function sameSite(req: Request): boolean {
  const src = req.headers.get('origin') || req.headers.get('referer');
  if (!src) return false;
  try {
    const host = new URL(src).hostname;
    return ALLOWED_HOSTS.has(host) || host.endsWith('.vercel.app');
  } catch {
    return false;
  }
}

// Best-effort, per warm serverless instance.
const buckets = new Map<string, number[]>();
export function limited(bucket: string, max: number, windowMs: number): boolean {
  const now = Date.now();
  const arr = (buckets.get(bucket) || []).filter((t) => now - t < windowMs);
  arr.push(now);
  buckets.set(bucket, arr);
  if (buckets.size > 10000) buckets.clear();
  return arr.length > max;
}

const URL_RE = /(https?:\/\/|www\.)\S+/gi;
function looksLikeSpam(nameish: string[], freeText: string[]): boolean {
  if (nameish.some((v) => /(https?:\/\/|www\.)/i.test(v))) return true;
  for (const t of freeText) {
    if ((t.match(URL_RE) || []).length > 2) return true;
    if (/\[url=|<a\s+href/i.test(t)) return true;
  }
  return false;
}

// Cloudflare Turnstile, canonical siteverify. Enforced only when TURNSTILE_SECRET is set.
async function turnstileOk(token: unknown, ip: string, action: string): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET;
  if (!secret) return true;
  const expectedHostnames = new Set(
    (process.env.TURNSTILE_HOSTNAMES || 'pallanca.info,www.pallanca.info')
      .split(',').map((h) => h.trim()).filter(Boolean)
  );
  if (typeof token !== 'string' || token.length === 0 || token.length > 2048 || expectedHostnames.size === 0) {
    return false;
  }
  let result: { success?: boolean; action?: string; hostname?: string };
  try {
    const params = new URLSearchParams({ secret, response: token });
    if (ip !== 'unknown') params.set('remoteip', ip);
    const r = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      signal: AbortSignal.timeout(10_000),
      body: params,
    });
    if (!r.ok) throw new Error(`siteverify ${r.status}`);
    result = await r.json();
  } catch {
    return false;
  }
  return (
    result.success === true &&
    result.action === action &&
    typeof result.hostname === 'string' &&
    expectedHostnames.has(result.hostname)
  );
}

export type GuardResult =
  | { kind: 'pass' }
  | { kind: 'fake' }
  | { kind: 'error'; status: number; error: string };

export async function guardRequest(
  req: Request,
  body: Record<string, unknown>,
  opts: { action: string; nameish: string[]; freeText: string[] }
): Promise<GuardResult> {
  const hp = body[HONEYPOT_FIELD];
  if (typeof hp !== 'string' || hp.trim() !== '') return { kind: 'fake' };
  if (!sameSite(req)) return { kind: 'fake' };

  const tk = checkToken(body.formToken);
  if (tk === 'bad' || tk === 'too-fast') return { kind: 'fake' };
  if (tk === 'expired') return { kind: 'error', status: 400, error: 'Form expired, reload the page' };

  const ip = clientIp(req);
  if (limited(`${opts.action}:${ip}`, 5, 10 * 60 * 1000)) {
    return { kind: 'error', status: 429, error: 'Too many requests' };
  }
  if (looksLikeSpam(opts.nameish, opts.freeText)) return { kind: 'fake' };
  if (!(await turnstileOk(body.turnstile, ip, opts.action))) {
    return { kind: 'error', status: 403, error: 'Bot verification failed' };
  }
  return { kind: 'pass' };
}
