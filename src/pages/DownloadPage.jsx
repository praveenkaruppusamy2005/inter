import React from 'react';
import { FaWindows, FaApple, FaLinux, FaDownload, FaLightbulb, FaMicrophone, FaCamera, FaEyeSlash } from 'react-icons/fa';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './DownloadPage.css';

export default function DownloadPage() {
  return (
    <div className="app-layout">
    
      <div className="download-page">
        {/* Hero Section */}
     

        {/* Download Options */}
        <div className="download-content">
          <section className="download-section">
            <h2>Available Platforms</h2>
            <div className="download-grid">
              {/* Windows Download */}
              <div className="download-card windows-card">
                <div className="platform-icon">
                  <FaWindows size={64} />
                </div>
                <h3>Windows</h3>
                <p>Download for Windows 10/11</p>
                <a 
                  href="https://www.dropbox.com/scl/fi/2txmwm3sk8n8hvivaucdh/imodule-Setup-1.0.22.exe?rlkey=cqx2u084o3dwzu4rpe5eaz8jl&st=9vdeqdfd&dl=1" 
                  className="download-btn windows-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaDownload /> Download Now
                </a>
              </div>

              
              <div className="download-card mac-card coming-soon">
                <div className="platform-icon">
                  <FaApple size={64} />
                </div>
                <h3>Mac</h3>
                <p>Coming Soon</p>
                <button className="download-btn mac-btn disabled" disabled>
                  <FaDownload /> Coming Soon
                </button>
              </div>

            
              <div className="download-card linux-card coming-soon">
                <div className="platform-icon">
                  <FaLinux size={64} />
                </div>
                <h3>Linux</h3>
                <p>Coming Soon</p>
                <button className="download-btn linux-btn disabled" disabled>
                  <FaDownload /> Coming Soon
                </button>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="features-section">
            <h2>Why Use iModule?</h2>
            <div className="features-grid">
              <div className="feature-item">
                <div className="feature-icon">
                  <FaLightbulb size={36} />
                </div>
                <h3>AI-Powered Interview Prep</h3>
                <p>Get instant help with coding problems and technical questions</p>
              </div>
              <div className="feature-item">
                <div className="feature-icon">
                  <FaMicrophone size={36} />
                </div>
                <h3>Real-time Transcription</h3>
                <p>Transcribe interview audio in real-time for better focus</p>
              </div>
              <div className="feature-item">
                <div className="feature-icon">
                  <FaCamera size={36} />
                </div>
                <h3>Screenshot Analysis</h3>
                <p>Analyze coding problems with a simple screenshot</p>
              </div>
              <div className="feature-item">
                <div className="feature-icon">
                  <FaEyeSlash size={36} />
                </div>
                <h3>Stealth Mode</h3>
                <p>Hide the app during screen sharing interviews</p>
              </div>
            </div>
          </section>

          {/* System Requirements */}
          <section className="requirements-section">
            <h2>System Requirements</h2>
            <div className="requirements-content">
              <h3>Windows</h3>
              <ul>
                <li>Windows 10 or later</li>
                <li>4GB RAM minimum, 8GB recommended</li>
                <li>1GB free disk space</li>
                <li>Internet connection required</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
     
    </div>
  );
}
