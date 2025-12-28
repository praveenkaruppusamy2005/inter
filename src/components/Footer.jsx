import React from 'react';
import { Link } from 'react-router-dom';
import { FaXTwitter, FaEnvelope } from 'react-icons/fa6';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <h2 className="footer-logo">InterView Pro</h2>
            <p className="footer-tagline">Your AI interview copilot</p>
          </div>
          
          <div className="footer-links">
            <div className="footer-column">
              <h3>Quick Links</h3>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/download">Download</Link></li>
                <li><Link to="/pricing">Pricing</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h3>Legal</h3>
              <ul>
                <li><Link to="/policies">All Policies</Link></li>
                <li><Link to="/privacy">Privacy Policy</Link></li>
                <li><Link to="/terms">Terms of Service</Link></li>
                <li><Link to="/refund">Refund Policy</Link></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h3>Contact</h3>
              <ul>
                <li>interviewpro4@gmail.com</li>
              </ul>
            </div>
          </div>
          
          <div className="footer-social">
            <div className="social-icons">
              <a 
                href="https://x.com/interviewpro4" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon"
                title="Follow us on X"
              >
                <FaXTwitter />
              </a>
              <a 
                href="mailto:interviewpro4@gmail.com" 
                className="social-icon"
                title="Email us"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 InterView Pro. All rights reserved.</p>
          <div className="footer-badges">
            <span className="badge">Member Of</span>
            <span className="badge">Certified By</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
