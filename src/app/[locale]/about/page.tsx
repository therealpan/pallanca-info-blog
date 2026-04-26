import { setRequestLocale } from 'next-intl/server';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return {
    title: locale === 'it' ? 'Chi sono — Angelo Pallanca' : 'About — Angelo Pallanca',
    description:
      locale === 'it'
        ? 'Angelo Pallanca, senior advisor AI per leadership team europei. 30 anni di innovazione cross-industry, indipendente per scelta. Pan firma, PiirZ Digital esegue.'
        : 'Angelo Pallanca, senior AI advisor to European leadership teams. 30 years of cross-industry innovation, independent by choice. Pan signs, PiirZ Digital ships.',
  };
}

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  const content = locale === 'it' ? {
    eyebrow: 'About',
    title: 'Angelo Pallanca',
    subtitle: 'Senior advisor AI per leadership team europei. 30 anni cross-industry, indipendente per scelta. Pan è il mio nome editoriale; PiirZ Digital la mia società di delivery.',
    bio: [
      'Sono nato come tecnologo e cresciuto come consulente. Per trent\'anni ho lavorato nei punti dove la tecnologia incontra le decisioni — board, ministeri, fondazioni, sale C-level — e dove la maggior parte delle innovazioni vengono o accettate o ignorate.',
      'Ho cominciato negli anni \'90, quando "innovazione tecnologica" voleva dire portare un\'azienda dal fax all\'email aziendale. Ho lavorato sul web prima che esistesse Google, sull\'e-commerce prima che esistesse Amazon Italia, sul mobile prima che il primo iPhone arrivasse in Europa, sull\'AI prima che diventasse il tema di ogni board del 2024. Non perché abbia fiutato il futuro — ma perché ho imparato presto che ogni innovazione passa per due fasi: prima viene rifiutata come "non maturità", poi viene assorbita come "ovvia". Il mio lavoro è da sempre stato in mezzo, dove le decisioni costano.',
      'Oggi aiuto leadership team europei — aziende mid-large, istituzioni pubbliche, fondi VC, founder di scale-up — a portare l\'intelligenza artificiale dal board alla produzione, e a farlo nel modo che regge un audit europeo. Non ho vendor da spingere. Non vendo licenze. Firmo personalmente la strategia, e il mio team operativo (PiirZ Digital) la esegue.',
    ],
    statsLabel: 'Anni di esperienza',
    numbersTitle: 'Trent\'anni in cifre',
    numbersIntro: 'I numeri che racconto in CdA, prima dei progetti.',
    numbers: {
      hero: { value: '30+', label: 'anni di consulting in innovazione e tecnologia', accent: 'primary' },
      a: { value: '12', label: 'settori, dal luxury al pubblico, dal travel al finance' },
      b: { value: '40+', label: 'stati in cui ho lavorato direttamente o tramite partner' },
      c: { value: '3', label: 'continenti in cui ho consegnato progetti — Europa, Africa, Medio Oriente' },
    },
    projectsTitle: 'Tre progetti che racconto in CdA',
    projectsIntro: 'Quando un cliente nuovo mi chiede "ma cosa hai fatto davvero", racconto questi tre. Non sono i più grandi né i più recenti — sono quelli che mi hanno insegnato di più.',
    projects: [
      {
        title: 'Banche centrali africane — Compliance AML con AI',
        body: 'La sfida non era costruire un algoritmo migliore. Era convincere investigatori esperti che un sistema di machine learning poteva aiutarli a vedere meglio, non sostituirli. Abbiamo lavorato sui falsi positivi — la metrica che li frustrava ogni giorno — e ridotto il rumore del 40%. La velocità di investigazione è salita del 60%. La lezione: l\'AI in regolamentati funziona quando riduce il lavoro inutile, non quando promette automazione totale.',
      },
      {
        title: 'Gobierno de Canarias — Tourism intelligence regionale',
        body: 'Sette milioni di turisti l\'anno generano dati ovunque: prenotazioni, flussi aeroportuali, sentiment social, indicatori economici. Quando arrivi, trovi quaranta dashboard diverse, e nessuno che le legga davvero tutte. Il progetto è stato di tagliare: una dashboard sola con algoritmi predittivi sulle stagionalità e sulle crisi settoriali. Il governo regionale ha aumentato l\'efficacia delle campagne del 15% e ridotto i tempi di risposta del 25%. La lezione: a volte il valore di un sistema AI è quello che taglia, non quello che aggiunge.',
      },
      {
        title: 'Principato di Monaco — Governance AI nel settore pubblico',
        body: 'Adottare AI e blockchain in un servizio pubblico richiede una cosa prima della tecnologia: un framework di governance che bilanci innovazione e diritti dei cittadini, e che sopravviva al ciclo politico. È quello che abbiamo costruito — e che ha posizionato Monaco come riferimento europeo per l\'adozione responsabile di tecnologie emergenti nella PA. La lezione: la governance non è un freno all\'innovazione, è la sua condizione di sopravvivenza in un\'organizzazione pubblica.',
      },
    ],
    philosophyTitle: 'Tre cose che non cambio',
    philosophyIntro: 'Tre principi che guidano tutto. Non sono manifesti, sono regole operative.',
    philosophy: [
      {
        n: '01',
        title: 'Indipendenza, non collaborazioni occulte',
        desc: 'Non ricevo commissioni da nessun vendor. Quando consiglio un fornitore, è perché serve al cliente — non perché qualcuno mi paga il referral. Per me la credibilità di un consulente è l\'unica risorsa non scalabile, e non sono disposto a spenderla.',
      },
      {
        n: '02',
        title: 'Senior, non team con junior',
        desc: 'Lavoro io, di persona. Il delivery operativo lo gestisce PiirZ Digital con team adeguati, ma il pensiero strategico è mio e firma con il mio nome. Se cerchi un grande deck con dodici slide bianche e un partner che appare al kickoff, non sono io.',
      },
      {
        n: '03',
        title: 'Strategy che esegue',
        desc: 'Non scrivo strategie che muoiono in PowerPoint. Ogni roadmap che consegno è eseguibile dal primo giorno, con priorità, owner, tempi e — soprattutto — un partner di delivery pronto a partire. Una strategia non eseguibile non è una strategia. È un saggio.',
      },
    ],
    ctaTitle: 'Parliamone.',
    ctaBody: 'Compila il form di pre-qualifica (5 domande, due minuti). Una discovery call di trenta minuti: mi racconti dove sei e cosa ti serve, ti racconto come affronto il tuo problema specifico. Niente pitch, niente vincoli.',
    ctaButton: 'Richiedi una proposta',
  } : {
    eyebrow: 'About',
    title: 'Angelo Pallanca',
    subtitle: 'Senior AI advisor to European leadership teams. 30 years cross-industry, independent by choice. Pan is my editorial name; PiirZ Digital is my delivery firm.',
    bio: [
      'I started as a technologist and grew up as a consultant. For thirty years I\'ve worked at the points where technology meets decisions — boardrooms, ministries, foundations, C-level offices — and where most innovations are either accepted or ignored.',
      'I started in the \'90s, when "technological innovation" meant moving a company from fax to corporate email. I worked on the web before Google existed, on e-commerce before Amazon Italy, on mobile before the first iPhone reached Europe, on AI before it became every board\'s 2024 theme. Not because I had a nose for the future — but because I learned early that every innovation passes through two phases: first it\'s rejected as "not mature," then it\'s absorbed as "obvious." My work has always been in between, where decisions cost.',
      'Today I help European leadership teams — mid-large companies, public institutions, VC funds, scale-up founders — take artificial intelligence from the boardroom to production, in a way that survives a European audit. I have no vendor to push. I sell no licenses. I sign the strategy personally, and my delivery team (PiirZ Digital) ships it.',
    ],
    statsLabel: 'Years of experience',
    numbersTitle: 'Thirty years, in numbers',
    numbersIntro: 'The numbers I show in the boardroom, before the projects.',
    numbers: {
      hero: { value: '30+', label: 'years of innovation and technology consulting', accent: 'primary' },
      a: { value: '12', label: 'sectors, from luxury to public, from travel to finance' },
      b: { value: '40+', label: 'countries worked in directly or through partners' },
      c: { value: '3', label: 'continents where I\'ve delivered projects — Europe, Africa, Middle East' },
    },
    projectsTitle: 'Three projects I tell in the boardroom',
    projectsIntro: 'When a new client asks "but what have you actually done," I tell these three. They\'re not the biggest or the most recent — they\'re the ones that taught me the most.',
    projects: [
      {
        title: 'African central banks — AML compliance with AI',
        body: 'The challenge wasn\'t building a better algorithm. It was convincing experienced investigators that a machine learning system could help them see better, not replace them. We worked on false positives — the metric that frustrated them daily — and reduced noise by 40%. Investigation speed rose by 60%. The lesson: AI in regulated environments works when it reduces unnecessary work, not when it promises full automation.',
      },
      {
        title: 'Government of the Canary Islands — Regional tourism intelligence',
        body: 'Fourteen million tourists per year generate data everywhere: bookings, airport flows, social sentiment, economic indicators. When you arrive, you find forty different dashboards and nobody who actually reads them all. The project was about cutting: a single dashboard with predictive algorithms on seasonality and sectoral crises. The regional government raised campaign effectiveness by 15% and cut response times by 25%. The lesson: sometimes the value of an AI system is what it cuts, not what it adds.',
      },
      {
        title: 'Principality of Monaco — AI governance in the public sector',
        body: 'Adopting AI and blockchain in a public service requires one thing before the technology: a governance framework that balances innovation and citizen rights, and survives the political cycle. That\'s what we built — and what positioned Monaco as a European reference point for responsible adoption of emerging technologies in public administration. The lesson: in public institutions governance isn\'t a brake on innovation — it\'s the condition of its survival.',
      },
    ],
    philosophyTitle: 'Three things I don\'t change',
    philosophyIntro: 'Three principles that guide everything. Not manifestos — operational rules.',
    philosophy: [
      {
        n: '01',
        title: 'Independence, no hidden affiliations',
        desc: 'I take no commission from any vendor. When I recommend a supplier, it\'s because the client needs it — not because someone pays me a referral. To me, a consultant\'s credibility is the only non-scalable asset, and I\'m not willing to spend it.',
      },
      {
        n: '02',
        title: 'Senior, not junior team',
        desc: 'I work in person. Operational delivery is handled by PiirZ Digital with adequate teams, but the strategic thinking is mine and signs with my name. If you want a big deck with twelve white slides and a partner who shows up at kickoff, I\'m not your guy.',
      },
      {
        n: '03',
        title: 'Strategy that ships',
        desc: 'I don\'t write strategies that die in PowerPoint. Every roadmap I deliver is executable from day one, with priorities, owners, timelines, and — above all — a delivery partner ready to start. A strategy that can\'t be executed isn\'t a strategy. It\'s an essay.',
      },
    ],
    ctaTitle: 'Let\'s talk.',
    ctaBody: 'Fill in the pre-qualification form (5 questions, two minutes). A thirty-minute discovery call: you tell me where you are and what you need, I tell you how I\'d approach your specific problem. No pitch, no commitment.',
    ctaButton: 'Request a proposal',
  };

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Angelo Pallanca',
    alternateName: 'Pan',
    jobTitle: 'Senior AI Advisor & Innovation Consultant',
    description: content.subtitle,
    url: 'https://pallanca.info',
    image: 'https://pallanca.info/images/photos/foto_pallanca01.png',
    sameAs: ['https://www.linkedin.com/in/angelopallanca'],
    worksFor: { '@type': 'Organization', name: 'PiirZ Digital Limited' },
    knowsAbout: [
      'Artificial Intelligence Strategy',
      'EU AI Act Compliance',
      'Sovereign AI',
      'Digital Transformation',
      'Innovation Management',
    ],
  };

  return (
    <div className="pt-24 pb-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO — asimmetrico 5/7 split, foto a sinistra grande, contenuto a destra editoriale */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="col-span-12 md:col-span-5 lg:col-span-5">
            <div className="relative">
              <div className="glass-card p-2 inline-block w-full">
                <Image
                  src="/images/photos/foto_pallanca01.png"
                  alt="Angelo Pallanca"
                  width={520}
                  height={650}
                  className="rounded-xl object-cover w-full h-auto"
                  priority
                />
              </div>
              <div className="absolute -bottom-5 -right-5 glass-card p-5 hidden md:block">
                <div className="text-3xl font-semibold text-[var(--color-accent)] tracking-tight">30+</div>
                <div className="text-xs text-[var(--color-text-subtle)] uppercase tracking-widest mt-1">{content.statsLabel}</div>
              </div>
            </div>
          </div>

          <div className="col-span-12 md:col-span-7 lg:col-span-7">
            <div className="text-xs uppercase tracking-[0.18em] text-[var(--color-accent)] mb-4 font-medium">
              {content.eyebrow}
            </div>
            <h1 className="display-xl text-white">{content.title}</h1>
            <p className="mt-6 text-lg sm:text-xl text-[var(--color-text-muted)] leading-relaxed max-w-xl">
              {content.subtitle}
            </p>
            <div className="mt-8 space-y-4 max-w-2xl">
              {content.bio.map((p, i) => (
                <p key={i} className="text-[var(--color-text-muted)] leading-relaxed text-base">{p}</p>
              ))}
            </div>
            <div className="mt-10">
              <a
                href={`/${locale}/proposal`}
                className="inline-flex items-center gap-2 bg-white text-[var(--color-bg)] px-7 py-3 rounded-full text-sm font-medium hover:bg-white/90 transition-[background,color,transform] duration-200"
              >
                {content.ctaButton} <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* NUMBERS — bento asimmetrico */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="max-w-2xl mb-12">
          <h2 className="display-md text-white">{content.numbersTitle}</h2>
          <p className="mt-4 text-[var(--color-text-muted)] leading-relaxed">{content.numbersIntro}</p>
        </div>

        <div className="grid grid-cols-12 gap-4 md:gap-5 stagger-grid">
          {/* Hero number — 30+ */}
          <div className="col-span-12 md:col-span-7 glass-card p-8 md:p-10 lg:p-12">
            <div className="text-7xl sm:text-8xl md:text-[10rem] font-semibold text-[var(--color-accent)] leading-none tracking-tighter">
              {content.numbers.hero.value}
            </div>
            <div className="mt-5 text-sm sm:text-base text-[var(--color-text-muted)] leading-relaxed max-w-md">
              {content.numbers.hero.label}
            </div>
          </div>

          {/* Tall card — 12 */}
          <div className="col-span-12 md:col-span-5 grid grid-cols-1 md:grid-rows-2 gap-4 md:gap-5">
            <div className="glass-card p-7">
              <div className="text-5xl sm:text-6xl font-semibold text-white leading-none tracking-tighter">
                {content.numbers.a.value}
              </div>
              <div className="mt-4 text-sm text-[var(--color-text-muted)] leading-relaxed">
                {content.numbers.a.label}
              </div>
            </div>
            <div className="glass-card p-7">
              <div className="text-5xl sm:text-6xl font-semibold text-white leading-none tracking-tighter">
                {content.numbers.b.value}
              </div>
              <div className="mt-4 text-sm text-[var(--color-text-muted)] leading-relaxed">
                {content.numbers.b.label}
              </div>
            </div>
          </div>

          {/* Wide bottom — 3 continenti */}
          <div className="col-span-12 glass-card p-7 md:p-9 flex flex-col md:flex-row md:items-center gap-5 md:gap-10">
            <div className="text-6xl sm:text-7xl md:text-8xl font-semibold text-white leading-none tracking-tighter md:flex-shrink-0">
              {content.numbers.c.value}
            </div>
            <div className="text-base sm:text-lg text-[var(--color-text-muted)] leading-relaxed">
              {content.numbers.c.label}
            </div>
          </div>
        </div>
      </section>

      {/* THREE PROJECTS — vertical stack with editorial spacing */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24">
        <div className="mb-12">
          <h2 className="display-md text-white">{content.projectsTitle}</h2>
          <p className="mt-4 text-[var(--color-text-muted)] leading-relaxed max-w-2xl">{content.projectsIntro}</p>
        </div>
        <div className="space-y-8">
          {content.projects.map((p, i) => (
            <article key={i} className="glass-card p-8 md:p-10">
              <div className="flex items-baseline gap-4 mb-4">
                <span className="text-sm font-medium text-[var(--color-accent)] tracking-widest">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="display-sm text-white">{p.title}</h3>
              </div>
              <p className="text-[var(--color-text-muted)] leading-relaxed text-base">{p.body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* PHILOSOPHY — zigzag layout, alternating alignment */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="max-w-2xl mb-16">
          <h2 className="display-md text-white">{content.philosophyTitle}</h2>
          <p className="mt-4 text-[var(--color-text-muted)] leading-relaxed">{content.philosophyIntro}</p>
        </div>
        <div className="space-y-16 md:space-y-24">
          {content.philosophy.map((item, i) => (
            <div
              key={item.n}
              className={`grid grid-cols-12 gap-6 md:gap-12 items-start ${
                i % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className={`col-span-12 md:col-span-3 ${i % 2 === 1 ? 'md:col-start-10' : ''}`}>
                <div className="text-7xl md:text-8xl font-semibold text-[var(--color-accent)] leading-none tracking-tighter">
                  {item.n}
                </div>
              </div>
              <div className={`col-span-12 md:col-span-8 ${i % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''}`}>
                <h3 className="display-sm text-white mb-4">{item.title}</h3>
                <p className="text-[var(--color-text-muted)] leading-relaxed text-base sm:text-lg max-w-2xl">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 text-center">
        <h2 className="display-lg text-white">{content.ctaTitle}</h2>
        <p className="mt-6 text-base sm:text-lg text-[var(--color-text-muted)] leading-relaxed max-w-2xl mx-auto">
          {content.ctaBody}
        </p>
        <div className="mt-10">
          <a
            href={`/${locale}/proposal`}
            className="inline-flex items-center gap-2 bg-white text-[var(--color-bg)] px-7 py-3 rounded-full text-sm font-medium hover:bg-white/90 transition-[background,color,transform] duration-200"
          >
            {content.ctaButton} <ArrowRight size={16} />
          </a>
        </div>
      </section>
    </div>
  );
}
