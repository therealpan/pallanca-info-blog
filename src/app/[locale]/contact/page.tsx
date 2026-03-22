import { setRequestLocale } from 'next-intl/server';
import { Linkedin, Mail, MapPin } from 'lucide-react';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return {
    title: locale === 'it' ? 'Contatti' : 'Contact',
    description:
      locale === 'it'
        ? 'Prenota una discovery call con Angelo Pallanca.'
        : 'Book a discovery call with Angelo Pallanca.',
  };
}

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="pt-24 pb-16">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left side */}
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white">
              {locale === 'it' ? 'Parliamone.' : "Let's talk."}
            </h1>
            <p className="mt-6 text-lg text-[var(--color-text-muted)] leading-relaxed">
              {locale === 'it'
                ? 'Prenota una discovery call gratuita di 30 minuti. Nessun impegno, nessuna presentazione da 50 pagine. Solo una conversazione per capire come posso aiutarti.'
                : 'Book a free 30-minute discovery call. No commitment, no 50-page pitch decks. Just a conversation to explore how I can help.'}
            </p>

            <div className="mt-10 space-y-6">
              <a
                href="mailto:angelo@pallanca.info"
                className="glass-card p-4 flex items-center gap-4 group"
              >
                <div className="w-10 h-10 rounded-lg bg-[var(--color-accent)]/10 flex items-center justify-center">
                  <Mail size={20} className="text-[var(--color-accent)]" />
                </div>
                <div>
                  <div className="text-sm text-[var(--color-text-muted)]">{locale === 'it' ? 'Scrivimi' : 'Email me'}</div>
                  <div className="text-white group-hover:text-[var(--color-accent)] transition-colors">angelo@pallanca.info</div>
                </div>
              </a>

              <a
                href="https://linkedin.com/in/angelopallanca/"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-4 flex items-center gap-4 group"
              >
                <div className="w-10 h-10 rounded-lg bg-[var(--color-accent)]/10 flex items-center justify-center">
                  <Linkedin size={20} className="text-[var(--color-accent)]" />
                </div>
                <div>
                  <div className="text-sm text-[var(--color-text-muted)]">LinkedIn</div>
                  <div className="text-white group-hover:text-[var(--color-accent)] transition-colors">Angelo Pallanca</div>
                </div>
              </a>

              <div className="glass-card p-4 flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-[var(--color-accent)]/10 flex items-center justify-center">
                  <MapPin size={20} className="text-[var(--color-accent)]" />
                </div>
                <div>
                  <div className="text-sm text-[var(--color-text-muted)]">{locale === 'it' ? 'Base' : 'Based in'}</div>
                  <div className="text-white">Europe</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Cal.com embed */}
          <div className="glass-card p-2 overflow-hidden">
            <iframe
              src="https://cal.com/panbiz/30min?embed=true&theme=dark"
              width="100%"
              height="650"
              frameBorder="0"
              className="rounded-xl"
              title={locale === 'it' ? 'Prenota una call' : 'Book a call'}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
