import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/Screen.png';

import "../style.css"
export default function Header() {
  const location = useLocation();
  const [showPoliciesDropdown, setShowPoliciesDropdown] = useState(false);

  const isActive = (to, hash) => {
    if (hash) return location.pathname === to && location.hash === hash;
    return location.pathname === to;
  };

  const pathLabels = {
    '/download': 'Download',
    '/download/windows': 'Download',
    '/pricing': 'Pricing',
    '/features': 'Features',
    '/use-cases': 'Use Cases',
    '/contact': 'Contact',
    '/privacy': 'Privacy Policy',
    '/terms': 'Terms of Service',
    '/refund': 'Refund Policy',
    '/policies': 'Policies',
  };

  return (
    <header className="site-header">
      <div className="marketing-container">
        <nav className="nav-inner">
          <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
            <div className="nav-left">
              <img src={logo} alt="Logo" style={{ width: 50, height: 50, objectFit: 'contain', display: 'block' }} />
            </div>
          </Link>

          <div className="nav-links">
            <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>Home</Link>
            <Link to="/#about" className={`nav-link ${isActive('/', '#about') ? 'active' : ''}`}>About</Link>
            <Link to="/features" className={`nav-link ${isActive('/features') ? 'active' : ''}`}>Features</Link>
            <Link to="/use-cases" className={`nav-link ${isActive('/use-cases') ? 'active' : ''}`}>Use Cases</Link>
            <Link to="/download" className={`nav-link ${isActive('/download') ? 'active' : ''}`}>Download</Link>
            <Link to="/pricing" className={`nav-link ${isActive('/pricing') ? 'active' : ''}`}>Pricing</Link>
            
            <div 
              className="nav-dropdown"
              onMouseEnter={() => setShowPoliciesDropdown(true)}
              onMouseLeave={() => setShowPoliciesDropdown(false)}
            >
              <Link 
                to="/policies" 
                className={`nav-link ${isActive('/policies') || showPoliciesDropdown ? 'active' : ''}`}
                onClick={(e) => {
                  if (window.innerWidth < 768) {
                    e.preventDefault();
                    setShowPoliciesDropdown(!showPoliciesDropdown);
                  }
                }}
              >
                Policies
              </Link>
              
              {showPoliciesDropdown && (
                <div className="nav-dropdown-menu">
                  <Link to="/policies" className="nav-dropdown-link">All Policies</Link>
                  <Link to="/privacy" className="nav-dropdown-link">Privacy Policy</Link>
                  <Link to="/terms" className="nav-dropdown-link">Terms of Service</Link>
                  <Link to="/refund" className="nav-dropdown-link">Refund Policy</Link>
                </div>
              )}
            </div>
            
            <Link to="/contact" className={`nav-link ${isActive('/contact') ? 'active' : ''}`}>Contact Us</Link>
          </div>

          <div className="nav-right">
            {location.pathname !== '/' && (
              <nav aria-label="Breadcrumb" style={{ fontSize: 12 }}>
                <ol style={{ listStyle: 'none', display: 'flex', gap: 6, margin: 0, padding: 0 }}>
                  <li><Link to="/">Home</Link></li>
                  <li aria-current="page">{pathLabels[location.pathname] || ''}</li>
                </ol>
              </nav>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}
