import React from 'react';

export default function UseCases() {
  return (
    <div className="app-layout">
      <div className="page-content">
        <main className="marketing-container">
          <h1>Use Cases</h1>
          <p>Designed for job seekers, students, and software engineers preparing for interviews.</p>

          <section className="section">
            <h2>Technical interview Q&A</h2>
            <p>Get suggested answers to system design, algorithms, and troubleshooting questions.</p>
          </section>

          <section className="section">
            <h2>Coding tests and assessments</h2>
            <p>Use screenshot analysis and guidance to prepare for HackerRank and LeetCode rounds.</p>
          </section>

          <section className="section">
            <h2>Behavioral interview coaching</h2>
            <p>Practice common behavioral questions with concise, structured responses.</p>
          </section>
        </main>
      </div>
    </div>
  );
}
