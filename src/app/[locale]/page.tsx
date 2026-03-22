import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { getAllPosts } from '@/lib/blog';
import HeroSection from '@/components/HeroSection';
import BlogCard from '@/components/BlogCard';
import ClientLogos from '@/components/ClientLogos';
import ServicesPreview from '@/components/ServicesPreview';
import { Link } from '@/i18n/navigation';
import { ArrowRight } from 'lucide-react';

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const posts = getAllPosts().slice(0, 4);

  return (
    <>
      <HeroSection />

      <ServicesPreview />

      <ClientLogos />

      {/* Blog section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-2xl font-bold text-white">
            {locale === 'it' ? 'Ultimi dal blog' : 'Latest from the blog'}
          </h2>
          <Link
            href="/blog"
            className="flex items-center gap-1 text-[var(--color-accent)] text-sm hover:gap-2 transition-all"
          >
            {locale === 'it' ? 'Tutti gli articoli' : 'View all posts'} <ArrowRight size={14} />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {posts.map((post) => (
            <BlogCard
              key={post.slug}
              slug={post.slug}
              title={post.title}
              titleIt={post.titleIt}
              excerpt={post.excerpt}
              excerptIt={post.excerptIt}
              date={post.date}
              topic={post.topic}
              readTime={post.readTime}
            />
          ))}
        </div>
      </section>
    </>
  );
}
