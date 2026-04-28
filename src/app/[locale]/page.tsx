import { setRequestLocale } from 'next-intl/server';
import { getAllPosts } from '@/lib/blog';
import { markdownToHtml } from '@/lib/markdown';
import HeroSection from '@/components/HeroSection';
import HomeClosingCTA from '@/components/HomeClosingCTA';
import ServicesPreview from '@/components/ServicesPreview';
import BooksSection from '@/components/BooksSection';
import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/metadata';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const isIt = locale === 'it';
  return buildPageMetadata({
    locale,
    path: '/',
    title: 'Angelo Pallanca | Digital Transformation & AI Governance',
    description: isIt
      ? 'Consulente innovazione e AI con 30 anni di esperienza. Aiuto organizzazioni a portare progetti AI in produzione.'
      : 'Innovation and AI consultant with 30 years of experience. I help organizations ship AI projects to production.',
  });
}

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
        <HomeClosingCTA />
      </div>
    </>
  );
}
