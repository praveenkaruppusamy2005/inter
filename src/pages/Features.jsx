import React from 'react';

export default function Features() {
  return (
    <div className="app-layout">
      <div className="page-content">
        <main className="marketing-container">
          <h1>Features</h1>
          <p>Interview Pro delivers real-time AI assistance during interviews and coding assessments.</p>

          <section className="section">
            <h2>Real-time AI answers during interviews</h2>
            <p>Get structured, concise suggestions while you stay focused on the conversation.</p>
          </section>

          <section className="section">
            <h2>Works on Zoom, Google Meet, Teams</h2>
            <p>Compatible with the most common interview platforms used by recruiters and companies.</p>
          </section>

          <section className="section">
            <h2>HackerRank and LeetCode screenshot analysis</h2>
            <p>Screenshot coding problems and receive instant insights and solution guidance.</p>
          </section>
        </main>
      </div>
    </div>
  );
}
