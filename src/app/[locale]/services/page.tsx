import { setRequestLocale } from 'next-intl/server';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { services } from '@/lib/services-data';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return {
    title: locale === 'it' ? 'Servizi — Angelo Pallanca' : 'Services — Angelo Pallanca',
    description:
      locale === 'it'
        ? 'Cinque servizi AI per leadership team europei: Strategy Sprint, EU AI Act Audit, Sovereign AI Blueprint, Fractional CAIO, AI Due Diligence.'
        : 'Five AI services for European leadership teams: Strategy Sprint, EU AI Act Audit, Sovereign AI Blueprint, Fractional CAIO, AI Due Diligence.',
  };
}

export default async function ServicesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const lang = locale === 'it' ? 'it' : 'en';

  const labels = lang === 'it' ? {
    eyebrow: 'Servizi',
    title: 'Cinque modi di lavorare insieme.',
    subtitle: 'Tre programmi a prezzo fisso, due ingaggi su misura. Scegli in base al momento in cui ti trovi: che tu stia disegnando una strategia, gestendo una compliance, valutando un investimento, o cercando un CAIO che non puoi assumere full-time.',
    forLabel: 'Per:',
    durationLabel: 'Durata',
    pricingLabel: 'Investimento',
    learnMore: 'Scopri il programma',
    notSureTitle: 'Non sai quale ti serve?',
    notSureBody: 'È un problema comune e — spesso — il sintomo del problema vero. La discovery call di trenta minuti serve esattamente a questo: capire dove sei oggi, cosa ti serve davvero, e quale di questi cinque servizi è la risposta giusta. A volte la risposta è "nessuno di questi cinque" — e in quel caso ti dico cosa fare comunque.',
    cta: 'Prenota una discovery call',
  } : {
    eyebrow: 'Services',
    title: 'Five ways to work together.',
    subtitle: 'Three fixed-price programs, two custom engagements. Pick based on where you are: whether you\'re designing a strategy, managing compliance, evaluating an investment, or looking for a CAIO you can\'t hire full-time.',
    forLabel: 'For:',
    durationLabel: 'Duration',
    pricingLabel: 'Investment',
    learnMore: 'Learn more',
    notSureTitle: 'Don\'t know which one you need?',
    notSureBody: 'That\'s a common problem and — often — a symptom of the real one. The thirty-minute discovery call is exactly for this: figure out where you are today, what you really need, and which of these five services is the right answer. Sometimes the answer is "none of these five" — and in that case I\'ll tell you what to do anyway.',
    cta: 'Book a discovery call',
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
        {services.map((svc, idx) => (
          <Link
            key={svc.slug}
            href={`/${lang}/services/${svc.slug}`}
            className="block group"
          >
            <div className="glass-card p-8 md:p-10 transition-all hover:bg-white/[0.04]">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                <div className="md:col-span-1">
                  <div className="text-3xl font-bold text-[var(--color-accent)]">
                    {String(idx + 1).padStart(2, '0')}
                  </div>
                </div>
                <div className="md:col-span-7">
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
                    className="text-[var(--color-text-muted)] group-hover:text-[var(--color-accent)] group-hover:translate-x-1 transition-all"
                  />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </section>

      {/* "Not sure" section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="glass-card p-12 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">{labels.notSureTitle}</h2>
          <p className="text-[var(--color-text-muted)] mb-8 max-w-2xl mx-auto leading-relaxed">
            {labels.notSureBody}
          </p>
          <a
            href="https://cal.com/panbiz/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-[var(--color-bg)] px-8 py-3 rounded-full text-sm font-medium hover:bg-white/90 transition-colors"
          >
            {labels.cta}
          </a>
        </div>
      </section>
    </div>
  );
}
