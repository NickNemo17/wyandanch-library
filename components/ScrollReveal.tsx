'use client';

import { useInView } from '@/lib/useInView';

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
}

export function ScrollReveal({ children, delay = 0 }: ScrollRevealProps) {
  const { ref, isVisible } = useInView();
  return (
    <div
      ref={ref}
      className={`scroll-reveal ${isVisible ? 'visible' : ''}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
}
