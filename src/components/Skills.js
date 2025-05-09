// src/components/Skills.js
import React from "react";

const skills = ["Python", "C++", "PowerShell","CI/CD", "SQL", "Azure", "SDLC", "Confluence", "Java","Solution Designing"];

export default function Skills() {
  return (
    <section className="container">
      <h2>Tech Stack</h2>
      <div className="tech-grid">
        {skills.map((tech) => (
          <span className="tech-tag" key={tech}>{tech}</span>
        ))}
      </div>
    </section>
  );
}
