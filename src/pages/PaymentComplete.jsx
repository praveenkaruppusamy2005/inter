import { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import Lottie from 'lottie-react';
import paymentSuccessAnimation from '../assets/Payment Successful Animation.json';

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
            
            <h1 style={{
              fontSize: '32px',
              fontWeight: '900',
              color: '#000000',
              marginBottom: '16px',
              letterSpacing: '-0.5px'
            }}>
              Payment Successful
            </h1>
            
            <p style={{
              fontSize: '18px',
              color: '#334155',
              lineHeight: '1.6',
              marginBottom: '32px',
              fontWeight: '500'
            }}>
              Your Pro subscription has been activated successfully!
            </p>
            
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
            <div style={{
              width: '80px',
              height: '80px',
              background: '#000000',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 24px'
            }}>
              <svg
                style={{ width: '40px', height: '40px', fill: '#ffffff' }}
                viewBox="0 0 24 24"
              >
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
              </svg>
            </div>
            
            <h1 style={{
              fontSize: '28px',
              fontWeight: '900',
              color: '#000000',
              marginBottom: '16px',
              letterSpacing: '-0.5px'
            }}>
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
            >
              Close Window
            </button>
          </>
        )}

        {/* Debug info - only show in development */}
        {process.env.NODE_ENV === 'development' && (
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
