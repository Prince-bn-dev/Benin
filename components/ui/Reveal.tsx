'use client';

import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

// ==========================================================================
// Reveal — apparition scroll-triggered réutilisable
// ==========================================================================

type Direction = 'up' | 'down' | 'left' | 'right' | 'none';

interface RevealProps {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
  amount?: number;
}

const offsets: Record<Direction, { x: number; y: number }> = {
  up: { x: 0, y: 42 },
  down: { x: 0, y: -42 },
  left: { x: -48, y: 0 },
  right: { x: 48, y: 0 },
  none: { x: 0, y: 0 },
};

export default function Reveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.7,
  className,
  once = true,
  amount = 0.25,
}: RevealProps) {
  const offset = offsets[direction];

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x: offset.x, y: offset.y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
