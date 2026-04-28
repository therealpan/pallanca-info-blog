import type { Metadata } from 'next';

const SITE_URL = 'https://pallanca.info';
const SITE_NAME = 'Angelo Pallanca';
const TWITTER_HANDLE = '@angelopallanca';
const DEFAULT_OG_IMAGE = '/images/photos/og-image.jpg';

function inferImageMime(path: string): string {
  const lower = path.toLowerCase();
  if (lower.endsWith('.png')) return 'image/png';
  if (lower.endsWith('.webp')) return 'image/webp';
  if (lower.endsWith('.gif')) return 'image/gif';
  return 'image/jpeg';
}

interface BuildPageMetadataInput {
  locale: string;
  /**
   * Path within the locale, with leading slash. Use '/' for the locale root.
   * Examples: '/', '/about', '/blog', '/blog/my-slug', '/services/strategy-sprint'.
   */
  path: string;
  title: string;
  description: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  authors?: string[];
  tags?: string[];
  /** Absolute or root-relative path to the social image. */
  image?: string;
  noIndex?: boolean;
}

/**
 * Centralized helper for per-page Next.js metadata. Ensures every page emits
 * its own canonical, og:url, og:title/description, twitter card, and language
 * alternates. Without this, child pages inherit the root layout values and
 * social crawlers (Facebook, LinkedIn, WhatsApp, Slack) render the homepage
 * preview for every shared URL.
 */
export function buildPageMetadata({
  locale,
  path,
  title,
  description,
  type = 'website',
  publishedTime,
  authors,
  tags,
  image,
  noIndex,
}: BuildPageMetadataInput): Metadata {
  const isIt = locale === 'it';
  const otherLocale = isIt ? 'en' : 'it';

  const normalizedPath = path === '/' ? '' : path.startsWith('/') ? path : `/${path}`;
  const url = `${SITE_URL}/${locale}${normalizedPath}`;
  const enUrl = `${SITE_URL}/en${normalizedPath}`;
  const itUrl = `${SITE_URL}/it${normalizedPath}`;

  const ogImage = image || DEFAULT_OG_IMAGE;

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        en: enUrl,
        it: itUrl,
        'x-default': enUrl,
      },
    },
    ...(noIndex && { robots: { index: false, follow: false } }),
    openGraph: {
      type,
      title,
      description,
      url,
      siteName: SITE_NAME,
      locale: isIt ? 'it_IT' : 'en_US',
      alternateLocale: isIt ? 'en_US' : 'it_IT',
      ...(publishedTime && { publishedTime }),
      ...(authors && authors.length > 0 && { authors }),
      ...(tags && tags.length > 0 && { tags }),
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
          type: inferImageMime(ogImage),
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
      creator: TWITTER_HANDLE,
    },
  };
}
