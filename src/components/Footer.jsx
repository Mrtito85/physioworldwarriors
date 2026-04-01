import React from 'react';
import { Phone, Mail } from 'lucide-react';
import { FaInstagram, FaYoutube, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer id="contact" className="footer section-dark">
      <div className="container footer-container">
        
        <div className="footer-brand">
          <h2>PhysioWorldWarriors</h2>
          <p>
            Welcome to the future of wellness. 
            Empowering you with complete wellness right where you are - 
            whether at your Home, Educational institution, or an Office.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#schools">For Schools</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3>Contact Us</h3>
          
          <div className="contact-item">
            <Phone size={20} className="contact-icon" />
            <a href="tel:03048277228">0304 8277228</a>
          </div>
          
          <div className="contact-item">
            <Mail size={20} className="contact-icon" />
            <div className="email-group">
              <a href="mailto:bismaqazi7860@gmail.com">bismaqazi7860@gmail.com</a>
              <a href="mailto:physioworldwarriors@gmail.com">physioworldwarriors@gmail.com</a>
            </div>
          </div>
          
          <div className="social-links">
            <a href="https://www.youtube.com/" target="_blank" rel="noreferrer" className="social-icon" aria-label="YouTube">
              <FaYoutube size={24} />
            </a>
            <a href="https://instagram.com/physioworld_warriors" target="_blank" rel="noreferrer" className="social-icon" aria-label="Instagram">
              <FaInstagram size={24} />
            </a>
            <a href="https://facebook.com/" target="_blank" rel="noreferrer" className="social-icon" aria-label="Facebook">
              <FaFacebook size={24} />
            </a>
          </div>
        </div>

      </div>
      
      <div className="footer-bottom text-center">
        <p>&copy; {new Date().getFullYear()} PhysioWorldWarriors. All rights reserved.</p>
        <p className="footer-creator">Founder: Bisma Qazi - Quetta, Baluchistan, Pakistan</p>
      </div>
    </footer>
  );
};

export default Footer;
