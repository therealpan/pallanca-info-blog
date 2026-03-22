import { setRequestLocale } from 'next-intl/server';
import { getAllPosts } from '@/lib/blog';
import HeroSection from '@/components/HeroSection';
import ClientLogos from '@/components/ClientLogos';
import ServicesPreview from '@/components/ServicesPreview';

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const posts = getAllPosts();

  return (
    <>
      <HeroSection posts={posts} />

      <div id="below-fold">
        <ServicesPreview />
        <ClientLogos />
      </div>
    </>
  );
}
