'use client';

import { motion } from 'framer-motion';
import AnimatedCounter from '@/components/ui/AnimatedCounter';
import { stats } from '@/data/content';
import styles from './StatsBar.module.scss';

// ==========================================================================
// StatsBar — bandeau vert sombre, chiffres animés en or
// ==========================================================================

export default function StatsBar() {
  return (
    <section className={styles.bar} aria-label="Le Bénin en chiffres">
      <motion.ul
        className={styles.list}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.09 } } }}
      >
        {stats.map((stat) => (
          <motion.li
            key={stat.label}
            className={styles.item}
            variants={{
              hidden: { opacity: 0, y: 26 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
              },
            }}
          >
            <span className={styles.value}>
              <AnimatedCounter
                value={stat.value}
                pad={'pad' in stat ? stat.pad : 0}
                suffix={'suffix' in stat ? (stat as { suffix: string }).suffix : ''}
              />
            </span>
            <span className={styles.label}>{stat.label}</span>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
}
