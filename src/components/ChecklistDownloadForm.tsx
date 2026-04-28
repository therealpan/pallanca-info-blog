'use client';

import { useState } from 'react';
import { useLocale } from 'next-intl';
import { Loader2, ArrowRight, Check, Download } from 'lucide-react';

interface FormState {
  name: string;
  email: string;
  role: string;
  company: string;
  consent: boolean;
}

const initialState: FormState = { name: '', email: '', role: '', company: '', consent: false };

const COPY = {
  it: {
    fields: {
      name: 'Nome e cognome',
      email: 'Email aziendale',
      role: 'Ruolo',
      company: 'Azienda',
    },
    placeholders: {
      name: 'Mario Rossi',
      email: 'mario@azienda.it',
      role: 'CIO, General Counsel, Compliance Officer...',
      company: 'Azienda Srl',
    },
    submit: 'Scarica il PDF',
    submitting: 'Invio in corso...',
    privacyHint: 'Niente CRM, niente sequenze automatiche. Ti scriverò solo se rispondi.',
    consentLabel: 'Ho letto e accetto la Privacy Policy. Acconsento al trattamento dei miei dati personali per ricevere il PDF richiesto.',
    consentLink: 'Privacy Policy',
    errorGeneric: 'Qualcosa è andato storto. Riprova tra qualche istante o scrivi a angelo@pallanca.info.',
    errorRequired: 'Compila tutti i campi.',
    errorEmail: "Inserisci un'email valida.",
    errorConsent: 'Per procedere è necessario accettare la privacy policy.',
    successTitle: 'Pronto. Controlla la mailbox.',
    successBody: 'Ti ho mandato il link al PDF. Se non lo trovi entro un minuto, controlla anche spam o promotional.',
    successPdfLabel: 'Scarica il PDF adesso',
  },
  en: {
    fields: {
      name: 'Full name',
      email: 'Work email',
      role: 'Role',
      company: 'Company',
    },
    placeholders: {
      name: 'Jane Doe',
      email: 'jane@company.com',
      role: 'CIO, General Counsel, Compliance Officer...',
      company: 'Company Ltd',
    },
    submit: 'Download the PDF',
    submitting: 'Sending...',
    privacyHint: 'No CRM, no automated sequences. I only write back if you reply.',
    consentLabel: 'I have read and accept the Privacy Policy. I consent to the processing of my personal data to receive the requested PDF.',
    consentLink: 'Privacy Policy',
    errorGeneric: 'Something went wrong. Please try again or email angelo@pallanca.info.',
    errorRequired: 'Please fill all fields.',
    errorEmail: 'Please enter a valid email.',
    errorConsent: 'You must accept the privacy policy to proceed.',
    successTitle: 'Done. Check your inbox.',
    successBody: "I just emailed you the PDF link. If it doesn't show up within a minute, check spam or promotional too.",
    successPdfLabel: 'Download the PDF now',
  },
} as const;

export default function ChecklistDownloadForm() {
  const locale = useLocale();
  const lang = locale === 'it' ? 'it' : 'en';
  const c = COPY[lang];
  const pdfUrl = `/eu-ai-act-checklist-${lang}.pdf`;

  const [state, setState] = useState<FormState>(initialState);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setState((s) => ({ ...s, [key]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    const textFields: (keyof FormState)[] = ['name', 'email', 'role', 'company'];
    for (const f of textFields) {
      const v = state[f];
      if (typeof v === 'string' && !v.trim()) {
        setErrorMsg(c.errorRequired);
        setStatus('error');
        return;
      }
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(state.email)) {
      setErrorMsg(c.errorEmail);
      setStatus('error');
      return;
    }
    if (!state.consent) {
      setErrorMsg(c.errorConsent);
      setStatus('error');
      return;
    }

    setStatus('submitting');
    try {
      const res = await fetch('/api/checklist-download', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...state, locale: lang }),
      });
      if (!res.ok) {
        setErrorMsg(c.errorGeneric);
        setStatus('error');
        return;
      }
      setStatus('success');
    } catch {
      setErrorMsg(c.errorGeneric);
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="glass-card p-8 md:p-10 max-w-xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[var(--color-accent)]/15">
            <Check size={20} className="text-[var(--color-accent)]" />
          </div>
          <h3 className="text-xl font-semibold text-white tracking-tight">{c.successTitle}</h3>
        </div>
        <p className="text-[var(--color-text-muted)] leading-relaxed mb-6">{c.successBody}</p>
        <a
          href={pdfUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-white text-[var(--color-bg)] px-6 py-3 rounded-full text-sm font-medium hover:bg-white/90 transition-[background,color,transform] duration-200"
        >
          <Download size={16} />
          {c.successPdfLabel}
        </a>
      </div>
    );
  }

  const inputCls =
    'w-full px-4 py-3 bg-white/[0.03] border border-white/10 rounded-lg text-[var(--color-text)] placeholder:text-[var(--color-text-subtle)] focus:outline-none focus:border-[var(--color-accent)]/60 focus:bg-white/[0.05] transition-[background,border-color] duration-200';

  return (
    <form onSubmit={handleSubmit} className="glass-card p-6 md:p-8 max-w-xl mx-auto space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <label className="block">
          <span className="block text-sm font-medium text-[var(--color-text)] mb-2">{c.fields.name}</span>
          <input
            type="text"
            required
            placeholder={c.placeholders.name}
            value={state.name}
            onChange={(e) => update('name', e.target.value)}
            className={inputCls}
          />
        </label>
        <label className="block">
          <span className="block text-sm font-medium text-[var(--color-text)] mb-2">{c.fields.email}</span>
          <input
            type="email"
            required
            placeholder={c.placeholders.email}
            value={state.email}
            onChange={(e) => update('email', e.target.value)}
            className={inputCls}
          />
        </label>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <label className="block">
          <span className="block text-sm font-medium text-[var(--color-text)] mb-2">{c.fields.role}</span>
          <input
            type="text"
            required
            placeholder={c.placeholders.role}
            value={state.role}
            onChange={(e) => update('role', e.target.value)}
            className={inputCls}
          />
        </label>
        <label className="block">
          <span className="block text-sm font-medium text-[var(--color-text)] mb-2">{c.fields.company}</span>
          <input
            type="text"
            required
            placeholder={c.placeholders.company}
            value={state.company}
            onChange={(e) => update('company', e.target.value)}
            className={inputCls}
          />
        </label>
      </div>

      <label className="flex items-start gap-3 cursor-pointer group">
        <input
          type="checkbox"
          required
          checked={state.consent}
          onChange={(e) => update('consent', e.target.checked)}
          className="mt-1 accent-[var(--color-accent)] flex-shrink-0"
        />
        <span className="text-xs text-[var(--color-text-muted)] leading-relaxed">
          {c.consentLabel.split('Privacy Policy').map((part, i, arr) =>
            i < arr.length - 1 ? (
              <span key={i}>
                {part}
                <a
                  href={`/${lang}/privacy-policy`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--color-accent)] underline hover:text-[var(--color-accent-hover)]"
                  onClick={(e) => e.stopPropagation()}
                >
                  {c.consentLink}
                </a>
              </span>
            ) : (
              <span key={i}>{part}</span>
            )
          )}
        </span>
      </label>

      {status === 'error' && errorMsg && (
        <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-300 text-sm">
          {errorMsg}
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full inline-flex items-center justify-center gap-2 bg-white text-[var(--color-bg)] px-6 py-3 rounded-full text-sm font-medium hover:bg-white/90 disabled:opacity-50 disabled:cursor-not-allowed transition-[background,color,transform] duration-200"
      >
        {status === 'submitting' ? (
          <>
            <Loader2 size={16} className="animate-spin" />
            {c.submitting}
          </>
        ) : (
          <>
            {c.submit} <ArrowRight size={16} />
          </>
        )}
      </button>

      <p className="text-xs text-[var(--color-text-subtle)] text-center leading-relaxed">{c.privacyHint}</p>
    </form>
  );
}
