'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Linkedin, Mail } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
  const t = useTranslations('footer');
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <Image src="/images/logos/logo_panW.png" alt="Angelo Pallanca" width={32} height={32} />
            <span className="text-sm text-[var(--color-text-muted)]">
              &copy; {year} Angelo Pallanca. {t('rights')}
            </span>
          </div>

          <div className="flex items-center gap-6">
            <Link href="/" className="text-sm text-[var(--color-text-muted)] hover:text-white transition-colors">
              {t('privacy')}
            </Link>
            <Link href="/" className="text-sm text-[var(--color-text-muted)] hover:text-white transition-colors">
              {t('terms')}
            </Link>
            <a
              href="https://linkedin.com/in/angelopallanca/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-text-muted)] hover:text-white transition-colors"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="mailto:angelo@pallanca.info"
              className="text-[var(--color-text-muted)] hover:text-white transition-colors"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
