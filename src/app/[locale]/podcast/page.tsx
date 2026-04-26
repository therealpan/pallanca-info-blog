import { setRequestLocale } from 'next-intl/server';
import { Headphones, Mic, Download, FileText } from 'lucide-react';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return {
    title: locale === 'it' ? 'Podcast — Pan' : 'Podcast — Pan',
    description:
      locale === 'it'
        ? 'Conversazioni audio su AI, regolamentazione, e il futuro del lavoro. Generati con NotebookLM dai contenuti di Pan.'
        : 'Audio conversations on AI, regulation, and the future of work. Generated with NotebookLM from Pan content.',
    openGraph: {
      type: 'website',
      title: 'Pan Podcast',
      description:
        locale === 'it'
          ? 'Conversazioni audio su AI, regolamentazione, futuro del lavoro.'
          : 'Audio conversations on AI, regulation, future of work.',
    },
  };
}

interface Episode {
  number: string;
  slug: string;
  title: string;
  format: string;
  formatBadge: string;
  duration: string;
  date: string;
  description: string;
  notes: string[];
  audioUrl: string;
  relatedLinks: { label: string; href: string }[];
}

export default async function PodcastPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  const isIt = locale === 'it';

  const intro = isIt ? {
    eyebrow: 'Podcast',
    title: 'Conversazioni audio su AI, regolamentazione, futuro del lavoro.',
    sub: 'Episodi generati dai contenuti di Pan via NotebookLM. Due voci AI dialogano sui materiali pubblicati sul sito — checklist, articoli, position paper. Stesso angolo editoriale, formato diverso.',
  } : {
    eyebrow: 'Podcast',
    title: 'Audio conversations on AI, regulation, future of work.',
    sub: 'Episodes generated from Pan content via NotebookLM. Two AI voices dialogue over the materials published on the site — checklists, articles, position papers. Same editorial angle, different format.',
  };

  const episodes: Episode[] = isIt ? [
    {
      number: '01',
      slug: 'eu-ai-act-deep-dive',
      title: 'EU AI Act, in trenta domande',
      format: 'Deep dive',
      formatBadge: 'Riassunto narrativo · 2 voci',
      duration: '21 min',
      date: '26 aprile 2026',
      description: 'Due voci accompagnano l\'ascoltatore attraverso le 30 domande del checklist EU AI Act, raggruppate nelle sei sezioni tematiche. Scoring framework, cosa fare per ogni livello, deadline 2 agosto 2026. Per chi vuole un riassunto strutturato in viaggio.',
      notes: [
        'Identificazione & inventario sistemi AI (5 domande)',
        'Classificazione del rischio (5 domande)',
        'Conformity & documentazione tecnica (5 domande)',
        'Trasparenza & informazione (5 domande)',
        'Human oversight, accuracy & robustness (5 domande)',
        'Governance interna & compliance organizzativa (5 domande)',
      ],
      audioUrl: '/podcast/01-eu-ai-act-deep-dive-it.m4a',
      relatedLinks: [
        { label: 'Scarica il checklist (PDF)', href: '/eu-ai-act-checklist-it.pdf' },
        { label: 'Vai al servizio AI Act Audit', href: `/${locale}/services/eu-ai-act-audit` },
      ],
    },
    {
      number: '02',
      slug: 'eu-ai-act-debate',
      title: 'EU AI Act: peso burocratico o vantaggio competitivo?',
      format: 'Debate',
      formatBadge: 'Dibattito · 2 voci contrapposte',
      duration: '27 min',
      date: '26 aprile 2026',
      description: 'Due voci esperte si sfidano sulla domanda che divide i CdA europei. Chi sostiene che il Regolamento soffoca l\'innovazione contro chi vede compliance come acceleratore strategico. Punti di scontro: scoring framework, casi reali, sanzioni vs costi-opportunità.',
      notes: [
        'L\'argomento "burocratico": tempo e risorse drenate',
        'L\'argomento "strategico": fiducia, vantaggio competitivo, accesso ai mercati',
        'Casi pratici: banche centrali africane, Gobierno de Canarias, Principato di Monaco',
        'Sanzioni concrete vs costo della non-azione',
        'Cosa significa "essere pronti" davvero',
      ],
      audioUrl: '/podcast/02-eu-ai-act-debate-it.m4a',
      relatedLinks: [
        { label: 'Scarica il checklist (PDF)', href: '/eu-ai-act-checklist-it.pdf' },
        { label: 'Richiedi una proposta', href: `/${locale}/proposal` },
      ],
    },
  ] : [
    {
      number: '01',
      slug: 'eu-ai-act-deep-dive',
      title: 'EU AI Act, in thirty questions',
      format: 'Deep dive',
      formatBadge: 'Narrative summary · 2 voices',
      duration: '21 min',
      date: 'April 26, 2026',
      description: 'Two voices walk you through the 30 questions of the EU AI Act checklist, grouped into six thematic sections. Scoring framework, what to do at each level, the August 2, 2026 deadline. For those who want a structured summary while commuting.',
      notes: [
        'AI system identification & inventory (5 questions)',
        'Risk classification (5 questions)',
        'Conformity & technical documentation (5 questions)',
        'Transparency & disclosure (5 questions)',
        'Human oversight, accuracy & robustness (5 questions)',
        'Internal governance & compliance (5 questions)',
      ],
      audioUrl: '/podcast/01-eu-ai-act-deep-dive-it.m4a',
      relatedLinks: [
        { label: 'Download the checklist (PDF)', href: '/eu-ai-act-checklist-en.pdf' },
        { label: 'See the AI Act Audit service', href: `/${locale}/services/eu-ai-act-audit` },
      ],
    },
    {
      number: '02',
      slug: 'eu-ai-act-debate',
      title: 'EU AI Act: bureaucratic burden or competitive edge?',
      format: 'Debate',
      formatBadge: 'Debate · 2 opposing voices',
      duration: '27 min',
      date: 'April 26, 2026',
      description: 'Two expert voices clash on the question that divides European boardrooms. Those arguing the Regulation stifles innovation against those seeing compliance as a strategic accelerator. Conflict points: scoring framework, real cases, fines vs opportunity cost.',
      notes: [
        'The "bureaucratic" argument: time and resources drained',
        'The "strategic" argument: trust, competitive edge, market access',
        'Practical cases: African central banks, Canary Islands, Monaco',
        'Concrete sanctions vs the cost of inaction',
        'What "being ready" really means',
      ],
      audioUrl: '/podcast/02-eu-ai-act-debate-it.m4a',
      relatedLinks: [
        { label: 'Download the checklist (PDF)', href: '/eu-ai-act-checklist-en.pdf' },
        { label: 'Request a proposal', href: `/${locale}/proposal` },
      ],
    },
  ];

  return (
    <div className="pt-24 pb-16">
      {/* Hero */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="text-xs uppercase tracking-[0.18em] text-[var(--color-accent)] mb-4 font-medium">
          {intro.eyebrow}
        </div>
        <h1 className="display-lg text-white">{intro.title}</h1>
        <p className="mt-6 text-lg sm:text-xl text-[var(--color-text-muted)] leading-relaxed max-w-3xl">
          {intro.sub}
        </p>
      </section>

      {/* Episodes */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        {episodes.map((ep) => (
          <article key={ep.slug} className="glass-card p-8 md:p-10">
            <div className="grid grid-cols-12 gap-6 md:gap-10">
              <div className="col-span-12 md:col-span-3">
                <div className="text-5xl md:text-6xl font-semibold text-[var(--color-accent)] tracking-tighter leading-none mb-4">
                  {ep.number}
                </div>
                <div className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-[var(--color-text-subtle)] mb-2">
                  {ep.format === 'Debate' ? <Mic size={12} /> : <Headphones size={12} />}
                  {ep.formatBadge}
                </div>
                <div className="text-sm text-[var(--color-text-muted)] mt-3 space-y-1">
                  <div>{ep.duration}</div>
                  <div className="text-[var(--color-text-subtle)]">{ep.date}</div>
                </div>
              </div>

              <div className="col-span-12 md:col-span-9">
                <h2 className="display-sm text-white mb-4">{ep.title}</h2>
                <p className="text-[var(--color-text-muted)] leading-relaxed mb-6">{ep.description}</p>

                <audio
                  controls
                  preload="metadata"
                  className="w-full mb-6"
                  src={ep.audioUrl}
                >
                  {isIt
                    ? 'Il tuo browser non supporta l\'audio HTML5.'
                    : 'Your browser does not support HTML5 audio.'}
                </audio>

                <details className="mb-6">
                  <summary className="text-sm text-[var(--color-accent)] cursor-pointer hover:text-[var(--color-accent-hover)] transition-colors duration-200 font-medium">
                    {isIt ? 'Show notes — temi trattati' : 'Show notes — topics covered'}
                  </summary>
                  <ul className="mt-3 space-y-1.5 text-sm text-[var(--color-text-muted)] pl-4">
                    {ep.notes.map((note, i) => (
                      <li key={i} className="leading-relaxed">— {note}</li>
                    ))}
                  </ul>
                </details>

                <div className="flex flex-wrap gap-3 pt-4 border-t border-white/8">
                  <a
                    href={ep.audioUrl}
                    download
                    className="inline-flex items-center gap-1.5 text-sm text-[var(--color-text-muted)] hover:text-white transition-colors duration-200"
                  >
                    <Download size={14} />
                    {isIt ? 'Scarica audio' : 'Download audio'}
                  </a>
                  {ep.relatedLinks.map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      className="inline-flex items-center gap-1.5 text-sm text-[var(--color-accent)] hover:text-[var(--color-accent-hover)] transition-colors duration-200"
                    >
                      <FileText size={14} />
                      {l.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}
      </section>

      {/* About this podcast */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="glass-card p-8">
          <h2 className="text-xl font-semibold text-white mb-4 tracking-tight">
            {isIt ? 'Su questo podcast' : 'About this podcast'}
          </h2>
          <p className="text-[var(--color-text-muted)] leading-relaxed mb-3">
            {isIt
              ? 'Gli episodi sono generati con NotebookLM di Google a partire dai materiali pubblicati su pallanca.info — checklist EU AI Act, articoli del blog, position paper. Le voci sono AI ma il framing editoriale, le domande, e il punto di vista sono di Pan.'
              : 'Episodes are generated with Google NotebookLM from materials published on pallanca.info — EU AI Act checklist, blog articles, position papers. The voices are AI but the editorial framing, questions, and viewpoint are Pan\'s.'}
          </p>
          <p className="text-[var(--color-text-muted)] leading-relaxed">
            {isIt
              ? 'Pubblicheremo episodi nuovi quando il materiale di base lo giustifica — non con cadenza fissa. Se vuoi suggerire un tema, scrivi a angelo@pallanca.info.'
              : 'New episodes when the underlying material justifies them — no fixed cadence. To suggest a topic, email angelo@pallanca.info.'}
          </p>
        </div>
      </section>
    </div>
  );
}
