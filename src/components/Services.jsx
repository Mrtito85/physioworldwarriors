import React from 'react';
import { Home, Stethoscope, Dumbbell, Baby, Activity, Brain } from 'lucide-react';

const Services = () => {
  const servicesList = [
    {
      title: "Home Visit Services",
      desc: "Get expert physiotherapy brought directly to the comfort of your home.",
      icon: <Home size={40} />
    },
    {
      title: "Physical Therapy & Consultation",
      desc: "Personalized treatment plans for injury recovery and pain management.",
      icon: <Stethoscope size={40} />
    },
    {
      title: "Exercise Programs",
      desc: "Custom exercise regimes designed for different fitness levels.",
      icon: <Dumbbell size={40} />
    },
    {
      title: "Paediatric Physiotherapy",
      desc: "Specialized care and developmental support explicitly tailored for children.",
      icon: <Baby size={40} />
    },
    {
      title: "Sports Sessions",
      desc: "Enhancing athletic performance and preventing sports injuries.",
      icon: <Activity size={40} />
    },
    {
      title: "Mindfulness Techniques",
      desc: "Stress reduction and holistic mental well-being practices.",
      icon: <Brain size={40} />
    }
  ];

  return (
    <section id="services" className="section">
      <div className="container">
        <h2 className="section-title text-center">Our Services</h2>
        <p className="section-subtitle text-center">
          Get Back to Your Active Lifestyle with Our Expert Physiotherapy Services
        </p>

        <div className="services-grid">
          {servicesList.map((service, index) => (
            <div key={index} className="service-card hover-lift glass-panel">
              <div className="service-icon">
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
