'use client';

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { hero } from '@/data/content';
import styles from './Hero.module.scss';

// ==========================================================================
// Hero — image drapeau réelle, parallaxe, apparition échelonnée
// ==========================================================================

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '32%']);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section className={styles.hero} ref={ref} id="accueil">
      <motion.div className={styles.bg} style={{ y: bgY }}>
        <Image
          src={hero.image}
          alt="Drapeau du Bénin et objets culturels : masque, tambour, poterie et bronze"
          fill
          priority
          sizes="100vw"
          className={styles.bgImg}
        />
      </motion.div>

      <motion.div className={styles.content} style={{ y: contentY, opacity: fade }}>
        <motion.h1
          className={styles.title}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease }}
        >
          {hero.titleA} <span className={styles.gold}>{hero.titleGold}</span>
        </motion.h1>

        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease }}
        >
          {hero.subtitle}
        </motion.p>

        <motion.div
          className={styles.ctas}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease }}
        >
          <a href="#portes" className={styles.btnPrimary}>
            {hero.ctaPrimary}
            <span className={styles.arrow} aria-hidden>
              →
            </span>
          </a>
          <a href="#histoire" className={styles.btnGhost}>
            <span className={styles.bookIcon} aria-hidden>
              <svg viewBox="0 0 24 24" width="17" height="17" fill="none">
                <path
                  d="M12 5.5 C10 4 7 3.5 4 4 V19 C7 18.5 10 19 12 20.5 C14 19 17 18.5 20 19 V4 C17 3.5 14 4 12 5.5 Z"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinejoin="round"
                />
                <path d="M12 5.5 V20.5" stroke="currentColor" strokeWidth="1.6" />
              </svg>
            </span>
            {hero.ctaSecondary}
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        className={styles.scrollHint}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        aria-hidden
      >
        <span className={styles.mouse} />
      </motion.div>
    </section>
  );
}
