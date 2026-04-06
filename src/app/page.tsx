import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Work from '@/components/Work';
import About from '@/components/About';
import Services from '@/components/Services';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="grain">
      <Navigation />
      <Hero />
      <Work />
      <About />
      <Services />
      <Contact />
      <Footer />
    </main>
  );
}
