import React from 'react';
import { BookOpen, Clock, Users, ArrowRight } from 'lucide-react';

const ForSchools = () => {
  return (
    <section id="schools" className="section">
      <div className="container">
        <div className="schools-banner glass-panel">
          <div className="schools-content">
            <div className="schools-badge">HAPPY & SMART KIDS</div>
            <h2 className="schools-title">Empowering Student Well-being</h2>
            <p className="schools-desc">
              We partner with educational institutions to bring our comprehensive wellness 
              programs directly to students. By integrating our services into school 
              curriculums, we're empowering the next generation to prioritize their 
              health and well-being from an early age.
            </p>
            <p className="schools-desc">
              Our comprehensive physiotherapy consultancy, exercise, sports and mindfulness 
              services are explicitly tailored to support students' holistic development. 
              Join us in creating a healthier, happier future for students.
            </p>
            <div className="schools-cta">
              <a href="#contact" className="btn btn-primary btn-lg hover-lift">
                Partner With Us
                <ArrowRight size={20} />
              </a>
            </div>
          </div>

          <div className="schools-stats-container">
            <div className="schools-img-wrapper">
              <img src="/images/studensts.jpg" alt="Students Wellness" className="schools-img" />
            </div>
            <div className="schools-stats">
            <div className="stat-card">
              <Clock size={36} color="var(--primary-color)" className="stat-icon" />
              <div className="stat-info">
                <h4>60 - 90 Minutes</h4>
                <p>Session Duration</p>
              </div>
            </div>
            
            <div className="stat-card">
              <BookOpen size={36} color="var(--primary-color)" className="stat-icon" />
              <div className="stat-info">
                <h4>Curriculum Integrated</h4>
                <p>Seamlessly adding to education</p>
              </div>
            </div>

            <div className="stat-card">
              <Users size={36} color="var(--primary-color)" className="stat-icon" />
              <div className="stat-info">
                <h4>Elevate, Empower, Excel</h4>
                <p>Holistic student development</p>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForSchools;
