import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import StatsBar from '@/components/sections/StatsBar';
import Portals from '@/components/sections/Portals';
import History from '@/components/sections/History';
import Geography from '@/components/sections/Geography';
import QuoteBanner from '@/components/sections/QuoteBanner';
import Amazons from '@/components/sections/Amazons';
import Places from '@/components/sections/Places';
import Masque from '@/components/sections/Masque';


export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <StatsBar />
        <Portals />
        <History />
        <Geography />
        <QuoteBanner />
        <Amazons />
        <Places />
        <Masque />
      </main>
      <Footer />
    </>
  );
}
