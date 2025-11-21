import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Features } from './components/Features';
import { Work } from './components/Work';
import { Trust } from './components/Trust';
import { Testimonials } from './components/Testimonials';
import { Process } from './components/Process';
import { FAQ } from './components/FAQ';
import { CTA } from './components/CTA';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="antialiased bg-white min-h-screen font-sans text-dark-900 selection:bg-brand-100 selection:text-brand-900 overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Trust />
        <Features />
        <Services />
        <Work />
        <Process />
        <Testimonials />
        <FAQ />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;