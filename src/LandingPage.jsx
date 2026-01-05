import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { MdCode, MdGraphicEq, MdPhoneIphone, MdSupportAgent } from "react-icons/md";
import { PiMicrosoftTeamsLogoBold } from "react-icons/pi";
import { SiAmazon, SiGooglemeet, SiHackerrank, SiZoom } from "react-icons/si";
import an from './assets/animation.mp4';
import programmers from './assets/make.jpg';

export default function LandingPage() {
  const location = useLocation();
  const navigate = useNavigate();

  const goToDownloadPage = () => {
    navigate('/download');
  };

  React.useEffect(() => {
    if (!location.hash) return;
    const id = location.hash.replace("#", "");
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [location.hash]);

  return (
    <>
      <main>
        {/* Hero Section with Mobile Wallpaper Background */}
        <section className="hero-wallpaper" id="top">
          <div className="hero-wallpaper-content">
            <div className="hero-text-section">
              <h1 className="hero-main-title">
                Cheapest AI Interview Assistant - Just ₹999 for 5 Days
              </h1>
              <p className="hero-main-subtitle">
                Most affordable AI interview tool. Get unlimited real-time answers during Zoom, Google Meet, Teams interviews and coding tests. Why pay more?
              </p>
              <button className="hero-download-btn" onClick={goToDownloadPage}>
                DOWNLOAD INTERVIEW PRO
              </button>
              
            </div>
            <div className="hero-phone-section">
              <div className="phone-mockup">
                <div className="phone-screen">
                  <video src={an} autoPlay loop muted className="phone-video" />
                </div>
              </div>
            </div>
            
          </div>
        </section>

       
        <section className="secondary-hero">
          <div className="marketing-container">
            <h2 className="secondary-hero-title">
              Most Affordable AI Interview Tool<br />
              <span className="highlight-text">₹999 for 5 Days Unlimited</span>
            </h2>
          </div>
        </section>

        <section className="section" id="about">
          <div className="marketing-container">
            <h2 className="section-title">Why Pay More? Get the Cheapest AI Interview Assistant</h2>
            <p className="section-subtitle">
              Interview Pro offers the same powerful AI features as expensive tools, but at a fraction of the cost. 
              Just ₹999 for 5 days unlimited access, or ₹250 per credit for flexible usage.
            </p>
            <div className="card-grid-3">
              <div className="card">
                <div className="card-title">💰 Unbeatable Price</div>
                <p className="card-text">
                  ₹999 for 5 days unlimited or ₹250/credit. Compare that to competitors charging $50-100/month!
                </p>
              </div>
              <div className="card">
                <div className="card-title">🚀 Full Features</div>
                <p className="card-text">
                  Real-time AI answers, transcription, screenshot analysis, stealth mode - everything you need.
                </p>
              </div>
              <div className="card">
                <div className="card-title">✅ No Compromise</div>
                <p className="card-text">
                  Cheapest doesn't mean cheap quality. Get premium AI assistance at budget-friendly prices.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section conquer-section" id="features">
          <div className="marketing-container">
            <h2 className="section-title">Real-time AI answers during interviews</h2>
            <p className="section-subtitle">
              Built for software developer interviews: get fast, structured support without breaking your flow.
            </p>
            <div className="conquer-steps">
              <div className="conquer-step-main">
                <div>
                  <div className="conquer-step-number">1</div>
                  <h3 className="conquer-step-title">Open the App</h3>
                  <p className="conquer-step-text">Launch imodule and get ready in seconds. Log in and let InterView Pro do the rest</p>
                </div>
                <button className="conquer-step-button" onClick={goToDownloadPage}>
                  Download InterView Pro
                </button>
              </div>
              <div className="conquer-step-secondary">
                <div className="conquer-step-card">
                  <div className="conquer-step-number">2</div>
                  <div className="conquer-step-content">
                    <h3 className="conquer-step-title">Activate the Assistant</h3>
                    <p className="conquer-step-text">Start listening and let AI track your technical interview in real time.</p>
                  </div>
                </div>
                <div className="conquer-step-card">
                  <div className="conquer-step-number">3</div>
                  <div className="conquer-step-content">
                    <h3 className="conquer-step-title">Get Instant Support</h3>
                    <p className="conquer-step-text">Receive discreet guidance for coding and system design questions.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="platforms">
          <div className="marketing-container">
            <h2 className="section-title">Works on Zoom, Google Meet, Teams, HackerRank, LeetCode</h2>
            <p className="section-subtitle">
              Works across interview call tools and common coding platforms so you can stay focused.
            </p>
            <div className="platform-row">
              <PlatformTile label="Google Meet" icon={<SiGooglemeet size={20} color="#000000" />} />
              <PlatformTile label="Amazon Chime" icon={<SiAmazon size={20} color="#000000" />} />
              <PlatformTile label="Zoom" icon={<SiZoom size={20} color="#000000" />} />
              <PlatformTile label="Microsoft Teams" icon={<PiMicrosoftTeamsLogoBold size={20} color="#000000" />} />
              <PlatformTile label="HackerRank" icon={<SiHackerrank size={20} color="#000000" />} />
              <PlatformTile label="CoderPad" icon={<MdCode size={20} color="#000000" />} />
            </div>
          </div>
        </section>

        <section className="section" id="developers">
          <div className="marketing-container">
            <h2 className="section-title">Instant prep help and answer coaching</h2>
            <div className="split">
              <div className="image-panel">
                <img src={programmers} alt="Built for developers" />
              </div>
              <div>
                <p style={{ color: '#00A878', fontWeight: 600, marginBottom: 20 }}>From technical assessments to case analyses</p>
                
                <div className="bullet">
                  <div className="bullet-title">For Developers</div>
                  <p className="bullet-text">
                    Get real-time assistance with coding challenges, algorithm explanations, and technical interview prep. Impress recruiters with your problem-solving skills and land your dream dev job.
                  </p>
                </div>
                <div className="bullet">
                  <div className="bullet-title">For Marketing Professionals</div>
                  <p className="bullet-text">
                    Craft compelling answers, showcase your strategic thinking, and navigate behavioral questions with ease. Our platform equips you with the tools to present your best self and win over any marketing team.
                  </p>
                </div>
                <div className="bullet">
                  <div className="bullet-title">For Sales Representatives</div>
                  <p className="bullet-text">
                    Master the art of persuasion, handle objections like a pro, and deliver impactful sales pitches. Our software helps you demonstrate your sales prowess and land that top sales role.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

function StepCard({ icon, title, text }) {
  return (
    <div className="card">
      <div className="card-icon">{icon}</div>
      <div className="card-title">{title}</div>
      <p className="card-text">{text}</p>
    </div>
  );
}

function PlatformTile({ icon, label }) {
  return (
    <div className="platform-tile">
      <span className="platform-tile-icon">{icon}</span>
      <span className="platform-tile-label">{label}</span>
    </div>
  );
}
