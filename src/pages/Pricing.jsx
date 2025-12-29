import React, { useState } from 'react';

export default function Pricing() {
  const [selectedPlan, setSelectedPlan] = useState('subscription');

  return (
    <main className="legal-main">
      <div className="marketing-container">
        <div style={{ maxWidth: 300, margin: '0 auto' }}>
       
        </div>
        <h1 className="legal-h1" style={{ textAlign: 'center' }}>Simple, Transparent Pricing</h1>
        <p className="legal-p" style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto 28px' }}>
          Choose the plan that works best for you
        </p>

        
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '40px'
        }}>
          <div style={{
            display: 'flex',
            background: '#f1f5f9',
            borderRadius: '50px',
            padding: '4px',
            border: '2px solid #000000'
          }}>
            <button
              onClick={() => setSelectedPlan('credits')}
              style={{
                padding: '12px 24px',
                borderRadius: '50px',
                border: 'none',
                background: selectedPlan === 'credits' ? '#ffffff' : 'transparent',
                color: selectedPlan === 'credits' ? '#000000' : '#64748b',
                fontSize: '14px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                boxShadow: selectedPlan === 'credits' ? '0 2px 4px rgba(0,0,0,0.1)' : 'none'
              }}
            >
              Credits
            </button>
            <button
              onClick={() => setSelectedPlan('subscription')}
              style={{
                padding: '12px 24px',
                borderRadius: '50px',
                border: 'none',
                background: selectedPlan === 'subscription' ? '#00A878' : 'transparent',
                color: selectedPlan === 'subscription' ? '#ffffff' : '#64748b',
                fontSize: '14px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                boxShadow: selectedPlan === 'subscription' ? '0 2px 4px rgba(0,0,0,0.1)' : 'none'
              }}
            >
              Subscription
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 18 }}>
          
          
          {/* Credits Plan */}
          {selectedPlan === 'credits' && (
            <div className="card" style={{ border: '2px solid black', borderBottom: '5px solid black', maxWidth: '350px', width: '100%' }}>
              <div className="card-title" style={{ fontSize: 18 }}>Per Credit</div>
              <div style={{ fontSize: 42, fontWeight: 900, margin: '12px 0' }}>
                ₹250<span style={{ fontSize: 18, fontWeight: 500, color: '#666' }}>/credit</span>
              </div>
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
          )}

          {/* Subscription Plan */}
          {selectedPlan === 'subscription' && (
            <div className="card" style={{ 
              border: '2px solid #000000ff', 
              borderRadius: '30px', 
              background: '#ffffffff', 
              maxWidth: '350px', 
              width: '100%',
              padding: '24px 20px',
              borderBottom: '5px solid #000000ff'
            }}>
              <div className="card-title" style={{ fontSize: 18, color: '#000000ff' }}>10-Day Subscription</div>
              <div style={{ fontSize: 42, fontWeight: 900, margin: '12px 0', color: '#000000ff' }}>
                ₹1000<span style={{ fontSize: 18, fontWeight: 500, color: '#666' }}>/10 days</span>
              </div>
              <p className="card-text">Unlimited access to all pro features for 10 days.</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: '20px 0', lineHeight: 1.7 }}>
                <li>✓ Unlimited AI chat & interviews</li>
                <li>✓ Real-time transcription</li>
                <li>✓ Screenshot analysis</li>
                <li>✓ Priority support</li>
               
              </ul>
              <div style={{ display: 'flex', gap: 10 }}>
                <p style={{ color: '#00A878', fontWeight: '600' }}>₹100 per day - Best value for intensive prep!</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
