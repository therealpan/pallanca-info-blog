'use client';

import { useEffect, useRef, useState } from 'react';
import { Check, Copy, TriangleAlert } from 'lucide-react';

type CopyState = 'idle' | 'copied' | 'error';

interface CopyButtonProps {
  text: string;
  label?: string;
  copiedLabel?: string;
  errorLabel?: string;
}

/**
 * Copies `text` to the clipboard. Three visible states: idle, copied, error.
 * The error state tells the reader to select the text by hand, which always
 * works because the text is rendered on the page next to the button.
 */
export default function CopyButton({
  text,
  label = 'Copia',
  copiedLabel = 'Copiato',
  errorLabel = 'Seleziona il testo e copialo a mano',
}: CopyButtonProps) {
  const [state, setState] = useState<CopyState>('idle');
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, []);

  async function handleCopy() {
    let ok = false;
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
        ok = true;
      }
    } catch {
      ok = false;
    }
    if (!ok) {
      try {
        const area = document.createElement('textarea');
        area.value = text;
        area.setAttribute('readonly', '');
        area.style.position = 'fixed';
        area.style.opacity = '0';
        document.body.appendChild(area);
        area.select();
        ok = document.execCommand('copy');
        document.body.removeChild(area);
      } catch {
        ok = false;
      }
    }
    setState(ok ? 'copied' : 'error');
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setState('idle'), ok ? 2000 : 4000);
  }

  const Icon = state === 'copied' ? Check : state === 'error' ? TriangleAlert : Copy;
  const text_ = state === 'copied' ? copiedLabel : state === 'error' ? errorLabel : label;

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={`inline-flex items-center gap-2 min-h-11 px-4 rounded-lg border text-sm font-medium ${
        state === 'copied'
          ? 'border-[var(--color-accent)]/50 bg-[var(--color-accent)]/12 text-[var(--color-accent)]'
          : 'border-white/12 bg-white/[0.04] text-white hover:bg-white/[0.09] hover:border-white/20'
      }`}
    >
      <Icon size={16} aria-hidden="true" />
      <span aria-live="polite">{text_}</span>
    </button>
  );
}
