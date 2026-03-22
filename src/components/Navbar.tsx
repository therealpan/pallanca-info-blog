'use client';

import { useTranslations } from 'next-intl';
import { Link, usePathname } from '@/i18n/navigation';
import { useLocale } from 'next-intl';
import { useRouter } from '@/i18n/navigation';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

export default function Navbar() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { href: '/', label: t('home') },
    { href: '/about', label: t('about') },
    { href: '/services', label: t('services') },
    { href: '/blog', label: t('blog') },
    { href: '/contact', label: t('contact') },
  ];

  const switchLocale = () => {
    const next = locale === 'en' ? 'it' : 'en';
    router.replace(pathname, { locale: next });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card !rounded-none !border-x-0 !border-t-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/images/logos/logo_panW.png" alt="Angelo Pallanca" width={56} height={56} />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            <div className="glass-card !rounded-full px-2 py-1 flex items-center gap-1">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-1.5 rounded-full text-sm transition-colors ${
                    pathname === link.href
                      ? 'bg-white/10 text-white'
                      : 'text-[var(--color-text-muted)] hover:text-white'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={switchLocale}
              className="glass-card !rounded-full px-3 py-1.5 text-sm text-[var(--color-text-muted)] hover:text-white transition-colors cursor-pointer"
            >
              {locale === 'en' ? 'IT' : 'EN'}
            </button>
            <a
              href="https://cal.com/panbiz/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[var(--color-bg)] px-5 py-2 rounded-full text-sm font-medium hover:bg-white/90 transition-colors"
            >
              {t('cta')}
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="md:hidden glass-card !rounded-none !border-x-0 px-4 pb-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-[var(--color-text-muted)] hover:text-white transition-colors border-b border-white/5"
            >
              {link.label}
            </Link>
          ))}
          <div className="flex items-center gap-3 pt-4">
            <button onClick={switchLocale} className="text-sm text-[var(--color-text-muted)]">
              {locale === 'en' ? 'Italiano' : 'English'}
            </button>
            <a
              href="https://cal.com/panbiz/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[var(--color-bg)] px-5 py-2 rounded-full text-sm font-medium"
            >
              {t('cta')}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
