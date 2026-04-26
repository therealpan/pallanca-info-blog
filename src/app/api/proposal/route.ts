import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'nodejs';

interface ProposalPayload {
  // Step 1
  name: string;
  email: string;
  role: string;
  company: string;
  website?: string;
  // Step 2
  sector: string;
  revenue: string;
  employees: string;
  // Step 3
  problems: string[];
  // Step 4
  urgency: string;
  // Step 5
  budget: string;
  // Free text
  notes?: string;
  // Locale (for replying in the right language)
  locale?: string;
}

function escapeHtml(s: string): string {
  return String(s ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function buildEmailHtml(p: ProposalPayload): string {
  const row = (label: string, value: string | string[]) => {
    const v = Array.isArray(value) ? value.join(', ') : value;
    if (!v) return '';
    return `
      <tr>
        <td style="padding:10px 14px;background:#f7f5f0;color:#6b6b6b;font-size:12px;text-transform:uppercase;letter-spacing:0.04em;font-weight:500;width:170px;vertical-align:top;border-bottom:1px solid #e8e4dc;">${escapeHtml(label)}</td>
        <td style="padding:10px 14px;color:#1c1c1c;font-size:14px;border-bottom:1px solid #e8e4dc;line-height:1.55;">${escapeHtml(v)}</td>
      </tr>`;
  };

  return `
<!doctype html>
<html>
  <body style="margin:0;padding:24px;background:#efece5;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;">
    <table cellspacing="0" cellpadding="0" border="0" style="max-width:640px;margin:0 auto;background:#ffffff;border:1px solid #e8e4dc;border-radius:12px;overflow:hidden;">
      <tr>
        <td style="padding:20px 24px;background:#1c1c1c;color:#f5b041;font-size:13px;font-weight:600;letter-spacing:0.02em;">
          Pan · Nuova richiesta proposta
        </td>
      </tr>
      <tr>
        <td style="padding:24px;">
          <h1 style="margin:0 0 6px;color:#1c1c1c;font-size:22px;font-weight:600;letter-spacing:-0.01em;">
            ${escapeHtml(p.name)}
          </h1>
          <div style="color:#6b6b6b;font-size:14px;margin-bottom:18px;">
            ${escapeHtml(p.role)} · ${escapeHtml(p.company)}
            ${p.website ? ` · <a href="${escapeHtml(p.website)}" style="color:#1c1c1c;">${escapeHtml(p.website)}</a>` : ''}
          </div>

          <table cellspacing="0" cellpadding="0" border="0" width="100%" style="border:1px solid #e8e4dc;border-radius:8px;overflow:hidden;">
            ${row('Email', p.email)}
            ${row('Settore', p.sector)}
            ${row('Fatturato', p.revenue)}
            ${row('Dipendenti', p.employees)}
            ${row('Problema', p.problems)}
            ${row('Urgenza', p.urgency)}
            ${row('Budget orientativo', p.budget)}
            ${p.notes ? row('Note', p.notes) : ''}
            ${row('Lingua sito', p.locale || 'unknown')}
          </table>

          <div style="margin-top:24px;padding:14px 16px;background:#fdf6e8;border-left:3px solid #f5b041;border-radius:4px;color:#6b6b6b;font-size:13px;line-height:1.55;">
            Il prospect ha già visto il link Cal.com nella schermata di conferma. Se vuole prenotare, lo farà in autonomia. Tu puoi comunque scrivergli prima per qualificare meglio.
          </div>

          <div style="margin-top:18px;color:#9c9c9c;font-size:12px;">
            Submitted: ${new Date().toISOString()}
          </div>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

function buildEmailText(p: ProposalPayload): string {
  return `
Pan — Nuova richiesta proposta

Nome: ${p.name}
Ruolo: ${p.role}
Azienda: ${p.company}
${p.website ? `Sito: ${p.website}\n` : ''}Email: ${p.email}

Settore: ${p.sector}
Fatturato: ${p.revenue}
Dipendenti: ${p.employees}

Problema: ${p.problems.join(', ')}
Urgenza: ${p.urgency}
Budget orientativo: ${p.budget}

${p.notes ? `Note:\n${p.notes}\n\n` : ''}Lingua sito: ${p.locale || 'unknown'}
Submitted: ${new Date().toISOString()}
`.trim();
}

export async function POST(req: NextRequest) {
  let body: ProposalPayload;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  // Server-side validation
  const required = ['name', 'email', 'role', 'company', 'sector', 'revenue', 'employees', 'urgency', 'budget'];
  for (const field of required) {
    const value = body[field as keyof ProposalPayload];
    if (typeof value === 'string' && !value.trim()) {
      return NextResponse.json({ error: `Missing field: ${field}` }, { status: 400 });
    }
  }
  if (!Array.isArray(body.problems) || body.problems.length === 0) {
    return NextResponse.json({ error: 'Select at least one problem' }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) {
    return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('Missing RESEND_API_KEY env var');
    return NextResponse.json({ error: 'Server email config missing' }, { status: 500 });
  }

  // Resend API call
  const fromAddress = process.env.RESEND_FROM_ADDRESS || 'Pan <pan@pallanca.net>';
  const toAddress = process.env.RESEND_TO_ADDRESS || 'pan@piirz.com';

  const subject = `[Pan] ${body.name} · ${body.company} · ${body.problems[0] || 'nuova richiesta'}`;

  try {
    const resendRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: fromAddress,
        to: [toAddress],
        reply_to: body.email,
        subject,
        html: buildEmailHtml(body),
        text: buildEmailText(body),
      }),
    });

    if (!resendRes.ok) {
      const errBody = await resendRes.text();
      console.error('Resend API error:', resendRes.status, errBody);
      return NextResponse.json({ error: 'Email service error' }, { status: 502 });
    }
  } catch (err) {
    console.error('Resend network error:', err);
    return NextResponse.json({ error: 'Email service unreachable' }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
