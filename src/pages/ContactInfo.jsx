import React from "react";

export default function ContactInfo() {
  return (
    <main className="legal-main">
      <div className="legal-wrap">
        <h1 className="legal-h1">Contact Info</h1>
        <p className="legal-p">
          Use these contact details for support, billing, and general questions.
        </p>
        <div style={{ display: "grid", gap: 14 }}>
          <div className="legal-card">
            <div className="legal-card-title">Support</div>
            <div className="legal-card-text" style={{ lineHeight: 1.9 }}>
              Phone: <span style={{ fontWeight: 900 }}>9159460443</span>
              <br />
              Email: <span style={{ fontWeight: 900 }}>support@interviewpro.app</span>
            </div>
          </div>
          <div className="legal-card">
            <div className="legal-card-title">Business</div>
            <div className="legal-card-text" style={{ lineHeight: 1.9 }}>
              Email: <span style={{ fontWeight: 900 }}>business@interviewpro.app</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

