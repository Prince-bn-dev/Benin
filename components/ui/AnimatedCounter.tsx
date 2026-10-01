'use client';

import { useEffect, useRef } from 'react';
import {
  useInView,
  useMotionValue,
  useSpring,
  type MotionValue,
} from 'framer-motion';

// ==========================================================================
// AnimatedCounter — compte les chiffres à l'entrée dans le viewport
// ==========================================================================

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  pad?: number; // largeur de zéro-chargement, ex. pad={2} → 03
}

export default function AnimatedCounter({
  value,
  suffix = '',
  pad = 0,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const count: MotionValue<number> = useMotionValue(0);
  const spring = useSpring(count, { duration: 1800, bounce: 0 });

  const format = (n: number) =>
    String(Math.round(n)).padStart(pad, '0') + suffix;

  useEffect(() => {
    if (inView) {
      count.set(value);
    }
  }, [inView, value, count]);

  useEffect(() => {
    const unsubscribe = spring.on('change', (latest) => {
      if (ref.current) {
        ref.current.textContent = format(latest);
      }
    });
    return unsubscribe;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [spring, suffix, pad]);

  const initial = pad ? String(0).padStart(pad, '0') : '0';

  return (
    <span ref={ref} aria-label={format(value)}>
      {initial + suffix}
    </span>
  );
}
