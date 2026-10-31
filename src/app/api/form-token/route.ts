import { issueToken } from '@/lib/formGuard';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function GET() {
  const token = issueToken();
  if (!token) return Response.json({ ok: false }, { status: 503, headers: { 'Cache-Control': 'no-store' } });
  return Response.json({ ok: true, token }, { headers: { 'Cache-Control': 'no-store' } });
}
