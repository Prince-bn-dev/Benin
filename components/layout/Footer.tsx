import Image from 'next/image';
import {
  footerBrand,
  footerColumns,
  footerNewsletter,
  footerLegal,
} from '@/data/content';
import styles from './Footer.module.scss';

// ==========================================================================
// Footer — fond texturé + dégradé tricolore, colonnes exactes, newsletter
// ==========================================================================

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <div className={styles.brandBlock}>
            <div className={styles.brand}>
              <span className={styles.logo}>
                <Image src={footerBrand.logo} alt="" width={96} height={110} />
              </span>
              <strong className={styles.name}>{footerBrand.name}</strong>
            </div>
            <p className={styles.tagline}>{footerBrand.tagline}</p>
          </div>

          <div className={styles.columns}>
            {footerColumns.map((col) => (
              <div key={col.title} className={styles.col}>
                <h3 className={styles.colTitle}>{col.title}</h3>
                <ul className={styles.list}>
                  {col.links.map((link) => (
                    <li key={link}>
                      <a href="#accueil" className={styles.colLink}>
                        <span aria-hidden className={styles.chevron}>
                          ›
                        </span>
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className={styles.newsBlock}>
              <h3 className={styles.newsTitle}>{footerNewsletter.title}</h3>
              <p className={styles.newsText}>{footerNewsletter.text}</p>
              <form className={styles.newsForm} action="#accueil">
                <input
                  type="email"
                  required
                  placeholder={footerNewsletter.placeholder}
                  aria-label="Votre adresse e-mail"
                  className={styles.newsInput}
                />
                <button type="submit" className={styles.newsSubmit}>
                  S&apos;inscrire
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className={styles.legal}>
          <p>{footerLegal}</p>
        </div>
      </div>
    </footer>
  );
}