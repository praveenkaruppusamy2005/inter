import React from 'react';
import { useLocation } from 'react-router-dom';
import { MdCheckCircle, MdCode, MdGraphicEq, MdPhoneIphone, MdSecurity, MdSpeed, MdSupportAgent } from "react-icons/md";
import { FaWindows } from "react-icons/fa";
import { PiMicrosoftTeamsLogoBold } from "react-icons/pi";
import { SiAmazon, SiGooglemeet, SiHackerrank, SiZoom } from "react-icons/si";
import an from './assets/animation.mp4';
import programmers from './assets/make.jpg';

export default function LandingPage() {
  const location = useLocation();
  const windowsDownloadUrl =
    import.meta.env.VITE_WINDOWS_DOWNLOAD_URL ||
    "https://www.dropbox.com/scl/fi/cermrh7nz3vlahsxvr5n2/imodule-setup.exe?rlkey=oq80g7hohpj9j2tg88g8zpwse&st=g8xze5gh&dl=1";
  const [downloadStarted, setDownloadStarted] = React.useState(false);
  const [downloadDisabled, setDownloadDisabled] = React.useState(false);
  const downloadInFlightRef = React.useRef(false);
  const resetTimerRef = React.useRef(null);

  const startDownload = () => {
    if (downloadInFlightRef.current || downloadDisabled) return;
    downloadInFlightRef.current = true;
    setDownloadStarted(true);
    setDownloadDisabled(true);
    window.open(windowsDownloadUrl, "_blank", "noopener,noreferrer");

    if (resetTimerRef.current) window.clearTimeout(resetTimerRef.current);
    resetTimerRef.current = window.setTimeout(() => {
      downloadInFlightRef.current = false;
      setDownloadDisabled(false);
      resetTimerRef.current = null;
    }, 4000);
  };

  React.useEffect(() => {
    if (!location.hash) return;
    const id = location.hash.replace("#", "");
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [location.hash]);

  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      {downloadStarted && (
        <div style={{
          position: 'fixed',
          top: 90,
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 2000,
          width: 'min(760px, calc(100% - 32px))',
          background: 'rgba(32, 33, 36, 0.92)',
          color: '#fff',
          borderRadius: 14,
          padding: '12px 14px',
          boxShadow: '0 10px 28px rgba(0,0,0,0.25)',
          border: '1px solid rgba(255,255,255,0.12)',
          backdropFilter: 'blur(10px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 12
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, minWidth: 0 }}>
            <div style={{
              width: 36,
              height: 36,
              borderRadius: 10,
              background: 'rgba(26,115,232,0.22)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flex: '0 0 auto'
            }}>
              <FaWindows size={18} color="#8ab4f8" />
            </div>
            <div style={{ minWidth: 0 }}>
              <div style={{ fontWeight: 700, fontSize: 14, lineHeight: 1.2 }}>Download started</div>
              <div style={{ fontSize: 12, opacity: 0.9, lineHeight: 1.2 }}>
                If it didn’t start,{" "}
                <a href={windowsDownloadUrl} target="_blank" rel="noreferrer" style={{ color: '#8ab4f8', fontWeight: 700 }}>
                  click here
                </a>
                .
              </div>
            </div>
          </div>
          <button onClick={() => {
            setDownloadStarted(false);
            downloadInFlightRef.current = false;
            if (resetTimerRef.current) window.clearTimeout(resetTimerRef.current);
            resetTimerRef.current = null;
          }} style={{
            border: '1px solid rgba(255,255,255,0.16)',
            background: 'transparent',
            color: '#fff',
            borderRadius: 10,
            padding: '8px 10px',
            cursor: 'pointer',
            fontWeight: 700
          }}>
            Close
          </button>
        </div>
      )}

      <main>
        <section className="hero" id="top">
          <div className="marketing-container">
            <div className="hero-grid">
              <div>
                <h1 className="hero-title">Nail your job interview with your interview AI copilot</h1>
                <p className="hero-subtitle">
                  InterView Pro helps you prepare and practice for interviews. It can transcribe your calls and generate study-ready answer suggestions — we do not provide live support during interviews.
                </p>
                
                <div className="hero-actions">
                  <button
                    className="btn-primary"
                    onClick={startDownload}
                    disabled={downloadStarted || downloadDisabled}
                    style={{ opacity: downloadStarted || downloadDisabled ? 0.7 : 1 }}
                  >
                    <FaWindows style={{ marginRight: 8, fontSize: 18 }} />
                    Download
                  </button>
                  <button className="btn-secondary" onClick={() => scrollToId("features")}>
                    Learn more
                  </button>
                </div>
                <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginTop: 16 }}>
                  <span className="rating-badge">
                    <MdSecurity />
                    Secure & Local
                  </span>
                  <span className="rating-badge">
                    <MdSpeed />
                    Low Latency
                  </span>
                </div>
              </div>
              <div className="hero-media">
                <video src={an} autoPlay loop muted className="hero-video" />
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="about">
          <div className="marketing-container">
            <h2 className="section-title">About InterView Pro</h2>
            <p className="section-subtitle">
              InterView Pro provides comprehensive interview preparation assistance. Use the desktop app to practice your responses, review transcriptions of your mock sessions, and boost your confidence before the real deal.
            </p>
            <div className="card-grid-3">
              <div className="card">
                <div className="card-title">What You Get</div>
                <p className="card-text">
                  Preparation help for coding rounds, system design, behavioral questions, and situational prompts.
                </p>
              </div>
              <div className="card">
                <div className="card-title">How It Works</div>
                <p className="card-text">
                  Download the Windows app, record your practice sessions, and review AI-generated insights to improve your performance.
                </p>
              </div>
              <div className="card">
                <div className="card-title">Support</div>
                <p className="card-text">
                  Contact us at 9159460443 or interviewpro4@gmail.com. See Pricing and Policies for details.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="features">
          <div className="marketing-container">
            <h2 className="section-title">Conquer Technical Interviews the Effortless Way</h2>
            <p className="section-subtitle">
              Built for software developer interviews: get fast, structured support without breaking your flow.
            </p>
            <div className="card-grid-3">
              <StepCard
                icon={<MdPhoneIphone size={22} />}
                title="1. Open the App"
                text="Launch imodule and get ready in seconds."
              />
              <StepCard
                icon={<MdGraphicEq size={22} />}
                title="2. Enable App Features"
                text="Turn on practice and transcription features in the desktop app."
              />
              <StepCard
                icon={<MdSupportAgent size={22} />}
                title="3. Generate Suggestions"
                text="Create concise, speakable answer suggestions for preparation."
              />
            </div>
          </div>
        </section>

        <section className="section" id="platforms">
          <div className="marketing-container">
            <h2 className="section-title">Works with popular interview platforms</h2>
            <p className="section-subtitle">
              Integrates into your workflow for preparation, transcription, and review.
            </p>
            <div className="platform-row">
              <PlatformTile label="Google Meet" icon={<SiGooglemeet size={20} color="#34a853" />} />
              <PlatformTile label="Amazon Chime" icon={<SiAmazon size={20} color="#ff9900" />} />
              <PlatformTile label="Zoom" icon={<SiZoom size={20} color="#2d8cff" />} />
              <PlatformTile label="Microsoft Teams" icon={<PiMicrosoftTeamsLogoBold size={20} color="#6264A7" />} />
              <PlatformTile label="HackerRank" icon={<SiHackerrank size={20} color="#00EA64" />} />
              <PlatformTile label="CoderPad" icon={<MdCode size={20} color="#0f172a" />} />
            </div>
          </div>
        </section>

        <section className="section" id="developers">
          <div className="marketing-container">
            <h2 className="section-title">Tailored Support for Every Profession.</h2>
            <div className="split">
              <div className="image-panel">
                <img src={programmers} alt="Built for developers" />
              </div>
              <div>
                <p style={{ color: '#4f46e5', fontWeight: 600, marginBottom: 20 }}>From technical assessments to case analyses</p>
                
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
