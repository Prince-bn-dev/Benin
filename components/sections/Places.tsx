'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { places, placesSection } from '@/data/content';
import styles from './Places.module.scss';

export default function Places() {
  const [active, setActive] = useState(Math.floor(places.length / 2));
  const touchX = useRef<number | null>(null);

  const go = useCallback(
    (dir: number) =>
      setActive((i) => Math.min(places.length - 1, Math.max(0, i + dir))),
    []
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') go(1);
      if (e.key === 'ArrowLeft') go(-1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [go]);

  const onTouchStart = (e: React.TouchEvent) => {
    touchX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchX.current;
    if (Math.abs(delta) > 45) go(delta < 0 ? 1 : -1);
    touchX.current = null;
  };

  return (
    <section className={styles.section} id="lieux">
      <div className={styles.inner}>
        <motion.div
          className={styles.head}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className={styles.overline}>{placesSection.overline}</span>
          <h2 className={styles.title}>{placesSection.title}</h2>
          <p className={styles.lead}>
            {placesSection.lead.split('\n').map((line, i, arr) => (
              <span key={i}>
                {line}
                {i < arr.length - 1 && <br />}
              </span>
            ))}
          </p>
        </motion.div>

        <div
          className={styles.slider}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
          role="region"
          aria-roledescription="carrousel"
          aria-label={placesSection.title}
        >
          <button
            type="button"
            className={`${styles.nav} ${styles.prev}`}
            onClick={() => go(-1)}
            disabled={active === 0}
            aria-label="Lieu précédent"
          >
            ←
          </button>

          <div className={styles.viewport}>
            <div
              className={styles.track}
              style={{ ['--i' as string]: active }}
            >
              {places.map((place, i) => {
                const isActive = i === active;
                return (
                  <figure
                    key={place.name}
                    className={`${styles.card} ${isActive ? styles.active : ''}`}
                    onClick={() => setActive(i)}
                    aria-current={isActive || undefined}
                  >
                    <div className={styles.photo}>
                      <Image
                        src={place.image}
                        alt={place.name}
                        width={280}
                        height={380}
                        sizes="(max-width: 960px) 60vw, 280px"
                        className={styles.img}
                        priority={i === 0}
                      />
                    </div>
                    <figcaption className={styles.caption}>
                      <strong className={styles.name}>{place.name}</strong>
                      <span className={styles.tagline}>{place.tagline}</span>
                    </figcaption>
                  </figure>
                );
              })}
            </div>
          </div>

          <button
            type="button"
            className={`${styles.nav} ${styles.next}`}
            onClick={() => go(1)}
            disabled={active === places.length - 1}
            aria-label="Lieu suivant"
          >
            →
          </button>
        </div>

        <div className={styles.dots}>
          {places.map((place, i) => (
            <button
              key={place.name}
              type="button"
              className={`${styles.dot} ${i === active ? styles.dotActive : ''}`}
              onClick={() => setActive(i)}
              aria-label={`Aller à ${place.name}`}
            />
          ))}
        </div>

        <motion.div
          className={styles.ctaBlock}
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className={styles.ctaOverline}>{placesSection.ctaOverline}</span>
          <a href="#accueil" className={styles.cta}>
            {placesSection.cta} <span aria-hidden>→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}