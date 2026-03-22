'use client';

import { useLocale } from 'next-intl';
import Image from 'next/image';

const clients = [
  { name: 'Emirates', file: 'emirates.png' },
  { name: 'Ferragamo', file: 'ferragamo.png' },
  { name: 'UNESCO', file: 'Unesco.png' },
  { name: 'UNICEF', file: 'Unicef.png' },
  { name: 'Museo Nacional del Prado', file: 'museo nacional prado.png' },
  { name: 'Gobierno de Canarias', file: 'gobierno_de_canarias.png' },
  { name: 'Principato di Monaco', file: 'monaco.png' },
  { name: 'Regione Liguria', file: 'regione_liguria.png' },
  { name: 'Unione Europea', file: 'unione_europea.png' },
  { name: 'Interreg Europe', file: 'interreg Europe.png' },
  { name: 'PiirZ', file: 'piirz.png' },
  { name: 'Obsidian', file: 'obsidian.png' },
];

export default function ClientLogos() {
  const locale = useLocale();

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-center text-sm font-medium text-[var(--color-text-muted)] uppercase tracking-wider mb-10">
        {locale === 'it' ? 'Si sono affidati a me' : 'Trusted by'}
      </h2>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8 items-center justify-items-center">
        {clients.map((client) => (
          <div key={client.name} className="opacity-50 hover:opacity-100 transition-opacity" title={client.name}>
            <Image
              src={`/images/clients/${client.file}`}
              alt={`${client.name} logo`}
              width={120}
              height={48}
              className="h-10 w-auto object-contain brightness-0 invert"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
