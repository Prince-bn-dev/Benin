'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import { portals, portalsSection } from '@/data/content';
import styles from './Portals.module.scss';

// ==========================================================================
// Portals — grille bento « Six portes d'entrée »
// ==========================================================================

export default function Portals() {
  return (
    <section className={styles.section} id="portes">
      <div className={styles.inner}>
        <SectionHeading
          overline={portalsSection.overline}
          title={portalsSection.title}
          align="center"
        />

        <motion.div
          className={styles.grid}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
        >
          {portals.map((portal) => (
            <motion.a
              key={portal.num}
              href="#accueil"
              className={`${styles.card} ${styles[portal.variant]}`}
              variants={{
                hidden: { opacity: 0, y: 34 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
                },
              }}
              whileHover="hover"
            >
              <motion.div
                className={styles.bg}
                variants={{ hover: { scale: 1.06 } }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              >
                <Image
                  src={portal.image}
                  alt=""
                  fill
                  sizes="(max-width: 960px) 100vw, 560px"
                  className={styles.bgImg}
                />
              </motion.div>

              <div className={styles.overlay} />

              <div className={styles.content}>
                <span className={styles.num}>{portal.num}</span>
                <h3 className={styles.name}>{portal.name}</h3>
                <p className={styles.text}>{portal.text}</p>
                <span className={styles.discover}>
                  Découvrir
                  <span className={styles.arrow} aria-hidden>
                    ↗
                  </span>
                </span>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
