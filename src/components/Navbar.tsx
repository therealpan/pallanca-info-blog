'use client';

import { useTranslations } from 'next-intl';
import { Link, usePathname } from '@/i18n/navigation';
import { useLocale } from 'next-intl';
import { useRouter } from '@/i18n/navigation';
import { useState, useEffect, useCallback } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

const SCROLL_DISTANCE = 150;
const MAX_CROP = 38; // percentage cropped from each side at full scroll

export default function Navbar() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [cropPercent, setCropPercent] = useState(0);

  const handleScroll = useCallback(() => {
    const progress = Math.min(window.scrollY / SCROLL_DISTANCE, 1);
    setCropPercent(progress * MAX_CROP);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const links = [
    { href: '/' as const, label: t('home') },
    { href: '/about' as const, label: t('about') },
    { href: '/services' as const, label: t('services') },
    { href: '/blog' as const, label: t('blog') },
    { href: '/contact' as const, label: t('contact') },
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
            <div
              style={{
                clipPath: `inset(0 ${cropPercent}% 0 ${cropPercent}%)`,
                transition: 'clip-path 0.15s ease-out',
              }}
            >
              <Image
                src="/images/logos/logo_panW.webp"
                alt="Angelo Pallanca"
                width={168}
                height={59}
                className="h-auto"
              />
            </div>
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
              className="glass-card !rounded-full px-5 py-2 text-sm font-medium text-white hover:bg-white hover:text-[var(--color-bg)] transition-all cursor-pointer"
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
              className="glass-card !rounded-full px-5 py-2 text-sm font-medium text-white hover:bg-white hover:text-[var(--color-bg)] transition-all"
            >
              {t('cta')}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
