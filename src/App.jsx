import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import ForSchools from './components/ForSchools';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import './index.css';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyChooseUs />
        <ForSchools />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
