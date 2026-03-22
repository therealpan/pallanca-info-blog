import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import { notFound } from 'next/navigation';
import '@/app/globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const isIt = locale === 'it';

  const title = 'Angelo Pallanca | Innovation & AI Consulting';
  const description = isIt
    ? 'Consulente innovazione e AI con 30 anni di esperienza. Aiuto organizzazioni a portare progetti AI in produzione.'
    : 'Innovation and AI consultant with 30 years of experience. I help organizations ship AI projects to production.';

  return {
    title: {
      default: title,
      template: '%s | Angelo Pallanca',
    },
    description,
    metadataBase: new URL('https://pallanca.info'),
    alternates: {
      canonical: '/',
      languages: {
        en: '/en',
        it: '/it',
      },
    },
    authors: [{ name: 'Angelo Pallanca', url: 'https://pallanca.info' }],
    creator: 'Angelo Pallanca',
    publisher: 'Angelo Pallanca',
    keywords: isIt
      ? ['consulente innovazione', 'consulente AI', 'AI enterprise', 'trasformazione digitale', 'interim management', 'Angelo Pallanca']
      : ['innovation consultant', 'AI consultant', 'enterprise AI', 'digital transformation', 'interim management', 'Angelo Pallanca'],
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    icons: {
      icon: [
        { url: '/favicon.ico', sizes: 'any' },
        { url: '/images/icons/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
        { url: '/images/icons/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
        { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
      ],
      apple: [
        { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
      ],
    },
    manifest: '/site.webmanifest',
    openGraph: {
      type: 'website',
      locale: isIt ? 'it_IT' : 'en_US',
      alternateLocale: isIt ? 'en_US' : 'it_IT',
      url: 'https://pallanca.info',
      siteName: 'Angelo Pallanca',
      title,
      description,
      images: [
        {
          url: '/images/photos/og-image.jpg',
          width: 1200,
          height: 630,
          alt: 'Angelo Pallanca - Innovation & AI Consultant',
          type: 'image/jpeg',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/images/photos/og-image.jpg'],
      creator: '@angelopallanca',
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as 'en' | 'it')) {
    notFound();
  }
  setRequestLocale(locale);
  const messages = await getMessages();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': 'https://pallanca.info/#person',
        name: 'Angelo Pallanca',
        url: 'https://pallanca.info',
        image: {
          '@type': 'ImageObject',
          url: 'https://pallanca.info/images/photos/og-image.jpg',
        },
        sameAs: [
          'https://linkedin.com/in/angelopallanca/',
        ],
        jobTitle: 'Innovation & AI Consultant',
        description: 'Innovation and AI consultant with 30 years of experience in technology and digital transformation.',
        knowsAbout: ['Artificial Intelligence', 'Innovation Consulting', 'Digital Transformation', 'Enterprise AI', 'Project Management', 'Interim Management'],
      },
      {
        '@type': 'ProfessionalService',
        '@id': 'https://pallanca.info/#service',
        name: 'Angelo Pallanca - Innovation & AI Consulting',
        url: 'https://pallanca.info',
        logo: {
          '@type': 'ImageObject',
          url: 'https://pallanca.info/images/logos/logo_pan_microdata.png',
        },
        image: 'https://pallanca.info/images/photos/og-image.jpg',
        description: 'Innovation consulting, AI strategy, solution scouting, project and interim management.',
        founder: { '@id': 'https://pallanca.info/#person' },
        areaServed: 'Europe',
        serviceType: ['Innovation Consulting', 'AI Strategy', 'Solution Scouting', 'Project Management', 'Interim Management'],
        contactPoint: {
          '@type': 'ContactPoint',
          email: 'angelo@pallanca.info',
          contactType: 'customer service',
          url: 'https://cal.com/panbiz/30min',
        },
      },
      {
        '@type': 'WebSite',
        '@id': 'https://pallanca.info/#website',
        url: 'https://pallanca.info',
        name: 'Angelo Pallanca',
        publisher: { '@id': 'https://pallanca.info/#person' },
        inLanguage: ['en', 'it'],
      },
    ],
  };

  return (
    <html lang={locale} className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)] antialiased">
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
