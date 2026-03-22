import { getAllPosts } from '@/lib/blog';
import type { MetadataRoute } from 'next';

const BASE_URL = 'https://pallanca.info';
const locales = ['en', 'it'];

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();

  const staticPages = ['', '/about', '/services', '/blog', '/contact', '/privacy-policy', '/terms-of-service'];

  const staticEntries = staticPages.flatMap((page) =>
    locales.map((locale) => ({
      url: `${BASE_URL}/${locale}${page}`,
      lastModified: new Date(),
      changeFrequency: page === '' ? 'weekly' as const : 'monthly' as const,
      priority: page === '' ? 1.0 : page === '/blog' ? 0.9 : 0.7,
    }))
  );

  const blogEntries = posts.flatMap((post) =>
    locales.map((locale) => ({
      url: `${BASE_URL}/${locale}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    }))
  );

  return [...staticEntries, ...blogEntries];
}
