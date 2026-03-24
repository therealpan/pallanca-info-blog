import { setRequestLocale } from 'next-intl/server';
import { Brain, Search, FolderKanban, UserCog, Cpu } from 'lucide-react';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return {
    title: locale === 'it' ? 'Servizi' : 'Services',
    description:
      locale === 'it'
        ? 'Consulenza innovazione, strategia AI, solution scouting, project e interim management.'
        : 'Innovation consulting, AI strategy, solution scouting, project and interim management.',
  };
}

const servicesEn = [
  {
    icon: Brain,
    title: 'Knowledge Consulting',
    problem: 'Your team knows something needs to change, but not what or where to start.',
    approach: 'I run an in-depth analysis of your current workflows, map inefficiencies, and identify where innovation and AI can deliver measurable improvements.',
    outcome: 'A clear, prioritized roadmap with specific recommendations you can act on immediately.',
  },
  {
    icon: Search,
    title: 'Solution Scouting',
    problem: 'You are drowning in vendor pitches and can\'t tell which technology actually fits your needs.',
    approach: 'I evaluate the market independently, test solutions against your specific requirements, and shortlist the 3 options that match your stack, budget, and team capacity.',
    outcome: 'An unbiased technology recommendation with comparison matrix, implementation effort, and total cost of ownership.',
  },
  {
    icon: FolderKanban,
    title: 'Project Management',
    problem: 'Great strategies die in execution. Your innovation projects keep stalling or missing deadlines.',
    approach: 'I take ownership of the delivery process: timelines, resources, stakeholder alignment, risk management. I bridge the gap between strategy and production.',
    outcome: 'Projects delivered on time and on budget, with clear documentation and knowledge transfer to your team.',
  },
  {
    icon: UserCog,
    title: 'Interim Management',
    problem: 'You need an Innovation or AI Director but can\'t wait 6 months to hire one.',
    approach: 'I embed in your organization as a full-time interim director. I own the innovation portfolio, manage teams, report to leadership, and drive execution.',
    outcome: 'Immediate leadership capacity with no long-term commitment. I stay until you hire permanently or the mission is complete.',
  },
  {
    icon: Cpu,
    title: 'AI Strategy & Integration',
    problem: 'Your AI experiments never make it past the proof-of-concept phase.',
    approach: 'I design pragmatic AI strategies grounded in your business reality. No over-promising, no magic. I cover architecture, data readiness, governance, and change management.',
    outcome: 'AI projects that actually reach production, with clear ROI metrics and a governance framework that scales.',
  },
];

const servicesIt = [
  {
    icon: Brain,
    title: 'Consulenza Strategica',
    problem: 'Il tuo team sa che qualcosa deve cambiare, ma non sa cosa ne da dove iniziare.',
    approach: 'Conduco un\'analisi approfondita dei processi attuali, mappo le inefficienze e identifico dove innovazione e AI possono portare miglioramenti misurabili.',
    outcome: 'Una roadmap chiara e prioritizzata con raccomandazioni specifiche su cui agire subito.',
  },
  {
    icon: Search,
    title: 'Solution Scouting',
    problem: 'Siete sommersi da pitch di vendor e non riuscite a capire quale tecnologia fa davvero al caso vostro.',
    approach: 'Valuto il mercato in modo indipendente, testo le soluzioni contro i vostri requisiti specifici e seleziono le 3 opzioni compatibili con il vostro stack, budget e capacita del team.',
    outcome: 'Una raccomandazione tecnologica imparziale con matrice comparativa, sforzo di implementazione e costo totale.',
  },
  {
    icon: FolderKanban,
    title: 'Project Management',
    problem: 'Le grandi strategie muoiono nell\'esecuzione. I vostri progetti di innovazione si bloccano o sforano i tempi.',
    approach: 'Prendo in carico il processo di delivery: timeline, risorse, allineamento stakeholder, gestione rischi. Faccio da ponte tra strategia e produzione.',
    outcome: 'Progetti consegnati nei tempi e nel budget, con documentazione chiara e knowledge transfer al vostro team.',
  },
  {
    icon: UserCog,
    title: 'Interim Management',
    problem: 'Vi serve un Innovation Director o AI Director ma non potete aspettare 6 mesi per assumerne uno.',
    approach: 'Mi integro nella vostra organizzazione come interim director a tempo pieno. Gestisco il portfolio innovazione, i team, il reporting alla leadership.',
    outcome: 'Capacita di leadership immediata senza impegno a lungo termine. Resto finche non assumete stabilmente o la missione e completa.',
  },
  {
    icon: Cpu,
    title: 'Strategia AI & Integrazione',
    problem: 'I vostri esperimenti AI non superano mai la fase di proof-of-concept.',
    approach: 'Progetto strategie AI pragmatiche, ancorate alla realta del vostro business. Niente promesse eccessive. Copro architettura, data readiness, governance e change management.',
    outcome: 'Progetti AI che arrivano in produzione, con metriche ROI chiare e un framework di governance scalabile.',
  },
];

export default async function ServicesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const services = locale === 'it' ? servicesIt : servicesEn;

  return (
    <div className="pt-24 pb-16">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl sm:text-5xl font-bold text-white">
          {locale === 'it' ? 'Servizi' : 'Services'}
        </h1>
        <p className="mt-4 text-lg text-[var(--color-text-muted)] max-w-2xl">
          {locale === 'it'
            ? 'Dalla strategia all\'esecuzione. Ogni servizio puo funzionare singolarmente o come parte di un percorso completo.'
            : 'From strategy to execution. Each service works standalone or as part of a complete engagement.'}
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 pb-16">
        {services.map((svc, i) => (
          <div key={i} className="glass-card p-8 md:p-10">
            <div className="flex items-start gap-6">
              <div className="hidden md:flex items-center justify-center w-14 h-14 rounded-xl bg-[var(--color-accent)]/10 shrink-0">
                <svc.icon size={28} className="text-[var(--color-accent)]" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-white mb-6">{svc.title}</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <h3 className="text-sm font-medium text-[var(--color-accent)] uppercase tracking-wider mb-2">
                      {locale === 'it' ? 'Il problema' : 'The issue'}
                    </h3>
                    <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{svc.problem}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-[var(--color-accent)] uppercase tracking-wider mb-2">
                      {locale === 'it' ? 'Il mio approccio' : 'My approach'}
                    </h3>
                    <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{svc.approach}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-[var(--color-accent)] uppercase tracking-wider mb-2">
                      {locale === 'it' ? 'Il risultato' : 'The outcome'}
                    </h3>
                    <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{svc.outcome}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <div className="glass-card p-12">
          <h2 className="text-2xl font-bold text-white mb-4">
            {locale === 'it' ? 'Pronto a partire?' : 'Ready to start?'}
          </h2>
          <p className="text-[var(--color-text-muted)] mb-8 max-w-lg mx-auto">
            {locale === 'it'
              ? 'Prenota una discovery call gratuita di 30 minuti. Nessun impegno, nessuna slide da 50 pagine.'
              : 'Book a free 30-minute discovery call. No commitment, no 50-page slide decks.'}
          </p>
          <a
            href="https://cal.com/panbiz/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-[var(--color-bg)] px-8 py-3 rounded-full text-sm font-medium hover:bg-white/90 transition-colors"
          >
            {locale === 'it' ? 'Prenota una discovery call' : 'Book a discovery call'}
          </a>
        </div>
      </section>
    </div>
  );
}
