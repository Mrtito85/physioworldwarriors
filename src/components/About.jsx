import React from 'react';
import { Award, Heart, Shield, Users } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section section-light">
      <div className="container">
        <h2 className="section-title text-center">About Us</h2>
        <p className="section-subtitle text-center">
          Dedicated to revolutionizing the way individuals approach health and well-being.
        </p>
        
        <div className="about-grid">
          <div className="about-content glass-panel">
            <h3>Our Mission</h3>
            <p>
              Our mission is simple: to empower our community to thrive physically, 
              mentally, and emotionally. We believe that everyone deserves access to 
              high-quality, personalized wellness services, and we're here to make 
              that a reality.
            </p>
            <p>
              What sets us apart is our unwavering commitment to customization, 
              innovation, and community engagement. Together, we'll unlock your 
              full potential and pave the way to a happier, healthier life.
            </p>
            <div className="achievements-img-wrapper">
              <img src="/images/bisma achievements.jpg" alt="Bisma Achievements" className="achievements-img" />
            </div>
          </div>
          
          <div className="founder-card glass-panel text-center">
            <div className="founder-img-wrapper">
              <img src="/images/Founder%20Bisma.png" alt="Bisma Qazi" className="founder-img" />
            </div>
            <h3>Bisma Qazi</h3>
            <p className="founder-title">
              Founder & Chief Executive Officer<br />
              Doctor of Physical Therapy
            </p>
            <p className="founder-location text-light">
              Quetta, Baluchistan, Pakistan
            </p>
            <div className="founder-intro">
              <p>
                "Empowering you with complete wellness right where you are - whether at your Home, Educational institution, or an Office."
              </p>
            </div>
            <p className="founder-skills">
              Community Health Educator • Holistic Health Practitioner • 
              Physical Education Specialist • Entrepreneurship
            </p>
          </div>
        </div>

        <div className="features-row">
          <div className="feature-item">
            <Heart className="feature-icon" />
            <h4>Personalized</h4>
            <p>Tailored support to reach your specific fitness goals</p>
          </div>
          <div className="feature-item">
            <Shield className="feature-icon" />
            <h4>Clinical Expertise</h4>
            <p>Led by a qualified Doctor of Physical Therapy</p>
          </div>
          <div className="feature-item">
            <Users className="feature-icon" />
            <h4>Community Focus</h4>
            <p>Engaging communities for long-term holistic wellness</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
