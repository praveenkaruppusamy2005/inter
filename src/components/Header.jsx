import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/Screen.png';

export default function Header() {
  const location = useLocation();

  const isActive = (to, hash) => {
    if (hash) return location.pathname === to && location.hash === hash;
    return location.pathname === to;
  };

  return (
    <header className="site-header">
      <div className="marketing-container">
        <nav className="nav-inner">
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="nav-left">
              <img src={logo} alt="Logo" style={{ width: 50, height: 50, objectFit: 'contain', display: 'block' }} />
            </div>
          </Link>

          <div className="nav-links">
            <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>Home</Link>
            <Link to="/#about" className={`nav-link ${isActive('/', '#about') ? 'active' : ''}`}>About</Link>
            <Link to="/pricing" className={`nav-link ${isActive('/pricing') ? 'active' : ''}`}>Pricing</Link>
            <Link to="/policies" className={`nav-link ${isActive('/policies') ? 'active' : ''}`}>Policies</Link>
            <Link to="/contact" className={`nav-link ${isActive('/contact') ? 'active' : ''}`}>Contact Us</Link>
          </div>

          <div style={{ minWidth: 180 }} />
        </nav>
      </div>
    </header>
  );
}
