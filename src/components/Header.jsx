import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '20px 40px',
      maxWidth: '1200px',
      margin: '0 auto',
      width: '100%',
      background: 'transparent',
      borderBottom: '1px solid rgba(0,0,0,0.05)'
    }}>
      <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, #1a73e8 0%, #0d47a1 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontWeight: 'bold',
                fontSize: '24px',
                boxShadow: '0 4px 12px rgba(26, 115, 232, 0.3)'
            }}>
                I
            </div>
            <span style={{ fontSize: '24px', fontWeight: '800', color: '#202124', letterSpacing: '-0.5px' }}>imodule</span>
        </div>
      </Link>
      
      <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
          <div style={{ display: 'flex', gap: '24px' }}>
            <Link to="/" style={{ color: '#202124', textDecoration: 'none', fontSize: '15px', fontWeight: 600 }}>Home</Link>
            <Link to="/cancellation-refunds" style={{ color: '#5f6368', textDecoration: 'none', fontSize: '15px', fontWeight: 500, transition: 'color 0.2s' }} onMouseOver={(e) => e.target.style.color = '#1a73e8'} onMouseOut={(e) => e.target.style.color = '#5f6368'}>Refunds</Link>
            <Link to="/terms-conditions" style={{ color: '#5f6368', textDecoration: 'none', fontSize: '15px', fontWeight: 500, transition: 'color 0.2s' }} onMouseOver={(e) => e.target.style.color = '#1a73e8'} onMouseOut={(e) => e.target.style.color = '#5f6368'}>Terms</Link>
            <Link to="/shipping" style={{ color: '#5f6368', textDecoration: 'none', fontSize: '15px', fontWeight: 500, transition: 'color 0.2s' }} onMouseOver={(e) => e.target.style.color = '#1a73e8'} onMouseOut={(e) => e.target.style.color = '#5f6368'}>Shipping</Link>
            <Link to="/privacy" style={{ color: '#5f6368', textDecoration: 'none', fontSize: '15px', fontWeight: 500, transition: 'color 0.2s' }} onMouseOver={(e) => e.target.style.color = '#1a73e8'} onMouseOut={(e) => e.target.style.color = '#5f6368'}>Privacy</Link>
            <Link to="/contact-us" style={{ color: '#5f6368', textDecoration: 'none', fontSize: '15px', fontWeight: 500, transition: 'color 0.2s' }} onMouseOver={(e) => e.target.style.color = '#1a73e8'} onMouseOut={(e) => e.target.style.color = '#5f6368'}>Contact</Link>
          </div>
          
          <button className="google-sign" style={{ 
              width: 'auto', 
              padding: '10px 24px',
              fontSize: '15px',
              fontWeight: 600,
              background: '#1a73e8',
              color: '#fff',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              boxShadow: '0 4px 12px rgba(26, 115, 232, 0.2)',
              transition: 'transform 0.2s, box-shadow 0.2s'
          }} 
          onMouseOver={(e) => {
            e.target.style.transform = 'translateY(-1px)';
            e.target.style.boxShadow = '0 6px 16px rgba(26, 115, 232, 0.3)';
          }}
          onMouseOut={(e) => {
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = '0 4px 12px rgba(26, 115, 232, 0.2)';
          }}
          onClick={() => alert("Redirect to download...")}>
              Download App
          </button>
      </div>
    </nav>
  );
};

export default Header;
