'use client';

import { useLocale } from 'next-intl';
import { ArrowRight } from 'lucide-react';

export default function HomeClosingCTA() {
  const locale = useLocale();
  const isIt = locale === 'it';

  const copy = isIt
    ? {
        eyebrow: 'Parliamone',
        title: 'Trent’anni di innovazione, una conversazione di trenta minuti.',
        body: 'Cinque domande di pre-qualifica, due minuti del tuo tempo. Se il fit è chiaro, ti rispondo personalmente entro ventiquattro ore lavorative con una mini-proposta scritta. Niente CRM, niente sequenze automatiche.',
        cta: 'Richiedi una proposta',
        secondaryLabel: 'Oppure scrivimi',
        emailLabel: 'angelo@pallanca.info',
      }
    : {
        eyebrow: 'Let’s talk',
        title: 'Thirty years of innovation, a thirty-minute conversation.',
        body: 'Five pre-qualification questions, two minutes of your time. If the fit is clear, I personally reply within twenty-four working hours with a written mini-proposal. No CRM, no automated sequences.',
        cta: 'Request a proposal',
        secondaryLabel: 'Or email me',
        emailLabel: 'angelo@pallanca.info',
      };

  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
      <div className="text-center">
        <span className="inline-block text-xs font-medium text-[var(--color-accent)] uppercase tracking-[0.18em] mb-6">
          {copy.eyebrow}
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white tracking-tight leading-[1.15] max-w-3xl mx-auto">
          {copy.title}
        </h2>
        <p className="mt-6 text-base sm:text-lg text-[var(--color-text-muted)] leading-relaxed max-w-2xl mx-auto">
          {copy.body}
        </p>

        <div className="mt-10 flex flex-col items-center gap-5">
          <a
            href={`/${locale}/proposal`}
            className="inline-flex items-center gap-2 bg-white text-[var(--color-bg)] px-7 py-3 rounded-full text-sm font-medium hover:bg-white/90 transition-[background,color,transform] duration-200"
          >
            {copy.cta}
            <ArrowRight size={16} />
          </a>
          <div className="text-sm text-[var(--color-text-muted)]">
            {copy.secondaryLabel}{' '}
            <a
              href={`mailto:${copy.emailLabel}`}
              className="text-white hover:text-[var(--color-accent)] transition-colors duration-200 underline-offset-4 hover:underline"
            >
              {copy.emailLabel}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
