import { setRequestLocale } from 'next-intl/server';
import { getAllPosts, getPostBySlug } from '@/lib/blog';
import { markdownToHtml } from '@/lib/markdown';
import { notFound } from 'next/navigation';
import { Link } from '@/i18n/navigation';
import { ArrowLeft, Clock, Calendar } from 'lucide-react';
import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/metadata';

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string; locale: string }> }): Promise<Metadata> {
  const { slug, locale } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  const isIt = locale === 'it';
  const title = isIt && post.titleIt ? post.titleIt : post.title;
  const description = isIt && post.excerptIt ? post.excerptIt : post.excerpt;

  return buildPageMetadata({
    locale,
    path: `/blog/${slug}`,
    title,
    description,
    type: 'article',
    publishedTime: post.date,
    authors: ['Angelo Pallanca'],
    tags: [post.topic],
    image: post.image,
  });
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string; locale: string }> }) {
  const { slug, locale } = await params;
  setRequestLocale(locale);
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const localizedContent = locale === 'it' && post.contentIt ? post.contentIt : post.contentEn;
  const html = await markdownToHtml(localizedContent);
  const title = locale === 'it' && post.titleIt ? post.titleIt : post.title;

  return (
    <div className="pt-24 pb-16">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1 text-[var(--color-accent)] text-sm mb-8 hover:gap-2 transition-[gap] duration-200"
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
            <div className="text-xs text-[var(--color-text-muted)]">Digital Transformation & AI Governance</div>
          </div>
        </div>
      </section>

      {/* Article content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="prose prose-invert prose-xl max-w-none font-[family-name:var(--font-source-serif)]
            prose-headings:text-white prose-headings:font-bold prose-headings:font-[family-name:var(--font-inter)]
            prose-headings:mt-14 prose-headings:mb-6
            prose-p:text-[var(--color-text-muted)] prose-p:leading-[1.9] prose-p:mb-8 prose-p:text-lg
            prose-a:text-[var(--color-accent)] prose-a:no-underline hover:prose-a:underline
            prose-strong:text-white
            prose-blockquote:border-[var(--color-accent)] prose-blockquote:text-[var(--color-text-muted)]
            prose-blockquote:bg-[rgba(96,165,250,0.05)] prose-blockquote:rounded-r-lg
            prose-blockquote:py-5 prose-blockquote:px-8 prose-blockquote:my-12
            prose-blockquote:text-xl prose-blockquote:italic prose-blockquote:leading-relaxed
            prose-hr:my-14 prose-hr:border-white/10
            prose-li:mb-3 prose-li:text-lg
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
            href={`/${locale}/proposal`}
            className="inline-flex items-center gap-2 bg-white text-[var(--color-bg)] px-8 py-3 rounded-full text-sm font-medium hover:bg-white/90 transition-[background,color,transform] duration-200"
          >
            {locale === 'it' ? 'Richiedi una proposta' : 'Request a proposal'}
          </a>
        </div>
      </section>

    </div>
  );
}
