'use client';

import { fireCustom } from './Analytics';

export default function CtaButton({ href = '#anunciar', className, children, eventName = 'CTAClick' }) {
  function handleClick() {
    fireCustom(eventName, { label: typeof children === 'string' ? children : undefined });
  }

  return (
    <a href={href} className={className} onClick={handleClick}>
      {children}
    </a>
  );
}
