import { setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { Check, ArrowRight, AlertTriangle } from 'lucide-react';
import { getServiceBySlug, getAllServiceSlugs, services } from '@/lib/services-data';
import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/metadata';

export async function generateStaticParams() {
  return getAllServiceSlugs().flatMap((slug) =>
    ['it', 'en'].map((locale) => ({ locale, slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  const lang = locale === 'it' ? 'it' : 'en';
  const c = service.content[lang];

  return buildPageMetadata({
    locale,
    path: `/services/${slug}`,
    title: `${c.title} — Angelo Pallanca`,
    description: c.tagline,
  });
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const lang = locale === 'it' ? 'it' : 'en';

  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const c = service.content[lang];

  // JSON-LD ProfessionalService schema
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: c.title,
    description: c.tagline,
    provider: {
      '@type': 'Person',
      name: 'Angelo Pallanca',
      url: 'https://pallanca.info',
    },
    offers: {
      '@type': 'Offer',
      description: c.pricingLabel,
    },
    areaServed: {
      '@type': 'Place',
      name: 'European Union',
    },
  };

  return (
    <div className="pt-24 pb-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl">
          <div className="text-xs uppercase tracking-widest text-[var(--color-accent)] mb-4">
            {c.eyebrow}
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white">{c.title}</h1>
          <p className="mt-6 text-xl text-[var(--color-text-muted)] leading-relaxed">{c.tagline}</p>
          <p className="mt-6 text-base text-[var(--color-accent)] font-medium">{c.pricingLabel}</p>
          <div className="mt-8">
            <a
              href={`/${lang}/proposal`}
              className="inline-flex items-center gap-2 bg-white text-[var(--color-bg)] px-8 py-3 rounded-full text-sm font-medium hover:bg-white/90 transition-[background,color,transform] duration-200"
            >
              {c.ctaButton}
            </a>
          </div>

          {c.urgencyBanner && (
            <div className="mt-8 glass-card p-5 border-l-4 border-amber-500/60 flex items-start gap-3">
              <AlertTriangle size={20} className="text-amber-400 mt-0.5 shrink-0" />
              <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                {c.urgencyBanner}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Problem */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl">
          <h2 className="text-2xl font-bold text-white mb-6">{c.problemTitle}</h2>
          <div className="space-y-4">
            {c.problemBody.map((p, i) => (
              <p key={i} className="text-[var(--color-text-muted)] leading-relaxed">{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Output */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl">
          <h2 className="text-2xl font-bold text-white mb-6">{c.outputTitle}</h2>
          <ul className="space-y-3">
            {c.outputItems.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-[var(--color-text-muted)] leading-relaxed">
                <Check size={18} className="text-[var(--color-accent)] mt-1 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          {c.outputClosing && (
            <p className="mt-6 text-[var(--color-text-muted)] leading-relaxed italic">
              {c.outputClosing}
            </p>
          )}
        </div>
      </section>

      {/* Process */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl">
          <h2 className="text-2xl font-bold text-white mb-8">{c.processTitle}</h2>
          <div className="space-y-4">
            {c.processSteps.map((step, i) => (
              <div key={i} className="glass-card p-6">
                <h3 className="text-lg font-semibold text-white mb-2">{step.week}</h3>
                <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For you / Not for you */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="glass-card p-8">
            <h2 className="text-xl font-bold text-white mb-6">{c.forYouTitle}</h2>
            <ul className="space-y-3">
              {c.forYouItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-[var(--color-text-muted)] leading-relaxed">
                  <Check size={16} className="text-[var(--color-accent)] mt-1 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="glass-card p-8">
            <h2 className="text-xl font-bold text-white mb-6">{c.notForYouTitle}</h2>
            <ul className="space-y-3">
              {c.notForYouItems.map((item, i) => (
                <li key={i} className="text-sm text-[var(--color-text-muted)] leading-relaxed pl-7 relative">
                  <span className="absolute left-0 top-2 w-3 h-px bg-[var(--color-text-muted)]"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl">
          <h2 className="text-2xl font-bold text-white mb-6">{c.pricingTitle}</h2>
          <div className="space-y-4">
            {c.pricingBody.map((p, i) => (
              <p key={i} className="text-[var(--color-text-muted)] leading-relaxed">{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl">
          <h2 className="text-2xl font-bold text-white mb-8">{c.faqTitle}</h2>
          <div className="space-y-4">
            {c.faq.map((item, i) => (
              <div key={i} className="glass-card p-6">
                <h3 className="text-base font-semibold text-white mb-3">{item.q}</h3>
                <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <div className="glass-card p-12">
          <h2 className="text-2xl font-bold text-white mb-4">{c.finalCtaTitle}</h2>
          <p className="text-[var(--color-text-muted)] mb-8 max-w-2xl mx-auto leading-relaxed">
            {c.finalCtaBody}
          </p>
          <a
            href={`/${lang}/proposal`}
            className="inline-flex items-center gap-2 bg-white text-[var(--color-bg)] px-8 py-3 rounded-full text-sm font-medium hover:bg-white/90 transition-[background,color,transform] duration-200"
          >
            {c.ctaButton}
          </a>
        </div>
      </section>

      {/* Other services */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h3 className="text-sm uppercase tracking-wider text-[var(--color-text-muted)] mb-6">
          {lang === 'it' ? 'Altri servizi' : 'Other services'}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.filter((s) => s.slug !== slug).map((s) => (
            <a
              key={s.slug}
              href={`/${lang}/services/${s.slug}`}
              className="glass-card p-5 group"
            >
              <h4 className="text-sm font-semibold text-white group-hover:text-[var(--color-accent)] transition-colors mb-2">
                {s.shortTitle[lang]}
              </h4>
              <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">
                {s.shortPricing[lang]}
              </p>
              <ArrowRight size={14} className="text-[var(--color-text-muted)] mt-3 group-hover:translate-x-1 transition-transform" />
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
