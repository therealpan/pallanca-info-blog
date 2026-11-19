import { ArrowUpRight } from 'lucide-react';

const subscribeUrl = (placement: string) =>
  `https://angelopallanca.substack.com/subscribe?utm_source=pallanca.info&utm_medium=${placement === 'index' ? 'blog-index' : 'blog'}`;

export default function NewsletterCTA({
  locale,
  placement = 'post',
}: {
  locale: string;
  placement?: 'post' | 'index';
}) {
  const isIt = locale === 'it';

  const copy = isIt
    ? {
        title: 'Ricevi i prossimi articoli via email',
        body: 'Ogni nuovo articolo su strategia AI, governance e adozione nelle aziende, letto attraverso i dati. Newsletter gratuita su Substack, in inglese.',
        cta: 'Iscriviti su Substack',
      }
    : {
        title: 'Get the next articles by email',
        body: 'Every new article on AI strategy, governance and enterprise adoption, read through the data. Free newsletter on Substack.',
        cta: 'Subscribe on Substack',
      };

  return (
    <section
      className={
        placement === 'index'
          ? 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10'
          : 'max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16'
      }
    >
      <div className="glass-card p-8 flex flex-col sm:flex-row sm:items-center gap-6">
        <div className="flex-1">
          <p className="text-lg text-white font-medium">{copy.title}</p>
          <p className="mt-2 text-sm text-[var(--color-text-muted)] leading-relaxed">{copy.body}</p>
        </div>
        <a
          href={subscribeUrl(placement)}
          target="_blank"
          rel="noopener"
          className="inline-flex items-center justify-center gap-2 border border-white/30 text-white px-6 py-3 rounded-full text-sm font-medium whitespace-nowrap hover:border-white hover:bg-white/5 transition-[background,border-color] duration-200"
        >
          {copy.cta}
          <ArrowUpRight size={16} />
        </a>
      </div>
    </section>
  );
}
