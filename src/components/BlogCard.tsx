'use client';

import { Link } from '@/i18n/navigation';
import { useLocale, useTranslations } from 'next-intl';
import { Clock, ArrowRight } from 'lucide-react';

interface BlogCardProps {
  slug: string;
  title: string;
  titleIt?: string;
  excerpt: string;
  excerptIt?: string;
  date: string;
  topic: string;
  readTime: number;
}

export default function BlogCard({
  slug, title, titleIt, excerpt, excerptIt, date, topic, readTime,
}: BlogCardProps) {
  const locale = useLocale();
  const t = useTranslations('blog');
  const displayTitle = locale === 'it' && titleIt ? titleIt : title;
  const displayExcerpt = locale === 'it' && excerptIt ? excerptIt : excerpt;

  return (
    <Link href={`/blog/${slug}`} className="glass-card p-6 flex flex-col gap-4 group">
      <div className="flex items-center gap-3 text-xs text-[var(--color-text-muted)]">
        <span className="bg-[var(--color-accent)]/10 text-[var(--color-accent)] px-2.5 py-1 rounded-full font-medium">
          {topic}
        </span>
        <span>{new Date(date).toLocaleDateString(locale, { year: 'numeric', month: 'short', day: 'numeric' })}</span>
        <span className="flex items-center gap-1">
          <Clock size={12} /> {readTime} {t('readTime')}
        </span>
      </div>
      <h3 className="text-lg font-semibold text-white group-hover:text-[var(--color-accent)] transition-colors line-clamp-2">
        {displayTitle}
      </h3>
      <p className="text-sm text-[var(--color-text-muted)] line-clamp-3 flex-1">
        {displayExcerpt}
      </p>
      <div className="flex items-center gap-1 text-[var(--color-accent)] text-sm font-medium group-hover:gap-2 transition-all">
        {locale === 'it' ? 'Leggi' : 'Read more'} <ArrowRight size={14} />
      </div>
    </Link>
  );
}
