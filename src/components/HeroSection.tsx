'use client';

import { useTranslations, useLocale } from 'next-intl';
import Image from 'next/image';
import { useRef } from 'react';
import BlogCard from '@/components/BlogCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface HeroPost {
  slug: string;
  title: string;
  titleIt?: string;
  excerpt: string;
  excerptIt?: string;
  date: string;
  topic: string;
  readTime: number;
}

export default function HeroSection({ posts }: { posts: HeroPost[] }) {
  const t = useTranslations('hero');
  const locale = useLocale();
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const cardWidth = scrollRef.current.querySelector('div')?.offsetWidth || 300;
    const gap = 16;
    const distance = cardWidth + gap;
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -distance : distance,
      behavior: 'smooth',
    });
  };

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/photos/pallanca_info_bg03.webp"
          alt=""
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-bg)]/60 via-[var(--color-bg)]/30 to-[var(--color-bg)]/95"></div>
      </div>

      {/* Main hero content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 flex-1 flex flex-col items-center justify-center pt-24">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight whitespace-pre-line">
          {t('headline')}
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-[var(--color-text-muted)] max-w-2xl mx-auto leading-relaxed">
          {t('subheadline')}
        </p>
        <div className="mt-10">
          <a
            href="https://cal.com/panbiz/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-[var(--color-bg)] px-8 py-3.5 rounded-full text-base font-medium hover:bg-white/90 transition-colors"
          >
            {t('cta')}
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>

      {/* Blog cards carousel */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pb-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-sm font-medium text-[var(--color-text-muted)] uppercase tracking-wider">
            {locale === 'it' ? 'Ultimi dal blog' : 'Latest from the blog'}
          </h2>
          <div className="flex items-center gap-2">
            <button
              onClick={() => scroll('left')}
              className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-[var(--color-text-muted)] hover:bg-white hover:text-[var(--color-bg)] transition-all cursor-pointer"
              aria-label="Previous"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-[var(--color-text-muted)] hover:bg-white hover:text-[var(--color-bg)] transition-all cursor-pointer"
              aria-label="Next"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-2"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {posts.map((post) => (
            <div key={post.slug} className="min-w-[280px] md:min-w-[300px] lg:min-w-0 lg:flex-1 snap-start">
              <BlogCard
                slug={post.slug}
                title={post.title}
                titleIt={post.titleIt}
                excerpt={post.excerpt}
                excerptIt={post.excerptIt}
                date={post.date}
                topic={post.topic}
                readTime={post.readTime}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Animated scroll indicator */}
      <div className="relative z-10 pb-8 flex justify-center animate-bounce">
        <a href="#below-fold" className="flex flex-col items-center gap-2 text-[var(--color-text-muted)] hover:text-white transition-colors">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
}
