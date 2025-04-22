// src/components/Hero.js
import React, { useState } from "react";
import profile from "../assets/kayla.png";
import "../index.css"; // or your Hero-specific CSS

const topics = [
  {
    title: "CI/CD: Why consistency beats chaos",
    blurb: "From semantic versioning to Azure DevOps, I’ve built pipelines that don’t just deploy code — they build confidence.",
    full: "I introduced CI/CD pipelines across 5 stacks, integrating semantic versioning, automated testing, and branching strategies. It cut release delays and empowered teams to ship reliably without firefighting. CI/CD isn't just automation — it's discipline at scale.",
    tech: ["Azure DevOps", "PowerShell", "Python"],
  },
  {
    title: "Low Code / No Code: Scaling without hand-coding",
    blurb: "I architected a low-code ETL framework that eliminated repetitive scripting while keeping full flexibility.",
    full: "With metadata-driven YAML configs, dynamic class loading, and modular validation rules, my framework lets teams onboard sources without touching the core logic. No more copy-paste engineering. Just pure speed, clarity, and reusability.",
    tech: ["Python", "YAML", "SQLAlchemy"],
  },
  {
    title: "PowerShell: My unlikely favorite tool",
    blurb: "It's not flashy, but it gets the job done. PowerShell became my go-to for CI/CD scripting and automation.",
    full: "I used PowerShell to script semantic versioning, automate deployments, and set up dynamic handshakes between systems. It’s a perfect example of choosing the right tool for the job — simple, scriptable, powerful.",
    tech: ["PowerShell", "GitHub Actions"],
  },
  {
    title: "SDLC: The system that runs the system",
    blurb: "I live and breathe clean architecture — because clean processes produce clean code.",
    full: "I standardize SDLC practices across teams by embedding documentation-first thinking, branch strategies, and peer reviews. I love the clarity of a defined process and how it brings teams together toward consistent quality.",
    tech: ["Confluence", "Git", "Jira"],
  },
];

export default function Hero() {
  const [expanded, setExpanded] = useState(null);

  return (
    <section className="hero-wrapper">
      <div className="hero-intro">
        <div className="hero-left">
          <h1>I’m Kayla — a systems-focused data engineer</h1>
          <p>
            I build modular ETL frameworks, lead CI/CD transformations, and
            design human-first DevOps systems.
          </p>
          <p className="hero-sub">
            Currently scaling a low-code ETL engine, building a Monte Carlo pricing model in C++, and refining cloud pipelines.
          </p>
        </div>
        <div className="hero-right">
          <img src={profile} alt="Kayla Sermini" className="hero-image" />
        </div>
      </div>

      <div className="topics-section">
        <h2>🧠 Current Topics</h2>
        <div className="topics-grid">
          {topics.map((topic, index) => (
            <div
              key={index}
              className={`topic-card ${expanded === index ? "expanded" : ""}`}
              onClick={() => setExpanded(expanded === index ? null : index)}
            >
              <div className="topic-front">
                <h3>{topic.title}</h3>
                <p>{topic.blurb}</p>
                <div className="tags">
                  {topic.tech.map((tag) => (
                    <span className="tag" key={tag}>{tag}</span>
                  ))}
                </div>
                <button className="read-btn">Read More</button>
              </div>
              {expanded === index && (
                <div className="topic-back">
                  <p>{topic.full}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
