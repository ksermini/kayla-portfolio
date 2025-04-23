import React, { useState } from 'react';
import '../index.css';

export default function Projects() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <section className="projects-grid">
      {/* Left Column */}
      <div className="left-column">
        {/* Featured Projects */}
        <div className="featured-projects">
          <h2>Featured Projects</h2>
          <div className="card">
            <h3>Monte Carlo Option Pricing Engine</h3>
            <p>
              High-performance C++ simulation engine using design patterns and threading.
            </p>
            <a href="https://github.com/ksermini/MonteCarlo" target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
          </div>
        </div>

        {/* Document-First Engineering */}
        <div className="document-engineering">
          <h3>📘 Document-First Engineering</h3>
          <p>
            The Monte Carlo Option Pricing Engine was designed using Software Development Documentation (SDD) from day one.
          </p>
          <p style={{ marginTop: '0.5rem', fontStyle: 'italic', fontSize: '0.9rem' }}>
            “Code is temporary. Documentation is forever.”
          </p>
          <a href="/docs/Monte_Carlo(SDD).docx"download className="btn">Download My SDD</a>
        </div>
      </div>

      {/* Right Column */}
      <div className="right-column">
        <div className="card">
          <h3>Crypto Trade Alerts</h3>
          <p>
            Real-time crypto strategy monitor using Python, SQLite, and sentiment analysis.
          </p>
          <a href="https://github.com/ksermini/crypto_trade_alerts" target="_blank" rel="noopener noreferrer">
            View on GitHub
          </a>
        </div>
        <div className="card">
          <h3>Budget Management App</h3>
          <p>
            Flask-based dashboard with real-time Socket IO, personal budgeting tracker.
          </p>
          <a href="https://github.com/ksermini/Budget-management-" target="_blank" rel="noopener noreferrer">
            View on GitHub
          </a>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              &times;
            </button>
            <a href="/docs/Monte_Carlo(SDD).docx"download className="btn">Download My SDD</a>
          </div>
        </div>
      )}
    </section>
  );
}
