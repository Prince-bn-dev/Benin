'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import { geographySection, regions } from '@/data/content';
import styles from './Geography.module.scss';

// ==========================================================================
// Geography — Les 12 départements : cartes régions + carte illustrée réelle
// ==========================================================================

const ease = [0.22, 1, 0.36, 1] as const;

// Petits glyphes décoratifs des chips départements
function DeptGlyph({ seed }: { seed: number }) {
  const glyphs = ['▲', '⬡', '❖', '✦', '⬟', '◈'];
  return (
    <span className={styles.deptGlyph} aria-hidden>
      {glyphs[seed % glyphs.length]}
    </span>
  );
}

export default function Geography() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section className={styles.section} id="geographie">
      <div className={styles.inner}>
        <SectionHeading
          overline={geographySection.overline}
          title={geographySection.title}
          lead={geographySection.lead}
          align="center"
          tone="red"
        />

        <div className={styles.layout}>
          <div className={styles.cards}>
            {regions.map((region, ri) => (
              <motion.article
                key={region.id}
                className={`${styles.card} ${styles[region.tone]}`}
                initial={{ opacity: 0, y: 42 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.6, delay: ri * 0.12, ease }}
              >
                <header className={styles.cardHead}>
                  <div className={styles.cardTitles}>
                    <span className={styles.cardIcon} aria-hidden>
                      {region.tone === 'green' ? '⛰' : region.tone === 'gold' ? '🏺' : '🌊'}
                    </span>
                    <div>
                      <h3 className={styles.cardName}>{region.name}</h3>
                      <p className={styles.cardSub}>{region.subtitle}</p>
                    </div>
                  </div>
                  <span className={styles.badge}>{region.badge}</span>
                </header>

                <div className={styles.cardBody}>
                  <div className={styles.photo}>
                    <Image
                      src={region.image}
                      alt={`Paysage de la région ${region.name}`}
                      width={209}
                      height={362}
                      className={styles.photoImg}
                    />
                  </div>
                  <ul className={styles.depts}>
                    {region.departments.map((d, di) => (
                      <li key={d.id}>
                        <button
                          type="button"
                          className={`${styles.dept} ${active === d.id ? styles.deptActive : ''}`}
                          onMouseEnter={() => setActive(d.id)}
                          onMouseLeave={() => setActive(null)}
                          onFocus={() => setActive(d.id)}
                          onBlur={() => setActive(null)}
                        >
                          <DeptGlyph seed={di + ri} />
                          <span className={styles.deptName}>{d.name}</span>
                          <span className={styles.chev} aria-hidden>
                            ›
                          </span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            ))}
          </div>

          <motion.div
            className={styles.mapWrap}
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, ease }}
          >
            <div
              className={styles.map}
              role="img"
              aria-label="Carte illustrée du Bénin et de ses villes"
            >
              <Image
                src="/images/carte-benin.webp"
                alt="Carte illustrée du Bénin : Natitingou, Nikki, Parakou, Abomey, Ouidah, Porto-Novo et Ganvié"
                width={1254}
                height={1254}
                sizes="(max-width: 960px) 92vw, 560px"
                className={styles.mapImg}
                priority={false}
              />

              {/* Repères départements interactifs (positionnés sur la carte réelle) */}
              {regions.flatMap((r) =>
                r.departments.map((d) => (
                  <span
                    key={d.id}
                    className={`${styles.pin} ${active === d.id ? styles.pinActive : ''}`}
                    style={{ left: `${d.mapX}%`, top: `${d.mapY}%` }}
                    aria-hidden
                  >
                    <span className={styles.pinHalo} />
                    <span
                      className={styles.pinDot}
                      style={{
                        background:
                          r.tone === 'green'
                            ? '#008751'
                            : r.tone === 'gold'
                              ? '#e3b505'
                              : '#e8112d',
                      }}
                    />
                  </span>
                )),
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
