import React, { useEffect } from 'react';
import './About.css';
import SectionCard from './SectionCard';
import TimelineBlock from './TimelineBlock';
import BeliefQuote from './BeliefQuote';
import CTAConnect from './CTAConnect';

const About = () => {
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal, .snap-card'); // Combine targets
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    revealElements.forEach(el => observer.observe(el));

    return () => {
      revealElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  const timelineEvents = [
    {
      title: 'Early Exposure',
      description: 'My dad’s a senior architect. So naturally, I rebelled... by becoming a data engineer.',
    },
    {
      title: 'Educational Journey',
      description: 'Sampled majors like appetizers, got a front-end dev cert “for fun,” earned a pen-testing cert out of curiosity.',
    },
    {
      title: 'Finding My Path',
      description: 'Finally landed in Computer Information Systems. Cybersecurity sounded cool until I heard “you won’t be coding much here.” So I built everything I could.',
    },
  ];

  const beliefs = [
    'Systems should be clean, modular, and resilient — not duct-taped together.',
    'Code should solve real pain points — like Tim in Treasury’s 1-hour load times.',
    'Documentation is a love letter to your future self (and your team).',
    'DevOps isn’t a toolset — it’s a mindset.',
    'Mentorship is engineering in human form.',
    'Culture is core architecture — not a perk.',
  ];

  return (
    <section className="about-section">
      {/* Ambient Background Blobs */}
      <div className="blob"></div>
      <div className="blob"></div>

      {/* Hero Title + Intro */}
      <h1 className="about-title">About Me</h1>
      <p className="about-intro">
        I’m Kayla — a FinTech data engineer with a passion for modular systems,
        automation that matters, and writing code that people actually enjoy
        working with.
      </p>

      {/* Who I Am */}
      <SectionCard title="Who I Am">
        <p>
          While others got bedtime stories, I got design patterns. I'm the kind of person who asks why, how, and “what’s the uptime?” — all before coffee.
          I build modular ETL frameworks, DevOps pipelines that don’t flinch under pressure, and low-code systems that actually ship.
        </p>
      </SectionCard>

      {/* Timeline */}
      <SectionCard title="How It Started">
        <TimelineBlock events={timelineEvents} />
      </SectionCard>

      {/* Scroll Snap Achievements */}
      <SectionCard title="What I Work On">
        <div className="scroll-snap-container">
          <div className="snap-card">Built a low-code ETL framework that lets teams launch pipelines without touching core logic.</div>
          <div className="snap-card">Led CI/CD standardization across 5 tech stacks using Azure DevOps with semantic versioning and artifact control.</div>
          <div className="snap-card">Wrote modular Python that actually made onboarding... enjoyable.</div>
          <div className="snap-card">Replaced manual workflows with automation across compliance, data ingestion, and scheduling.</div>
          <div className="snap-card">Building a Monte Carlo Option Pricing Engine in C++.</div>
          <div className="snap-card">Exploring quant strategy development and financial modeling with Python.</div>
        </div>
      </SectionCard>

      {/* Beliefs */}
      <SectionCard title="What I Believe">
        {beliefs.map((text, index) => (
          <BeliefQuote key={index} quote={text} />
        ))}
      </SectionCard>

      {/* Terminal-style Learning Block */}
      <SectionCard title="What I’m Learning">
        <div className="terminal-quote">
          <pre>
            <code>
              - Currently diving into:<br />
              - C++ memory management<br />
              - Monte Carlo simulations<br />
              - Options pricing engines<br />
              - Quant strategies and alpha modeling<br />
              <br />
              Curiosity is the compiler.<br />
              Discipline is the runtime.
            </code>
          </pre>
        </div>
      </SectionCard>

      {/* Call to Action */}
      <CTAConnect />
    </section>
  );
};

export default About;
