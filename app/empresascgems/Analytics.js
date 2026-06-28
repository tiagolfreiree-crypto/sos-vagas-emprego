'use client';

import { useEffect, useRef } from 'react';

function fire(event, params) {
  if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
    if (params) {
      window.fbq('track', event, params);
    } else {
      window.fbq('track', event);
    }
  }
}

export function fireCustom(event, params) {
  if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
    window.fbq('trackCustom', event, params || {});
  }
}

export default function Analytics() {
  const fired50 = useRef(false);
  const fired90 = useRef(false);

  useEffect(() => {
    // ViewContent assim que a LP carrega
    fire('ViewContent', { content_name: 'LP Vagas Campo Grande - Empresas' });

    function handleScroll() {
      const scrolled = window.scrollY + window.innerHeight;
      const total = document.documentElement.scrollHeight;
      const pct = (scrolled / total) * 100;

      if (pct >= 50 && !fired50.current) {
        fired50.current = true;
        fireCustom('Scroll50');
      }
      if (pct >= 90 && !fired90.current) {
        fired90.current = true;
        fireCustom('Scroll90');
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return null;
}
