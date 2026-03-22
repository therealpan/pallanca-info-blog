import { setRequestLocale } from 'next-intl/server';
import Image from 'next/image';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return {
    title: locale === 'it' ? 'Chi sono' : 'About',
    description:
      locale === 'it'
        ? 'Angelo Pallanca - Consulente innovazione e AI con 30 anni di esperienza nel settore tech.'
        : 'Angelo Pallanca - Innovation and AI consultant with 30 years of experience in tech.',
  };
}

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  const content = locale === 'it' ? {
    title: 'Angelo Pallanca',
    subtitle: 'Consulente Innovazione & AI',
    bio: [
      'Lavoro nel settore tech e innovazione da circa 30 anni. Ho guidato progetti di trasformazione digitale per brand internazionali, istituzioni pubbliche e organizzazioni europee.',
      'Il mio approccio e pratico: non vendo visioni, consegno soluzioni. Quando un\'organizzazione ha bisogno di portare un progetto AI dalla sperimentazione alla produzione, entro nel team e mi assicuro che succeda.',
      'Ho lavorato con Emirates, Ferragamo, UNESCO, UNICEF, il Museo del Prado, il Principato di Monaco e diverse amministrazioni europee. Ogni progetto mi ha insegnato che la tecnologia funziona solo quando e al servizio di un obiettivo chiaro.',
      'Oggi mi concentro su AI enterprise, innovation strategy e interim management. Se hai un progetto ambizioso che non riesce a decollare, probabilmente possiamo lavorarci insieme.',
    ],
    experience: 'Anni di esperienza',
    focus: 'Il mio approccio',
    focusItems: [
      { title: 'Pragmatico', desc: 'Aspettative realistiche, risultati misurabili. Niente buzzword, niente promesse vuote.' },
      { title: 'Integrato', desc: 'Non resto in consulenza esterna. Entro nel team, capisco il contesto, consegno.' },
      { title: 'Indipendente', desc: 'Nessun legame con vendor. Le soluzioni che raccomando sono quelle giuste per te, non per me.' },
    ],
  } : {
    title: 'Angelo Pallanca',
    subtitle: 'Digital Transformation & AI Governance',
    bio: [
      'I have been working in tech and innovation for about 30 years. I have led digital transformation projects for international brands, public institutions, and European organizations.',
      'My approach is hands-on: I don\'t sell visions, I deliver solutions. When an organization needs to move an AI project from experimentation to production, I join the team and make sure it happens.',
      'I have worked with Emirates, Ferragamo, UNESCO, UNICEF, the Museo del Prado, the Principality of Monaco, and several European administrations. Every project has taught me that technology only works when it serves a clear objective.',
      'Today I focus on enterprise AI, innovation strategy, and interim management. If you have an ambitious project that can\'t seem to get off the ground, we should talk.',
    ],
    experience: 'Years of experience',
    focus: 'My approach',
    focusItems: [
      { title: 'Pragmatic', desc: 'Realistic expectations, measurable results. No buzzwords, no empty promises.' },
      { title: 'Embedded', desc: 'I don\'t stay on the sidelines. I join your team, understand the context, and deliver.' },
      { title: 'Independent', desc: 'No vendor ties. The solutions I recommend are right for you, not for me.' },
    ],
  };

  return (
    <div className="pt-24 pb-16">
      {/* Hero section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          <div className="md:col-span-1">
            <div className="glass-card p-2 inline-block">
              <Image
                src="/images/photos/foto_pallanca01.png"
                alt="Angelo Pallanca"
                width={400}
                height={500}
                className="rounded-xl object-cover"
              />
            </div>
            <div className="glass-card p-6 mt-6 text-center">
              <div className="text-4xl font-bold text-[var(--color-accent)]">~30</div>
              <div className="text-sm text-[var(--color-text-muted)] mt-1">{content.experience}</div>
            </div>
          </div>
          <div className="md:col-span-2">
            <h1 className="text-4xl sm:text-5xl font-bold text-white">{content.title}</h1>
            <p className="text-xl text-[var(--color-accent)] mt-2">{content.subtitle}</p>
            <div className="mt-8 space-y-4">
              {content.bio.map((p, i) => (
                <p key={i} className="text-[var(--color-text-muted)] leading-relaxed text-base">{p}</p>
              ))}
            </div>
            <div className="mt-10">
              <a
                href="https://cal.com/panbiz/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-[var(--color-bg)] px-8 py-3 rounded-full text-sm font-medium hover:bg-white/90 transition-colors"
              >
                {locale === 'it' ? 'Prenota una discovery call' : 'Book a discovery call'}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl font-bold text-white mb-10">{content.focus}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {content.focusItems.map((item) => (
            <div key={item.title} className="glass-card p-6">
              <h3 className="text-lg font-semibold text-white mb-3">{item.title}</h3>
              <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
