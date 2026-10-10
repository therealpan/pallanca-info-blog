'use client';

import { useState, useCallback, useEffect, useRef } from 'react';
import Image from 'next/image';
import { ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react';
import { demos, type Demo, type DemoLocale } from './demos';

interface Props {
  lang: DemoLocale;
  labels: {
    openDemo: string;
    prev: string;
    next: string;
    keyboardHint: string;
    disclaimer: string;
  };
}

export default function DemoCarousel({ lang, labels }: Props) {
  const [active, setActive] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const transitionTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const total = demos.length;

  const goTo = useCallback((idx: number) => {
    const next = ((idx % total) + total) % total;
    if (next === active || isTransitioning) return;
    setIsTransitioning(true);
    setActive(next);
    if (transitionTimer.current) clearTimeout(transitionTimer.current);
    transitionTimer.current = setTimeout(() => setIsTransitioning(false), 620);
  }, [active, total, isTransitioning]);

  const prev = useCallback(() => goTo(active - 1), [active, goTo]);
  const next = useCallback(() => goTo(active + 1), [active, goTo]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') next();
      else if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [next, prev]);

  useEffect(() => () => {
    if (transitionTimer.current) clearTimeout(transitionTimer.current);
  }, []);

  // Order of preview strips: the three demos that aren't active, kept in a stable order
  const previews = demos
    .map((d, i) => ({ demo: d, originalIndex: i }))
    .filter((x) => x.originalIndex !== active);

  const current = demos[active];

  return (
    <section className="demo-root" aria-label={lang === 'it' ? 'Carosello demo' : 'Demo carousel'}>
      {/* Hero area */}
      <div className="demo-stage">
        {/* Active card */}
        <article className="demo-active" key={current.slug}>
          <div className="demo-active-media">
            <Image
              src={current.image}
              alt=""
              fill
              sizes="(max-width: 900px) 100vw, 60vw"
              priority
              className="demo-active-img"
            />
            <div className="demo-active-scrim" aria-hidden="true" />
          </div>

          <div className="demo-active-content">
            <div className="demo-eyebrow">{current.place[lang]}</div>
            <h2 className="demo-title">
              <span className="demo-title-main">{current.title[lang]}</span>
              <span className="demo-title-sub">{current.subtitle[lang]}</span>
            </h2>
            <p className="demo-desc">{current.description[lang]}</p>
            <a
              className="demo-cta"
              href={current.url}
              target="_blank"
              rel="noopener"
            >
              <span>{labels.openDemo}</span>
              <ExternalLink size={16} aria-hidden="true" />
            </a>
          </div>
        </article>

        {/* Preview column */}
        <div className="demo-previews" role="tablist" aria-label={lang === 'it' ? 'Scegli una demo' : 'Pick a demo'}>
          {previews.map(({ demo, originalIndex }) => (
            <PreviewCard
              key={demo.slug}
              demo={demo}
              lang={lang}
              onClick={() => goTo(originalIndex)}
              label={lang === 'it' ? `Apri ${demo.title.it}` : `Open ${demo.title.en}`}
            />
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className="demo-controls">
        <div className="demo-counter" aria-live="polite">
          <span className="demo-counter-num">{String(active + 1).padStart(2, '0')}</span>
          <span className="demo-counter-sep">/</span>
          <span className="demo-counter-total">{String(total).padStart(2, '0')}</span>
        </div>

        <div className="demo-progress" aria-hidden="true">
          <div className="demo-progress-bar" style={{ width: `${((active + 1) / total) * 100}%` }} />
        </div>

        <div className="demo-arrows">
          <button
            type="button"
            className="demo-arrow"
            onClick={prev}
            aria-label={labels.prev}
            disabled={isTransitioning}
          >
            <ArrowLeft size={18} aria-hidden="true" />
          </button>
          <button
            type="button"
            className="demo-arrow demo-arrow-primary"
            onClick={next}
            aria-label={labels.next}
            disabled={isTransitioning}
          >
            <ArrowRight size={18} aria-hidden="true" />
          </button>
        </div>
      </div>

      <p className="demo-hint">{labels.keyboardHint}</p>
      <p className="demo-disclaimer">{labels.disclaimer}</p>
    </section>
  );
}

function PreviewCard({
  demo,
  lang,
  onClick,
  label,
}: {
  demo: Demo;
  lang: DemoLocale;
  onClick: () => void;
  label: string;
}) {
  return (
    <button
      type="button"
      className="demo-preview"
      onClick={onClick}
      aria-label={label}
    >
      <div className="demo-preview-media">
        <Image
          src={demo.image}
          alt=""
          fill
          sizes="(max-width: 900px) 50vw, 20vw"
          className="demo-preview-img"
        />
        <div className="demo-preview-scrim" aria-hidden="true" />
      </div>
      <div className="demo-preview-caption">
        <div className="demo-preview-place">{demo.place[lang]}</div>
        <div className="demo-preview-title">{demo.title[lang]}</div>
      </div>
    </button>
  );
}
