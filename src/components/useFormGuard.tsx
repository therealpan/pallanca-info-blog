'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

// Client side of src/lib/formGuard.ts: signed form token, honeypot,
// optional Cloudflare Turnstile (only if NEXT_PUBLIC_TURNSTILE_SITE_KEY is set).

type TurnstileApi = {
  render: (el: HTMLElement, opts: Record<string, unknown>) => string;
  reset: (id: string) => void;
  remove: (id: string) => void;
};
declare global {
  interface Window { turnstile?: TurnstileApi }
}

// Public Turnstile site key (not a secret); the widget also covers pallanca.net.
const TS_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || '0x4AAAAAAFt4NXpFigjtb52l';
const TS_SRC = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';

function loadTurnstile(): Promise<TurnstileApi> {
  return new Promise((resolve, reject) => {
    if (window.turnstile) return resolve(window.turnstile);
    let s = document.querySelector<HTMLScriptElement>(`script[src="${TS_SRC}"]`);
    if (!s) {
      s = document.createElement('script');
      s.src = TS_SRC;
      s.async = true;
      document.head.appendChild(s);
    }
    s.addEventListener('load', () => (window.turnstile ? resolve(window.turnstile) : reject()));
    s.addEventListener('error', () => reject());
  });
}

export function useFormGuard(action: string) {
  const [formToken, setFormToken] = useState('');
  const [honeypot, setHoneypot] = useState('');
  const [tsToken, setTsToken] = useState('');
  const [tsState, setTsState] = useState<'off' | 'pending' | 'ready' | 'error'>(TS_SITE_KEY ? 'pending' : 'off');
  const tsRef = useRef<HTMLDivElement>(null);
  const tsId = useRef<string | null>(null);

  // Signed token, issued at page load and valid 24h. Not refreshed on retry:
  // a fresh token would restart the 3-second time trap.
  useEffect(() => {
    fetch('/api/form-token', { cache: 'no-store' })
      .then((r) => r.json())
      .then((d) => { if (d.ok) setFormToken(d.token); })
      .catch(() => {});
  }, []);

  useEffect(() => {
    if (!TS_SITE_KEY) return;
    let cancelled = false;
    loadTurnstile()
      .then((ts) => {
        if (cancelled || !tsRef.current || tsId.current) return;
        tsId.current = ts.render(tsRef.current, {
          sitekey: TS_SITE_KEY,
          action,
          theme: 'dark',
          callback: (t: string) => { setTsToken(t); setTsState('ready'); },
          'expired-callback': () => { setTsToken(''); setTsState('pending'); },
          'error-callback': () => { setTsToken(''); setTsState('error'); },
        });
      })
      .catch(() => setTsState('error'));
    return () => {
      cancelled = true;
      if (tsId.current && window.turnstile) window.turnstile.remove(tsId.current);
      tsId.current = null;
    };
  }, [action]);

  // Turnstile tokens are single-use: call after every failed submit.
  const reset = useCallback(() => {
    setTsToken('');
    if (tsId.current && window.turnstile) {
      setTsState('pending');
      window.turnstile.reset(tsId.current);
    }
  }, []);

  const payload = () => ({ fax: honeypot, formToken, turnstile: tsToken });

  const fields = (
    <>
      <input
        type="text"
        name="fax"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        value={honeypot}
        onChange={(e) => setHoneypot(e.target.value)}
        style={{ position: 'absolute', left: '-9999px', width: 1, height: 1, opacity: 0 }}
      />
      {TS_SITE_KEY && <div ref={tsRef} style={{ minHeight: 65 }} />}
    </>
  );

  return { fields, payload, reset, pending: tsState === 'pending' };
}
