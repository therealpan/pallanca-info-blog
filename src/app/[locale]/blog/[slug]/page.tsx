import { setRequestLocale } from 'next-intl/server';
import { getAllPosts, getPostBySlug } from '@/lib/blog';
import { markdownToHtml } from '@/lib/markdown';
import { notFound } from 'next/navigation';
import { Link } from '@/i18n/navigation';
import { ArrowLeft, Clock, Calendar } from 'lucide-react';

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string; locale: string }> }) {
  const { slug, locale } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  const title = locale === 'it' && post.titleIt ? post.titleIt : post.title;
  return {
    title,
    description: locale === 'it' && post.excerptIt ? post.excerptIt : post.excerpt,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string; locale: string }> }) {
  const { slug, locale } = await params;
  setRequestLocale(locale);
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const html = await markdownToHtml(post.content);
  const title = locale === 'it' && post.titleIt ? post.titleIt : post.title;

  return (
    <div className="pt-24 pb-16">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1 text-[var(--color-accent)] text-sm mb-8 hover:gap-2 transition-all"
        >
          <ArrowLeft size={14} /> {locale === 'it' ? 'Torna al blog' : 'Back to blog'}
        </Link>

        <div className="flex items-center gap-3 text-sm text-[var(--color-text-muted)] mb-4">
          <span className="bg-[var(--color-accent)]/10 text-[var(--color-accent)] px-2.5 py-1 rounded-full font-medium text-xs">
            {post.topic}
          </span>
          <span className="flex items-center gap-1">
            <Calendar size={14} />
            {new Date(post.date).toLocaleDateString(locale, { year: 'numeric', month: 'long', day: 'numeric' })}
          </span>
          <span className="flex items-center gap-1">
            <Clock size={14} /> {post.readTime} {locale === 'it' ? 'min di lettura' : 'min read'}
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
          {title}
        </h1>

        <div className="flex items-center gap-3 mt-8 pt-8 border-t border-white/10">
          <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/20 flex items-center justify-center text-[var(--color-accent)] font-bold">
            AP
          </div>
          <div>
            <div className="text-sm text-white font-medium">Angelo Pallanca</div>
            <div className="text-xs text-[var(--color-text-muted)]">Innovation & AI Consultant</div>
          </div>
        </div>
      </section>

      {/* Article content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="prose prose-invert prose-lg max-w-none
            prose-headings:text-white prose-headings:font-bold
            prose-p:text-[var(--color-text-muted)] prose-p:leading-relaxed
            prose-a:text-[var(--color-accent)] prose-a:no-underline hover:prose-a:underline
            prose-strong:text-white
            prose-blockquote:border-[var(--color-accent)] prose-blockquote:text-[var(--color-text-muted)]
            prose-code:text-[var(--color-accent)] prose-pre:bg-white/5 prose-pre:border prose-pre:border-white/10"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </article>

      {/* CTA bottom */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="glass-card p-8 text-center">
          <p className="text-lg text-white font-medium mb-4">
            {locale === 'it' ? 'Ti interessa approfondire?' : 'Want to discuss this further?'}
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
