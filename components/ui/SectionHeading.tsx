import Reveal from './Reveal';
import styles from './SectionHeading.module.scss';

// ==========================================================================
// SectionHeading — surtitre + titre + accroche, alignés ou centrés
// ==========================================================================

interface SectionHeadingProps {
  overline: string;
  title: string;
  lead?: string;
  align?: 'left' | 'center';
  tone?: 'red' | 'gold' | 'green';
}

export default function SectionHeading({
  overline,
  title,
  lead,
  align = 'left',
  tone = 'red',
}: SectionHeadingProps) {
  return (
    <Reveal
      className={`${styles.heading} ${align === 'center' ? styles.center : ''} ${styles[tone]}`}
    >
      <span className={styles.overline}>{overline}</span>
      <h2 className={styles.title}>{title}</h2>
      {lead ? (
        <p className={styles.lead}>
          {lead.split('\n').map((line, i) => (
            <span key={i}>
              {i > 0 && <br />}
              {line}
            </span>
          ))}
        </p>
      ) : null}
    </Reveal>
  );
}
