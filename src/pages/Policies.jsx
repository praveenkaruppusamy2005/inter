import React from 'react';
import { Link } from 'react-router-dom';

export default function Policies() {
  return (
    <main className="legal-main">
      <div className="legal-wrap">
        <div className="legal-header">
          <h1 className="legal-h1">Legal & Policies</h1>
          <p className="legal-p">
            Transparency is key to our relationship with you. Below you will find links to our important legal documents.
          </p>
        </div>
        
        <div className="legal-cards-container">
          <div className="legal-card">
            <h3 className="legal-card-title">Privacy Policy</h3>
            <p className="legal-card-text">Learn how we collect, use, and protect your personal information.</p>
            <Link to="/privacy" className="legal-btn">Read Privacy Policy</Link>
          </div>
          
          <div className="legal-card">
            <h3 className="legal-card-title">Terms of Service</h3>
            <p className="legal-card-text">Understand the terms and conditions that govern your use of our service.</p>
            <Link to="/terms" className="legal-btn">Read Terms of Service</Link>
          </div>
          
          <div className="legal-card">
            <h3 className="legal-card-title">Refund Policy</h3>
            <p className="legal-card-text">Review our refund and satisfaction guarantee policies.</p>
            <Link to="/refund" className="legal-btn">Read Refund Policy</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
