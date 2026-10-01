'use client';

import { motion } from 'framer-motion';
import { quote } from '@/data/content';
import styles from './QuoteBanner.module.scss';

// ==========================================================================
// QuoteBanner — proverbe fon sur fond sombre, animation mot à mot
// ==========================================================================

export default function QuoteBanner() {
  return (
    <section className={styles.section} aria-label="Proverbe fon">
      <div className={styles.inner}>
        <motion.blockquote
          className={styles.quote}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.09 } } }}
        >
          {quote.words.map((word, i) => (
            <motion.span
              key={i}
              className={`${styles.word} ${word === quote.goldWord ? styles.gold : ''}`}
              variants={{
                hidden: { opacity: 0, y: 28, rotateX: 40 },
                show: {
                  opacity: 1,
                  y: 0,
                  rotateX: 0,
                  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
                },
              }}
            >
              {word}
            </motion.span>
          ))}
        </motion.blockquote>

        <motion.p
          className={styles.author}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.9, duration: 0.7 }}
        >
          {quote.author}
        </motion.p>

        <motion.ul
          className={styles.values}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1, delayChildren: 1 } } }}
        >
          {quote.values.map((value) => (
            <motion.li
              key={value}
              className={styles.value}
              variants={{
                hidden: { opacity: 0, y: 14 },
                show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
            >
              {value}
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
