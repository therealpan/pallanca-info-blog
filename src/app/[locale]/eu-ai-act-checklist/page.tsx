import { setRequestLocale } from 'next-intl/server';
import { FileText, Check, ListChecks, BookOpen, Calendar } from 'lucide-react';
import ChecklistDownloadForm from '@/components/ChecklistDownloadForm';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return {
    title:
      locale === 'it'
        ? 'EU AI Act Readiness Checklist — Pan'
        : 'EU AI Act Readiness Checklist — Pan',
    description:
      locale === 'it'
        ? 'Trenta domande in 15 minuti per scoprire se la tua azienda è in regola con l\'EU AI Act prima della deadline 2 agosto 2026. PDF gratuito.'
        : 'Thirty questions in 15 minutes to find out if your company is compliant with the EU AI Act before the August 2, 2026 deadline. Free PDF.',
    alternates: {
      canonical: `/${locale}/eu-ai-act-checklist`,
    },
  };
}

export default async function ChecklistPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const lang = locale === 'it' ? 'it' : 'en';

  const c = lang === 'it' ? {
    eyebrow: 'Lead magnet · gratuito · 9 pagine',
    title: 'EU AI Act Readiness Checklist',
    sub: 'Sai davvero se la tua azienda è in regola con la deadline del 2 agosto 2026? Trenta domande in quindici minuti per scoprirlo.',
    sectionWhatTitle: 'Cosa contiene',
    items: [
      { icon: ListChecks, title: '30 domande di self-assessment', body: 'Sei sezioni: identificazione sistemi AI, classificazione del rischio, conformity & documentazione, trasparenza, human oversight, governance interna. Ogni domanda referenzia l\'articolo specifico dell\'AI Act.' },
      { icon: FileText, title: 'Scoring framework', body: 'Quattro fasce di gap score (0-3 mature, 4-10 partially ready, 11-20 significant gap, 21-30 critical). Per ogni livello, raccomandazione operativa concreta su cosa fare nei prossimi mesi.' },
      { icon: BookOpen, title: 'Glossario AI Act', body: '12 termini chiave (provider, deployer, Annex III, conformity assessment, GPAI, FRIA, post-market monitoring...) spiegati in modo essenziale, senza jargon legal.' },
      { icon: Calendar, title: 'Calendario 2025-2027', body: 'Deadline complete: AI literacy + pratiche proibite (febbraio 2025), GPAI (agosto 2025), high-risk Annex III (agosto 2026), embedded systems (agosto 2027).' },
    ],
    forWhomTitle: 'Per chi è',
    forWhomBody: 'General Counsel, CIO, Chief Risk Officer, Compliance Officer di aziende EU con sistemi AI in produzione in settori regolamentati: banking, insurance, healthcare, HR tech, edtech, scoring, controllo accessi, education.',
    aboutTitle: 'Chi lo ha scritto',
    aboutBody: 'Angelo Pallanca (Pan) è senior advisor AI per leadership team europei. Trent\'anni cross-industry. Ha lavorato su progetti AI in produzione per banche centrali africane (compliance AML), Gobierno de Canarias (tourism intelligence), Principato di Monaco (governance AI nel settore pubblico), UNICEF (AI-powered distance learning). Indipendente, no commission da vendor.',
    aboutLink: 'Leggi di più →',
    formTitle: 'Scarica il PDF',
    formSub: 'Compila i quattro campi qui sotto. Ricevi il PDF via email entro un minuto.',
    faqTitle: 'Domande frequenti',
    faqs: [
      { q: 'È vendita mascherata?', a: 'No. Il PDF è gratuito senza vincoli. Se trovi gap critici e vuoi una conversazione c\'è il link, ma nessuno ti chiamerà se non rispondi.' },
      { q: 'Riceverò spam?', a: 'No. Niente CRM, niente sequenze automatiche, niente newsletter forzata. Ti scrivo personalmente solo se rispondi al messaggio iniziale.' },
      { q: 'Quanto tempo serve per compilarlo?', a: 'Quindici minuti se rispondi onestamente. Conviene farlo insieme al CIO e al DPO in un\'ora di calendar bloccata, non in pause distratte.' },
      { q: 'È adatto al mio settore?', a: 'Sì se operi in EU con sistemi AI in produzione, qualunque settore. Le domande sono cross-industry, le risposte interpretano per il tuo contesto.' },
    ],
  } : {
    eyebrow: 'Lead magnet · free · 9 pages',
    title: 'EU AI Act Readiness Checklist',
    sub: 'Do you actually know if your company is compliant with the August 2, 2026 deadline? Thirty questions, fifteen minutes.',
    sectionWhatTitle: 'What\'s inside',
    items: [
      { icon: ListChecks, title: '30 self-assessment questions', body: 'Six sections: AI system identification, risk classification, conformity & documentation, transparency, human oversight, internal governance. Each question references the specific AI Act article.' },
      { icon: FileText, title: 'Scoring framework', body: 'Four gap score bands (0-3 mature, 4-10 partially ready, 11-20 significant gap, 21-30 critical). For each level, a concrete operational recommendation on what to do in the coming months.' },
      { icon: BookOpen, title: 'AI Act glossary', body: '12 key terms (provider, deployer, Annex III, conformity assessment, GPAI, FRIA, post-market monitoring...) explained essentially, without legal jargon.' },
      { icon: Calendar, title: '2025-2027 calendar', body: 'Complete deadlines: AI literacy + prohibited practices (February 2025), GPAI (August 2025), high-risk Annex III (August 2026), embedded systems (August 2027).' },
    ],
    forWhomTitle: 'Who it\'s for',
    forWhomBody: 'General Counsel, CIO, Chief Risk Officer, Compliance Officer at EU companies with AI systems in production in regulated sectors: banking, insurance, healthcare, HR tech, edtech, scoring, access control, education.',
    aboutTitle: 'Who wrote it',
    aboutBody: 'Angelo Pallanca (Pan) is a senior AI advisor to European leadership teams. Thirty years cross-industry. Has worked on AI projects in production for African central banks (AML compliance), Government of the Canary Islands (tourism intelligence), Principality of Monaco (AI governance in public sector), UNICEF (AI-powered distance learning). Independent, no vendor commissions.',
    aboutLink: 'Learn more →',
    formTitle: 'Download the PDF',
    formSub: 'Fill in the four fields below. You\'ll receive the PDF by email within a minute.',
    faqTitle: 'Frequently asked questions',
    faqs: [
      { q: 'Is this disguised sales?', a: 'No. The PDF is free, no strings attached. If you find critical gaps and want a conversation there\'s the link, but nobody will call you if you don\'t reply.' },
      { q: 'Will I get spam?', a: 'No. No CRM, no automated sequences, no forced newsletter. I only write personally if you reply to the initial message.' },
      { q: 'How long does it take to fill?', a: 'Fifteen minutes if you answer honestly. Best done with your CIO and DPO in a blocked calendar hour, not during distracted breaks.' },
      { q: 'Is it relevant to my sector?', a: 'Yes if you operate in the EU with AI systems in production, any sector. The questions are cross-industry, the answers interpret for your context.' },
    ],
  };

  return (
    <div className="pt-24 pb-16">
      {/* Hero + form */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-medium text-[var(--color-accent)] uppercase tracking-[0.18em] mb-5">
            {c.eyebrow}
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-white tracking-tight leading-[1.05]">
            {c.title}
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-[var(--color-text-muted)] leading-relaxed max-w-3xl mx-auto">
            {c.sub}
          </p>
        </div>

        <ChecklistDownloadForm />
      </section>

      {/* What's inside */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight mb-10">
          {c.sectionWhatTitle}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 stagger-grid">
          {c.items.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="glass-card p-7">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-[var(--color-accent)]/12 mb-5">
                  <Icon size={20} className="text-[var(--color-accent)]" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3 tracking-tight">{item.title}</h3>
                <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{item.body}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* For whom + About */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="glass-card p-8">
            <h2 className="text-xl font-semibold text-white mb-4 tracking-tight">{c.forWhomTitle}</h2>
            <p className="text-[var(--color-text-muted)] leading-relaxed">{c.forWhomBody}</p>
          </div>
          <div className="glass-card p-8">
            <h2 className="text-xl font-semibold text-white mb-4 tracking-tight">{c.aboutTitle}</h2>
            <p className="text-[var(--color-text-muted)] leading-relaxed mb-4">{c.aboutBody}</p>
            <a
              href={`/${locale}/about`}
              className="inline-flex items-center gap-1 text-[var(--color-accent)] text-sm hover:gap-2 transition-[gap] duration-200"
            >
              {c.aboutLink}
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight mb-10">
          {c.faqTitle}
        </h2>
        <div className="space-y-4">
          {c.faqs.map((f, i) => (
            <div key={i} className="glass-card p-6">
              <h3 className="text-base font-semibold text-white mb-3">{f.q}</h3>
              <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Form repeated at bottom */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">
            {c.formTitle}
          </h2>
          <p className="mt-3 text-[var(--color-text-muted)]">{c.formSub}</p>
        </div>
        <ChecklistDownloadForm />
      </section>
    </div>
  );
}
