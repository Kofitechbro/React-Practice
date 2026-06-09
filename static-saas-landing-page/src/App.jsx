import './App.css';
import { Hero } from './components/Hero/Hero';
import { Navbar } from './components/NavBar/Navbar';
import { TrustedBy } from './components/TrustedBy/TrustedBy';
import { Features } from './components/Features/Features';
import { Products } from './components/Products/Products';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <main>
        <TrustedBy />
        <Features />
        <Products />
      </main>
    </>
  );
}

export default App;
