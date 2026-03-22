import { setRequestLocale } from 'next-intl/server';
import { getAllPosts } from '@/lib/blog';
import BlogCard from '@/components/BlogCard';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return {
    title: 'Blog',
    description:
      locale === 'it'
        ? 'Riflessioni su AI, innovazione e consulenza tecnologica.'
        : 'Thoughts on AI, innovation, and technology consulting.',
  };
}

export default async function BlogPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const posts = getAllPosts();

  return (
    <div className="pt-24 pb-16">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl sm:text-5xl font-bold text-white">Blog</h1>
        <p className="mt-4 text-lg text-[var(--color-text-muted)]">
          {locale === 'it'
            ? 'Riflessioni su AI, innovazione e consulenza tecnologica.'
            : 'Thoughts on AI, innovation, and technology consulting.'}
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
    </div>
  );
}
