'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { masqueSection, masqueStats } from '@/data/content';
import styles from './Masque.module.scss';

// ==========================================================================
// Masque — « Le Masque Parle », section sombre finale
// ==========================================================================

export default function Masque() {
  return (
    <section className={styles.section}>
      <div className={styles.decor} aria-hidden>
        <Image src={masqueSection.decor} alt="" width={220} height={220} />
        <Image src={masqueSection.decor} alt="" width={220} height={220} />
      </div>

      <motion.div
        className={styles.inner}
        initial={{ opacity: 0, y: 34 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className={styles.overline}>{masqueSection.overline}</span>
        <h2 className={styles.title}>{masqueSection.title}</h2>
        <p className={styles.text}>{masqueSection.text}</p>

        <div className={styles.stats}>
          {masqueStats.map((stat) => (
            <div key={stat.label} className={styles.stat}>
              <span className={styles.statValue}>{stat.value}</span>
              <span className={styles.statLabel}>{stat.label}</span>
            </div>
          ))}
        </div>

        <a href="#accueil" className={styles.cta}>
          {masqueSection.cta} <span aria-hidden>→</span>
        </a>
      </motion.div>
    </section>
  );
}
