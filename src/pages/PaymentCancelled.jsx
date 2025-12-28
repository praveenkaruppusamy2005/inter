import { useNavigate } from 'react-router-dom';

export default function PaymentCancelled() {
  const navigate = useNavigate();

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #475569 0%, #334155 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
    }}>
      {/* Background decorative elements */}
      <div style={{
        position: 'absolute',
        top: '15%',
        left: '15%',
        width: '80px',
        height: '80px',
        background: 'rgba(255, 255, 255, 0.1)',
        borderRadius: '50%',
        animation: 'float 5s ease-in-out infinite'
      }}>
        <style>
          {`
            @keyframes float {
              0%, 100% { transform: translateY(0px); }
              50% { transform: translateY(-15px); }
            }
          `}
        </style>
      </div>
      
      <div style={{
        position: 'absolute',
        top: '25%',
        right: '20%',
        width: '60px',
        height: '60px',
        background: 'rgba(0, 168, 120, 0.15)',
        borderRadius: '50%',
        animation: 'float 4s ease-in-out infinite 1s'
      }} />
      
      <div style={{
        position: 'absolute',
        bottom: '20%',
        left: '25%',
        width: '70px',
        height: '70px',
        background: 'rgba(255, 255, 255, 0.08)',
        borderRadius: '50%',
        animation: 'float 6s ease-in-out infinite 2s'
      }} />

      {/* Main content card */}
      <div style={{
        background: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(20px)',
        borderRadius: '24px',
        padding: '48px 40px',
        maxWidth: '500px',
        width: '100%',
        textAlign: 'center',
        boxShadow: '0 20px 40px rgba(71, 85, 105, 0.2), 0 0 0 1px rgba(255, 255, 255, 0.2)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Subtle gradient overlay */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: 'linear-gradient(90deg, #475569, #334155, #475569)',
          backgroundSize: '200% 100%',
          animation: 'shimmer 3s ease-in-out infinite'
        }}>
          <style>
            {`
              @keyframes shimmer {
                0%, 100% { background-position: 200% 0; }
                50% { background-position: -200% 0; }
              }
            `}
          </style>
        </div>

        {/* Failed/Cancelled Icon */}
        <div style={{
          width: '120px',
          height: '120px',
          background: 'linear-gradient(135deg, #475569, #334155)',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 32px',
          position: 'relative',
          animation: 'pulse 2s ease-in-out infinite'
        }}>
          <style>
            {`
              @keyframes pulse {
                0%, 100% { transform: scale(1); }
                50% { transform: scale(1.05); }
              }
            `}
          </style>
          <svg
            style={{ width: '60px', height: '60px', fill: 'white' }}
            viewBox="0 0 24 24"
          >
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
          </svg>
        </div>
        
        <h1 style={{
          fontSize: '32px',
          fontWeight: '800',
          background: 'linear-gradient(135deg, #475569 0%, #334155 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          marginBottom: '16px',
          letterSpacing: '-0.5px'
        }}>
          Payment Cancelled
        </h1>
        
        <p style={{
          fontSize: '18px',
          color: '#334155',
          lineHeight: '1.6',
          marginBottom: '32px',
          fontWeight: '500'
        }}>
          Your payment was cancelled or could not be processed.
        </p>
        
        <div style={{
          background: 'linear-gradient(135deg, #475569 0%, #334155 100%)',
          borderRadius: '16px',
          padding: '24px',
          marginBottom: '32px',
          color: 'white',
          textAlign: 'left'
        }}>
          <h3 style={{
            fontSize: '18px',
            fontWeight: '600',
            marginBottom: '16px',
            textAlign: 'center'
          }}>
            This could be due to:
          </h3>
          <ul style={{
            fontSize: '14px',
            opacity: '0.9',
            lineHeight: '1.6',
            listStyle: 'none',
            padding: 0,
            margin: 0
          }}>
            <li style={{ marginBottom: '8px', display: 'flex', alignItems: 'center' }}>
              <span style={{ marginRight: '8px' }}>•</span>
              Payment was cancelled by you
            </li>
            <li style={{ marginBottom: '8px', display: 'flex', alignItems: 'center' }}>
              <span style={{ marginRight: '8px' }}>•</span>
              Payment timeout occurred
            </li>
            <li style={{ marginBottom: '8px', display: 'flex', alignItems: 'center' }}>
              <span style={{ marginRight: '8px' }}>•</span>
              Technical issues with payment gateway
            </li>
            <li style={{ display: 'flex', alignItems: 'center' }}>
              <span style={{ marginRight: '8px' }}>•</span>
              Insufficient funds or card issues
            </li>
          </ul>
        </div>

        <div style={{
          background: '#ecfdf5',
          border: '1px solid #00A878',
          borderRadius: '12px',
          padding: '16px',
          marginBottom: '32px',
          color: '#047857'
        }}>
          <p style={{
            fontSize: '14px',
            fontWeight: '600',
            margin: 0
          }}>
            ✅ No charges have been made to your account
          </p>
        </div>
        
        <div style={{
          display: 'flex',
          gap: '12px',
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}>
          <button
            onClick={() => window.close()}
            style={{
              background: 'linear-gradient(135deg, #475569, #334155)',
              color: 'white',
              border: 'none',
              borderRadius: '12px',
              padding: '14px 28px',
              fontSize: '16px',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 12px rgba(71, 85, 105, 0.4)'
            }}
            onMouseOver={(e) => {
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 6px 20px rgba(71, 85, 105, 0.6)';
            }}
            onMouseOut={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 4px 12px rgba(71, 85, 105, 0.4)';
            }}
          >
            Close Window
          </button>
          
          <button
            onClick={() => navigate('/')}
            style={{
              background: 'transparent',
              color: '#475569',
              border: '2px solid #475569',
              borderRadius: '12px',
              padding: '12px 28px',
              fontSize: '16px',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            onMouseOver={(e) => {
              e.target.style.background = '#475569';
              e.target.style.color = 'white';
              e.target.style.transform = 'translateY(-2px)';
            }}
            onMouseOut={(e) => {
              e.target.style.background = 'transparent';
              e.target.style.color = '#475569';
              e.target.style.transform = 'translateY(0)';
            }}
          >
            Try Again
          </button>
        </div>

        <p style={{
          fontSize: '14px',
          color: '#64748b',
          marginTop: '24px',
          lineHeight: '1.5'
        }}>
          Return to the <strong style={{ color: '#475569' }}>imodule</strong> app to try the payment again or contact support if you continue to experience issues.
        </p>
      </div>
    </div>
  );
}