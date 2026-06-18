import { setRequestLocale } from 'next-intl/server';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { services } from '@/lib/services-data';
import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/metadata';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const isIt = locale === 'it';
  return buildPageMetadata({
    locale,
    path: '/services',
    title: isIt ? 'Servizi — Angelo Pallanca' : 'Services — Angelo Pallanca',
    description: isIt
      ? 'Una catena del valore in sei gradini: Digital Foundation come step zero, poi AI Strategy Sprint, EU AI Act Readiness, Sovereign AI Blueprint, Fractional CAIO, AI Due Diligence.'
      : 'A six-step value chain: Digital Foundation as step zero, then AI Strategy Sprint, EU AI Act Readiness, Sovereign AI Blueprint, Fractional CAIO, AI Due Diligence.',
  });
}

export default async function ServicesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const lang = locale === 'it' ? 'it' : 'en';

  const labels = lang === 'it' ? {
    eyebrow: 'Servizi · Catena del valore',
    title: 'Si parte dalla base, si arriva all\'AI in produzione.',
    subtitle: 'Sei gradini, una sola direzione. Digital Foundation è lo step zero, la presenza digitale come pavimento. Sopra ci poggiano cinque ingaggi sulla trasformazione AI, dalla strategia alla compliance, dall\'esecuzione continuativa al due diligence per chi investe.',
    forLabel: 'Per:',
    durationLabel: 'Durata',
    pricingLabel: 'Investimento',
    learnMore: 'Scopri il programma',
    stepZeroBadge: 'Step zero',
    notSureTitle: 'Non sai dove sei nella catena?',
    notSureBody: 'È normale, e spesso il sintomo del problema vero. Compila il form di pre-qualifica (5 domande, due minuti). In discovery call capiamo dove sei lungo la catena, cosa ti serve davvero, e da quale gradino partire. A volte la risposta è "nessuno di questi sei", e in quel caso ti dico cosa fare comunque, senza fatturare.',
    cta: 'Richiedi una proposta',
  } : {
    eyebrow: 'Services · Value chain',
    title: 'Start from the floor, end with AI in production.',
    subtitle: 'Six steps, one direction. Digital Foundation is step zero, the digital presence as the floor. Five AI engagements rest on top, from strategy to compliance, from continuous execution to due diligence for those investing.',
    forLabel: 'For:',
    durationLabel: 'Duration',
    pricingLabel: 'Investment',
    learnMore: 'Learn more',
    stepZeroBadge: 'Step zero',
    notSureTitle: 'Not sure where you are in the chain?',
    notSureBody: 'That\'s normal, and often the symptom of the real problem. Fill in the pre-qualification form (5 questions, two minutes). In the discovery call we figure out where you sit along the chain, what you actually need, and which step to start from. Sometimes the answer is "none of these six", and in that case I\'ll tell you what to do anyway, without billing.',
    cta: 'Request a proposal',
  };

  return (
    <div className="pt-24 pb-16">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-xs uppercase tracking-widest text-[var(--color-accent)] mb-3">
          {labels.eyebrow}
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-white">{labels.title}</h1>
        <p className="mt-6 text-lg text-[var(--color-text-muted)] max-w-3xl leading-relaxed">
          {labels.subtitle}
        </p>
      </section>

      {/* Service cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 pb-16">
        {services.map((svc, idx) => {
          const isStepZero = idx === 0;
          return (
            <Link
              key={svc.slug}
              href={`/${lang}/services/${svc.slug}`}
              className="block group"
            >
              <div
                className={`glass-card p-8 md:p-10 ${
                  isStepZero
                    ? 'ring-1 ring-[var(--color-accent)]/35 shadow-[0_0_60px_-30px_rgba(245,176,65,0.45)]'
                    : ''
                }`}
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                  <div className="md:col-span-1">
                    <div className="text-3xl font-bold text-[var(--color-accent)]">
                      {String(idx).padStart(2, '0')}
                    </div>
                  </div>
                  <div className="md:col-span-7">
                    {isStepZero && (
                      <div className="inline-block text-[10px] uppercase tracking-[0.18em] text-[var(--color-accent)] border border-[var(--color-accent)]/35 px-2 py-1 rounded-full mb-3">
                        {labels.stepZeroBadge}
                      </div>
                    )}
                    <h2 className="text-2xl font-bold text-white group-hover:text-[var(--color-accent)] transition-colors">
                      {svc.shortTitle[lang]}
                    </h2>
                    <p className="mt-3 text-base text-[var(--color-text-muted)] leading-relaxed">
                      {svc.shortTagline[lang]}
                    </p>
                    <p className="mt-4 text-sm text-[var(--color-text-muted)]">
                      <span className="text-white/70">{labels.forLabel}</span> {svc.shortFor[lang]}
                    </p>
                  </div>
                  <div className="md:col-span-3 space-y-3 text-sm">
                    <div>
                      <div className="text-xs uppercase tracking-wider text-[var(--color-text-muted)]">{labels.durationLabel}</div>
                      <div className="text-white mt-1">{svc.shortDuration[lang]}</div>
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-wider text-[var(--color-text-muted)]">{labels.pricingLabel}</div>
                      <div className="text-white mt-1">{svc.shortPricing[lang]}</div>
                    </div>
                  </div>
                  <div className="md:col-span-1 flex md:justify-end items-center">
                    <ArrowRight
                      size={20}
                      className="text-[var(--color-text-muted)] group-hover:text-[var(--color-accent)] group-hover:translate-x-1 transition-[transform,color] duration-200"
                    />
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </section>

      {/* "Not sure" section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="glass-card p-12 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">{labels.notSureTitle}</h2>
          <p className="text-[var(--color-text-muted)] mb-8 max-w-2xl mx-auto leading-relaxed">
            {labels.notSureBody}
          </p>
          <a
            href={`/${lang}/proposal`}
            className="inline-flex items-center gap-2 bg-white text-[var(--color-bg)] px-8 py-3 rounded-full text-sm font-medium hover:bg-white/90 transition-[background,color,transform] duration-200"
          >
            {labels.cta}
          </a>
        </div>
      </section>
    </div>
  );
}
