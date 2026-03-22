'use client';

import { useLocale } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Brain, Search, FolderKanban, UserCog, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Brain,
    titleEn: 'Knowledge Consulting',
    titleIt: 'Consulenza Strategica',
    descEn: 'Deep analysis of your workflows to find where AI and innovation can make a real difference.',
    descIt: 'Analisi approfondita dei tuoi processi per trovare dove AI e innovazione possono fare la differenza.',
  },
  {
    icon: Search,
    titleEn: 'Solution Scouting',
    titleIt: 'Solution Scouting',
    descEn: 'I shortlist the 3 technologies that actually fit your stack and budget. No vendor lock-in.',
    descIt: 'Seleziono le 3 tecnologie che si adattano al tuo stack e budget. Nessun vendor lock-in.',
  },
  {
    icon: FolderKanban,
    titleEn: 'Project Management',
    titleIt: 'Project Management',
    descEn: 'From scouting to delivery. I manage timelines, teams and resources to ship on time.',
    descIt: 'Dallo scouting alla consegna. Gestisco timeline, team e risorse per consegnare nei tempi.',
  },
  {
    icon: UserCog,
    titleEn: 'Interim Management',
    titleIt: 'Interim Management',
    descEn: 'I join your team as Innovation Director. Full ownership, from strategy to execution.',
    descIt: 'Entro nel tuo team come Innovation Director. Piena responsabilita, dalla strategia all\'esecuzione.',
  },
];

export default function ServicesPreview() {
  const locale = useLocale();

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="flex items-center justify-between mb-10">
        <h2 className="text-2xl font-bold text-white">
          {locale === 'it' ? 'Cosa faccio' : 'What I do'}
        </h2>
        <Link
          href="/services"
          className="flex items-center gap-1 text-[var(--color-accent)] text-sm hover:gap-2 transition-all"
        >
          {locale === 'it' ? 'Tutti i servizi' : 'All services'} <ArrowRight size={14} />
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((svc) => (
          <div key={svc.titleEn} className="glass-card p-6 flex flex-col gap-4">
            <svc.icon size={28} className="text-[var(--color-accent)]" />
            <h3 className="text-lg font-semibold text-white">
              {locale === 'it' ? svc.titleIt : svc.titleEn}
            </h3>
            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
              {locale === 'it' ? svc.descIt : svc.descEn}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
