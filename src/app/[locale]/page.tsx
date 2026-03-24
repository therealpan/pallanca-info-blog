import { setRequestLocale } from 'next-intl/server';
import { getAllPosts } from '@/lib/blog';
import { markdownToHtml } from '@/lib/markdown';
import HeroSection from '@/components/HeroSection';
import ClientLogos from '@/components/ClientLogos';
import ServicesPreview from '@/components/ServicesPreview';
import BooksSection from '@/components/BooksSection';

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const rawPosts = getAllPosts();

  // Pre-render markdown to HTML for modal display
  const posts = await Promise.all(
    rawPosts.map(async (post) => {
      const localizedContent = locale === 'it' && post.contentIt ? post.contentIt : post.contentEn;
      return {
        ...post,
        htmlContent: await markdownToHtml(localizedContent),
      };
    })
  );

  return (
    <>
      <HeroSection posts={posts} />

      <div id="below-fold">
        <ServicesPreview />
        <BooksSection />
        <ClientLogos />
      </div>
    </>
  );
}
