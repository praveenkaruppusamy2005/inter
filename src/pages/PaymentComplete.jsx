import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import '../App.css';

export default function PaymentComplete() {
  const [searchParams] = useSearchParams();
  const transactionId = searchParams.get('transactionId');

  useEffect(() => {
    // Add any additional logic here if needed
    // For example, you could notify the main app about the successful payment
    console.log('Payment completion page loaded', { transactionId });
  }, [transactionId]);

  return (
    <main className="legal-main">
      <div className="legal-wrap">
        <div className="legal-header">
          <h1 className="legal-h1">Payment Complete!</h1>
          <p className="legal-p">
            Your payment has been processed successfully.
          </p>
        </div>
        
        <div className="legal-card" style={{ 
          textAlign: 'center', 
          padding: '40px', 
          backgroundColor: '#f8f9fa',
          border: '1px solid #e0e0e0',
          borderRadius: '12px',
          maxWidth: '500px',
          margin: '20px auto'
        }}>
          <div style={{ 
            width: '80px', 
            height: '80px', 
            borderRadius: '50%', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            margin: '0 auto 24px',
            background: 'rgba(255, 165, 0, 0.1)'
          }}>
            <svg 
              style={{ width: '40px', height: '40px', fill: '#ff7700' }} 
              viewBox="0 0 24 24"
            >
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
            </svg>
          </div>
          
          <h2 style={{ color: '#000000', marginBottom: '16px' }}>Success!</h2>
          <p style={{ color: '#5f6368', marginBottom: '24px' }}>
            Your payment has been processed successfully. Your Pro subscription has been activated.
          </p>
          
          <p style={{ color: '#202124', fontWeight: '500' }}>
            Return to the <span style={{ color: '#ff7700', fontWeight: '600' }}>imodule</span> app to continue.
          </p>
        </div>
        
        <div style={{ 
          textAlign: 'center', 
          marginTop: '24px',
          color: '#5f6368',
          fontSize: '14px'
        }}>
          <p>You can now close this window and return to the desktop app.</p>
        </div>
      </div>
    </main>
  );
}