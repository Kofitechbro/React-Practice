import './App.css';
import { Hero } from './components/Hero/Hero';
import { Navbar } from './components/NavBar/Navbar';
import { TrustedBy } from './components/TrustedBy/TrustedBy';
import { Features } from './components/Features/Features';
import { Products } from './components/Products/Products';
import { Stats } from './components/Stats/stats';
import { Testimonials } from './components/Testimonials/Testimonials';
import { Pricing } from './components/Pricing/Pricing';
import { CallToAction } from './components/CTA/CallToAction';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <main>
        <TrustedBy />
        <Features />
        <Products />
        <Stats />
        <Testimonials />
        <Pricing />
        <CallToAction />
      </main>
    </>
  );
}

export default App;
