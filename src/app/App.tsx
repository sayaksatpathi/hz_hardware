import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Categories } from './components/Categories';
import { FeaturedProducts } from './components/FeaturedProducts';
import { PaintShowcase } from './components/PaintShowcase';
import { Services } from './components/Services';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Testimonials } from './components/Testimonials';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { MobileBottomBar } from './components/MobileBottomBar';
import { WhatsAppButton } from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: 'Roboto, sans-serif' }}>
      <Navigation />
      <main>
        <Hero />
        <Categories />
        <FeaturedProducts />
        <PaintShowcase />
        <Services />
        <WhyChooseUs />
        <Testimonials />
        <About />
        <Contact />
      </main>
      <Footer />
      <MobileBottomBar />
      <WhatsAppButton />
    </div>
  );
}