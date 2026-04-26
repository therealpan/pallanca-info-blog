import { setRequestLocale } from 'next-intl/server';
import Image from 'next/image';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return {
    title: locale === 'it' ? 'Clienti & Case Studies — Angelo Pallanca' : 'Clients & Case Studies — Angelo Pallanca',
    description:
      locale === 'it'
        ? 'Trent\'anni di lavoro in tre continenti. Case study estesi: banche centrali africane, Gobierno de Canarias, Principato di Monaco.'
        : 'Thirty years of work across three continents. Extended case studies: African central banks, Government of the Canary Islands, Principality of Monaco.',
  };
}

const clientLogos = [
  { name: 'Emirates', file: 'emirates.png' },
  { name: 'Salvatore Ferragamo', file: 'ferragamo.png' },
  { name: 'UNESCO', file: 'Unesco.png' },
  { name: 'UNICEF', file: 'Unicef.png' },
  { name: 'Museo Nacional del Prado', file: 'museo nacional prado.png' },
  { name: 'Principato di Monaco', file: 'monaco.png' },
  { name: 'Regione Liguria', file: 'regione_liguria.png' },
  { name: 'Gobierno de Canarias', file: 'gobierno_de_canarias.png' },
  { name: 'Unione Europea', file: 'unione_europea.png' },
  { name: 'Interreg Europe', file: 'interreg Europe.png' },
  { name: 'Obsidian', file: 'obsidian.png' },
  { name: 'PiirZ Digital', file: 'piirz.png' },
];

export default async function ClientsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const lang = locale === 'it' ? 'it' : 'en';

  const labels = lang === 'it' ? {
    eyebrow: 'Clienti',
    title: 'Trent\'anni di lavoro, in tre continenti.',
    subtitle: 'Una selezione non esaustiva di brand, istituzioni e organizzazioni che hanno scelto di lavorare con me. Non tutti sono raccontabili pubblicamente; quelli che sono qui sotto sì.',
    logoSection: 'Hanno scelto di lavorare con me',
    caseStudiesTitle: 'Tre case study estesi',
    contextLabel: 'Contesto',
    challengeLabel: 'La sfida',
    whatLabel: 'Cosa abbiamo fatto',
    resultLabel: 'Il risultato',
    lessonLabel: 'La lezione',
    otherTitle: 'Altri progetti che meritano una menzione',
    sectorsTitle: 'Settori e geografie',
    sectorsLabel: 'Settori principali',
    geographiesLabel: 'Geografie',
    sectorsBody: 'Banking & financial services · Public administration · Cultura e fondazioni · Turismo & travel · Luxury & retail · Education · Healthcare (early-stage)',
    geographiesBody: 'Europa (Italia, Francia, Spagna, Monaco, UK, Germania) · Africa subsahariana (banche centrali multiple, Mozambico) · Medio Oriente (Emirates) · Istituzioni internazionali (UNESCO, UNICEF, EU)',
    ctaTitle: 'Vuoi essere il prossimo case study?',
    ctaBody: 'La discovery call di trenta minuti è gratuita e senza vincoli. Ti racconto come ho affrontato problemi simili al tuo, capiamo se possiamo lavorare insieme, decidi tu il passo successivo.',
    ctaButton: 'Prenota una discovery call',
  } : {
    eyebrow: 'Clients',
    title: 'Thirty years of work, across three continents.',
    subtitle: 'A non-exhaustive selection of brands, institutions, and organizations that chose to work with me. Not all are publicly tellable; the ones below are.',
    logoSection: 'Who chose to work with me',
    caseStudiesTitle: 'Three extended case studies',
    contextLabel: 'Context',
    challengeLabel: 'Challenge',
    whatLabel: 'What we did',
    resultLabel: 'Result',
    lessonLabel: 'Lesson',
    otherTitle: 'Other projects worth mentioning',
    sectorsTitle: 'Sectors and geographies',
    sectorsLabel: 'Main sectors',
    geographiesLabel: 'Geographies',
    sectorsBody: 'Banking & financial services · Public administration · Culture & foundations · Tourism & travel · Luxury & retail · Education · Healthcare (early-stage)',
    geographiesBody: 'Europe (Italy, France, Spain, Monaco, UK, Germany) · Sub-Saharan Africa (multiple central banks, Mozambique) · Middle East (Emirates) · International institutions (UNESCO, UNICEF, EU)',
    ctaTitle: 'Want to be the next case study?',
    ctaBody: 'The thirty-minute discovery call is free and unconditional. I\'ll tell you how I\'ve handled problems similar to yours, we figure out if we can work together, you decide the next step.',
    ctaButton: 'Book a discovery call',
  };

  const caseStudies = lang === 'it' ? [
    {
      title: 'Banche centrali africane',
      subtitle: 'Compliance AML con AI · 2023-2024',
      context: 'Diverse banche centrali africane si trovavano davanti a un problema duplicato: sistemi di monitoraggio antiriciclaggio (AML) tradizionali generavano migliaia di alert al giorno, ma il 95% erano falsi positivi. Gli investigatori sprecavano ore a chiudere alert inutili e perdevano i pochi casi rilevanti nel rumore. Allo stesso tempo, le pressioni regolatorie internazionali (FATF, Basilea) chiedevano standard sempre più alti di efficacia.',
      challenge: 'Costruire un sistema di monitoraggio transazionale basato su machine learning che (a) riducesse drasticamente i falsi positivi senza perdere i pattern critici, (b) fosse adattabile a contesti normativi diversi tra paesi africani, (c) potesse essere adottato da team di investigatori senza background AI.',
      what: 'Disegnato e implementato un framework di monitoraggio transazionale ML-driven con tre componenti chiave: modello di anomaly detection multi-livello che impara dal feedback degli investigatori, sistema di scoring delle transazioni con pattern recognition supervisionato, processo di compliance automatizzato per i casi a basso rischio. L\'architettura è stata progettata per essere adattabile a quadri normativi diversi senza riscrittura del core.',
      result: 'Riduzione del 40% nei falsi positivi. Aumento del 60% della velocità di investigazione. Adozione del framework come standard operativo. Il sistema è oggi attivo in più giurisdizioni africane con configurazioni locali.',
      lesson: 'In settori regolamentati, l\'AI funziona quando riduce il lavoro inutile degli operatori esperti, non quando promette di sostituirli. Il successo di questo progetto è stato meno tecnico (gli algoritmi erano già noti) e più organizzativo: convincere investigatori esperti che il sistema era un alleato.',
    },
    {
      title: 'Gobierno de Canarias',
      subtitle: 'Tourism intelligence regionale · 2022-2024',
      context: 'Le Canarie ricevono circa 14 milioni di turisti l\'anno, con un\'economia regionale in cui il turismo pesa per oltre il 35% del PIL. Eppure il governo regionale prendeva decisioni di promozione e allocazione di risorse usando dashboard frammentate da diverse direzioni: prenotazioni alberghiere da una fonte, flussi aeroportuali da un\'altra, sentiment social media da una terza, indicatori economici da una quarta. Nessuno aveva una visione unificata in tempo reale.',
      challenge: 'Costruire un ecosistema di business intelligence integrato che aggregasse fonti dati eterogenee, fornisse previsioni stagionali credibili, e identificasse opportunità o crisi prima che diventassero conclamate.',
      what: 'Disegnato un\'architettura unificata di tourism intelligence con ingestion automatizzata da multiple fonti (PMS alberghieri, flight data API, social listening, indicatori macroeconomici regionali), layer di normalizzazione e qualità dati, algoritmi predittivi sulle stagionalità e sui pattern di prenotazione, sistema di alerting per crisi settoriali. La dashboard è stata progettata per essere usata sia dal governo regionale che dagli operatori turistici.',
      result: 'Incremento del 15% nell\'efficacia delle campagne marketing regionali. Riduzione del 25% nei tempi di risposta a crisi settoriali. La capacità di anticipare cali di prenotazioni di 4-6 settimane ha permesso al governo regionale di lanciare campagne correttive prima che la stagione fosse compromessa.',
      lesson: 'Il valore di un sistema AI in un governo regionale non è nella sofisticazione algoritmica, ma nella capacità di unificare fonti dati che prima venivano lette separatamente. Il "single pane of glass" è quasi sempre il primo, vero, deliverable.',
    },
    {
      title: 'Principato di Monaco',
      subtitle: 'Governance AI nel settore pubblico · 2023-2025',
      context: 'Il Principato di Monaco, in linea con la sua tradizione di adozione anticipata di tecnologie strategiche, ha avviato un programma di trasformazione dei servizi pubblici basato su AI e blockchain. La sfida non era tecnica — c\'erano consulenti tech in abbondanza — ma di governance: come adottare tecnologie che pongono questioni di trasparenza, accountability e diritti dei cittadini, in un\'amministrazione pubblica che deve sopravvivere ai cambi di governo?',
      challenge: 'Definire un framework di governance per l\'adozione di AI e blockchain nei servizi pubblici monegaschi che bilanciasse capacità di innovazione, protezione dei diritti dei cittadini, compatibilità con le normative europee (GDPR, AI Act emergente all\'epoca), sopravvivenza al ciclo politico.',
      what: 'Condotto un assessment approfondito delle infrastrutture esistenti, analizzato i casi d\'uso prioritari (registry digitali, identità sovrana, servizi al cittadino, gestione documentale), e disegnato il framework di governance in tre layer: principi di alto livello (trasparenza, non-discriminazione, accountability), processi operativi (review board AI, processi di validazione, audit periodici), strumenti tecnici (registro dei sistemi AI, dashboard di monitoraggio).',
      result: 'Framework di governance AI adottato come standard interno per la PA monegasca. Posizionamento di Monaco come uno dei riferimenti europei per l\'adozione responsabile di tecnologie emergenti nel settore pubblico. La struttura sopravvive al ciclo politico perché radicata nei processi operativi, non in dichiarazioni di intenti.',
      lesson: 'Nelle istituzioni pubbliche la governance non è un freno all\'innovazione: è la sua condizione di sopravvivenza. Senza una governance robusta, ogni innovazione tecnologica viene cancellata o sospesa al primo cambio di amministrazione.',
    },
  ] : [
    {
      title: 'African central banks',
      subtitle: 'AML compliance with AI · 2023-2024',
      context: 'Several African central banks faced a duplicated problem: traditional anti-money-laundering (AML) monitoring systems generated thousands of alerts per day, but 95% were false positives. Investigators spent hours closing useless alerts and lost the few relevant cases in the noise. International regulatory pressure (FATF, Basel) demanded ever-higher standards of effectiveness.',
      challenge: 'Build a transactional monitoring system based on machine learning that (a) drastically reduced false positives without losing critical patterns, (b) was adaptable to different regulatory contexts across African countries, (c) could be adopted by investigation teams without AI background.',
      what: 'Designed and implemented an ML-driven transactional monitoring framework with three key components: multi-level anomaly detection that learns from investigator feedback, supervised pattern recognition transaction scoring, automated compliance process for low-risk cases. The architecture was designed to adapt to different regulatory frameworks without rewriting the core.',
      result: '40% reduction in false positives. 60% increase in investigation speed. Framework adopted as operational standard. The system is currently active in multiple African jurisdictions with local configurations.',
      lesson: 'In regulated sectors, AI works when it reduces unnecessary work for experienced operators, not when it promises to replace them. The success was less technical and more organizational: convincing experienced investigators the system was an ally.',
    },
    {
      title: 'Government of the Canary Islands',
      subtitle: 'Regional tourism intelligence · 2022-2024',
      context: 'The Canary Islands receive approximately 14 million tourists per year, in a regional economy where tourism accounts for over 35% of GDP. Yet the regional government made promotion and resource allocation decisions using fragmented dashboards from different directorates: hotel bookings from one source, airport flows from another, social media sentiment from a third, economic indicators from a fourth. No one had a unified real-time view.',
      challenge: 'Build an integrated business intelligence ecosystem that aggregated heterogeneous data sources, provided credible seasonal forecasts, and identified opportunities or crises before they became overt.',
      what: 'Designed a unified tourism intelligence architecture with automated ingestion from multiple sources (hotel PMS, flight data APIs, social listening, regional macroeconomic indicators), data normalization and quality layer, predictive algorithms on seasonality and booking patterns, alerting system for sectoral crises. The dashboard was designed to be used both by the regional government and by tourism operators.',
      result: '15% increase in regional marketing campaign effectiveness. 25% reduction in sectoral crisis response times. The ability to anticipate booking drops 4-6 weeks in advance allowed the regional government to launch corrective campaigns before the season was compromised.',
      lesson: 'The value of an AI system in a regional government isn\'t algorithmic sophistication — it\'s the ability to unify data sources previously read separately. The "single pane of glass" is almost always the first, real, deliverable.',
    },
    {
      title: 'Principality of Monaco',
      subtitle: 'AI governance in the public sector · 2023-2025',
      context: 'The Principality of Monaco, in line with its tradition of early adoption of strategic technologies, launched a public services transformation program based on AI and blockchain. The challenge wasn\'t technical — there was no shortage of tech consultants — but governance: how do you adopt technologies that raise questions of transparency, accountability, and citizen rights, in a public administration that must survive changes of government?',
      challenge: 'Define a governance framework for AI and blockchain adoption in Monegasque public services that balanced innovation capacity, protection of citizen rights, compatibility with European norms (GDPR, emerging AI Act at the time), survival of the political cycle.',
      what: 'Conducted a thorough assessment of existing infrastructure, analyzed priority use cases (digital registries, sovereign identity, citizen services, document management), and designed the governance framework in three layers: high-level principles (transparency, non-discrimination, accountability), operational processes (AI review board, validation processes, periodic audits), technical tools (registry of AI systems, monitoring dashboard).',
      result: 'AI governance framework adopted as internal standard for Monegasque public administration. Monaco positioned as one of the European reference points for responsible adoption of emerging technologies in the public sector. The structure survives the political cycle because it\'s rooted in operational processes, not statements of intent.',
      lesson: 'In public institutions, governance isn\'t a brake on innovation: it\'s the condition of its survival. Without robust governance, every technological innovation gets canceled or suspended at the first administrative change.',
    },
  ];

  const otherProjects = lang === 'it' ? [
    {
      title: 'UNICEF — Apprendimento a distanza con AI',
      body: 'Sviluppo di soluzioni di educazione personalizzata per comunità sottosviluppate. Oltre 50.000 studenti raggiunti in 15 paesi, +35% nei tassi di completamento, +50% nell\'engagement. Architettura progettata per connettività limitata, edge computing e sincronizzazione offline.',
    },
    {
      title: 'Valle della Loira (Francia) — Turismo culturale aumentato',
      body: 'Ecosistema di realtà aumentata e AI per valorizzare il patrimonio culturale: guide virtuali AI-powered + esperienze AR immersive che si adattano agli interessi di ogni visitatore. +30% durata media delle visite, +25% soddisfazione turisti.',
    },
    {
      title: 'Repubblica del Mozambico — Master plan trasformazione digitale',
      body: 'Master plan decennale per la trasformazione digitale nazionale. Integrazione di sviluppo infrastrutturale, capacity building, smart cities pilota, ecosistema di innovazione locale. Approccio olistico che considera implicazioni socio-economiche e ambientali.',
    },
  ] : [
    {
      title: 'UNICEF — AI-powered distance learning',
      body: 'Development of personalized education solutions for underserved communities. Over 50,000 students reached in 15 countries, +35% in completion rates, +50% in engagement. Architecture designed for limited connectivity, edge computing, and offline synchronization.',
    },
    {
      title: 'Loire Valley (France) — Augmented cultural tourism',
      body: 'AR and AI ecosystem to enhance cultural heritage: AI-powered virtual guides + immersive AR experiences that adapt to each visitor\'s interests. +30% average visit duration, +25% tourist satisfaction.',
    },
    {
      title: 'Republic of Mozambique — Digital transformation master plan',
      body: 'Decade-long master plan for national digital transformation. Integration of infrastructure development, capacity building, pilot smart cities, local innovation ecosystem. Holistic approach considering socio-economic and environmental implications.',
    },
  ];

  return (
    <div className="pt-24 pb-16">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-xs uppercase tracking-widest text-[var(--color-accent)] mb-3">
          {labels.eyebrow}
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-white">{labels.title}</h1>
        <p className="mt-6 text-lg text-[var(--color-text-muted)] max-w-3xl leading-relaxed">
          {labels.subtitle}
        </p>
      </section>

      {/* Logo grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-sm uppercase tracking-wider text-[var(--color-text-muted)] mb-10">
          {labels.logoSection}
        </h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8 items-center justify-items-center">
          {clientLogos.map((client) => (
            <div key={client.name} className="hover:scale-105 transition-transform" title={client.name}>
              <Image
                src={`/images/clients/${client.file}`}
                alt={`${client.name} logo`}
                width={120}
                height={48}
                className="h-10 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Case studies */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl font-bold text-white mb-10">{labels.caseStudiesTitle}</h2>
        <div className="space-y-8">
          {caseStudies.map((cs, i) => (
            <article key={i} className="glass-card p-8 md:p-10">
              <h3 className="text-2xl font-bold text-white mb-1">{cs.title}</h3>
              <p className="text-sm text-[var(--color-accent)] mb-6">{cs.subtitle}</p>

              <div className="space-y-5">
                <div>
                  <div className="text-xs uppercase tracking-wider text-[var(--color-text-muted)] mb-2">{labels.contextLabel}</div>
                  <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{cs.context}</p>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-[var(--color-text-muted)] mb-2">{labels.challengeLabel}</div>
                  <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{cs.challenge}</p>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-[var(--color-text-muted)] mb-2">{labels.whatLabel}</div>
                  <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{cs.what}</p>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-[var(--color-accent)] mb-2">{labels.resultLabel}</div>
                  <p className="text-sm text-white leading-relaxed">{cs.result}</p>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-[var(--color-text-muted)] mb-2">{labels.lessonLabel}</div>
                  <p className="text-sm text-[var(--color-text-muted)] leading-relaxed italic">{cs.lesson}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Other projects */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold text-white mb-10">{labels.otherTitle}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {otherProjects.map((p, i) => (
            <div key={i} className="glass-card p-6">
              <h3 className="text-base font-semibold text-white mb-3">{p.title}</h3>
              <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Sectors and geographies */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold text-white mb-10">{labels.sectorsTitle}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="glass-card p-6">
            <div className="text-xs uppercase tracking-wider text-[var(--color-accent)] mb-3">
              {labels.sectorsLabel}
            </div>
            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
              {labels.sectorsBody}
            </p>
          </div>
          <div className="glass-card p-6">
            <div className="text-xs uppercase tracking-wider text-[var(--color-accent)] mb-3">
              {labels.geographiesLabel}
            </div>
            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
              {labels.geographiesBody}
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <div className="glass-card p-12">
          <h2 className="text-2xl font-bold text-white mb-4">{labels.ctaTitle}</h2>
          <p className="text-[var(--color-text-muted)] mb-8 max-w-2xl mx-auto leading-relaxed">
            {labels.ctaBody}
          </p>
          <a
            href="https://cal.com/panbiz/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-[var(--color-bg)] px-8 py-3 rounded-full text-sm font-medium hover:bg-white/90 transition-colors"
          >
            {labels.ctaButton}
          </a>
        </div>
      </section>
    </div>
  );
}
