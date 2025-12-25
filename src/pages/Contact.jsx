import React from "react";

export default function Contact() {
  return (
    <main className="legal-main">
      <div className="legal-wrap">
        <h1 className="legal-h1">Help</h1>
        <p className="legal-p">
          Reach out for support, billing questions, or partnerships. We typically respond within 1–2 business days.
        </p>
        <div style={{ display: "grid", gap: 14 }}>
          <Card>
            <div style={{ fontWeight: 900, color: "#0f172a", marginBottom: 8 }}>Support</div>
            <div style={{ color: "rgba(15, 23, 42, 0.68)", lineHeight: 1.8 }}>
              Email: <span style={{ fontWeight: 900, color: "#0f172a" }}>interviewpro4@gmail.com</span>
            </div>
          </Card>
          
        </div>
      </div>
    </main>
  );
}

function Card({ children }) {
  return <div className="legal-card">{children}</div>;
}
