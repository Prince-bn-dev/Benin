'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { navLinks, navCta, brand } from '@/data/content';
import styles from './Header.module.scss';

// ==========================================================================
// Header — deux rangées (marque centrée + nav), fixe, flou au scroll
// ==========================================================================

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}
      id="accueil"
    >
      <div className={styles.inner}>
        <motion.div
          className={styles.brandRow}
          initial={{ y: -60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <Link href="#accueil" className={styles.brand}>
            <span className={styles.logo}>
              <Image src={brand.logo} alt="" width={54} height={54} priority />
            </span>
            <span className={styles.brandName}>{brand.name}</span>
          </Link>
        </motion.div>

        <motion.nav
          className={styles.navRow}
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          aria-label="Navigation principale"
        >
          <ul className={styles.links}>
            {navLinks.map((link, i) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className={`${styles.link} ${i === 0 ? styles.linkActive : ''}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className={styles.navRight}>
            <span className={styles.compass} aria-hidden>
              <svg viewBox="0 0 24 24" width="21" height="21" fill="none">
                <circle cx="12" cy="12" r="9.5" stroke="currentColor" strokeWidth="1.6" />
                <path d="M15.5 8.5 L13.2 13.2 L8.5 15.5 L10.8 10.8 Z" fill="currentColor" />
                <circle cx="12" cy="12" r="1.3" fill="currentColor" />
              </svg>
            </span>
            <Link href={navCta.href} className={styles.cta}>
              {navCta.label}
            </Link>
            <button
              type="button"
              className={styles.burger}
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-label="Ouvrir le menu"
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </motion.nav>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className={styles.mobile}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <ul>
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={styles.mobileLink}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href={navCta.href}
                  onClick={() => setOpen(false)}
                  className={styles.cta}
                >
                  {navCta.label}
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
