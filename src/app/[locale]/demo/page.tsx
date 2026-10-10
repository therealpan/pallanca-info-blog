import { setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/metadata';
import DemoCarousel from './DemoCarousel';
import './demo-carousel.css';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isIt = locale === 'it';
  return buildPageMetadata({
    locale,
    path: '/demo',
    title: isIt
      ? 'Demo — Angelo Pallanca'
      : 'Demos — Angelo Pallanca',
    description: isIt
      ? 'Quattro scene interattive che mostrano come arrivano in produzione l\'AI agentic, l\'operations, la PA e la sanità assistenziale.'
      : 'Four interactive scenes showing how agentic AI, operations, public administration and residential care reach production.',
  });
}

export default async function DemoHubPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const lang: 'it' | 'en' = locale === 'it' ? 'it' : 'en';

  const labels = lang === 'it'
    ? {
        eyebrow: 'Demo',
        title: 'Quattro scene, quattro mondi.',
        subtitle: 'Non slide, non video. Scene vere, interattive, con stato che evolve mentre guardi. Ognuna racconta un dominio dove l\'AI arriva in produzione sotto governance.',
        openDemo: 'Apri la demo',
        prev: 'Demo precedente',
        next: 'Demo successiva',
        keyboardHint: 'Usa i tasti freccia ← → per navigare',
        disclaimer: 'Le demo sono scene dimostrative, i dati sono fittizi, gli agenti sono simulati. Il modello di governance e le metriche visualizzate sono reali.',
      }
    : {
        eyebrow: 'Demos',
        title: 'Four scenes, four worlds.',
        subtitle: 'Not slides, not videos. Real interactive scenes, state evolving as you watch. Each one shows a domain where AI reaches production under governance.',
        openDemo: 'Open the demo',
        prev: 'Previous demo',
        next: 'Next demo',
        keyboardHint: 'Use ← → arrow keys to navigate',
        disclaimer: 'Demos are illustrative scenes, the data is fictional, the agents are simulated. The governance model and the surfaced metrics are real.',
      };

  return (
    <div className="pt-24 pb-24">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="text-xs uppercase tracking-widest text-[var(--color-accent)] mb-3">
          {labels.eyebrow}
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-white">
          {labels.title}
        </h1>
        <p className="mt-6 text-lg text-[var(--color-text-muted)] max-w-3xl leading-relaxed">
          {labels.subtitle}
        </p>
      </section>

      <section className="pb-16 pt-4">
        <DemoCarousel
          lang={lang}
          labels={{
            openDemo: labels.openDemo,
            prev: labels.prev,
            next: labels.next,
            keyboardHint: labels.keyboardHint,
            disclaimer: labels.disclaimer,
          }}
        />
      </section>
    </div>
  );
}
