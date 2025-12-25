import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer style={{ background: '#202124', color: '#fff', padding: '60px 20px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
          <h2 style={{ fontSize: '32px', marginBottom: '24px' }}>Ready to land your dream job?</h2>
          <p style={{ color: '#9aa0a6' }}>Contact: <b>interviewpro4@gmail.com</b></p>
        </div>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px', marginBottom: '30px' }}>
          <div style={{ flex: 1, minWidth: '200px' }}>
            <h3 style={{ fontSize: '18px', marginBottom: '15px', color: '#e8eaed' }}>Quick Links</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ marginBottom: '8px' }}>
                <Link to="/" style={{ color: '#9aa0a6', textDecoration: 'none' }}>Home</Link>
              </li>
              <li style={{ marginBottom: '8px' }}>
                <Link to="/download" style={{ color: '#9aa0a6', textDecoration: 'none' }}>Download</Link>
              </li>
              <li style={{ marginBottom: '8px' }}>
                <Link to="/pricing" style={{ color: '#9aa0a6', textDecoration: 'none' }}>Pricing</Link>
              </li>
              <li style={{ marginBottom: '8px' }}>
                <Link to="/contact" style={{ color: '#9aa0a6', textDecoration: 'none' }}>Contact Us</Link>
              </li>
            </ul>
          </div>
          
          <div style={{ flex: 1, minWidth: '200px' }}>
            <h3 style={{ fontSize: '18px', marginBottom: '15px', color: '#e8eaed' }}>Legal</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ marginBottom: '8px' }}>
                <Link to="/policies" style={{ color: '#9aa0a6', textDecoration: 'none' }}>All Policies</Link>
              </li>
              <li style={{ marginBottom: '8px' }}>
                <Link to="/privacy" style={{ color: '#9aa0a6', textDecoration: 'none' }}>Privacy Policy</Link>
              </li>
              <li style={{ marginBottom: '8px' }}>
                <Link to="/terms" style={{ color: '#9aa0a6', textDecoration: 'none' }}>Terms of Service</Link>
              </li>
              <li style={{ marginBottom: '8px' }}>
                <Link to="/refund" style={{ color: '#9aa0a6', textDecoration: 'none' }}>Refund Policy</Link>
              </li>
            </ul>
          </div>
          
          <div style={{ flex: 1, minWidth: '200px' }}>
            <h3 style={{ fontSize: '18px', marginBottom: '15px', color: '#e8eaed' }}>Contact</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ marginBottom: '8px' }}>Email: interviewpro4@gmail.com</li>
            </ul>
          </div>
        </div>
        
        <div style={{ textAlign: 'center', borderTop: '1px solid #3c4043', paddingTop: '20px' }}>
          <p style={{ color: '#9aa0a6', margin: 0 }}>&copy; 2025 InterView Pro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
