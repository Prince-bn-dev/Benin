'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Reveal from '@/components/ui/Reveal';
import { amazonsSection, amazonePoints } from '@/data/content';
import styles from './Amazons.module.scss';

// ==========================================================================
// Amazons — Force & Élégance : l'âme du Bénin est une femme
// ==========================================================================

export default function Amazons() {
  return (
    <section className={styles.section} id="culture">
      <div className={styles.inner}>
        <motion.div
          className={styles.art}
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src={amazonsSection.imageLeft}
            alt="Profil de femme au style des peintures traditionnelles"
            width={330}
            height={430}
            className={styles.artImg}
          />
        </motion.div>

        <div className={styles.center}>
          <Reveal>
            <span className={styles.overline}>{amazonsSection.overline}</span>
            <h2 className={styles.title}>{amazonsSection.title}</h2>
            <p className={styles.text}>{amazonsSection.text}</p>
          </Reveal>

          <div className={styles.points}>
            {amazonePoints.map((point, i) => (
              <motion.div
                key={point.num}
                className={styles.point}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, delay: 0.15 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className={styles.pointNum}>{point.num}</span>
                <div>
                  <h3 className={styles.pointTitle}>{point.title}</h3>
                  <p className={styles.pointText}>{point.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          className={`${styles.art} ${styles.artRight}`}
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src={amazonsSection.imageRight}
            alt="Profil de femme au style des peintures traditionnelles"
            width={330}
            height={430}
            className={styles.artImg}
          />
        </motion.div>
      </div>
    </section>
  );
}
