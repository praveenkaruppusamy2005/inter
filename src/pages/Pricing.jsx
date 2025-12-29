import React from 'react';

export default function Pricing() {
  return (
    <main className="legal-main">
      <div className="marketing-container">
        <h1 className="legal-h1" style={{ textAlign: 'center' }}>Simple, Transparent Pricing</h1>
        <p className="legal-p" style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto 28px' }}>
          1 Credit = ₹250. Buy credits and use them as you need.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18 }}>
          <div />
          <div className="card" style={{ border: '2px solid black',borderBottom:'5px solid black' }}>
            <div className="card-title" style={{ fontSize: 18 }}>Per Credit</div>
            <div style={{ fontSize: 42, fontWeight: 900, margin: '12px 0' }}>₹250<span style={{ fontSize: 18, fontWeight: 500, color: '#666' }}>/credit</span></div>
            <p className="card-text">Buy credits for AI chat, transcription, and screenshot analysis.</p>
            <ul style={{ listStyle: 'none', padding: 0, margin: '20px 0', lineHeight: 1.7 }}>
              <li>✓ Practice sessions and mock interviews</li>
              <li>✓ Technical and behavioral question support</li>
              <li>✓ Preparation tips and best practices</li>
            </ul>
            <div style={{ display: 'flex', gap: 10 }}>
              <p>Purchase inside the app at ₹250 per credit</p>
            </div>
          </div>
          <div />
        </div>
      </div>
    </main>
  );
}
