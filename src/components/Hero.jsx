import React from 'react';
import { ArrowRight, Activity } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-background">
        <div className="hero-overlay"></div>
        <img src="/assets/hero_bg.png" alt="Hero Background" className="hero-img" />
      </div>
      
      <div className="container hero-content text-center">
        <div className="animate-fade-up">
          <div className="hero-badge hover-lift">
            <Activity size={20} color="var(--primary-color)" />
            <span>Holistic Wellness Center</span>
          </div>
          
          <h1 className="hero-title">
            Empowering Minds.<br />
            <span className="text-highlight">Energizing Bodies.</span><br />
            Elevating Performance.
          </h1>
          
          <p className="hero-subtitle">
            Welcome to PhysioWorldWarriors – Your Gateway to Holistic Wellness! 
            We offer personalized physiotherapy, exercise programs, sports sessions, 
            and mindfulness techniques explicitly tailored for you.
          </p>
          
          <div className="hero-cta-group">
            <a href="#contact" className="btn btn-primary btn-lg hover-lift">
              Book an Appointment
              <ArrowRight size={20} />
            </a>
            <a href="#services" className="btn btn-secondary btn-lg hover-lift">
              Explore Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
