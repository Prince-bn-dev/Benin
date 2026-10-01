'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Reveal from '@/components/ui/Reveal';
import { historySection, historyStats } from '@/data/content';
import styles from './History.module.scss';

// ==========================================================================
// History — Histoire & Mémoire : le mur qui raconte douze rois
// ==========================================================================

export default function History() {
  return (
    <section className={styles.section} id="histoire">
      <div className={styles.inner}>
        <motion.div
          className={styles.media}
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className={styles.figure}>
            <Image
              src={historySection.image}
              alt="Statues de bronze des rois du Danxomè"
              width={640}
              height={640}
              className={styles.img}
            />
          </div>
          <motion.div
            className={styles.caption}
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            <strong className={styles.captionTitle}>
              {historySection.caption.title}
            </strong>
            <p className={styles.captionText}>{historySection.caption.text}</p>
          </motion.div>
        </motion.div>

        <div className={styles.body}>
          <Reveal direction="right" amount={0.3}>
            <span className={styles.overline}>{historySection.overline}</span>
            <h2 className={styles.title}>{historySection.title}</h2>
            <p className={styles.text}>{historySection.text}</p>

            <div className={styles.stats}>
              {historyStats.map((s) => (
                <div key={s.label} className={styles.stat}>
                  <span className={styles.statValue}>{s.value}</span>
                  <span className={styles.statLabel}>{s.label}</span>
                </div>
              ))}
            </div>

            <a href="#lieux" className={styles.cta}>
              {historySection.cta} <span aria-hidden>→</span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
