import React from 'react';

export default function Pricing() {
  return (
    <main className="legal-main">
      <div className="marketing-container">
        <h1 className="legal-h1" style={{ textAlign: 'center' }}>Simple, Transparent Pricing</h1>
        <p className="legal-p" style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto 28px' }}>
          Professional interview assistance at an affordable rate of just ₹1 per hour.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18 }}>
          <div />
          <div className="card" style={{ border: '2px solid #2563eb' }}>
            <div className="card-title" style={{ fontSize: 18 }}>Hourly Session</div>
            <div style={{ fontSize: 42, fontWeight: 900, margin: '12px 0' }}>1<span style={{ fontSize: 18, fontWeight: 500, color: '#666' }}>/hour</span></div>
            <p className="card-text">Includes preparation and coaching — no live support during interviews.</p>
            <ul style={{ listStyle: 'none', padding: 0, margin: '20px 0', lineHeight: 1.7 }}>
              <li>✓ Practice sessions and mock interviews</li>
              <li>✓ Technical and behavioral question support</li>
              <li>✓ Preparation tips and best practices</li>
            </ul>
            <div style={{ display: 'flex', gap: 10 }}>
              <p>Available for just ₹1 in the App</p>
            </div>
          </div>
          <div />
        </div>
      </div>
    </main>
  );
}
