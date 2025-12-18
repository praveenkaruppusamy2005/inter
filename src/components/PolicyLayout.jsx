import React from 'react';
import Header from './Header';
import Footer from './Footer';

const PolicyLayout = ({ children, title }) => {
  return (
    <div className="app-root" style={{ 
      height: '100vh', 
      overflowY: 'auto', 
      display: 'flex', 
      flexDirection: 'column', 
      background: 'linear-gradient(180deg, #f8f9fa 0%, #ffffff 100%)',
      position: 'relative'
    }}>
      <Header />
      <div style={{ flex: '1 0 auto', padding: '60px 20px' }}>
        <div style={{ 
          maxWidth: '900px', 
          margin: '0 auto', 
          background: 'rgba(255, 255, 255, 0.95)', 
          padding: '60px', 
          borderRadius: '24px',
          boxShadow: '0 10px 40px rgba(0,0,0,0.08)',
          border: '1px solid rgba(0,0,0,0.05)',
          backdropFilter: 'blur(20px)',
          animation: 'fadeIn 0.6s cubic-bezier(0.22, 1, 0.36, 1)'
        }}>
          <h1 style={{ 
            fontSize: '42px', 
            marginBottom: '24px', 
            color: '#1a73e8',
            fontWeight: 800,
            letterSpacing: '-1px',
            background: 'linear-gradient(135deg, #1a73e8 0%, #0d47a1 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            {title}
          </h1>
          <div style={{ 
            height: '6px', 
            width: '80px', 
            background: 'linear-gradient(90deg, #1a73e8, #8ab4f8)', 
            marginBottom: '48px',
            borderRadius: '100px'
          }}></div>
          
          <div style={{ 
            fontSize: '17px', 
            lineHeight: '1.8', 
            color: '#3c4043',
            fontFamily: '"Google Sans", "gt", system-ui, sans-serif'
          }}>
            {children}
          </div>
        </div>
      </div>
      <Footer />
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        /* Smooth scrolling */
        .app-root {
          scroll-behavior: smooth;
        }

        /* Custom scrollbar */
        .app-root::-webkit-scrollbar {
          width: 10px;
        }
        .app-root::-webkit-scrollbar-track {
          background: #f1f3f4;
        }
        .app-root::-webkit-scrollbar-thumb {
          background: #dadce0;
          border-radius: 5px;
          border: 2px solid #f1f3f4;
        }
        .app-root::-webkit-scrollbar-thumb:hover {
          background: #bdc1c6;
        }
      `}</style>
    </div>
  );
};

export default PolicyLayout;
