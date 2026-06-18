'use client';

import { useLocale, useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { ArrowRight } from 'lucide-react';
import { services } from '@/lib/services-data';

export default function ServicesPreview() {
  const locale = useLocale();
  const t = useTranslations('home');
  const lang = locale === 'it' ? 'it' : 'en';

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="flex items-center justify-between mb-10 flex-wrap gap-4">
        <h2 className="text-2xl font-bold text-white">
          {t('servicesSection')}
        </h2>
        <Link
          href="/services"
          className="flex items-center gap-1 text-[var(--color-accent)] text-sm hover:gap-2 transition-[gap] duration-200"
        >
          {t('allServices')} <ArrowRight size={14} />
        </Link>
      </div>

      <div className="stagger-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((svc, idx) => {
          const isStepZero = idx === 0;
          return (
            <a
              key={svc.slug}
              href={`/${lang}/services/${svc.slug}`}
              className={`glass-card p-6 flex flex-col gap-4 group ${
                isStepZero ? 'ring-1 ring-[var(--color-accent)]/35' : ''
              }`}
            >
              <div className="flex items-baseline justify-between">
                <span className="text-xs uppercase tracking-wider text-[var(--color-accent)]">
                  {isStepZero
                    ? (lang === 'it' ? 'Step 00 · Base' : 'Step 00 · Floor')
                    : `${String(idx).padStart(2, '0')} / 05`}
                </span>
                <ArrowRight
                  size={16}
                  className="text-[var(--color-text-muted)] group-hover:text-[var(--color-accent)] group-hover:translate-x-1 transition-[transform,color] duration-200"
                />
              </div>
              <h3 className="text-lg font-semibold text-white group-hover:text-[var(--color-accent)] transition-colors">
                {svc.shortTitle[lang]}
              </h3>
              <p className="text-sm text-[var(--color-text-muted)] leading-relaxed flex-1">
                {svc.shortTagline[lang]}
              </p>
              <div className="pt-3 border-t border-white/5 text-xs text-[var(--color-text-muted)] flex items-center justify-between">
                <span>{svc.shortDuration[lang]}</span>
                <span className="text-white/80">{svc.shortPricing[lang]}</span>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}
