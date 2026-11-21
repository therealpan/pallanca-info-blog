import { getAllPosts } from '@/lib/blog';
import { getAllServiceSlugs } from '@/lib/services-data';
import type { MetadataRoute } from 'next';

// Canonical host: the site is served on www (the apex redirects there),
// so every URL in the sitemap must use www to avoid "page with redirect".
const BASE_URL = 'https://www.pallanca.info';
const locales = ['en', 'it'] as const;

type Entry = MetadataRoute.Sitemap[number];

// One entry per locale, each declaring its language alternates (hreflang).
function localized(
  path: string,
  opts: { lastModified: Date; changeFrequency: Entry['changeFrequency']; priority: number }
): MetadataRoute.Sitemap {
  const languages = {
    en: `${BASE_URL}/en${path}`,
    it: `${BASE_URL}/it${path}`,
    'x-default': `${BASE_URL}/en${path}`,
  };
  return locales.map((locale) => ({
    url: `${BASE_URL}/${locale}${path}`,
    lastModified: opts.lastModified,
    changeFrequency: opts.changeFrequency,
    priority: opts.priority,
    alternates: { languages },
  }));
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const posts = getAllPosts().filter((p) => new Date(p.date) <= now);
  const latestPost = posts.length ? new Date(posts[0].date) : now;

  const staticPages: { path: string; changeFrequency: Entry['changeFrequency']; priority: number }[] = [
    { path: '', changeFrequency: 'weekly', priority: 1.0 },
    { path: '/blog', changeFrequency: 'weekly', priority: 0.9 },
    { path: '/services', changeFrequency: 'monthly', priority: 0.9 },
    { path: '/about', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/clients', changeFrequency: 'monthly', priority: 0.7 },
    { path: '/demo', changeFrequency: 'monthly', priority: 0.7 },
    { path: '/eu-ai-act-checklist', changeFrequency: 'monthly', priority: 0.7 },
    { path: '/podcast', changeFrequency: 'monthly', priority: 0.6 },
    { path: '/proposal', changeFrequency: 'yearly', priority: 0.6 },
    { path: '/contact', changeFrequency: 'yearly', priority: 0.6 },
    { path: '/privacy-policy', changeFrequency: 'yearly', priority: 0.2 },
    { path: '/terms-of-service', changeFrequency: 'yearly', priority: 0.2 },
  ];

  const staticEntries = staticPages.flatMap((p) =>
    localized(p.path, {
      lastModified: p.path === '' || p.path === '/blog' ? latestPost : now,
      changeFrequency: p.changeFrequency,
      priority: p.priority,
    })
  );

  const serviceEntries = getAllServiceSlugs().flatMap((slug) =>
    localized(`/services/${slug}`, { lastModified: now, changeFrequency: 'monthly', priority: 0.8 })
  );

  const blogEntries = posts.flatMap((post) =>
    localized(`/blog/${post.slug}`, {
      lastModified: new Date(post.date),
      changeFrequency: 'monthly',
      priority: 0.7,
    })
  );

  return [...staticEntries, ...serviceEntries, ...blogEntries];
}
