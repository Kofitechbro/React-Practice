import './App.css';
import { Hero } from './components/Hero/Hero';
import { Navbar } from './components/NavBar/Navbar';
import { TrustedBy } from './components/TrustedBy/TrustedBy';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <main>
        <TrustedBy />
      </main>
    </>
  );
}

export default App;
