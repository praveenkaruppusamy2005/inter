import React from 'react';
import { Link } from 'react-router-dom';
import Header from './components/Header';
import './style.css';
import { MdMic, MdChatBubble, MdDescription, MdMonitor, MdDownload, MdSecurity, MdCode, MdSpeed } from "react-icons/md";
import an from './assets/animation.mp4';
import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';

export default function LandingPage() {
  return (
    <div className="app-root dark" style={{ 
      overflowY: 'auto', 
      height: '100vh',
      display: 'block',
      position: 'relative'
    }}>
      {/* Navigation / Header */}
      <Header />

      {/* Hero Section */}
      <div className="login-root-responsive" style={{ height: 'auto', minHeight: '80vh', padding: '60px 20px' }}>
        <div className="login-content-col" style={{ alignItems: 'flex-start', maxWidth: '600px', paddingRight: '40px' }}>
            <h1 style={{ 
                fontSize: '56px', 
                lineHeight: '1.1', 
                marginBottom: '24px',
                background: 'linear-gradient(to right, #000 0%, #555 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: 800
            }}>
                Your AI Copilot for Technical Interviews
            </h1>
            <p style={{ fontSize: '20px', color: '#5f6368', marginBottom: '40px', lineHeight: '1.6' }}>
                Real-time transcription, context-aware AI hints, and resume analysis—all in a discreet, undetectable overlay. Ace your next interview with confidence.
            </p>
            
            <div style={{ display: 'flex', gap: '16px' }}>
                <button className="google-sign" style={{ 
                    width: 'auto', 
                    padding: '16px 32px',
                    fontSize: '18px',
                    fontWeight: 600,
                    background: '#1a73e8',
                    color: 'white',
                    border: 'none'
                }}>
                    <MdDownload style={{ marginRight: '8px', fontSize: '24px' }} />
                    Download for Windows
                </button>
                <button className="google-sign" style={{ 
                    width: 'auto', 
                    padding: '16px 32px',
                    fontSize: '18px',
                    fontWeight: 600,
                    background: 'transparent',
                    border: '2px solid #dadce0',
                    color: '#202124'
                }}>
                    View Demo
                </button>
            </div>
            <div style={{ marginTop: '24px', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: '#5f6368' }}>
                <MdSecurity color="#34a853" /> Secure & Local
                <span style={{ margin: '0 8px' }}>•</span>
                <MdSpeed color="#ea4335" /> Low Latency
                <span style={{ margin: '0 8px' }}>•</span>
                <MdCode color="#fbbc04" /> Syntax Highlighting
            </div>
        </div>

        <div className="login-video-col" style={{ maxWidth: '600px' }}>
            {/* Using the app's actual animation or a mockup */}
            <div style={{ 
                position: 'relative',
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
                border: '8px solid #fff'
            }}>
                <video src={an} autoPlay loop muted style={{ width: '100%', display: 'block' }}></video>
                
                {/* Floating UI Mockup Overlay */}
                <div style={{
                    position: 'absolute',
                    bottom: '20px',
                    left: '20px',
                    right: '20px',
                    background: 'rgba(255,255,255,0.95)',
                    padding: '16px',
                    borderRadius: '12px',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                    backdropFilter: 'blur(10px)'
                }}>
                    <div style={{ display: 'flex', gap: '12px', marginBottom: '8px' }}>
                        <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#e8f0fe', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <MdChatBubble color="#1a73e8" size={18} />
                        </div>
                        <div>
                            <div style={{ fontSize: '12px', fontWeight: 600, color: '#1a73e8' }}>AI Assistant</div>
                            <div style={{ fontSize: '14px', color: '#202124' }}>Suggested approach: Use a Hash Map to store frequency...</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>

      {/* Features Grid */}
      <div style={{ padding: '80px 20px', background: '#f8f9fa' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h2 style={{ textAlign: 'center', fontSize: '36px', marginBottom: '60px', color: '#202124' }}>Why Top Candidates Choose imodule</h2>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
                <FeatureCard 
                    icon={<MdMic size={32} color="#1a73e8" />}
                    title="Real-time Transcription"
                    desc="Captures interviewer questions instantly with high-accuracy speech-to-text, even for technical jargon."
                />
                <FeatureCard 
                    icon={<MdDescription size={32} color="#ea4335" />}
                    title="Resume Context"
                    desc="The AI understands your resume and experience, tailoring answers to highlight your specific strengths."
                />
                <FeatureCard 
                    icon={<MdMonitor size={32} color="#34a853" />}
                    title="Undetectable Overlay"
                    desc="Stays always-on-top but invisible to screen sharing. Focus on the interview, not switching tabs."
                />
                <FeatureCard 
                    icon={<MdCode size={32} color="#fbbc04" />}
                    title="Live Coding Support"
                    desc="Get syntax-highlighted code snippets and algorithm explanations in real-time."
                />
            </div>
        </div>
      </div>

      {/* Footer */}
      <footer style={{ background: '#202124', color: '#fff', padding: '60px 20px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ fontSize: '32px', marginBottom: '24px' }}>Ready to land your dream job?</h2>
            <button className="google-sign" style={{ 
                width: 'auto', 
                padding: '16px 40px',
                fontSize: '18px',
                fontWeight: 600,
                background: '#fff',
                color: '#202124',
                border: 'none',
                marginBottom: '40px'
            }}>
                Get imodule Now
            </button>
            <div style={{ marginBottom: '20px', display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
                <Link to="/cancellation-refunds" style={{ color: '#9aa0a6', textDecoration: 'none' }}>Cancellation & Refunds</Link>
                <Link to="/terms-conditions" style={{ color: '#9aa0a6', textDecoration: 'none' }}>Terms & Conditions</Link>
                <Link to="/shipping" style={{ color: '#9aa0a6', textDecoration: 'none' }}>Shipping & Delivery</Link>
                <Link to="/privacy" style={{ color: '#9aa0a6', textDecoration: 'none' }}>Privacy Policy</Link>
                <Link to="/contact-us" style={{ color: '#9aa0a6', textDecoration: 'none' }}>Contact Us</Link>
            </div>
            <p style={{ color: '#9aa0a6' }}>© 2025 InterView Pro. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, desc }) {
    return (
        <div style={{ 
            background: '#fff', 
            padding: '32px', 
            borderRadius: '16px', 
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
            transition: 'transform 0.2s',
            border: '1px solid #dadce0'
        }}>
            <div style={{ marginBottom: '20px' }}>{icon}</div>
            <h3 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '12px', color: '#202124' }}>{title}</h3>
            <p style={{ color: '#5f6368', lineHeight: '1.5' }}>{desc}</p>
        </div>
    );
}
