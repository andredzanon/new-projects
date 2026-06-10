import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Pillars from './components/Pillars';
import Projects from './components/Projects';
import Timeline from './components/Timeline';
import AISandbox from './components/AISandbox';
import Contact from './components/Contact';

function App() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Pillars />
        <Projects />
        <Timeline />
        <AISandbox />
        <Contact />
      </main>
      <footer>
        <div className="container">
          <p>
            © {currentYear} // Desenvolvido por <span>Placeholder</span>. Construído com React & Vite.
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
