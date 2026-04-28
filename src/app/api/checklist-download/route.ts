import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'nodejs';

interface ChecklistPayload {
  name: string;
  email: string;
  role: string;
  company: string;
  locale?: 'it' | 'en';
  consent?: boolean;
}

function escapeHtml(s: string): string {
  return String(s ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function buildLeadEmailHtml(p: ChecklistPayload): string {
  const isIt = p.locale === 'it';
  const pdfUrl = isIt
    ? 'https://pallanca.info/eu-ai-act-checklist-it.pdf'
    : 'https://pallanca.info/eu-ai-act-checklist-en.pdf';
  const proposalUrl = isIt
    ? 'https://pallanca.info/it/proposal'
    : 'https://pallanca.info/en/proposal';
  const firstName = (p.name || '').split(/\s+/)[0] || (isIt ? 'ciao' : 'there');

  if (isIt) {
    return `
<!doctype html>
<html>
  <body style="margin:0;padding:24px;background:#fafaf7;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;color:#1c1c1c;">
    <table cellspacing="0" cellpadding="0" border="0" style="max-width:600px;margin:0 auto;background:#ffffff;border:1px solid #e8e4dc;border-radius:8px;overflow:hidden;">
      <tr><td style="height:4px;background:#f5b041;line-height:0;font-size:0;">&nbsp;</td></tr>
      <tr>
        <td style="padding:32px 32px 24px;">
          <p style="margin:0 0 16px;font-size:15px;line-height:1.6;">Ciao ${escapeHtml(firstName)},</p>
          <p style="margin:0 0 16px;font-size:15px;line-height:1.6;">grazie per aver scaricato la <strong>EU AI Act Readiness Checklist</strong>. La trovi qui:</p>
          <p style="margin:24px 0;text-align:center;">
            <a href="${pdfUrl}" style="display:inline-block;background:#1c1c1c;color:#ffffff;text-decoration:none;padding:12px 24px;border-radius:999px;font-size:14px;font-weight:500;">Scarica il PDF →</a>
          </p>
          <p style="margin:16px 0;font-size:14px;line-height:1.65;color:#3a3a3a;">Trenta domande in sei sezioni: identificazione sistemi, classificazione del rischio, conformity, trasparenza, human oversight, governance interna. Alla fine c'è uno scoring framework con quattro fasce e una indicazione concreta di cosa fare in ognuna.</p>
          <p style="margin:16px 0;font-size:14px;line-height:1.65;color:#3a3a3a;">Tempo realistico per compilarla: quindici minuti se la fai con il tuo CIO e il DPO. Conviene farla in un'ora di calendar bloccata, non in pause caffè distratte.</p>
          <p style="margin:24px 0 16px;padding-top:20px;border-top:1px solid #e8e4dc;font-size:14px;line-height:1.65;color:#3a3a3a;">Se trovi gap critici (gap score sopra 10) e vuoi capire cosa è prioritario nel tuo caso specifico, vale la pena una conversazione di trenta minuti. Niente pitch, niente tool da vendere, niente commissioni vendor.</p>
          <p style="margin:0 0 24px;">
            <a href="${proposalUrl}" style="color:#b8740b;text-decoration:underline;font-size:14px;">Richiedi una proposta scritta →</a>
          </p>
          <p style="margin:0;font-size:14px;line-height:1.6;color:#1c1c1c;">A presto,<br><strong>Angelo Pallanca</strong> · Pan<br><span style="color:#8a8a8a;">pallanca.info</span></p>
        </td>
      </tr>
    </table>
    <p style="max-width:600px;margin:14px auto 0;font-size:11px;color:#8a8a8a;text-align:center;">Hai ricevuto questa mail perché hai compilato il form di download del checklist su pallanca.info. Non sei in nessuna mailing list automatica.</p>
  </body>
</html>`;
  }

  return `
<!doctype html>
<html>
  <body style="margin:0;padding:24px;background:#fafaf7;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;color:#1c1c1c;">
    <table cellspacing="0" cellpadding="0" border="0" style="max-width:600px;margin:0 auto;background:#ffffff;border:1px solid #e8e4dc;border-radius:8px;overflow:hidden;">
      <tr><td style="height:4px;background:#f5b041;line-height:0;font-size:0;">&nbsp;</td></tr>
      <tr>
        <td style="padding:32px 32px 24px;">
          <p style="margin:0 0 16px;font-size:15px;line-height:1.6;">Hi ${escapeHtml(firstName)},</p>
          <p style="margin:0 0 16px;font-size:15px;line-height:1.6;">thanks for downloading the <strong>EU AI Act Readiness Checklist</strong>. Here it is:</p>
          <p style="margin:24px 0;text-align:center;">
            <a href="${pdfUrl}" style="display:inline-block;background:#1c1c1c;color:#ffffff;text-decoration:none;padding:12px 24px;border-radius:999px;font-size:14px;font-weight:500;">Download the PDF →</a>
          </p>
          <p style="margin:16px 0;font-size:14px;line-height:1.65;color:#3a3a3a;">Thirty questions in six sections: AI system identification, risk classification, conformity, transparency, human oversight, internal governance. At the end you'll find a scoring framework with four bands and a concrete recommendation for each.</p>
          <p style="margin:16px 0;font-size:14px;line-height:1.65;color:#3a3a3a;">Realistic time to fill: fifteen minutes if you do it with your CIO and DPO. Best done in a blocked calendar hour, not during distracted coffee breaks.</p>
          <p style="margin:24px 0 16px;padding-top:20px;border-top:1px solid #e8e4dc;font-size:14px;line-height:1.65;color:#3a3a3a;">If you find critical gaps (gap score above 10) and want to figure out what's priority in your specific case, it's worth a thirty-minute conversation. No pitch, no tools to sell, no vendor commissions.</p>
          <p style="margin:0 0 24px;">
            <a href="${proposalUrl}" style="color:#b8740b;text-decoration:underline;font-size:14px;">Request a written proposal →</a>
          </p>
          <p style="margin:0;font-size:14px;line-height:1.6;color:#1c1c1c;">Best,<br><strong>Angelo Pallanca</strong> · Pan<br><span style="color:#8a8a8a;">pallanca.info</span></p>
        </td>
      </tr>
    </table>
    <p style="max-width:600px;margin:14px auto 0;font-size:11px;color:#8a8a8a;text-align:center;">You received this email because you filled the checklist download form on pallanca.info. You are not on any automated mailing list.</p>
  </body>
</html>`;
}

function buildNotifyEmailHtml(p: ChecklistPayload): string {
  return `
<!doctype html>
<html>
  <body style="margin:0;padding:24px;background:#efece5;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;">
    <table cellspacing="0" cellpadding="0" border="0" style="max-width:540px;margin:0 auto;background:#ffffff;border:1px solid #e8e4dc;border-radius:8px;overflow:hidden;">
      <tr>
        <td style="padding:14px 20px;background:#1c1c1c;color:#f5b041;font-size:12px;font-weight:600;letter-spacing:0.06em;text-transform:uppercase;">
          Pan · Nuovo download checklist
        </td>
      </tr>
      <tr>
        <td style="padding:22px 24px;">
          <p style="margin:0 0 4px;font-size:18px;font-weight:600;color:#1c1c1c;">${escapeHtml(p.name)}</p>
          <p style="margin:0 0 18px;font-size:13px;color:#6b6b6b;">${escapeHtml(p.role)} · ${escapeHtml(p.company)}</p>
          <table cellspacing="0" cellpadding="0" border="0" width="100%" style="border-top:1px solid #e8e4dc;">
            <tr><td style="padding:8px 0;font-size:13px;width:120px;color:#6b6b6b;">Email</td><td style="padding:8px 0;font-size:13px;color:#1c1c1c;">${escapeHtml(p.email)}</td></tr>
            <tr><td style="padding:8px 0;font-size:13px;width:120px;color:#6b6b6b;">Lingua</td><td style="padding:8px 0;font-size:13px;color:#1c1c1c;">${escapeHtml(p.locale || 'unknown')}</td></tr>
          </table>
          <p style="margin:18px 0 0;padding-top:12px;border-top:1px solid #e8e4dc;font-size:11px;color:#9c9c9c;font-family:ui-monospace,Menlo,monospace;">
            ${new Date().toISOString()}
          </p>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

export async function POST(req: NextRequest) {
  let body: ChecklistPayload;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  // Validation
  for (const f of ['name', 'email', 'role', 'company'] as const) {
    const v = body[f];
    if (typeof v !== 'string' || !v.trim()) {
      return NextResponse.json({ error: `Missing field: ${f}` }, { status: 400 });
    }
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) {
    return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
  }
  const locale = body.locale === 'en' ? 'en' : 'it';
  body.locale = locale;

  const apiKey = process.env.RESEND_API_KEY;
  const fromAddress = process.env.RESEND_FROM_ADDRESS;
  const notifyTo = process.env.RESEND_TO_ADDRESS;
  if (!apiKey || !fromAddress || !notifyTo) {
    console.error('Missing required Resend env vars (API_KEY / FROM / TO)');
    return NextResponse.json({ error: 'Server email config missing' }, { status: 500 });
  }
  if (!body.consent) {
    return NextResponse.json({ error: 'Privacy consent is required' }, { status: 400 });
  }

  const subjectLead =
    locale === 'it'
      ? 'EU AI Act Readiness Checklist — la tua copia'
      : 'EU AI Act Readiness Checklist — your copy';
  const subjectNotify = `[Pan checklist] ${body.name} · ${body.company}`;

  // 1) Email to the lead with the PDF link
  try {
    const r1 = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: fromAddress,
        to: [body.email],
        reply_to: 'angelo@pallanca.info',
        subject: subjectLead,
        html: buildLeadEmailHtml(body),
      }),
    });
    if (!r1.ok) {
      const errBody = await r1.text();
      console.error('Resend lead email error:', r1.status, errBody);
      return NextResponse.json({ error: 'Email service error (lead)' }, { status: 502 });
    }
  } catch (err) {
    console.error('Resend network error (lead):', err);
    return NextResponse.json({ error: 'Email service unreachable' }, { status: 502 });
  }

  // 2) Notification to Pan (best-effort: don't fail the user request if this errors)
  try {
    await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: fromAddress,
        to: [notifyTo],
        reply_to: body.email,
        subject: subjectNotify,
        html: buildNotifyEmailHtml(body),
      }),
    });
  } catch (err) {
    console.error('Resend notify email error (non-blocking):', err);
  }

  return NextResponse.json({ ok: true });
}
