import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    "Increased Enrollment and Retention",
    "Stronger Reputation and Positive Return on Investment",
    "Personalized Approach",
    "Expertise and Experience",
    "Integration of Mind and Body",
    "Advertisement and Admissions",
    "Customized and Modified Programs and Packages",
    "Proven Results and Commitment",
    "Return on Investment",
    "Long term Profit",
    "Comprehensive Services",
    "Partnership and Promotion",
    "Grant Opportunities",
    "Preventative Care and Health Consultancy",
    "Enhanced Academic Performance"
  ];

  return (
    <section id="why-us" className="section section-light">
      <div className="container">
        <h2 className="section-title text-center">Why Choose Us?</h2>
        <p className="section-subtitle text-center">
          Empowering Minds. Energizing Bodies. Elevating Performance.
        </p>

        <div className="why-us-grid">
          {reasons.map((reason, index) => (
            <div key={index} className="reason-item animate-fade-up" style={{ animationDelay: `${index * 0.05}s` }}>
              <CheckCircle2 color="var(--primary-color)" className="reason-icon" />
              <span>{reason}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
