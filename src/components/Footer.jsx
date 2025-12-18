import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer style={{ background: '#202124', color: '#fff', padding: '60px 20px', marginTop: 'auto' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '32px', marginBottom: '24px' }}>Ready to land your dream job?</h2>
          <button className="google-sign" style={{ 
              width: 'auto', 
              padding: '16px 40px',
              fontSize: '18px',
              fontWeight: 600,
              background: '#fff',
              color: '#202124',
              border: 'none',
              marginBottom: '40px',
              cursor: 'pointer'
          }}>
              Get imodule Now
          </button>
          <div style={{ marginBottom: '20px', display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
              <Link to="/cancellation-refunds" style={{ color: '#9aa0a6', textDecoration: 'none' }}>Cancellation & Refunds</Link>
              <Link to="/terms-conditions" style={{ color: '#9aa0a6', textDecoration: 'none' }}>Terms & Conditions</Link>
              <Link to="/shipping" style={{ color: '#9aa0a6', textDecoration: 'none' }}>Shipping & Delivery</Link>
              <Link to="/privacy" style={{ color: '#9aa0a6', textDecoration: 'none' }}>Privacy Policy</Link>
              <Link to="/contact-us" style={{ color: '#9aa0a6', textDecoration: 'none' }}>Contact Us</Link>
          </div>
          <p style={{ color: '#9aa0a6' }}>© 2025 InterView Pro. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
