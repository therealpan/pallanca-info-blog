export type Locale = 'it' | 'en';

export interface ServiceFAQ {
  q: string;
  a: string;
}

export interface ServiceContent {
  // Hero
  eyebrow: string;
  title: string;
  tagline: string;
  pricingLabel: string;
  ctaButton: string;
  // Optional urgency banner (used for AI Act audit)
  urgencyBanner?: string;
  // Sections
  problemTitle: string;
  problemBody: string[];
  outputTitle: string;
  outputItems: string[];
  outputClosing?: string;
  processTitle: string;
  processSteps: { week: string; body: string }[];
  forYouTitle: string;
  forYouItems: string[];
  notForYouTitle: string;
  notForYouItems: string[];
  pricingTitle: string;
  pricingBody: string[];
  faqTitle: string;
  faq: ServiceFAQ[];
  finalCtaTitle: string;
  finalCtaBody: string;
}

export interface ServiceMeta {
  slug: string;
  // Quick info shown on hub and ServicesPreview
  shortTitle: { it: string; en: string };
  shortTagline: { it: string; en: string };
  shortPricing: { it: string; en: string };
  shortDuration: { it: string; en: string };
  shortFor: { it: string; en: string };
  // Full page content per locale
  content: { it: ServiceContent; en: ServiceContent };
}

export const services: ServiceMeta[] = [
  // 1. AI STRATEGY SPRINT
  {
    slug: 'ai-strategy-sprint',
    shortTitle: { it: 'AI Strategy Sprint', en: 'AI Strategy Sprint' },
    shortTagline: {
      it: 'Dal board alla roadmap eseguibile, in 4 settimane.',
      en: 'From boardroom mandate to executable roadmap, in 4 weeks.',
    },
    shortPricing: { it: 'Proposta in 48h', en: 'Proposal in 48h' },
    shortDuration: { it: '4-6 settimane', en: '4-6 weeks' },
    shortFor: {
      it: 'CEO, COO, CIO che devono portare una strategia AI in CdA nei prossimi tre mesi.',
      en: 'CEO, COO, CIO who need to bring an AI strategy to the board within three months.',
    },
    content: {
      it: {
        eyebrow: 'Servizio 1 di 5 · Programma strutturato',
        title: 'AI Strategy Sprint',
        tagline: 'Dal board alla roadmap eseguibile, in 4 settimane.',
        pricingLabel: 'Investimento commisurato allo scope · Mini-proposta in 48 ore dopo la discovery call · 4-6 settimane',
        ctaButton: 'Richiedi una proposta',
        problemTitle: 'Quando questo servizio è la risposta giusta',
        problemBody: [
          'Il tuo CEO ha ricevuto la pressione del board: "dobbiamo fare AI". Il tuo CIO ha quindici PoC sparsi nelle business unit e non sa quali tagliare. Il tuo CFO chiede un ritorno sull\'investimento prima di approvare il prossimo round di spesa. Il tuo Head of HR vuole sapere se l\'AI sostituirà persone o le potenzierà.',
          'E tutti — board, IT, business, finanza — hanno bisogno della stessa cosa: un documento serio, indipendente, da portare in CdA il mese prossimo.',
          'Non un\'altra slide deck su cosa è la GenAI. Non un\'altra demo di ChatGPT. Una strategia che sia eseguibile, finanziariamente difendibile, e — soprattutto — vera.',
        ],
        outputTitle: 'Output del programma',
        outputItems: [
          'Sei workshop strutturati con board, IT, business unit, finanza, legal, HR — non un\'intervista veloce a ognuno, ma sessioni vere dove emergono le domande scomode',
          'Un AI maturity assessment cross-funzionale che misura dove sei davvero, non dove pensi di essere',
          'Un inventario di tutte le iniziative AI esistenti con una raccomandazione esplicita per ciascuna: kill, scale, keep',
          'Una roadmap a tre orizzonti (90 giorni, 180 giorni, 12 mesi) con priorità, dipendenze, owner',
          'Il business case finanziario dei tre use case prioritari, con NPV, payback, scenari worst/base/best',
          'Una vendor shortlist neutrale per cloud, modelli, system integrator — neutrale perché non ho commissioni da nessuno',
          'Un governance model di prima istanza: RACI, comitato AI, KPI di monitoraggio',
          'Una presentazione executive pronta per il prossimo CdA',
        ],
        outputClosing: 'Tutto consegnato di persona, in una sessione di handover di mezza giornata. Non un PDF spedito via mail.',
        processTitle: 'Come si svolgono le quattro settimane',
        processSteps: [
          {
            week: 'Settimana 1 — Discovery',
            body: 'Tre giorni in azienda. Workshop con C-level, interviste con responsabili business unit, accesso ai documenti esistenti (strategia, budget IT, audit precedenti). Da qui esce la mappa del territorio.',
          },
          {
            week: 'Settimana 2 — Assessment',
            body: 'Analisi maturity sui cinque assi: dati, infrastruttura, talento, processi, governance. Inventario delle iniziative AI esistenti, valutazione caso per caso. Output intermedio: un documento di 20-30 pagine che è già metà del valore.',
          },
          {
            week: 'Settimana 3 — Roadmap & business case',
            body: 'Workshop di prioritizzazione con il committente. Definizione dei tre use case top, modellazione finanziaria, vendor scouting. Le decisioni difficili si prendono qui — non si rimandano.',
          },
          {
            week: 'Settimana 4 — Sintesi & handover',
            body: 'Consegna del documento finale, della presentazione board, del governance model. Sessione di handover di mezza giornata in cui il committente "mi prende il passaggio".',
          },
        ],
        forYouTitle: 'Questo programma fa per te se',
        forYouItems: [
          'Sei CEO, COO, CIO o Chief Strategy Officer di un\'azienda mid-large europea (€50M-€2B di fatturato)',
          'Hai bisogno di portare un position paper AI in CdA nei prossimi tre mesi',
          'Hai già provato workshop interni o consulenze "leggere" e non hanno prodotto decisioni',
          'Vuoi un advisor che firmi personalmente la strategia, non un team di junior con un partner che appare al kickoff',
        ],
        notForYouTitle: 'Per chi non è',
        notForYouItems: [
          'Aziende sotto i €20M di fatturato (il prezzo non si giustifica e altri formati funzionano meglio)',
          'Chi cerca un fornitore che esegua direttamente — questo è advisory, l\'esecuzione la fa PiirZ Digital o il tuo system integrator preferito',
          'Chi vuole una strategia generica "valida per il settore" — io scrivo strategie per la tua azienda specifica',
        ],
        pricingTitle: 'Come funziona l\'investimento',
        pricingBody: [
          'Discovery call (30 minuti, gratuita): capiamo insieme il tuo caso specifico, gli stakeholder coinvolti, l\'ampiezza dello scope.',
          'Mini-proposta scritta in 48 ore: scope, deliverable, calendario, investimento puntuale calibrato sul tuo perimetro reale.',
          'Scoping call (60 minuti, se la mini-proposta è in linea): definiamo i dettagli operativi e gli output specifici.',
          'SOW + contratto: firma e kickoff entro 5 giorni lavorativi. Pagamento in due tranche, 50% al kickoff e 50% all\'handover.',
          'Lo stesso programma per realtà diverse vale somme diverse: una banca tier 2, una PMI manifatturiera e una holding multi-BU non hanno lo stesso scope, lo stesso rischio, la stessa ampiezza di stakeholder. Per questo l\'investimento si definisce nella mini-proposta, non sul sito.',
          'Garanzia: se il programma non produce valore entro il primo mese, ti restituisco il 50% del fee e ci salutiamo da amici.',
        ],
        faqTitle: 'Domande frequenti',
        faq: [
          {
            q: 'In quattro settimane si fa davvero una strategia seria?',
            a: 'Sì, se il programma è denso e il committente è disponibile. La maggior parte delle strategie AI fallisce non per mancanza di tempo ma per mancanza di concentrazione. Quattro settimane intense con un advisor senior generano più valore di sei mesi di workshop sparsi.',
          },
          {
            q: 'Cosa succede dopo le quattro settimane?',
            a: 'Tre opzioni: (a) il tuo team interno esegue la roadmap autonomamente, (b) ingaggi PiirZ Digital o un altro fornitore per l\'esecuzione, (c) mi mantieni come Fractional Chief AI Officer per la fase di esecuzione (servizio dedicato).',
          },
          {
            q: 'Posso parlare con un cliente che ha già fatto questo programma?',
            a: 'Sì. In discovery call ti metto in contatto con due referenti — uno enterprise, uno PA — che possono raccontarti com\'è andata.',
          },
          {
            q: 'E se a metà programma capisco che non è quello che mi serviva?',
            a: 'Hai trenta giorni dal kickoff per fermare il programma con un solo motivo: "non sta funzionando". In quel caso restituisco la metà del fee meno le spese vive. È una clausola che metto io.',
          },
        ],
        finalCtaTitle: 'Pronto a partire?',
        finalCtaBody: 'Compila il form di pre-qualifica (5 domande, due minuti). Se il fit è chiaro, fissiamo una discovery call di trenta minuti e poi ti mando una mini-proposta scritta entro 48 ore. Niente pitch, niente vincoli.',
      },
      en: {
        eyebrow: 'Service 1 of 5 · Structured program',
        title: 'AI Strategy Sprint',
        tagline: 'From boardroom mandate to executable roadmap, in 4 weeks.',
        pricingLabel: 'Investment scaled to scope · Custom mini-proposal in 48 hours after the discovery call · 4-6 weeks',
        ctaButton: 'Request a proposal',
        problemTitle: 'When this service is the right answer',
        problemBody: [
          'Your CEO has been pushed by the board: "we have to do AI." Your CIO has fifteen PoCs scattered across business units and doesn\'t know which to kill. Your CFO wants ROI before approving the next round of spending. Your Head of HR wants to know whether AI will replace people or augment them.',
          'Everyone — board, IT, business, finance — needs the same thing: a serious, independent document, ready for the next board meeting.',
          'Not another GenAI deck. Not another ChatGPT demo. A strategy that\'s executable, financially defensible, and — above all — true.',
        ],
        outputTitle: 'Program output',
        outputItems: [
          'Six structured workshops with board, IT, business units, finance, legal, HR — not a quick interview each, but real sessions where the uncomfortable questions emerge',
          'A cross-functional AI maturity assessment that measures where you actually are, not where you think you are',
          'An inventory of all existing AI initiatives with explicit recommendation per item: kill, scale, keep',
          'A three-horizon roadmap (90 days, 180 days, 12 months) with priorities, dependencies, owners',
          'The financial business case for the top three use cases, with NPV, payback, worst/base/best scenarios',
          'A neutral vendor shortlist for cloud, models, system integrators — neutral because I take no commission',
          'A first-pass governance model: RACI, AI committee, monitoring KPIs',
          'An executive presentation ready for your next board meeting',
        ],
        outputClosing: 'All delivered in person, in a half-day handover session. Not a PDF emailed over.',
        processTitle: 'How the four weeks unfold',
        processSteps: [
          { week: 'Week 1 — Discovery', body: 'Three days on-site. Workshops with C-level, interviews with business unit heads, access to existing documents. The territory map emerges from this.' },
          { week: 'Week 2 — Assessment', body: 'Maturity analysis along five axes: data, infrastructure, talent, processes, governance. Inventory of existing AI initiatives, case-by-case evaluation. Mid-program output: a 20-30 page document that\'s already half the value.' },
          { week: 'Week 3 — Roadmap & business case', body: 'Prioritization workshop with the client. Top three use cases, financial modeling, vendor scouting. The hard decisions get made here.' },
          { week: 'Week 4 — Synthesis & handover', body: 'Final document, board presentation, governance model. Half-day handover where the client takes the baton.' },
        ],
        forYouTitle: 'This program is for you if',
        forYouItems: [
          'You\'re CEO, COO, CIO or Chief Strategy Officer of a European mid-large company (€50M-€2B revenue)',
          'You need to bring an AI position paper to the board within the next three months',
          'You\'ve already tried internal workshops or "light" consultancies and they didn\'t produce decisions',
          'You want an advisor who personally signs the strategy, not a junior team with a partner who shows up at kickoff',
        ],
        notForYouTitle: 'Who it\'s not for',
        notForYouItems: [
          'Companies under €20M revenue (the price isn\'t justified and other formats work better)',
          'Those looking for a vendor to execute directly — this is advisory; PiirZ Digital or your preferred integrator handles execution',
          'Those who want a generic "industry-valid" strategy — I write strategies for your specific company',
        ],
        pricingTitle: 'How the investment works',
        pricingBody: [
          'Discovery call (30 minutes, free): we understand your specific case, the stakeholders involved, the breadth of the scope.',
          'Written mini-proposal in 48 hours: scope, deliverables, calendar, exact investment calibrated to your real perimeter.',
          'Scoping call (60 minutes, if the mini-proposal is on track): we define operational details and specific outputs.',
          'SOW + contract: signature and kickoff within 5 working days. Payment in two tranches, 50% at kickoff and 50% at handover.',
          'The same program for different organizations is worth different amounts: a tier-2 bank, a manufacturing SME and a multi-BU holding don\'t have the same scope, risk, or stakeholder breadth. That\'s why the investment is defined in the mini-proposal, not on the website.',
          'Guarantee: if the program isn\'t producing value within the first month, I refund 50% of the fee and we part as friends.',
        ],
        faqTitle: 'Frequently asked questions',
        faq: [
          { q: 'Can a serious strategy really be done in four weeks?', a: 'Yes, if the program is dense and the client is available. Most AI strategies fail not from lack of time but from lack of focus. Four intense weeks with a senior advisor generate more value than six months of scattered workshops.' },
          { q: 'What happens after the four weeks?', a: 'Three options: (a) your internal team executes the roadmap, (b) you engage PiirZ Digital or another supplier for execution, (c) you keep me on as Fractional Chief AI Officer.' },
          { q: 'Can I talk to a client who\'s already done this program?', a: 'Yes. In the discovery call I\'ll connect you with two references — one enterprise, one public sector.' },
          { q: 'What if mid-program I realize this isn\'t what I needed?', a: 'You have thirty days from kickoff to stop with one reason: "it\'s not working." I refund half the fee minus direct expenses.' },
        ],
        finalCtaTitle: 'Ready to start?',
        finalCtaBody: 'Fill in the pre-qualification form (5 questions, two minutes). If the fit is clear, we book a thirty-minute discovery call and I send you a written mini-proposal within 48 hours. No pitch, no commitment.',
      },
    },
  },

  // 2. EU AI ACT READINESS AUDIT
  {
    slug: 'eu-ai-act-audit',
    shortTitle: { it: 'EU AI Act Readiness Audit', en: 'EU AI Act Readiness Audit' },
    shortTagline: {
      it: 'Pronto per il 2 agosto 2026? In 3 settimane lo sai con certezza.',
      en: 'Ready for August 2, 2026? In 3 weeks you\'ll know for sure.',
    },
    shortPricing: { it: 'Proposta in 48h', en: 'Proposal in 48h' },
    shortDuration: { it: '3 settimane', en: '3 weeks' },
    shortFor: {
      it: 'General Counsel, CIO, Chief Risk Officer di aziende con AI in produzione in settori regolamentati.',
      en: 'General Counsel, CIO, Chief Risk Officer at companies with AI in production in regulated sectors.',
    },
    content: {
      it: {
        eyebrow: 'Servizio 2 di 5 · Programma strutturato · Urgenza alta',
        title: 'EU AI Act Readiness Audit',
        tagline: 'Pronto per il 2 agosto 2026? In tre settimane lo sai con certezza.',
        pricingLabel: 'Investimento commisurato al numero di sistemi AI in scope · Mini-proposta in 48 ore · 3 settimane',
        ctaButton: 'Richiedi una proposta',
        urgencyBanner: 'Il 2 agosto 2026 entrano in vigore gli obblighi sui sistemi AI ad alto rischio. Sanzioni fino a €35M o 7% del fatturato globale.',
        problemTitle: 'Cosa cambia il 2 agosto 2026',
        problemBody: [
          'Da quella data, i sistemi AI classificati come "ad alto rischio" dall\'EU AI Act — Annex III — devono essere conformi. La lista è lunga e tocca settori che probabilmente già operano: assunzioni, valutazione creditizia, scoring assicurativo, gestione accessi, education, law enforcement, gestione infrastrutture critiche.',
          'Il problema non è la regolamentazione in sé. Il problema è che oltre la metà delle aziende europee non ha un inventario sistematico dei propri sistemi AI in produzione. Non perché siano negligenti — perché AI si è diffuso negli ultimi due anni in modo capillare, dentro applicazioni HR, dentro CRM, dentro tool di marketing, dentro processi di credit scoring — e nessuno ha mai fatto la mappatura.',
          'La sanzione massima è €35 milioni o il 7% del fatturato annuo globale, qualunque sia il maggiore. Ma anche prima della sanzione, basta una richiesta di audit dal regolatore o dal Garante per bloccare un sistema in produzione.',
        ],
        outputTitle: 'Output dell\'audit',
        outputItems: [
          'Inventario completo dei sistemi AI in produzione e in roadmap nei prossimi dodici mesi — non solo i progetti formali, ma anche le componenti AI dentro fornitori terzi',
          'Classificazione del rischio per ogni sistema secondo le quattro categorie dell\'AI Act: proibito, alto, limitato, minimo — con motivazione esplicita',
          'Gap analysis dettagliata per ogni sistema ad alto rischio: cosa è già conforme, cosa manca, cosa è critico',
          'Mappatura dei requisiti regolatori con calendario delle deadline 2026, 2027, 2028',
          'Action plan operativo con responsabili, tempi, costi, dipendenze',
          'Template di documentazione tecnica: conformity assessment, data governance, risk management, transparency obligations',
          'Stima budget per chiudere i gap, separata in "obbligatorio entro la deadline" e "raccomandato"',
          'Briefing per il board in formato presentazione executive',
        ],
        outputClosing: 'Tutto consegnato in una sessione di handover di mezza giornata con General Counsel, CIO e Chief Risk Officer presenti contemporaneamente.',
        processTitle: 'Come si svolgono le tre settimane',
        processSteps: [
          { week: 'Settimana 1 — Discovery & inventario', body: 'Due giorni in azienda con i team IT, security, legal, business. Lavoriamo per scoprire i sistemi AI "nascosti" — quelli dentro fornitori, dentro componenti SaaS, dentro processi che nessuno chiamava AI prima del 2023. Output intermedio: l\'inventario completo.' },
          { week: 'Settimana 2 — Classificazione & gap analysis', body: 'Lavoro di analisi, integrato da specialisti legal AI Act (subappalto via PiirZ con avvocati specializzati in regolamentazione tecnologica europea). Per ogni sistema ad alto rischio, gap analysis puntuale.' },
          { week: 'Settimana 3 — Action plan & handover', body: 'Workshop di prioritizzazione: cosa va fatto entro agosto, cosa entro fine anno, cosa è raccomandato ma non obbligatorio. Stima budget. Sessione finale con tutti gli stakeholder, dossier completo consegnato.' },
        ],
        forYouTitle: 'Questo audit fa per te se',
        forYouItems: [
          'Hai sistemi AI in produzione in settori regolamentati: banking, insurance, healthcare, HR tech, edtech, controllo accessi, scoring, education',
          'Sei General Counsel, Chief Risk Officer, CIO, Compliance Officer di un\'azienda con esposizione EU',
          'La tua azienda è classificata come "deployer" o "provider" ai sensi dell\'AI Act',
          'Hai bisogno di un audit indipendente, da advisor che non venda poi i tool di compliance',
        ],
        notForYouTitle: 'Per chi non è',
        notForYouItems: [
          'Aziende che non operano nell\'EU e non hanno utenti EU (non siete soggetti)',
          'Aziende che usano AI solo a basso rischio (chatbot di marketing, generazione contenuti) — basta un audit più leggero',
          'Chi cerca solo un "bollino" formale — questo audit è sostanziale, non cosmetico',
        ],
        pricingTitle: 'Come funziona l\'investimento',
        pricingBody: [
          'Discovery call (30 minuti, gratuita): capiamo se sei in scope dell\'AI Act, quanti sistemi vanno mappati, qual è la deadline che conta per te.',
          'Mini-proposta scritta in 48 ore: scope, calendario, investimento puntuale calibrato sul numero di sistemi AI da auditare.',
          'Scoping call (60 minuti, se la mini-proposta è in linea): definiamo i sistemi specifici, gli stakeholder per i workshop, l\'eventuale supporto legal AI Act.',
          'SOW + contratto: firma e kickoff entro 5 giorni lavorativi. Pagamento in due tranche, 50% al kickoff e 50% all\'handover.',
          'L\'investimento si calibra sul numero di sistemi AI da mappare e classificare (range tipico 10-40), sulla complessità giurisdizionale, sull\'eventuale necessità di subappalto a specialisti legal AI Act. Per questo non c\'è un prezzo unico sul sito — c\'è un prezzo giusto per il tuo caso.',
          'Garanzia: se durante l\'audit emerge che la tua azienda non rientra nello scope dell\'AI Act, ti restituisco il 50% del fee versato.',
        ],
        faqTitle: 'Domande frequenti',
        faq: [
          { q: 'Tre settimane bastano davvero?', a: 'Per un\'azienda con scope chiaro (un singolo perimetro legale, una decina di sistemi AI), sì. Per gruppi multi-paese o multi-società, possiamo fare un primo perimetro in tre settimane e iterare sugli altri.' },
          { q: 'Avete avvocati nel team?', a: 'Sì. Il nucleo dell\'audit lo conduco io. La parte legal-regolatoria specifica è coperta da avvocati specializzati che lavoro tramite PiirZ Digital, scelti per la specializzazione AI Act + GDPR + cybersecurity.' },
          { q: 'Se trovate gap critici, possiamo lavorare insieme alla rimedia?', a: 'Sì, ma è un servizio separato. L\'audit è indipendente per design — proprio per garantire che i gap che trovo non siano "creati" per generarmi lavoro successivo.' },
          { q: 'Quanto è davvero il rischio sanzione?', a: 'Per le aziende grandi, con esposizione mediatica o regolatoria, alto. Il regolatore europeo userà i primi due anni come anni "di esempio". Non vuoi essere uno dei casi-esempio.' },
          { q: 'Possiamo iniziare prima del 2 agosto e ancora arrivare in tempo?', a: 'Sì, ma il calendario si stringe rapidamente. Se firmi entro fine maggio, finiamo entro fine giugno e hai un mese per implementare i fix più critici.' },
        ],
        finalCtaTitle: 'La deadline è fissa. Le settimane no.',
        finalCtaBody: 'Compila il form di pre-qualifica (5 domande, due minuti). Se sei in scope dell\'AI Act, fissiamo discovery call e ti mando mini-proposta in 48 ore. Se non sei in scope, te lo dirò esplicitamente — senza vendere un audit che non ti serve.',
      },
      en: {
        eyebrow: 'Service 2 of 5 · Structured program · Urgency: high',
        title: 'EU AI Act Readiness Audit',
        tagline: 'Ready for August 2, 2026? In three weeks you\'ll know for sure.',
        pricingLabel: 'Investment scaled to number of AI systems in scope · Custom mini-proposal in 48 hours · 3 weeks',
        ctaButton: 'Request a proposal',
        urgencyBanner: 'On August 2, 2026, obligations for high-risk AI systems take effect. Penalties up to €35M or 7% of global turnover.',
        problemTitle: 'What changes on August 2, 2026',
        problemBody: [
          'From that date, AI systems classified as "high-risk" under the EU AI Act — Annex III — must be compliant. The list is long and likely touches sectors you already operate in: hiring, credit scoring, insurance underwriting, access management, education, law enforcement, critical infrastructure management.',
          'The problem isn\'t regulation itself. The problem is that more than half of European companies don\'t have a systematic inventory of their AI systems in production. Not from negligence — but because AI has spread capillary in the past two years, inside HR applications, inside CRMs, inside marketing tools, inside credit scoring processes — and no one has ever mapped it.',
          'The maximum penalty is €35 million or 7% of annual global turnover, whichever is higher. But even before the penalty, a single audit request from the regulator can shut down a production system.',
        ],
        outputTitle: 'Audit output',
        outputItems: [
          'Complete inventory of AI systems in production and roadmap for the next twelve months — not just formal projects, but also AI components inside third-party suppliers',
          'Risk classification for each system under the AI Act\'s four categories: prohibited, high, limited, minimal — with explicit motivation',
          'Detailed gap analysis for every high-risk system: what\'s already compliant, what\'s missing, what\'s critical',
          'Regulatory requirements mapping with calendar of 2026, 2027, 2028 deadlines',
          'Operational action plan with owners, timelines, costs, dependencies',
          'Technical documentation templates: conformity assessment, data governance, risk management, transparency obligations',
          'Budget estimate to close gaps, separated into "mandatory by deadline" and "recommended"',
          'Board briefing in executive presentation format',
        ],
        outputClosing: 'All delivered in a half-day handover session with General Counsel, CIO, and Chief Risk Officer present together.',
        processTitle: 'How the three weeks unfold',
        processSteps: [
          { week: 'Week 1 — Discovery & inventory', body: 'Two days on-site with IT, security, legal, business teams. We surface the "hidden" AI systems — those inside suppliers, inside SaaS components, inside processes nobody called AI before 2023.' },
          { week: 'Week 2 — Classification & gap analysis', body: 'Analytical work, integrated by AI Act legal specialists (subcontracted via PiirZ with lawyers specialized in European technology regulation). For each high-risk system, point-by-point gap analysis.' },
          { week: 'Week 3 — Action plan & handover', body: 'Prioritization workshop: what to do by August, what by year-end, what\'s "recommended but not mandatory." Budget estimate. Final session with all stakeholders.' },
        ],
        forYouTitle: 'This audit is for you if',
        forYouItems: [
          'You have AI systems in production in regulated sectors: banking, insurance, healthcare, HR tech, edtech, access control, scoring, education',
          'You\'re General Counsel, Chief Risk Officer, CIO, Compliance Officer at a company with EU exposure',
          'Your company is classified as "deployer" or "provider" under the AI Act',
          'You need an independent audit, from an advisor who doesn\'t then sell you the compliance tools',
        ],
        notForYouTitle: 'Who it\'s not for',
        notForYouItems: [
          'Companies that don\'t operate in the EU and have no EU users (you\'re not subject)',
          'Companies using only low-risk AI (marketing chatbots, content generation) — a lighter audit suffices',
          'Those looking for a formal "stamp" — this audit is substantive, not cosmetic',
        ],
        pricingTitle: 'How the investment works',
        pricingBody: [
          'Discovery call (30 minutes, free): we determine if you\'re in AI Act scope, how many systems need mapping, what deadline matters for you.',
          'Written mini-proposal in 48 hours: scope, calendar, exact investment calibrated to the number of AI systems to audit.',
          'Scoping call (60 minutes, if the mini-proposal is on track): we define specific systems, workshop stakeholders, possible legal AI Act support.',
          'SOW + contract: signature and kickoff within 5 working days. Payment in two tranches, 50% at kickoff and 50% at handover.',
          'Investment scales to the number of AI systems to map and classify (typical range 10-40), to jurisdictional complexity, to possible subcontracting to legal AI Act specialists. That\'s why there\'s no fixed price on the site — there\'s a fair price for your case.',
          'Guarantee: if the audit reveals your company isn\'t in the AI Act scope, I refund 50% of the fee paid.',
        ],
        faqTitle: 'Frequently asked questions',
        faq: [
          { q: 'Are three weeks really enough?', a: 'For a company with clear scope (single legal perimeter, around ten AI systems), yes. For multi-country or multi-entity groups, we can do a first perimeter in three weeks and iterate.' },
          { q: 'Do you have lawyers on the team?', a: 'Yes. The core of the audit I conduct myself. The specific legal-regulatory part is covered by specialized lawyers I work with through PiirZ Digital, chosen for AI Act + GDPR + cybersecurity specialization.' },
          { q: 'If you find critical gaps, can we work together on remediation?', a: 'Yes, but it\'s a separate service. The audit is independent by design — precisely to ensure that gaps I find aren\'t created to generate follow-on work for me.' },
          { q: 'What\'s the actual penalty risk in practice?', a: 'For large companies with media or regulatory exposure, high. The European regulator will use the first two years as "example years." You don\'t want to be one of the example cases.' },
          { q: 'Can we start before August 2 and still make it in time?', a: 'Yes, but the calendar tightens fast. If you sign by end of May, we finish by end of June and you have a month to implement the most critical fixes.' },
        ],
        finalCtaTitle: 'The deadline is fixed. The weeks aren\'t.',
        finalCtaBody: 'Fill in the pre-qualification form (5 questions, two minutes). If you\'re in AI Act scope, we book a discovery call and I send mini-proposal in 48 hours. If you\'re not in scope, I\'ll tell you explicitly — without selling an audit you don\'t need.',
      },
    },
  },

  // 3. SOVEREIGN AI BLUEPRINT
  {
    slug: 'sovereign-ai-blueprint',
    shortTitle: { it: 'Sovereign AI Blueprint', en: 'Sovereign AI Blueprint' },
    shortTagline: {
      it: 'AI in Europa, non in affitto. La tua, non a Las Vegas.',
      en: 'AI in Europe, not on a Nevada server. Yours, not rented.',
    },
    shortPricing: { it: 'Proposta in 48h', en: 'Proposal in 48h' },
    shortDuration: { it: '4 settimane', en: '4 weeks' },
    shortFor: {
      it: 'PA, banking, sanità, fondazioni con vincoli di sovranità sui dati.',
      en: 'Public administration, banking, healthcare, foundations with data sovereignty constraints.',
    },
    content: {
      it: {
        eyebrow: 'Servizio 3 di 5 · Programma strutturato',
        title: 'Sovereign AI Blueprint',
        tagline: 'AI in Europa, non in affitto. La tua, non a Las Vegas.',
        pricingLabel: 'Investimento commisurato alla complessità · Mini-proposta in 48 ore · 4 settimane · Per organizzazioni con vincoli di sovranità',
        ctaButton: 'Richiedi una proposta',
        problemTitle: 'Quando i tuoi dati non possono uscire dall\'Europa',
        problemBody: [
          'Sanità, finanza, pubblica amministrazione, difesa, settore culturale con archivi sensibili: ci sono organizzazioni per cui spostare dati su un server nel Nevada non è una scelta tecnica, è una violazione. Eppure quasi tutte hanno un\'AI che gira da qualche parte — dentro un Copilot, dentro un assistente legale, dentro un sistema di scoring — e quasi nessuna ha mappato dove finiscono quei dati nel ciclo di inferenza.',
          'Il problema si è triplicato nel 2026. Da una parte il Cloud Act americano e le sue estensioni; dall\'altra l\'EU AI Act che impone tracciabilità; dall\'altra ancora le pressioni del board che vuole evitare di essere ostaggio di un fornitore extra-UE. Tre vettori che convergono in una domanda sola: come faccio AI in Europa, in modo che resti in Europa, senza perdere capacità rispetto agli iperscaler americani?',
          'La risposta non è un singolo prodotto. È un\'architettura. E va disegnata prima di firmare il prossimo contratto cloud, non dopo.',
        ],
        outputTitle: 'Output del blueprint',
        outputItems: [
          'Mappatura completa dei tuoi dati AI: dove stanno oggi, dove devono stare per legge, con quali vincoli giurisdizionali (GDPR, AI Act, normative settoriali)',
          'TCO comparativo a tre anni tra quattro scenari: cloud iperscaler con setup sovrano, cloud sovrano EU, private/on-prem, hybrid',
          'Vendor evaluation indipendente: Mistral, Aleph Alpha, modelli open weight, infrastrutture di inferenza europee',
          'Architettura di riferimento per la tua organizzazione: private inference, RAG sovrano, MLOps in-perimeter',
          'Migration roadmap se serve uscire da setup attuali, con priorità e impatti operativi',
          'Risk register esplicito: lock-in, performance gap, costi nascosti, rischi geopolitici',
          'Briefing per il CdA in formato presentazione, con scenari decisionali chiari',
        ],
        outputClosing: 'Il blueprint è documentale, non implementativo. È quello che ti permette di prendere la decisione giusta con tutti i dati sul tavolo, prima di spendere milioni in un\'architettura che andrà rifatta tra due anni.',
        processTitle: 'Come si svolgono le quattro settimane',
        processSteps: [
          { week: 'Settimana 1 — Discovery & data mapping', body: 'Tre giorni in azienda con CIO, CISO, DPO, legal, e i responsabili dei sistemi AI in produzione. Mappatura puntuale dei flussi dati, dei contratti cloud esistenti, dei vincoli normativi specifici al tuo settore.' },
          { week: 'Settimana 2 — Vendor & architectural assessment', body: 'Lavoro di analisi sui vendor europei e sui setup ibridi. Test funzionali su 2-3 modelli candidati con un caso d\'uso rappresentativo della tua organizzazione.' },
          { week: 'Settimana 3 — TCO & migration design', body: 'Modellazione finanziaria a tre anni dei quattro scenari. Definizione dell\'architettura target. Disegno della migration path se serve. Workshop di review con CIO + CFO insieme.' },
          { week: 'Settimana 4 — Sintesi & handover', body: 'Documento finale, presentazione board, sessione di handover di mezza giornata con C-level + responsabili tecnici insieme. Tutti gli elementi sul tavolo, in modo intellettualmente onesto.' },
        ],
        forYouTitle: 'Questo blueprint fa per te se',
        forYouItems: [
          'Operi in un settore con vincoli di sovranità: PA centrale o regionale, sanità, banking tier 2-3, gruppi assicurativi, fondazioni culturali con archivi sensibili, defense, dual-use',
          'Hai già investito in AI ma il tuo CISO o DPO ti sta dicendo che il setup attuale non regge un audit serio',
          'Stai per firmare un contratto cloud strategico (≥€500k/anno) e vuoi una seconda opinione indipendente',
          'Il tuo CdA ha messo "AI sovereignty" tra i temi del 2026 e qualcuno deve scrivere il position paper',
        ],
        notForYouTitle: 'Per chi non è',
        notForYouItems: [
          'Aziende per cui i dati possono legittimamente stare ovunque — non sprecate budget su sovereignty',
          'Chi cerca un fornitore di infrastruttura sovrana — io disegno il blueprint, l\'implementazione la fa PiirZ Digital o un altro integrator',
          'Chi vuole una scelta predeterminata "Mistral è meglio" o "OVH è meglio" — la valutazione è agnostica per design',
        ],
        pricingTitle: 'Come funziona l\'investimento',
        pricingBody: [
          'Discovery call (30 minuti, gratuita): capiamo i tuoi vincoli giurisdizionali, i sistemi AI in produzione, lo scenario di partenza.',
          'Mini-proposta scritta in 48 ore: scope, calendario, investimento puntuale calibrato sul perimetro tecnico e giurisdizionale.',
          'Scoping call (60 minuti, se la mini-proposta è in linea): definiamo i sistemi specifici, i modelli da testare, le giurisdizioni in scope.',
          'SOW + contratto: firma e kickoff entro 5 giorni lavorativi. Pagamento in due tranche, 50% al kickoff e 50% all\'handover.',
          'Il costo si calibra sul numero di sistemi AI in scope, sulla presenza di sistemi legacy da migrare, sul numero di giurisdizioni coperte. Per una banca tier 2 mono-paese e un gruppo assicurativo multi-EU lo scope è radicalmente diverso. Per questo l\'investimento si definisce dopo la discovery, non sul sito.',
        ],
        faqTitle: 'Domande frequenti',
        faq: [
          { q: 'Cos\'è "sovereign AI" davvero, in pratica?', a: 'È la combinazione di cinque garanzie cumulative: ambiente di esecuzione in EU, gestione da entità legali europee, controllo della catena MLOps, governance dei dati e dei metadati, accesso ai pesi del modello. Senza tutte e cinque, "sovrano" è marketing.' },
          { q: 'Mistral è davvero un\'alternativa enterprise-ready?', a: 'Nel 2026 sì, in modo credibile. Ha raccolto €830M di debito istituzionale a inizio anno, ha enterprise traction reale, ed è giurisdizione francese con allineamento EU regolatorio.' },
          { q: 'Si può fare un blueprint senza scegliere tra cloud e on-prem?', a: 'No, il blueprint serve esattamente a fare quella scelta. Quello che è possibile è disegnare una migration path graduale: si parte ibrido, si migra progressivamente la parte più sensibile.' },
          { q: 'Quanto costa "fare sovereignty" rispetto a tenere tutto su Azure/AWS?', a: 'Per inferenza di scala mid (€100-500k/anno di spesa AI), il setup sovrano costa tipicamente 1.3-2x rispetto all\'iperscaler nei primi 18 mesi, poi converge.' },
        ],
        finalCtaTitle: 'Prima di firmare il prossimo contratto cloud, fammi una telefonata.',
        finalCtaBody: 'Compila il form di pre-qualifica (5 domande, due minuti). In discovery call capiamo se il tuo caso ha davvero bisogno di un blueprint completo o di un assessment più leggero. Se il tuo setup è già in regola, te lo dico — e non vendo un servizio che non ti serve.',
      },
      en: {
        eyebrow: 'Service 3 of 5 · Structured program',
        title: 'Sovereign AI Blueprint',
        tagline: 'AI in Europe, not on a Nevada server. Yours, not rented.',
        pricingLabel: 'Investment scaled to complexity · Custom mini-proposal in 48 hours · 4 weeks · For organizations with sovereignty constraints',
        ctaButton: 'Request a proposal',
        problemTitle: 'When your data can\'t leave Europe',
        problemBody: [
          'Healthcare, finance, public administration, defense, cultural sector with sensitive archives: there are organizations for whom moving data to a Nevada server isn\'t a technical choice — it\'s a violation. Yet almost all of them have AI running somewhere, and almost none have mapped where that data ends up in the inference cycle.',
          'The problem tripled in 2026. The US Cloud Act and its extensions; the EU AI Act mandating traceability; board pressure to avoid being held hostage by a non-EU supplier. Three vectors converging on a single question: how do I do AI in Europe, in a way that stays in Europe, without losing capability against US hyperscalers?',
          'The answer isn\'t a single product. It\'s an architecture. And it has to be designed before signing the next cloud contract, not after.',
        ],
        outputTitle: 'Blueprint output',
        outputItems: [
          'Complete mapping of your AI data: where it sits today, where it must legally sit, with what jurisdictional constraints (GDPR, AI Act, sectoral norms)',
          'Three-year TCO comparison across four scenarios: hyperscaler cloud with sovereign setup, EU sovereign cloud, private/on-prem, hybrid',
          'Independent vendor evaluation: Mistral, Aleph Alpha, open weight models, European inference infrastructure',
          'Reference architecture for your organization: private inference, sovereign RAG, in-perimeter MLOps',
          'Migration roadmap if you need to exit current setups, with priorities and operational impact',
          'Explicit risk register: lock-in, performance gap, hidden costs, geopolitical risks',
          'Board briefing in presentation format, with clear decision scenarios',
        ],
        outputClosing: 'The blueprint is documentary, not implementational. It\'s what lets you make the right decision with all data on the table, before spending millions on an architecture that\'ll need redoing in two years.',
        processTitle: 'How the four weeks unfold',
        processSteps: [
          { week: 'Week 1 — Discovery & data mapping', body: 'Three days on-site with CIO, CISO, DPO, legal, and AI system owners. Precise mapping of data flows, existing cloud contracts, sector-specific regulatory constraints.' },
          { week: 'Week 2 — Vendor & architectural assessment', body: 'Analytical work on European vendors and hybrid setups. Functional tests on 2-3 candidate models with a use case representative of your organization.' },
          { week: 'Week 3 — TCO & migration design', body: 'Three-year financial modeling of the four scenarios. Target architecture definition. Migration path design. Review workshop with CIO + CFO together.' },
          { week: 'Week 4 — Synthesis & handover', body: 'Final document, board presentation, half-day handover with C-level + technical leads together. All elements on the table, intellectually honestly.' },
        ],
        forYouTitle: 'This blueprint is for you if',
        forYouItems: [
          'You operate in a sovereignty-constrained sector: central or regional public administration, healthcare, banking tier 2-3, insurance groups, cultural foundations with sensitive archives, defense, dual-use',
          'You\'ve already invested in AI but your CISO or DPO is telling you the current setup won\'t survive a serious audit',
          'You\'re about to sign a strategic cloud contract (≥€500k/year) and want an independent second opinion',
          'Your board has put "AI sovereignty" on the 2026 agenda and someone needs to write the position paper',
        ],
        notForYouTitle: 'Who it\'s not for',
        notForYouItems: [
          'Companies whose data can legitimately reside anywhere — don\'t waste budget on sovereignty',
          'Those looking for a sovereign infrastructure provider — I design the blueprint, implementation goes to PiirZ Digital or another integrator',
          'Those wanting a predetermined choice "Mistral is better" or "OVH is better" — the evaluation is agnostic by design',
        ],
        pricingTitle: 'How the investment works',
        pricingBody: [
          'Discovery call (30 minutes, free): we understand your jurisdictional constraints, AI systems in production, baseline scenario.',
          'Written mini-proposal in 48 hours: scope, calendar, exact investment calibrated to your technical and jurisdictional perimeter.',
          'Scoping call (60 minutes, if the mini-proposal is on track): we define specific systems, models to test, jurisdictions in scope.',
          'SOW + contract: signature and kickoff within 5 working days. Payment in two tranches, 50% at kickoff and 50% at handover.',
          'Cost scales to the number of AI systems in scope, presence of legacy systems to migrate, number of jurisdictions covered. A tier-2 single-country bank and a multi-EU insurance group have radically different scope. That\'s why investment is defined after discovery, not on the site.',
        ],
        faqTitle: 'Frequently asked questions',
        faq: [
          { q: 'What does "sovereign AI" actually mean in practice?', a: 'It\'s the combination of five cumulative guarantees: execution environment in EU, management by European legal entities, control of the MLOps chain, governance of data and metadata, access to model weights. Without all five, "sovereign" is marketing.' },
          { q: 'Is Mistral really enterprise-ready?', a: 'In 2026, yes, credibly so. It raised €830M in institutional debt early this year, has real enterprise traction, and operates under French jurisdiction with EU regulatory alignment.' },
          { q: 'Can a blueprint be done without choosing between cloud and on-prem?', a: 'No, the blueprint exists exactly to make that choice. What\'s possible is designing a gradual migration path.' },
          { q: 'How much does "going sovereign" cost vs. keeping everything on Azure/AWS?', a: 'For mid-scale inference (€100-500k/year of AI spend), sovereign setup typically costs 1.3-2x vs hyperscaler in the first 18 months, then converges.' },
        ],
        finalCtaTitle: 'Before signing the next cloud contract, give me a call.',
        finalCtaBody: 'Fill in the pre-qualification form (5 questions, two minutes). In the discovery call we figure out if your case really needs a full blueprint or a lighter assessment. If your setup is already compliant, I\'ll tell you — and not sell you a service you don\'t need.',
      },
    },
  },

  // 4. FRACTIONAL CHIEF AI OFFICER
  {
    slug: 'fractional-caio',
    shortTitle: { it: 'Fractional Chief AI Officer', en: 'Fractional Chief AI Officer' },
    shortTagline: {
      it: 'Un CAIO senior 4 giorni al mese. Senza assumerlo full-time.',
      en: 'A senior CAIO four days a month. Without the full-time hire.',
    },
    shortPricing: { it: 'Retainer custom', en: 'Custom retainer' },
    shortDuration: { it: 'Retainer 6-12 mesi', en: '6-12 month retainer' },
    shortFor: {
      it: 'Scale-up post-Series A, PMI in trasformazione, holding family-owned.',
      en: 'Post-Series A scale-ups, transforming SMEs, family-owned holdings.',
    },
    content: {
      it: {
        eyebrow: 'Servizio 4 di 5 · Retainer mensile · Co-brand Pan + PiirZ Digital',
        title: 'Fractional Chief AI Officer',
        tagline: 'Un CAIO senior 4 giorni al mese. Senza assumerlo full-time.',
        pricingLabel: 'Retainer mensile commisurato al setup richiesto · Capacity limitata · Mini-proposta in 48 ore',
        ctaButton: 'Richiedi una proposta',
        problemTitle: 'Quando ti serve un CAIO ma non puoi assumerlo',
        problemBody: [
          'Hai capito che l\'AI è una funzione strategica, non un progetto. Ti serve una voce in CdA, qualcuno che presieda il comitato AI, scelga i vendor, faccia da adulto nella stanza tra il tuo CTO che vuole tutto custom e il tuo CFO che vuole tutto SaaS. Una persona che ne ha già viste tante prima.',
          'Solo che un Chief AI Officer full-time costa €200-300k/anno, e onestamente — se fatti i conti — non hai abbastanza volume di lavoro per giustificarlo. Un advisor occasionale invece non è abbastanza: serve qualcuno che si "appropri" del problema, che entri nel contesto, che sia raggiungibile quando serve.',
          'Da qui il fractional. Quattro giorni al mese — abbastanza per essere dentro, non così tanti da costare come un C-level.',
        ],
        outputTitle: 'Cosa fa un Fractional CAIO con te',
        outputItems: [
          'Due-quattro giornate di Pan al mese (a seconda del piano scelto)',
          'Presenza in CdA quando l\'AI è all\'ordine del giorno',
          'Presidio del comitato AI interno (se non esiste, lo creiamo)',
          'Review delle iniziative AI in corso, kill/scale/keep recommendation continua',
          'Email, Slack, WhatsApp business — risposta entro 24 ore lavorative',
          'Una emergenza al mese gestita in 4 ore (decisione critica, vendor pitch, audit improvviso)',
          'Delivery operativa via PiirZ Digital con condizioni preferenziali per i clienti fractional',
          'Quarterly business review formale con CFO e CEO',
          'Reporting mensile in due pagine: cosa funziona, cosa no, cosa serve decidere',
        ],
        processTitle: 'Come si svolge il retainer',
        processSteps: [
          { week: 'Mese 1 — Onboarding', body: 'Due settimane di immersione: shadowing del CdA, deep-dive con i responsabili business, audit delle iniziative AI esistenti, mappatura degli stakeholder. Output: un memo di posizionamento in dodici pagine che diventa la base operativa.' },
          { week: 'Mesi 2-12 — Operatività', body: 'Cadenza mensile: due-quattro giornate distribuite, review di tutte le iniziative AI, decisioni vendor, presidio dei rischi (compliance, lock-in, capacity tecnica), mentoring dei tuoi responsabili interni.' },
          { week: 'Trimestrale — QBR', body: 'Sessione formale con CEO/CFO per fare il punto su pipeline AI, ritorni misurati, priorità del trimestre successivo. È il momento in cui si valuta se il setup attuale funziona o va riallineato.' },
          { week: 'Uscita', body: 'Preavviso 60 giorni da entrambe le parti. Niente clausole di lock-in commerciale. Quando il cliente ha sviluppato un CAIO interno e non serve più il fractional, se ne va.' },
        ],
        forYouTitle: 'Questo retainer fa per te se',
        forYouItems: [
          'Sei CEO o COO di scale-up post-Series A senza Chief AI Officer interno',
          'Sei a capo di una PMI italiana (€20-150M fatturato) in trasformazione digitale',
          'Guidi una holding family-owned con 3-5 BU eterogenee e l\'AI è un tema trasversale',
          'Hai appena perso il tuo responsabile innovation/digital e vuoi un ponte di 12 mesi prima di assumere full-time',
        ],
        notForYouTitle: 'Per chi non è',
        notForYouItems: [
          'Aziende con già un CAIO o CTO senior con esperienza AI specifica (in quel caso bastano i programmi a prezzo fisso)',
          'Aziende sotto i €10M di fatturato (il prezzo non si giustifica)',
          'Chi cerca un consulente "on demand" senza retainer (è proprio il punto opposto: il valore è nell\'avere accesso continuo)',
        ],
        pricingTitle: 'Come funziona l\'investimento',
        pricingBody: [
          'Discovery call (60 minuti, gratuita): capiamo il tuo setup, l\'intensità di presenza che ti serve, gli stakeholder con cui lavorerei.',
          'Mini-proposta scritta in 48 ore: setup mensile (2/3/4 giornate), retainer mensile, durata, condizioni di delivery operativa via PiirZ.',
          'Scoping call (60 minuti, se la mini-proposta è in linea): definiamo cadenza, stakeholder, KPI di valutazione del trimestre.',
          'Retainer agreement: firma, onboarding parte entro la settimana successiva. Fatturazione mensile, preavviso 60 giorni da entrambe le parti.',
          'Il retainer si calibra sul setup richiesto (presenza in CdA fissa, comitato AI da presidiare, intensità delle decisioni mensili) e sulla seniority degli interlocutori. Per uno scale-up post-Series A e per una holding multi-BU il retainer giusto è diverso.',
          'Capacity limitata: lavoro al massimo con quattro clienti fractional contemporaneamente. Quando lo slot è pieno, c\'è una waitlist.',
          'Non incluso: delivery operativa via PiirZ Digital (contratto separato, tariffe preferenziali per i fractional client), spese di trasferta oltre il primo viaggio mensile, eventuali speaking interni.',
        ],
        faqTitle: 'Domande frequenti',
        faq: [
          { q: 'Quattro giornate al mese sono davvero abbastanza per un CAIO?', a: 'Per il 90% delle aziende mid-market, sì — perché il valore di un CAIO non è nelle ore, è nelle decisioni. Le decisioni AI strategiche di un\'azienda da €50M sono cinque-sette al mese. Quattro giornate distribuite bene sono sufficienti.' },
          { q: 'Sei dentro al CdA o fuori?', a: 'Tipicamente partecipo al CdA come "permanent invited guest" sui temi AI, senza ruolo formale. Se vuoi una nomina formale, si negozia separatamente.' },
          { q: 'Cosa cambia se la mia azienda è in un settore regolamentato?', a: 'Settori regolamentati hanno bisogno di più tempo sulla compliance — quindi il piano Executive (4 giornate) è quasi sempre il default. Includiamo anche il monitoraggio delle deadline AI Act.' },
          { q: 'Posso fare un mese "trial"?', a: 'No, ma puoi fare un AI Strategy Sprint (servizio separato, 4 settimane) come "lungo onboarding" e decidere alla fine se passare al fractional. Investimento dello Sprint definito nella mini-proposta.' },
          { q: 'PiirZ Digital fa parte del mio contratto?', a: 'Il contratto di base è solo con me. Se durante il retainer serve esecuzione operativa, PiirZ Digital interviene con un contratto separato a tariffe preferenziali per i clienti fractional. È un\'opzione, non un obbligo.' },
        ],
        finalCtaTitle: 'Capacity limitata. Conversazione gratuita.',
        finalCtaBody: 'Compila il form di pre-qualifica (5 domande, due minuti). Una call di sessanta minuti per capire se il fractional è davvero la struttura giusta, se siamo allineati culturalmente, e se nei prossimi 60 giorni ho uno slot disponibile.',
      },
      en: {
        eyebrow: 'Service 4 of 5 · Monthly retainer · Co-brand Pan + PiirZ Digital',
        title: 'Fractional Chief AI Officer',
        tagline: 'A senior CAIO four days a month. Without the full-time hire.',
        pricingLabel: 'Monthly retainer scaled to required setup · Limited capacity · Custom mini-proposal in 48 hours',
        ctaButton: 'Request a proposal',
        problemTitle: 'When you need a CAIO but can\'t hire one',
        problemBody: [
          'You\'ve realized AI is a strategic function, not a project. You need a voice in the boardroom, someone who chairs the AI committee, picks vendors, plays the adult in the room between your CTO who wants everything custom and your CFO who wants everything SaaS. Someone who\'s seen this play out before.',
          'Except a full-time Chief AI Officer costs €200-300k/year, and honestly — when you do the math — you don\'t have the workload to justify it. An occasional advisor isn\'t enough either: you need someone who "owns" the problem.',
          'Hence fractional. Four days a month — enough to be inside, not so many it costs like a full C-level.',
        ],
        outputTitle: 'What a Fractional CAIO does with you',
        outputItems: [
          'Two-to-four Pan days per month (depending on plan)',
          'Board attendance when AI is on the agenda',
          'AI committee chairmanship (if it doesn\'t exist, we create it)',
          'Rolling review of AI initiatives, kill/scale/keep recommendations',
          'Email, Slack, WhatsApp business — response within 24 working hours',
          'One monthly emergency handled in 4 hours (critical decision, vendor pitch, surprise audit)',
          'Operational delivery via PiirZ Digital with preferential terms for fractional clients',
          'Quarterly business review with CFO and CEO',
          'Two-page monthly reporting: what\'s working, what\'s not, what needs deciding',
        ],
        processTitle: 'How the retainer unfolds',
        processSteps: [
          { week: 'Month 1 — Onboarding', body: 'Two weeks of immersion: board shadowing, deep-dives with business owners, audit of existing AI initiatives, stakeholder mapping. Output: a twelve-page positioning memo.' },
          { week: 'Months 2-12 — Operations', body: 'Monthly cadence: two-to-four distributed days, review of all AI initiatives, vendor decisions, risk presence, mentoring of internal leads.' },
          { week: 'Quarterly — QBR', body: 'Formal session with CEO/CFO to review AI pipeline, measured returns, priorities for the next quarter.' },
          { week: 'Exit', body: '60-day notice from either side. No commercial lock-in clauses. When the client has developed an internal CAIO, they leave.' },
        ],
        forYouTitle: 'This retainer is for you if',
        forYouItems: [
          'You\'re CEO or COO of a post-Series A scale-up without an internal Chief AI Officer',
          'You lead a European SME (€20-150M revenue) in digital transformation',
          'You head a family-owned holding with 3-5 heterogeneous BUs',
          'You just lost your innovation/digital lead and want a 12-month bridge before hiring full-time',
        ],
        notForYouTitle: 'Who it\'s not for',
        notForYouItems: [
          'Companies with an existing CAIO or senior CTO with specific AI experience',
          'Companies under €10M revenue (the price isn\'t justified)',
          'Those looking for "on-demand" consulting without retainer',
        ],
        pricingTitle: 'How the investment works',
        pricingBody: [
          'Discovery call (60 minutes, free): we understand your setup, the presence intensity you need, the stakeholders I\'d work with.',
          'Written mini-proposal in 48 hours: monthly setup (2/3/4 days), monthly retainer, duration, operational delivery conditions via PiirZ.',
          'Scoping call (60 minutes, if the mini-proposal is on track): we define cadence, stakeholders, quarterly evaluation KPIs.',
          'Retainer agreement: signature, onboarding starts within the next week. Monthly billing, 60-day notice from either side.',
          'The retainer scales to the required setup (board presence, AI committee chairmanship, intensity of monthly decisions) and to seniority of stakeholders. A post-Series A scale-up and a multi-BU holding need different retainers.',
          'Limited capacity: I work with at most four fractional clients concurrently. When the slot is full, there\'s a waitlist.',
          'NOT included: operational delivery via PiirZ Digital (separate contract, preferential rates for fractional clients), travel beyond first monthly trip, internal speaking events.',
        ],
        faqTitle: 'Frequently asked questions',
        faq: [
          { q: 'Are four days a month really enough for a CAIO?', a: 'For 90% of mid-market companies, yes — because CAIO value isn\'t in hours, it\'s in decisions. Strategic AI decisions for a €50M company are five-to-seven per month.' },
          { q: 'Are you in the boardroom or outside?', a: 'Typically I attend the board as "permanent invited guest" on AI topics, without formal role. A formal appointment is negotiated separately.' },
          { q: 'What changes if my company is in a regulated sector?', a: 'Regulated sectors need more time on compliance — so the Executive plan (4 days) is almost always the default. We include AI Act deadline monitoring from day one.' },
          { q: 'Can I do a "trial month"?', a: 'No, but you can do an AI Strategy Sprint (separate service, 4 weeks) as "long onboarding" and decide whether to switch to fractional. Sprint investment defined in the mini-proposal.' },
          { q: 'Is PiirZ Digital part of my contract?', a: 'The base contract is just with me. If during the retainer you need operational execution, PiirZ Digital steps in with a separate contract at preferential rates. It\'s an option, not an obligation.' },
        ],
        finalCtaTitle: 'Limited capacity. Free conversation.',
        finalCtaBody: 'Fill in the pre-qualification form (5 questions, two minutes). A sixty-minute call to figure out whether fractional is really the right structure, whether we\'re culturally aligned, and whether I have an open slot in the next 60 days.',
      },
    },
  },

  // 5. AI DUE DILIGENCE
  {
    slug: 'ai-due-diligence',
    shortTitle: { it: 'AI Due Diligence', en: 'AI Due Diligence' },
    shortTagline: {
      it: 'Un advisor senior che legge davvero il codice. E parla davvero col founder.',
      en: 'A senior advisor who actually reads the code. And actually talks to the founder.',
    },
    shortPricing: { it: 'Proposta in 24h', en: 'Proposal in 24h' },
    shortDuration: { it: '1-2 settimane', en: '1-2 weeks' },
    shortFor: {
      it: 'Fondi VC che fanno deal AI, founder pre-Series A.',
      en: 'VC funds doing AI deals, pre-Series A founders.',
    },
    content: {
      it: {
        eyebrow: 'Servizio 5 di 5 · Programma strutturato · Per VC e founder',
        title: 'AI Due Diligence',
        tagline: 'Un advisor senior che legge davvero il codice. E parla davvero col founder.',
        pricingLabel: 'Investimento commisurato alla complessità tecnica · Mini-proposta in 24 ore (VC) o 48 ore (founder) · 1-2 settimane',
        ctaButton: 'Richiedi una proposta',
        problemTitle: 'Stesso formato, due punti di vista',
        problemBody: [
          'Variante VC: stai per investire €1-15M in una startup AI e vuoi sapere se il "moat AI" è reale o è un wrapper su OpenAI con un prompt creativo. Output: report di 15-25 pagine con tech assessment, team capability, competitive moat, risk register, prospettiva tecnica su unit economics.',
          'Variante Founder: stai per chiudere una Series A o B, e vuoi anticipare le obiezioni della tech DD prima che ti costino una valutazione più bassa. Stesso formato del report VC + sessione di stress test con il tuo CTO.',
          'Il 75% delle review VC nel 2026 incorpora AI tools. Ma i fondi italiani non hanno tech advisor interni. È un mercato sotto-coperto.',
        ],
        outputTitle: 'Cosa contiene il report',
        outputItems: [
          'Tech assessment: modelli usati, architettura infrastruttura AI, dipendenze critiche da terze parti, stato del codice (leggibilità, test, debito tecnico, scalabilità)',
          'Team capability review: skill mappati alle responsabilità, buchi critici nel team, track record reale dei senior tech, cultura del team',
          'Competitive moat analysis: cosa è davvero difendibile (dati proprietari, modello custom-trained), cosa NON lo è (prompt creativo, layer UI), replicabilità',
          'Compliance & governance: GDPR, AI Act, normative settoriali. Data licensing. Bias detection, documentazione, audit trail',
          'Risk register: lock-in, scaling cost, regulatory exposure, talent risk. Per ogni rischio: probabilità, impatto, mitigazione',
          'Prospettiva tecnica su unit economics: costo di inferenza per utente/transazione, sensitività ai cambi di pricing dei provider AI, marginalità reale',
        ],
        processTitle: 'Come si svolgono i 7-10 giorni',
        processSteps: [
          { week: 'Giorno 1-2 — Setup & access', body: 'Kickoff con il committente. Definizione dello scope. Accesso a repository, documentazione, team. Firma NDA bidirezionale.' },
          { week: 'Giorno 3-5 — Deep dive', body: 'Letture del codice critico. Interviste 1:1 con i tech senior. Test funzionali su una use case rappresentativa. Verifica delle claim più importanti del pitch deck.' },
          { week: 'Giorno 6-8 — Analisi & redazione', body: 'Risk register, tech assessment, valutazione del moat. Stesura del report.' },
          { week: 'Giorno 9-10 — Consegna & debrief', body: 'Report consegnato in PDF + sessione di debrief di 90 minuti. Per la variante founder: sessione aggiuntiva di stress test con il CTO.' },
        ],
        forYouTitle: 'Questo servizio fa per te se',
        forYouItems: [
          'Lato VC: sei partner o associate in un fondo italiano o europeo che fa deal AI senza tech advisor interno',
          'Lato VC: stai per fare un investimento Series A, B o growth in una startup AI-native',
          'Lato Founder: stai chiudendo una Series A o B su un prodotto AI-first',
          'Lato Founder: hai un CTO competente ma con poca esperienza di tech DD da target',
        ],
        notForYouTitle: 'Per chi non è',
        notForYouItems: [
          'Pre-seed o seed con team troppo piccolo (il fee non è giustificato e bastano formati più leggeri)',
          'Aziende non-AI o AI marginale (use case AI < 30% del prodotto)',
          'Chi cerca solo un "rubber stamp" — il report è sostanziale e non si vincola a un esito predefinito',
        ],
        pricingTitle: 'Come funziona l\'investimento',
        pricingBody: [
          'Discovery / scoping call (30 minuti, gratuita): definiamo variante (VC-side o founder-side), perimetro tecnico del target, calendario realistico.',
          'Mini-proposta scritta in 24 ore (variante VC) o 48 ore (variante founder): scope, deliverable, investimento puntuale calibrato sulla complessità tecnica del target.',
          'NDA bilaterale + accesso ai materiali: kickoff entro 48 ore dalla firma del SOW.',
          'Pagamento: 100% al kickoff. I tempi del VC non permettono due tranche. Per founder che lo richiedono, possibile pagamento 50/50.',
          'L\'investimento si calibra sulla complessità del target: numero di sistemi AI sotto il cofano, ampiezza del team da intervistare, profondità del code review richiesta. Una DD su startup early-stage e una su growth-stage hanno scope tecnico diverso.',
          'Sconti volume per VC con relazione continuativa: 3 deal nello stesso anno → 10% sul terzo. 5+ deal → tariffa retainer dedicata.',
        ],
        faqTitle: 'Domande frequenti',
        faq: [
          { q: 'Sette giorni bastano per una DD seria?', a: 'Per startup early-stage con scope chiaro, sì. Per growth-stage può servire una seconda settimana — lo definiamo in scoping call. La DD non sostituisce comunque la legal DD e quella finanziaria.' },
          { q: 'Lavori in conflitto se sei advisor di una startup e poi fai DD su una concorrente?', a: 'No, e lo dichiaro esplicitamente. Tengo una mappa dei conflitti d\'interesse e — se rilevo overlap — declino il deal.' },
          { q: 'Posso usare il report nei materiali per l\'investment committee?', a: 'Sì, è uno degli usi previsti. Per la variante founder, può essere condiviso con i VC come "pre-emptive DD".' },
          { q: 'Cosa succede se trovo qualcosa di critico durante la DD?', a: 'Te lo dico subito, non aspetto la consegna del report. Se è un finding che potrebbe far saltare il deal, hai bisogno di saperlo entro 24-48 ore.' },
        ],
        finalCtaTitle: 'I tempi del deal sono stretti. Iniziamo con una telefonata.',
        finalCtaBody: 'Compila il form di pre-qualifica (5 domande, due minuti). Trenta minuti di scoping per capire variante (VC o founder), scope tecnico, calendario realistico. La call non costa nulla — e se la DD non si concretizza, ti dico cosa cercare comunque prima di chiudere il deal.',
      },
      en: {
        eyebrow: 'Service 5 of 5 · Structured program · For VCs and founders',
        title: 'AI Due Diligence',
        tagline: 'A senior advisor who actually reads the code. And actually talks to the founder.',
        pricingLabel: 'Investment scaled to technical complexity · Custom mini-proposal in 24h (VC) or 48h (founder) · 1-2 weeks',
        ctaButton: 'Request a proposal',
        problemTitle: 'Same format, two viewpoints',
        problemBody: [
          'VC variant: you\'re about to invest €1-15M in an AI startup and want to know if the "AI moat" is real or if it\'s an OpenAI wrapper with a creative prompt. Output: 15-25 page report with tech assessment, team capability, competitive moat, risk register, technical perspective on unit economics.',
          'Founder variant: you\'re about to close a Series A or B and want to anticipate the tech DD\'s objections before they cost you a lower valuation. Same format as the VC report + stress test session with your CTO.',
          'In 2026, 75% of VC reviews incorporate AI tools. But Italian funds don\'t have internal tech advisors. It\'s an under-covered market.',
        ],
        outputTitle: 'What the report contains',
        outputItems: [
          'Tech assessment: models used, AI infrastructure architecture, critical third-party dependencies, code state (readability, tests, technical debt, scalability)',
          'Team capability review: skills mapped to responsibilities, critical team gaps, real track record of senior tech, team culture',
          'Competitive moat analysis: what\'s actually defensible (proprietary data, custom-trained models), what\'s NOT (creative prompt, UI layer), replicability',
          'Compliance & governance: GDPR, AI Act, sectoral norms. Data licensing. Bias detection, documentation, audit trail',
          'Risk register: lock-in, scaling cost, regulatory exposure, talent risk. For each: probability, impact, mitigation',
          'Technical perspective on unit economics: inference cost per user/transaction, sensitivity to AI provider pricing changes, real margin',
        ],
        processTitle: 'How the 7-10 days unfold',
        processSteps: [
          { week: 'Days 1-2 — Setup & access', body: 'Kickoff with the client. Scope definition. Access to repositories, documentation, team. Bilateral NDA signed.' },
          { week: 'Days 3-5 — Deep dive', body: 'Critical code reading. 1:1 interviews with senior tech. Functional tests on a representative use case. Verification of the most important pitch deck claims.' },
          { week: 'Days 6-8 — Analysis & writing', body: 'Risk register, tech assessment, moat evaluation. Report drafting.' },
          { week: 'Days 9-10 — Delivery & debrief', body: 'Report delivered as PDF + 90-minute debrief session. For founder variant: additional 90-minute stress test session with the CTO.' },
        ],
        forYouTitle: 'This service is for you if',
        forYouItems: [
          'VC side: you\'re partner or associate at an Italian or European fund doing AI deals without internal tech advisor',
          'VC side: you\'re about to make a Series A, B, or growth investment in an AI-native startup',
          'Founder side: you\'re closing a Series A or B on an AI-first product',
          'Founder side: you have a competent CTO with limited target-side tech DD experience',
        ],
        notForYouTitle: 'Who it\'s not for',
        notForYouItems: [
          'Pre-seed or seed with too small a team (the fee isn\'t justified)',
          'Non-AI or marginal-AI companies (AI use case < 30% of product)',
          'Those looking for a "rubber stamp" — the report is substantive and not bound to a predetermined outcome',
        ],
        pricingTitle: 'How the investment works',
        pricingBody: [
          'Discovery / scoping call (30 minutes, free): we define variant (VC-side or founder-side), target technical perimeter, realistic calendar.',
          'Written mini-proposal in 24 hours (VC variant) or 48 hours (founder variant): scope, deliverables, exact investment calibrated to technical complexity of the target.',
          'Bilateral NDA + access to materials: kickoff within 48 hours of SOW signature.',
          'Payment: 100% at kickoff. VC timelines don\'t allow two tranches. For founders requesting it, 50/50 payment is possible.',
          'Investment scales to target complexity: number of AI systems under the hood, breadth of team to interview, depth of required code review. DD on early-stage and growth-stage startups have different technical scope.',
          'Volume discounts for VCs with continuous relationship: 3 deals in the same year → 10% on the third. 5+ deals → dedicated retainer rate.',
        ],
        faqTitle: 'Frequently asked questions',
        faq: [
          { q: 'Are seven days enough for serious DD?', a: 'For early-stage startups with clear scope, yes. For growth-stage, a second week may be needed. The DD doesn\'t replace legal DD or financial DD.' },
          { q: 'Are you in conflict if you advise a startup and then run DD on a competitor?', a: 'No, and I declare it explicitly. I keep a conflict-of-interest map and — if I detect overlap — I decline the deal.' },
          { q: 'Can I use the report in materials for the investment committee?', a: 'Yes, that\'s one of the intended uses. For the founder variant, it can be shared with VCs as "pre-emptive DD".' },
          { q: 'What happens if you find something critical during DD?', a: 'I tell you immediately, not at delivery. If it\'s a finding that could kill the deal, you need to know within 24-48 hours.' },
        ],
        finalCtaTitle: 'Deal timelines are tight. Let\'s start with a call.',
        finalCtaBody: 'Fill in the pre-qualification form (5 questions, two minutes). Thirty minutes of scoping to determine variant (VC or founder), technical scope, realistic calendar. The call costs nothing — and if the DD doesn\'t materialize, I\'ll tell you what to look for anyway before closing the deal.',
      },
    },
  },
];

export function getServiceBySlug(slug: string): ServiceMeta | undefined {
  return services.find((s) => s.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return services.map((s) => s.slug);
}
