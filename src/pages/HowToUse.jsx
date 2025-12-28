import React from 'react';
import { FaKeyboard, FaEyeSlash, FaDesktop, FaRocket, FaMicrophone, FaCamera, FaBolt, FaDownload } from 'react-icons/fa';
import { MdTipsAndUpdates } from 'react-icons/md';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './HowToUse.css';

export default function HowToUse() {
  return (
    <div className="app-layout">
    
      <div className="page-content">
        <div className="how-to-use-page">
          {/* Hero Section */}
          <div className="how-to-hero">
            <div className="how-to-hero-content">
              <FaRocket className="hero-icon" />
              <h1>How to Use InterView Pro</h1>
              <p>Master your interview preparation with our powerful AI assistant</p>
            </div>
          </div>

          {/* Main Content */}
          <div className="how-to-content">
            {/* Getting Started */}
            <section className="how-to-section">
              <h2><MdTipsAndUpdates /> Getting Started</h2>
              <div className="steps-grid">
                <div className="step-card">
                  <div className="step-number">1</div>
                  <h3>Download & Install</h3>
                  <p>Download the InterView Pro desktop application for Windows, Mac, or Linux</p>
                  <button className="download-btn" onClick={() => window.location.href = '/download'}>
                    <FaDownload /> Download Now
                  </button>
                </div>
                <div className="step-card">
                  <div className="step-number">2</div>
                  <h3>Sign In with Google</h3>
                  <p>Use your Google account to sign in and sync your preferences across devices</p>
                </div>
                <div className="step-card">
                  <div className="step-number">3</div>
                  <h3>Upload Your Resume</h3>
                  <p>Upload your resume to get personalized interview preparation based on your experience</p>
                </div>
              </div>
            </section>

            {/* Key Features */}
            <section className="how-to-section features-section">
              <h2>Key Features</h2>
              <div className="features-grid">
                <div className="feature-card">
                  <FaRocket className="feature-icon" />
                  <h3>AI Chat Assistant</h3>
                  <p>Get instant help with coding problems, behavioral questions, and technical concepts during your preparation</p>
                </div>
                <div className="feature-card">
                  <FaMicrophone className="feature-icon" />
                  <h3>Real-time Transcription</h3>
                  <p>Interview Mode transcribes audio in real-time so you can focus on answering questions</p>
                </div>
                <div className="feature-card">
                  <FaCamera className="feature-icon" />
                  <h3>Screenshot Analysis</h3>
                  <p>Press <kbd>Ctrl+Shift+S</kbd> to capture and analyze coding problems or diagrams instantly</p>
                </div>
                <div className="feature-card">
                  <FaBolt className="feature-icon" />
                  <h3>Stealth Mode</h3>
                  <p>Hide the app window instantly with <kbd>Ctrl+Shift+W</kbd> during screen sharing interviews</p>
                </div>
              </div>
            </section>

            {/* Keyboard Shortcuts */}
            <section className="how-to-section">
              <h2><FaKeyboard /> Essential Shortcuts</h2>
              <div className="shortcuts-list">
                <div className="shortcut-item">
                  <div className="shortcut-keys">
                    <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>W</kbd>
                  </div>
                  <div className="shortcut-desc">
                    <strong>Hide/Show App</strong>
                    <p>Instantly toggle app visibility during interviews</p>
                  </div>
                </div>
                <div className="shortcut-item">
                  <div className="shortcut-keys">
                    <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>S</kbd>
                  </div>
                  <div className="shortcut-desc">
                    <strong>Screenshot & Analyze</strong>
                    <p>Capture screen and get AI analysis of coding problems</p>
                  </div>
                </div>
                <div className="shortcut-item">
                  <div className="shortcut-keys">
                    <kbd>Right-click tray icon</kbd>
                  </div>
                  <div className="shortcut-desc">
                    <strong>Quick Access Menu</strong>
                    <p>Access all app features from system tray</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Interview Mode Guide */}
            <section className="how-to-section interview-guide">
              <h2><FaDesktop /> Using Interview Mode</h2>
              <div className="guide-content">
                <div className="guide-step">
                  <div className="guide-number">1</div>
                  <div className="guide-text">
                    <h3>Pre-Interview Setup</h3>
                    <p>Open Profile → Enable Interview Mode → Enter company name and paste job description</p>
                  </div>
                </div>
                <div className="guide-step">
                  <div className="guide-number">2</div>
                  <div className="guide-text">
                    <h3>Start Interview</h3>
                    <p>App opens in compact mode with real-time transcription. Position it where you can glance easily</p>
                  </div>
                </div>
                <div className="guide-step">
                  <div className="guide-number">3</div>
                  <div className="guide-text">
                    <h3>Use Stealth Mode</h3>
                    <p>Before sharing screen, press <kbd>Ctrl+Shift+W</kbd> to hide the window. Press again after screen share ends</p>
                  </div>
                </div>
                <div className="guide-step">
                  <div className="guide-number">4</div>
                  <div className="guide-text">
                    <h3>Get AI Assistance</h3>
                    <p>Type questions or press <kbd>Ctrl+Shift+S</kbd> to analyze screenshots of coding problems</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Tips & Best Practices */}
            <section className="how-to-section tips-section">
              <h2><MdTipsAndUpdates /> Pro Tips</h2>
              <div className="tips-grid">
                <div className="tip-card">
                  <FaEyeSlash className="tip-icon" />
                  <h4>Screen Sharing Safety</h4>
                  <p>Always hide the app <strong>before</strong> starting browser-based screen sharing to prevent detection</p>
                </div>
                <div className="tip-card">
                  <FaBolt className="tip-icon" />
                  <h4>Use Free Trial First</h4>
                  <p>Try 1 free chat credit to test the app before upgrading to Pro for unlimited access</p>
                </div>
                <div className="tip-card">
                  <FaCamera className="tip-icon" />
                  <h4>Screenshot Coding Problems</h4>
                  <p>Use screenshot feature for quick analysis of LeetCode-style problems during practice</p>
                </div>
                <div className="tip-card">
                  <FaMicrophone className="tip-icon" />
                  <h4>Practice with Interview Mode</h4>
                  <p>Use Interview Mode during mock interviews to get comfortable with the workflow</p>
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section className="how-to-cta">
              <h2>Ready to Ace Your Interviews?</h2>
              <p>Download InterView Pro and start preparing today</p>
              <div className="cta-buttons">
                <button className="btn-primary" onClick={() => window.location.href = '/download'}>
                  <FaDownload /> Download App
                </button>
                <button className="btn-secondary" onClick={() => window.location.href = '/#pricing'}>
                  View Pricing
                </button>
              </div>
            </section>
          </div>
        </div>
      </div>
      
    </div>
  );
}
