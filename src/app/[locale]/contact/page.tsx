import { setRequestLocale } from 'next-intl/server';
import { Linkedin, Mail, MapPin, ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/metadata';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const isIt = locale === 'it';
  return buildPageMetadata({
    locale,
    path: '/contact',
    title: isIt ? 'Contatti — Angelo Pallanca' : 'Contact — Angelo Pallanca',
    description: isIt
      ? 'Compila il form di pre-qualifica o scrivimi direttamente.'
      : 'Fill the pre-qualification form or email me directly.',
  });
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
            <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
              {locale === 'it' ? 'Parliamone.' : "Let's talk."}
            </h1>
            <p className="mt-6 text-lg text-[var(--color-text-muted)] leading-relaxed">
              {locale === 'it'
                ? 'Cinque domande, due minuti. Mi servono per dimensionare bene la mini-proposta che ti mando entro 24 ore lavorative. Niente CRM, niente automazioni: leggo io e rispondo io.'
                : 'Five questions, two minutes. I need them to properly size the mini-proposal I send you within 24 working hours. No CRM, no automations: I read it personally, I reply personally.'}
            </p>

            <div className="mt-10 space-y-4">
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

          {/* Right side — proposal form CTA */}
          <div className="glass-card p-10 md:p-12 flex flex-col justify-center">
            <div className="text-xs uppercase tracking-widest text-[var(--color-accent)] mb-4">
              {locale === 'it' ? 'Modo principale' : 'Primary path'}
            </div>
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4 tracking-tight">
              {locale === 'it' ? 'Richiedi una proposta scritta' : 'Request a written proposal'}
            </h2>
            <p className="text-[var(--color-text-muted)] leading-relaxed mb-8">
              {locale === 'it'
                ? 'Cinque domande, due minuti. Ti rispondo personalmente entro 24 ore lavorative con una mini-proposta scritta calibrata sul tuo caso. Se in linea, fissiamo scoping call e ti mando lo SOW.'
                : 'Five questions, two minutes. I personally reply within 24 working hours with a written mini-proposal calibrated to your case. If aligned, we book scoping call and I send the SOW.'}
            </p>
            <a
              href={`/${locale}/proposal`}
              className="inline-flex items-center gap-2 bg-white text-[var(--color-bg)] px-7 py-3 rounded-full text-sm font-medium hover:bg-white/90 transition-[background,color,transform] duration-200 self-start"
            >
              {locale === 'it' ? 'Compila il form' : 'Fill the form'}
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
