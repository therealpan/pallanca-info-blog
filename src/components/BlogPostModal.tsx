'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useRef, useCallback } from 'react';
import { X, Clock, Calendar } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';

interface BlogPostModalProps {
  isOpen: boolean;
  onClose: () => void;
  post: {
    slug: string;
    title: string;
    titleIt?: string;
    excerpt: string;
    excerptIt?: string;
    date: string;
    topic: string;
    readTime: number;
    content: string;
    htmlContent?: string;
  } | null;
}

const springTransition = {
  type: 'spring' as const,
  damping: 30,
  stiffness: 200,
  mass: 0.8,
};

export default function BlogPostModal({ isOpen, onClose, post }: BlogPostModalProps) {
  const locale = useLocale();
  const t = useTranslations('blog');
  const scrollYRef = useRef(0);

  const open = useCallback(() => {
    scrollYRef.current = window.scrollY;
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollYRef.current}px`;
    document.body.style.width = '100%';
  }, []);

  const close = useCallback(() => {
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.width = '';
    window.scrollTo(0, scrollYRef.current);
    onClose();
  }, [onClose]);

  useEffect(() => {
    if (isOpen) open();
    return () => {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
    };
  }, [isOpen, open]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) close();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [isOpen, close]);

  if (!post) return null;

  const title = locale === 'it' && post.titleIt ? post.titleIt : post.title;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={close}
            className="fixed inset-0 z-[99]"
            style={{
              background: 'rgba(0,0,0,0.6)',
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)',
            }}
          />

          {/* Modal */}
          <motion.div
            layoutId={`blog-card-${post.slug}`}
            transition={springTransition}
            className="fixed inset-0 z-[100] overflow-y-auto"
            style={{ background: 'var(--color-bg)' }}
          >
            {/* Close button */}
            <button
              onClick={close}
              className="fixed top-6 right-6 z-[110] w-11 h-11 rounded-full flex items-center justify-center cursor-pointer transition-transform duration-150 hover:scale-110"
              style={{
                background: 'rgba(255,255,255,0.1)',
                backdropFilter: 'blur(8px)',
                WebkitBackdropFilter: 'blur(8px)',
                border: '1px solid rgba(255,255,255,0.15)',
                color: '#fff',
              }}
              aria-label="Close"
            >
              <X size={20} />
            </button>

            {/* Content */}
            <div className="max-w-4xl mx-auto px-6 sm:px-8 py-16 pt-20">
              {/* Meta */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.4 }}
                className="flex items-center gap-3 text-sm text-[var(--color-text-muted)] mb-6"
              >
                <span className="bg-[var(--color-accent)]/10 text-[var(--color-accent)] px-2.5 py-1 rounded-full font-medium text-xs">
                  {post.topic}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar size={14} />
                  {new Date(post.date).toLocaleDateString(locale, { year: 'numeric', month: 'long', day: 'numeric' })}
                </span>
                <span className="flex items-center gap-1">
                  <Clock size={14} /> {post.readTime} {t('readTime')}
                </span>
              </motion.div>

              {/* Title */}
              <motion.h1
                layoutId={`blog-title-${post.slug}`}
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-6"
              >
                {title}
              </motion.h1>

              {/* Author */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.4 }}
                className="flex items-center gap-3 mb-10 pb-10 border-b border-white/10"
              >
                <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/20 flex items-center justify-center text-[var(--color-accent)] font-bold text-sm">
                  AP
                </div>
                <div>
                  <div className="text-sm text-white font-medium">Angelo Pallanca</div>
                  <div className="text-xs text-[var(--color-text-muted)]">Digital Transformation & AI Governance</div>
                </div>
              </motion.div>

              {/* Article body */}
              <motion.article
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="prose prose-invert prose-xl max-w-none font-[family-name:var(--font-source-serif)]
                  prose-headings:text-white prose-headings:font-bold prose-headings:font-[family-name:var(--font-inter)]
                  prose-headings:mt-14 prose-headings:mb-6
                  prose-p:text-[var(--color-text-muted)] prose-p:leading-[1.9] prose-p:mb-8 prose-p:text-lg
                  prose-a:text-[var(--color-accent)] prose-a:no-underline hover:prose-a:underline
                  prose-strong:text-white
                  prose-blockquote:border-[var(--color-accent)] prose-blockquote:text-[var(--color-text-muted)]
                  prose-blockquote:bg-[rgba(96,165,250,0.05)] prose-blockquote:rounded-r-lg
                  prose-blockquote:py-5 prose-blockquote:px-8 prose-blockquote:my-12
                  prose-blockquote:text-xl prose-blockquote:italic prose-blockquote:leading-relaxed
                  prose-hr:my-14 prose-hr:border-white/10
                  prose-li:mb-3 prose-li:text-lg
                  prose-code:text-[var(--color-accent)] prose-pre:bg-white/5 prose-pre:border prose-pre:border-white/10"
                dangerouslySetInnerHTML={{ __html: post.htmlContent || '' }}
              />

              {/* CTA bottom */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.4 }}
                className="mt-16 glass-card p-8 text-center"
              >
                <p className="text-lg text-white font-medium mb-4">
                  {t('discussCta')}
                </p>
                <a
                  href="https://cal.com/panbiz/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 glass-card !rounded-full px-8 py-3 text-sm font-medium text-white hover:bg-white hover:text-[var(--color-bg)] transition-all"
                >
                  {t('bookCall')}
                </a>
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
