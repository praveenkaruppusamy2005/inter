import React from 'react';
import { Link } from 'react-router-dom';

export default function Policies() {
  return (
    <main className="legal-main">
      <div className="legal-wrap">
        <h1 className="legal-h1">Legal & Policies</h1>
        <p className="legal-p">
          Transparency is key to our relationship with you. Below you will find links to our important legal documents.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginTop: 20 }}>
          <Link to="/privacy" className="btn-secondary" style={{ textAlign: 'center' }}>Privacy Policy</Link>
          <Link to="/terms" className="btn-secondary" style={{ textAlign: 'center' }}>Terms of Service</Link>
          <Link to="/refund" className="btn-secondary" style={{ textAlign: 'center' }}>Refund Policy</Link>
        </div>
        <div style={{height: 100, width: '100%'}}></div>
      </div>
    </main>
  );
}
