import type { Metadata } from 'next';
import { Playfair_Display, Outfit } from 'next/font/google';
import '../styles/globals.scss';

// ==========================================================================
// Layout racine — polices, métadonnées, styles globaux
// ==========================================================================

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Bénin Éternel — Le Bénin, sur tous ses plans',
  description:
    "Une terre d'histoire, de culture, de création et d'avenir. Découvrez le Bénin, éternellement vivant : douze départements, les Amazones du Danxomè et le patrimoine mondial de l'UNESCO.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${playfair.variable} ${outfit.variable}`}>
      <body>{children}</body>
    </html>
  );
}
