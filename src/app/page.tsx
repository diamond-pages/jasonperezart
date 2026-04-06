import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Gallery from '@/components/Gallery';
import Services from '@/components/Services';
import Artists from '@/components/Artists';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#1a1a1a]">
      <Navigation />
      <Hero />
      <About />
      <Gallery />
      <Services />
      <Artists />
      <Contact />
      <Footer />
    </main>
  );
}
