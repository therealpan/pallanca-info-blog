import { setRequestLocale } from 'next-intl/server';
import ProposalForm from '@/components/ProposalForm';
import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/metadata';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const isIt = locale === 'it';
  return buildPageMetadata({
    locale,
    path: '/proposal',
    title: isIt ? 'Richiedi una proposta — Angelo Pallanca' : 'Request a proposal — Angelo Pallanca',
    description: isIt
      ? 'Cinque domande, due minuti. Ti rispondo entro 24 ore lavorative con una mini-proposta scritta.'
      : 'Five questions, two minutes. I reply within 24 working hours with a written mini-proposal.',
    noIndex: true,
  });
}

export default async function ProposalPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const lang = locale === 'it' ? 'it' : 'en';

  const intro = lang === 'it' ? {
    eyebrow: 'Richiedi una proposta',
    title: 'Cinque domande, due minuti.',
    sub: 'Mi servono per dimensionare bene la mini-proposta che ti mando entro 24 ore lavorative. Niente CRM, niente sequenze automatiche: leggo io e rispondo io.',
    process1: 'Compili il form qui sotto.',
    process2: 'Ricevi una mini-proposta scritta entro 24h.',
    process3: 'Se è in linea, fissiamo scoping call e firmiamo.',
  } : {
    eyebrow: 'Request a proposal',
    title: 'Five questions, two minutes.',
    sub: 'I need them to properly size the mini-proposal I send you within 24 working hours. No CRM, no automated sequences: I read it personally, I reply personally.',
    process1: 'You fill the form below.',
    process2: 'You receive a written mini-proposal within 24h.',
    process3: 'If it\'s aligned, we book scoping call and sign.',
  };

  return (
    <div className="pt-24 pb-16">
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-xs uppercase tracking-widest text-[var(--color-accent)] mb-3">
          {intro.eyebrow}
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
          {intro.title}
        </h1>
        <p className="mt-5 text-lg text-[var(--color-text-muted)] leading-relaxed">
          {intro.sub}
        </p>

        <ol className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 stagger-grid">
          {[intro.process1, intro.process2, intro.process3].map((step, i) => (
            <li key={i} className="glass-card p-5">
              <span className="block text-xs uppercase tracking-widest text-[var(--color-accent)] mb-2">
                {String(i + 1).padStart(2, '0')}
              </span>
              <p className="text-sm text-[var(--color-text)] leading-relaxed">{step}</p>
            </li>
          ))}
        </ol>
      </section>

      <ProposalForm />
    </div>
  );
}
