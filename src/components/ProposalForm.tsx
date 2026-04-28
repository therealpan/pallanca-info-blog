'use client';

import { useState } from 'react';
import { useLocale } from 'next-intl';
import { Check, Loader2, ArrowRight } from 'lucide-react';

type Lang = 'it' | 'en';

interface FormState {
  name: string;
  email: string;
  role: string;
  company: string;
  website: string;
  sector: string;
  revenue: string;
  employees: string;
  problems: string[];
  urgency: string;
  budget: string;
  notes: string;
  consent: boolean;
}

const initialState: FormState = {
  name: '',
  email: '',
  role: '',
  company: '',
  website: '',
  sector: '',
  revenue: '',
  employees: '',
  problems: [],
  urgency: '',
  budget: '',
  notes: '',
  consent: false,
};

const COPY: Record<Lang, {
  steps: { num: string; title: string; sub: string }[];
  fields: Record<string, string>;
  placeholders: Record<string, string>;
  options: Record<string, { value: string; label: string }[]>;
  problems: { value: string; label: string }[];
  submit: string;
  submitting: string;
  errorGeneric: string;
  errorRequired: string;
  errorEmail: string;
  errorProblems: string;
  errorConsent: string;
  consentLabel: string;
  consentLink: string;
  successTitle: string;
  successBody: string;
  successCalLabel: string;
  successOrEmail: string;
  optional: string;
  problemsHint: string;
}> = {
  it: {
    steps: [
      { num: '01', title: 'Cominciamo dalle basi', sub: 'Chi sei e dove ti raggiungo.' },
      { num: '02', title: 'Per capirci subito', sub: 'Qualche dettaglio sull\'azienda — niente di troppo personale.' },
      { num: '03', title: 'Quale di questi descrive meglio dove sei?', sub: 'Scegline fino a due.' },
      { num: '04', title: 'Quando vuoi partire?', sub: 'Per dimensionare bene il calendario.' },
      { num: '05', title: 'Investimento orientativo', sub: 'Per evitare di farti perdere tempo se non siamo allineati. Non è impegnativo.' },
    ],
    fields: {
      name: 'Nome e cognome',
      email: 'Email aziendale',
      role: 'Ruolo',
      company: 'Azienda',
      website: 'Sito web aziendale',
      sector: 'Settore',
      revenue: 'Fatturato annuo',
      employees: 'Numero di dipendenti',
      urgency: 'Quando vuoi partire',
      budget: 'Investimento orientativo',
      notes: 'C\'è qualcosa che vuoi che io sappia prima della call?',
    },
    placeholders: {
      name: 'Mario Rossi',
      email: 'mario@azienda.it',
      role: 'CEO, CIO, General Counsel, Founder...',
      company: 'Azienda Srl',
      website: 'https://azienda.it',
      notes: 'Contesto, vincoli, persone già coinvolte, vincoli regolatori, qualunque cosa pensi sia utile sapere.',
    },
    options: {
      sector: [
        { value: 'banking', label: 'Banking & Finance' },
        { value: 'insurance', label: 'Insurance' },
        { value: 'healthcare', label: 'Healthcare' },
        { value: 'public', label: 'Pubblica amministrazione' },
        { value: 'manufacturing', label: 'Manifattura' },
        { value: 'retail', label: 'Retail & Luxury' },
        { value: 'travel', label: 'Travel & Hospitality' },
        { value: 'tech', label: 'Tech & SaaS' },
        { value: 'vc', label: 'Venture Capital / Investor' },
        { value: 'education', label: 'Education' },
        { value: 'culture', label: 'Cultura & fondazioni' },
        { value: 'other', label: 'Altro' },
      ],
      revenue: [
        { value: '<10M', label: 'Sotto €10M' },
        { value: '10-50M', label: '€10-50M' },
        { value: '50-200M', label: '€50-200M' },
        { value: '200M-1B', label: '€200M-1B' },
        { value: '>1B', label: 'Oltre €1B' },
        { value: 'public', label: 'Settore pubblico' },
        { value: 'fund', label: 'Fondo VC' },
      ],
      employees: [
        { value: '<50', label: 'Meno di 50' },
        { value: '50-250', label: '50-250' },
        { value: '250-1000', label: '250-1000' },
        { value: '>1000', label: 'Oltre 1000' },
        { value: 'na', label: 'Non rilevante' },
      ],
      urgency: [
        { value: '30d', label: 'Entro 30 giorni' },
        { value: '60-90d', label: 'Entro 60-90 giorni' },
        { value: 'q3', label: 'Q3 2026' },
        { value: 'exploring', label: 'Sto solo esplorando' },
      ],
      budget: [
        { value: '<15k', label: 'Sotto €15k' },
        { value: '15-30k', label: '€15-30k' },
        { value: '30-75k', label: '€30-75k' },
        { value: '75-200k', label: '€75-200k' },
        { value: '>200k', label: 'Oltre €200k' },
        { value: 'retainer', label: 'Retainer mensile (Fractional CAIO)' },
        { value: 'tbd', label: 'Da definire insieme' },
      ],
    },
    problems: [
      { value: 'strategy', label: 'Devo portare una strategia AI in CdA nei prossimi mesi' },
      { value: 'aiact', label: 'Devo essere conforme all\'EU AI Act (deadline 2 agosto 2026)' },
      { value: 'sovereign', label: 'Devo decidere come gestire dati sensibili / sovereign AI' },
      { value: 'caio', label: 'Mi serve un CAIO ma non posso assumerlo full-time' },
      { value: 'dd', label: 'Sto per investire in / chiudere un round su una startup AI' },
      { value: 'other', label: 'Ho una situazione diversa che voglio raccontare' },
    ],
    submit: 'Invia la richiesta',
    submitting: 'Invio in corso...',
    errorGeneric: 'Qualcosa è andato storto. Riprova tra qualche istante o scrivi a angelo@pallanca.info.',
    errorRequired: 'Compila tutti i campi richiesti.',
    errorEmail: 'Inserisci un\'email valida.',
    errorProblems: 'Scegli almeno un\'opzione.',
    errorConsent: 'Per procedere è necessario accettare la privacy policy.',
    consentLabel: 'Ho letto e accetto la Privacy Policy. Acconsento al trattamento dei miei dati personali per essere ricontattato da Angelo Pallanca in relazione a questa richiesta.',
    consentLink: 'Privacy Policy',
    successTitle: 'Grazie. La richiesta è arrivata.',
    successBody: 'Ti risponderò personalmente entro 24 ore lavorative con una mini-proposta scritta o, se serve qualche dettaglio in più, un breve approfondimento via email. Nel frattempo, se vuoi, puoi prenotare direttamente la discovery call.',
    successCalLabel: 'Prenota la discovery call',
    successOrEmail: 'Oppure scrivimi: angelo@pallanca.info',
    optional: 'opzionale',
    problemsHint: 'Massimo 2 selezioni',
  },
  en: {
    steps: [
      { num: '01', title: 'Let\'s start with the basics', sub: 'Who you are and how to reach you.' },
      { num: '02', title: 'Quick context', sub: 'Some company details — nothing too personal.' },
      { num: '03', title: 'Which best describes where you are?', sub: 'Pick up to two.' },
      { num: '04', title: 'When do you want to start?', sub: 'To size the calendar properly.' },
      { num: '05', title: 'Indicative investment', sub: 'To avoid wasting your time if we\'re not aligned. Not binding.' },
    ],
    fields: {
      name: 'Full name',
      email: 'Work email',
      role: 'Role',
      company: 'Company',
      website: 'Company website',
      sector: 'Sector',
      revenue: 'Annual revenue',
      employees: 'Number of employees',
      urgency: 'When you want to start',
      budget: 'Indicative investment',
      notes: 'Anything you want me to know before the call?',
    },
    placeholders: {
      name: 'Jane Doe',
      email: 'jane@company.com',
      role: 'CEO, CIO, General Counsel, Founder...',
      company: 'Company Ltd',
      website: 'https://company.com',
      notes: 'Context, constraints, people already involved, regulatory pressures, anything you think is useful.',
    },
    options: {
      sector: [
        { value: 'banking', label: 'Banking & Finance' },
        { value: 'insurance', label: 'Insurance' },
        { value: 'healthcare', label: 'Healthcare' },
        { value: 'public', label: 'Public administration' },
        { value: 'manufacturing', label: 'Manufacturing' },
        { value: 'retail', label: 'Retail & Luxury' },
        { value: 'travel', label: 'Travel & Hospitality' },
        { value: 'tech', label: 'Tech & SaaS' },
        { value: 'vc', label: 'Venture Capital / Investor' },
        { value: 'education', label: 'Education' },
        { value: 'culture', label: 'Culture & foundations' },
        { value: 'other', label: 'Other' },
      ],
      revenue: [
        { value: '<10M', label: 'Under €10M' },
        { value: '10-50M', label: '€10-50M' },
        { value: '50-200M', label: '€50-200M' },
        { value: '200M-1B', label: '€200M-1B' },
        { value: '>1B', label: 'Over €1B' },
        { value: 'public', label: 'Public sector' },
        { value: 'fund', label: 'VC fund' },
      ],
      employees: [
        { value: '<50', label: 'Under 50' },
        { value: '50-250', label: '50-250' },
        { value: '250-1000', label: '250-1000' },
        { value: '>1000', label: 'Over 1000' },
        { value: 'na', label: 'Not relevant' },
      ],
      urgency: [
        { value: '30d', label: 'Within 30 days' },
        { value: '60-90d', label: 'Within 60-90 days' },
        { value: 'q3', label: 'Q3 2026' },
        { value: 'exploring', label: 'Just exploring' },
      ],
      budget: [
        { value: '<15k', label: 'Under €15k' },
        { value: '15-30k', label: '€15-30k' },
        { value: '30-75k', label: '€30-75k' },
        { value: '75-200k', label: '€75-200k' },
        { value: '>200k', label: 'Over €200k' },
        { value: 'retainer', label: 'Monthly retainer (Fractional CAIO)' },
        { value: 'tbd', label: 'To define together' },
      ],
    },
    problems: [
      { value: 'strategy', label: 'I need to bring an AI strategy to the board in the next few months' },
      { value: 'aiact', label: 'I need to be EU AI Act compliant (deadline August 2, 2026)' },
      { value: 'sovereign', label: 'I need to decide how to handle sensitive data / sovereign AI' },
      { value: 'caio', label: 'I need a CAIO but can\'t hire one full-time' },
      { value: 'dd', label: 'I\'m about to invest in / close a round on an AI startup' },
      { value: 'other', label: 'I have a different situation I want to discuss' },
    ],
    submit: 'Send the request',
    submitting: 'Sending...',
    errorGeneric: 'Something went wrong. Please try again in a moment, or email angelo@pallanca.info.',
    errorRequired: 'Please fill in all required fields.',
    errorEmail: 'Please enter a valid email.',
    errorProblems: 'Pick at least one option.',
    errorConsent: 'You must accept the privacy policy to proceed.',
    consentLabel: 'I have read and accept the Privacy Policy. I consent to the processing of my personal data to be contacted by Angelo Pallanca regarding this request.',
    consentLink: 'Privacy Policy',
    successTitle: 'Thanks. The request is in.',
    successBody: 'I\'ll personally reply within 24 working hours with a written mini-proposal, or — if I need more context — a short follow-up email. In the meantime, if you want, you can book the discovery call directly.',
    successCalLabel: 'Book the discovery call',
    successOrEmail: 'Or email me: angelo@pallanca.info',
    optional: 'optional',
    problemsHint: 'Maximum 2 selections',
  },
};

export default function ProposalForm() {
  const locale = useLocale();
  const lang: Lang = locale === 'it' ? 'it' : 'en';
  const c = COPY[lang];

  const [state, setState] = useState<FormState>(initialState);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setState((s) => ({ ...s, [key]: value }));
  };

  const toggleProblem = (val: string) => {
    setState((s) => {
      const exists = s.problems.includes(val);
      if (exists) return { ...s, problems: s.problems.filter((p) => p !== val) };
      if (s.problems.length >= 2) return s; // cap at 2
      return { ...s, problems: [...s.problems, val] };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Client-side validation
    const required: (keyof FormState)[] = ['name', 'email', 'role', 'company', 'sector', 'revenue', 'employees', 'urgency', 'budget'];
    for (const field of required) {
      if (typeof state[field] === 'string' && !(state[field] as string).trim()) {
        setErrorMsg(c.errorRequired);
        setStatus('error');
        return;
      }
    }
    if (state.problems.length === 0) {
      setErrorMsg(c.errorProblems);
      setStatus('error');
      return;
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
    setErrorMsg('');

    try {
      const res = await fetch('/api/proposal', {
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

  // Success state
  if (status === 'success') {
    return (
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="glass-card p-10 md:p-14 text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[var(--color-accent)]/15 mb-6">
            <Check size={28} className="text-[var(--color-accent)]" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-5 tracking-tight">
            {c.successTitle}
          </h1>
          <p className="text-base text-[var(--color-text-muted)] leading-relaxed mb-8 max-w-lg mx-auto">
            {c.successBody}
          </p>
          <a
            href="https://cal.com/panbiz/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-[var(--color-bg)] px-7 py-3 rounded-full text-sm font-medium hover:bg-white/90 transition-[background,color,transform] duration-200"
          >
            {c.successCalLabel} <ArrowRight size={16} />
          </a>
          <p className="mt-6 text-sm text-[var(--color-text-muted)]">{c.successOrEmail}</p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Step 1 */}
      <Section step={c.steps[0]}>
        <Field label={c.fields.name} required>
          <input
            type="text"
            required
            placeholder={c.placeholders.name}
            value={state.name}
            onChange={(e) => update('name', e.target.value)}
            className={inputCls}
          />
        </Field>
        <Field label={c.fields.email} required>
          <input
            type="email"
            required
            placeholder={c.placeholders.email}
            value={state.email}
            onChange={(e) => update('email', e.target.value)}
            className={inputCls}
          />
        </Field>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <Field label={c.fields.role} required>
            <input
              type="text"
              required
              placeholder={c.placeholders.role}
              value={state.role}
              onChange={(e) => update('role', e.target.value)}
              className={inputCls}
            />
          </Field>
          <Field label={c.fields.company} required>
            <input
              type="text"
              required
              placeholder={c.placeholders.company}
              value={state.company}
              onChange={(e) => update('company', e.target.value)}
              className={inputCls}
            />
          </Field>
        </div>
        <Field label={c.fields.website} hint={c.optional}>
          <input
            type="url"
            placeholder={c.placeholders.website}
            value={state.website}
            onChange={(e) => update('website', e.target.value)}
            className={inputCls}
          />
        </Field>
      </Section>

      {/* Step 2 */}
      <Section step={c.steps[1]}>
        <Field label={c.fields.sector} required>
          <RadioGrid
            name="sector"
            value={state.sector}
            options={c.options.sector}
            onChange={(v) => update('sector', v)}
          />
        </Field>
        <Field label={c.fields.revenue} required>
          <RadioGrid
            name="revenue"
            value={state.revenue}
            options={c.options.revenue}
            onChange={(v) => update('revenue', v)}
          />
        </Field>
        <Field label={c.fields.employees} required>
          <RadioGrid
            name="employees"
            value={state.employees}
            options={c.options.employees}
            onChange={(v) => update('employees', v)}
          />
        </Field>
      </Section>

      {/* Step 3 */}
      <Section step={c.steps[2]}>
        <p className="text-xs uppercase tracking-wider text-[var(--color-text-subtle)] mb-3">{c.problemsHint}</p>
        <div className="space-y-2">
          {c.problems.map((p) => {
            const checked = state.problems.includes(p.value);
            return (
              <label
                key={p.value}
                className={`flex items-start gap-3 p-4 rounded-lg border cursor-pointer transition-[background,border-color,transform] duration-200 ${
                  checked
                    ? 'bg-[var(--color-accent)]/10 border-[var(--color-accent)]/40'
                    : 'bg-white/[0.02] border-white/10 hover:bg-white/[0.04] hover:border-white/20'
                }`}
              >
                <input
                  type="checkbox"
                  className="mt-1 accent-[var(--color-accent)]"
                  checked={checked}
                  onChange={() => toggleProblem(p.value)}
                />
                <span className="text-sm text-[var(--color-text)] leading-relaxed">{p.label}</span>
              </label>
            );
          })}
        </div>
      </Section>

      {/* Step 4 */}
      <Section step={c.steps[3]}>
        <RadioGrid
          name="urgency"
          value={state.urgency}
          options={c.options.urgency}
          onChange={(v) => update('urgency', v)}
        />
      </Section>

      {/* Step 5 */}
      <Section step={c.steps[4]}>
        <RadioGrid
          name="budget"
          value={state.budget}
          options={c.options.budget}
          onChange={(v) => update('budget', v)}
        />
        <Field label={c.fields.notes} hint={c.optional}>
          <textarea
            rows={5}
            placeholder={c.placeholders.notes}
            value={state.notes}
            onChange={(e) => update('notes', e.target.value)}
            className={`${inputCls} resize-y`}
          />
        </Field>
      </Section>

      {/* GDPR consent */}
      <div className="pt-2">
        <label className="flex items-start gap-3 cursor-pointer group">
          <input
            type="checkbox"
            required
            checked={state.consent}
            onChange={(e) => update('consent', e.target.checked)}
            className="mt-1 accent-[var(--color-accent)] flex-shrink-0"
          />
          <span className="text-sm text-[var(--color-text-muted)] leading-relaxed">
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
      </div>

      {/* Submit */}
      <div className="pt-4">
        {status === 'error' && errorMsg && (
          <div className="mb-4 p-4 rounded-lg bg-red-500/10 border border-red-500/30 text-red-300 text-sm">
            {errorMsg}
          </div>
        )}
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="inline-flex items-center gap-2 bg-white text-[var(--color-bg)] px-7 py-3 rounded-full text-sm font-medium hover:bg-white/90 disabled:opacity-50 disabled:cursor-not-allowed transition-[background,color,transform] duration-200"
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
      </div>
    </form>
  );
}

// --- Subcomponents ---

const inputCls =
  'w-full px-4 py-3 bg-white/[0.03] border border-white/10 rounded-lg text-[var(--color-text)] placeholder:text-[var(--color-text-subtle)] focus:outline-none focus:border-[var(--color-accent)]/60 focus:bg-white/[0.05] transition-[background,border-color] duration-200';

function Section({ step, children }: { step: { num: string; title: string; sub: string }; children: React.ReactNode }) {
  return (
    <section className="space-y-5">
      <header>
        <div className="flex items-baseline gap-3 mb-2">
          <span className="text-xs uppercase tracking-widest text-[var(--color-accent)] font-medium">
            {step.num}
          </span>
          <h2 className="text-xl sm:text-2xl font-semibold text-white tracking-tight">
            {step.title}
          </h2>
        </div>
        <p className="text-sm text-[var(--color-text-muted)] ml-9">{step.sub}</p>
      </header>
      <div className="ml-0 md:ml-9 space-y-5">{children}</div>
    </section>
  );
}

function Field({
  label,
  required,
  hint,
  children,
}: {
  label: string;
  required?: boolean;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="block text-sm font-medium text-[var(--color-text)] mb-2">
        {label}
        {required && <span className="text-[var(--color-accent)] ml-1">*</span>}
        {hint && <span className="text-xs font-normal text-[var(--color-text-subtle)] ml-2">({hint})</span>}
      </span>
      {children}
    </label>
  );
}

function RadioGrid({
  name,
  value,
  options,
  onChange,
}: {
  name: string;
  value: string;
  options: { value: string; label: string }[];
  onChange: (v: string) => void;
}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
      {options.map((opt) => {
        const selected = value === opt.value;
        return (
          <label
            key={opt.value}
            className={`flex items-center gap-3 px-4 py-3 rounded-lg border cursor-pointer transition-[background,border-color,transform] duration-200 ${
              selected
                ? 'bg-[var(--color-accent)]/10 border-[var(--color-accent)]/40'
                : 'bg-white/[0.02] border-white/10 hover:bg-white/[0.04] hover:border-white/20'
            }`}
          >
            <input
              type="radio"
              name={name}
              value={opt.value}
              checked={selected}
              onChange={() => onChange(opt.value)}
              className="accent-[var(--color-accent)]"
            />
            <span className="text-sm text-[var(--color-text)]">{opt.label}</span>
          </label>
        );
      })}
    </div>
  );
}
