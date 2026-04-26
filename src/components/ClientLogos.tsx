'use client';
import { useLocale, useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { ArrowRight } from 'lucide-react';

const clients = [
  'Emirates',
  'Salvatore Ferragamo',
  'UNESCO',
  'UNICEF',
  'Museo Nacional del Prado',
  'Principato di Monaco',
  'Gobierno de Canarias',
  'Regione Liguria',
  'Unione Europea',
  'Interreg Europe',
  'Obsidian',
  'PiirZ Digital',
];

export default function ClientLogos() {
  const t = useTranslations('home');
  const locale = useLocale();

  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
      <h2 className="text-xs font-medium text-[var(--color-text-subtle)] uppercase tracking-[0.18em] mb-8">
        {t('clientsSection')}
      </h2>
      <p className="text-2xl sm:text-3xl md:text-[2rem] text-white leading-[1.4] font-medium tracking-tight">
        {clients.map((c, i) => (
          <span key={c} className="whitespace-nowrap">
            {c}
            {i < clients.length - 1 && (
              <span aria-hidden="true" className="text-[var(--color-text-subtle)] mx-2 sm:mx-3">·</span>
            )}{' '}
          </span>
        ))}
      </p>
      <Link
        href="/clients"
        className="inline-flex items-center gap-1.5 mt-10 text-[var(--color-accent)] text-sm font-medium hover:gap-2.5 transition-[gap] duration-200"
      >
        {locale === 'it' ? 'Vedi tutti i case study' : 'See all case studies'}
        <ArrowRight size={14} />
      </Link>
    </section>
  );
}
