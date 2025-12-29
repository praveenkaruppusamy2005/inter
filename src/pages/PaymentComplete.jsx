import { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import Lottie from 'lottie-react';
import paymentSuccessAnimation from '../assets/Payment Successful Animation.json';
import worriedManAnimation from '../assets/Worried Man.json';

export default function PaymentComplete() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const transactionId = searchParams.get('transactionId');
  const statusParam = searchParams.get('status');
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(true);
  const [debugInfo, setDebugInfo] = useState('');

  useEffect(() => {
    const debug = `URL: ${window.location.href}\nTransactionId: ${transactionId}\nStatusParam: ${statusParam}`;
    setDebugInfo(debug);
    console.log('🔍 PaymentComplete Debug:', { transactionId, statusParam, url: window.location.href });

    // If status is present in URL, use it
    if (statusParam) {
      console.log('📝 Using status from URL:', statusParam);
      if (statusParam.trim().toUpperCase() === 'SUCCESS') {
        console.log('✅ Setting status to success');
        setStatus('success');
        setLoading(false);
      } else if (statusParam.trim().toUpperCase() === 'FAILED') {
        console.log('❌ Setting status to failed');
        setStatus('failed');
        setLoading(false);
      } else {
        console.log('❓ Unknown status param, treating as failed:', statusParam);
        setStatus('failed');
        setLoading(false);
      }
      return;
    }
    
    // If no status param, check backend if transactionId exists
    if (!transactionId) {
      console.log('❌ No transactionId, setting failed state');
      setStatus('failed');
      setLoading(false);
      return;
    }
    
    console.log('🔄 No status param, checking backend for:', transactionId);
    
    let pollCount = 0;
    const maxPolls = 20;

    // Check backend for payment status
    const checkPaymentStatus = async () => {
      try {
        console.log(`📡 Fetching status from: /api/phonepe/status/${transactionId} (Poll ${pollCount + 1}/${maxPolls})`);
        const response = await fetch(`/api/phonepe/status/${transactionId}`);
        const data = await response.json();
        
        console.log('📊 Backend response:', data);
        setDebugInfo(prev => prev + `\n\nBackend Response (Poll ${pollCount + 1}):\n${JSON.stringify(data, null, 2)}`);
        
        if (data.success && data.status === 'PAYMENT_SUCCESS') {
          console.log('✅ Payment successful, setting success status');
          setStatus('success');
          setLoading(false);
        } else if (data.status === 'PAYMENT_PENDING') {
          console.log('⏳ Payment pending, continuing to poll. Poll count:', pollCount + 1);
          pollCount++;
          if (pollCount < maxPolls) {
            setTimeout(() => {
              checkPaymentStatus();
            }, 3000); // Poll every 3 seconds
          } else {
            console.log('⏰ Max polls reached, treating as failed');
            setStatus('failed');
            setLoading(false);
          }
        } else if (data.status === 'PAYMENT_FAILED' || !data.success) {
          console.log('❌ Payment failed/cancelled. Status:', data.status, 'Success:', data.success);
          setStatus('failed');
          setLoading(false);
        } else {
          console.log('❓ Unknown payment status, treating as failed:', data);
          setStatus('failed');
          setLoading(false);
        }
      } catch (err) {
        console.error('💥 Error checking payment status:', err);
        setDebugInfo(prev => prev + `\n\nError: ${err.message}`);
        setStatus('failed');
        setLoading(false);
      }
    };

    checkPaymentStatus();
  }, [transactionId, statusParam, navigate]);

  // Loading spinner component
  const LoadingSpinner = () => (
    <div style={{
      width: '60px',
      height: '60px',
      border: '4px solid #e2e8f0',
      borderTop: '4px solid #475569',
      borderRadius: '50%',
      animation: 'spin 1s linear infinite',
      margin: '0 auto 24px'
    }}>
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );

  return (
    <div style={{
      minHeight: '100vh',
      background: '#ffffff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      fontFamily: '"gt", system-ui, sans-serif'
    }}>
      <div style={{
        maxWidth: '520px',
        width: '100%',
        textAlign: 'center'
      }}>

        {loading ? (
          <>
            <LoadingSpinner />
            <h1 style={{
              fontSize: '28px',
              fontWeight: '800',
              color: '#000000',
              marginBottom: '16px',
              letterSpacing: '-0.5px'
            }}>
              Verifying Payment
            </h1>
            <p style={{
              fontSize: '16px',
              color: '#64748b',
              lineHeight: '1.6',
              marginBottom: '32px'
            }}>
              Please wait while we confirm your payment with PhonePe. This may take a few moments.
            </p>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              color: '#000000',
              fontSize: '14px',
              fontWeight: '500'
            }}>
              <div style={{
                width: '8px',
                height: '8px',
                background: '#000000',
                borderRadius: '50%',
                animation: 'pulse 1.5s ease-in-out infinite'
              }}>
                <style>
                  {`
                    @keyframes pulse {
                      0%, 100% { opacity: 0.4; transform: scale(1); }
                      50% { opacity: 1; transform: scale(1.2); }
                    }
                  `}
                </style>
              </div>
              Do not close this window
            </div>
          </>
        ) : status === 'success' ? (
          <>
            <div style={{
              width: '200px',
              height: '200px',
              margin: '0 auto 24px'
            }}>
              <Lottie 
                animationData={paymentSuccessAnimation}
                loop={false}
                autoplay={true}
                style={{ width: '100%', height: '100%' }}
              />
            </div>
            
            <h1 style={{ fontSize: '32px', fontWeight: '900', color: '#000000', marginBottom: '16px', letterSpacing: '-0.5px' }}>
              Pro Unlocked
            </h1>
            
            <p style={{ fontSize: '18px', color: '#334155', lineHeight: '1.6', marginBottom: '24px', fontWeight: '500' }}>
              Your Pro subscription is active. Enjoy full access.
            </p>
            <div style={{ border: '2px solid #000', borderBottom: '4px solid #000', borderRadius: '12px', padding: '18px', marginBottom: '32px', textAlign: 'left', background: '#fff' }}>
              <h3 style={{ fontSize: '16px', fontWeight: '800', margin: '0 0 12px', color: '#000' }}>What’s Included</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '10px' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#1e293b', fontWeight: 600 }}>
                  <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#000', display: 'inline-block' }} />
                  Unlimited AI chat messages
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#1e293b', fontWeight: 600 }}>
                  <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#000', display: 'inline-block' }} />
                  Real-time interview transcription
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#1e293b', fontWeight: 600 }}>
                  <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#000', display: 'inline-block' }} />
                  Screenshot analysis
                </li>
              </ul>
            </div>
            
            <button
              onClick={() => window.close()}
              style={{
                background: '#000000',
                color: '#ffffff',
                border: '2px solid #000000',
                borderRadius: '12px',
                padding: '14px 32px',
                fontSize: '16px',
                fontWeight: '700',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
              onMouseOver={(e) => {
                e.target.style.transform = 'translateY(-2px)';
              }}
              onMouseOut={(e) => {
                e.target.style.transform = 'translateY(0)';
              }}
            >
              Close Window
            </button>
          </>
        ) : (
          <>
            <div style={{ width: '220px', height: '220px', margin: '0 auto 8px' }}>
              <Lottie animationData={worriedManAnimation} loop autoplay style={{ width: '100%', height: '100%' }} />
            </div>
            
            <h1 style={{ fontSize: '28px', fontWeight: '900', color: '#000000', marginBottom: '8px', letterSpacing: '-0.5px' }}>
              Payment Failed
            </h1>
            
            <p style={{
              fontSize: '16px',
              color: '#64748b',
              lineHeight: '1.6',
              marginBottom: '24px'
            }}>
              Your payment could not be processed. Please try again or contact support if the issue persists.
            </p>
            <p style={{
              fontSize: '14px',
              color: '#334155',
              marginBottom: '32px',
              fontWeight: '600'
            }}>
              No charges have been made to your account.
            </p>
          </>
        )}

        {/* Debug info - only show in development */}
        {import.meta.env.DEV && (
          <details style={{
            marginTop: '32px',
            textAlign: 'left',
            background: '#f8fafc',
            borderRadius: '8px',
            padding: '16px',
            fontSize: '12px',
            fontFamily: 'monospace'
          }}>
            <summary style={{ cursor: 'pointer', fontWeight: '600', marginBottom: '8px' }}>
              Debug Information
            </summary>
            <div style={{ whiteSpace: 'pre-wrap', color: '#334155' }}>
              Status: <strong>{String(status)}</strong><br/>
              Loading: <strong>{String(loading)}</strong><br/>
              Transaction ID: <strong>{transactionId}</strong><br/>
              Status Param: <strong>{statusParam}</strong><br/>
              {debugInfo}
            </div>
          </details>
        )}
      </div>
    </div>
  );
}
