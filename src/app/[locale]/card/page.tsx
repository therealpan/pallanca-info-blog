import { setRequestLocale } from 'next-intl/server';
import { UserPlus, Phone, Link2, ArrowUpRight } from 'lucide-react';
import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/metadata';
import { CARD } from '@/lib/card';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const isIt = locale === 'it';
  return buildPageMetadata({
    locale,
    path: '/card',
    title: isIt ? 'Biglietto da visita' : 'Contact card',
    description: isIt
      ? 'Salva il contatto di Angelo Pallanca nella tua rubrica.'
      : 'Save Angelo Pallanca to your address book.',
    // Reached by QR code only: keeps the mobile number out of search results.
    noIndex: true,
  });
}

export default async function CardPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const isIt = locale === 'it';

  const t = isIt
    ? {
        eyebrow: 'Biglietto da visita',
        role: 'Consulente di trasformazione digitale e CEO di PiirZ Digital Limited',
        save: 'Salva contatto',
        hint: 'Aggiunge nome, ruolo, cellulare e link alla tua rubrica.',
        phone: 'Cellulare',
        links: 'Tutti i link',
      }
    : {
        eyebrow: 'Contact card',
        role: CARD.title,
        save: 'Save contact',
        hint: 'Adds name, role, mobile and links to your address book.',
        phone: 'Mobile',
        links: 'All links',
      };

  return (
    <div className="pt-24 pb-16">
      <section className="max-w-xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <div className="stagger-grid flex flex-col">
          <header>
            <div className="text-xs uppercase tracking-widest text-[var(--color-accent)] mb-4">
              {t.eyebrow}
            </div>
            <h1 className="display-lg text-white">{CARD.fullName}</h1>
            <p className="mt-4 text-lg text-[var(--color-text-muted)] leading-relaxed">{t.role}</p>
          </header>

          <div className="mt-10">
            <a
              href={CARD.vcfPath}
              className="flex sm:inline-flex w-full sm:w-auto items-center justify-center gap-2.5 min-h-[52px] px-8 rounded-full bg-white text-[var(--color-bg)] text-base font-medium hover:bg-white/90"
            >
              <UserPlus size={18} aria-hidden="true" />
              {t.save}
            </a>
            <p className="mt-3 text-sm text-[var(--color-text-subtle)]">{t.hint}</p>
          </div>

          <a href={`tel:${CARD.phoneE164}`} className="glass-card mt-10 p-4 flex items-center gap-4 group">
            <div className="w-10 h-10 shrink-0 rounded-lg bg-[var(--color-accent)]/10 flex items-center justify-center">
              <Phone size={20} className="text-[var(--color-accent)]" aria-hidden="true" />
            </div>
            <div className="min-w-0">
              <div className="text-sm text-[var(--color-text-muted)]">{t.phone}</div>
              <div className="text-white tabular-nums group-hover:text-[var(--color-accent)] transition-colors">
                {CARD.phoneDisplay}
              </div>
            </div>
          </a>

          <a
            href={CARD.url}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card mt-4 p-4 flex items-center gap-4 group"
          >
            <div className="w-10 h-10 shrink-0 rounded-lg bg-[var(--color-accent)]/10 flex items-center justify-center">
              <Link2 size={20} className="text-[var(--color-accent)]" aria-hidden="true" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="text-sm text-[var(--color-text-muted)]">{t.links}</div>
              <div className="text-white truncate group-hover:text-[var(--color-accent)] transition-colors">
                {CARD.urlDisplay}
              </div>
            </div>
            <ArrowUpRight size={18} className="shrink-0 text-[var(--color-text-subtle)]" aria-hidden="true" />
          </a>
        </div>
      </section>
    </div>
  );
}
