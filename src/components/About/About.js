import React, { useEffect, useRef } from 'react';
import './About.css';
import SectionCard from './SectionCard';
import TimelineBlock from './TimelineBlock';
import BeliefQuote from './BeliefQuote';
import CTAConnect from './CTAConnect';
import { motion } from 'framer-motion';

const About = () => {
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    carouselRef.current?.scrollBy({ left: -320, behavior: 'smooth' });
  };

  const scrollRight = () => {
    carouselRef.current?.scrollBy({ left: 320, behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0 },
  };

const timelineEvents = [
  {
    title: 'Seeing the Cracks',
    description:
      'I started in financial crimes and lending, watching teams fight fragile SSIS jobs, manual reconciliations, and hero-mode debugging at 7 AM. The pattern was always the same: tools changed, but the underlying chaos didn’t.'
  },
  {
    title: 'From Scripts to Systems',
    description:
      'Instead of writing “one more pipeline,” I started building low-code ETL frameworks, standardized CI/CD, and shared patterns. The goal stopped being “ship the job” and became “fix the way we ship jobs.”'
  },
  {
    title: 'AI After the Foundations',
    description:
      'When AI entered the picture, it was obvious: without clean domains, governed data, and stable DevOps, AI would just amplify existing issues. That’s how I ended up focused on AI application architecture, not just prompts.'
  }
];


  const beliefs = [
    'Designing AI application “textbooks” — end-to-end documents that define domains, flows, guardrails, and failure modes before anyone wires up an LLM.',
  'Standardizing CI/CD, release patterns, and observability so every new service behaves like it belongs to the same ecosystem.',
  'Turning vague business asks into domain models, APIs, and contracts that make cross-team work predictable instead of political.',
  'Refactoring ETL from ad hoc scripts into config-driven, domain-aligned pipelines with clear ownership and metadata.',
  'Embedding human-in-the-loop review points into AI workflows, so subject-matter experts stay in charge of final decisions.',
  'Building logging and telemetry patterns that treat AI calls like serious production dependencies, not magic boxes.'
  ];

  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal');
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

  return (
    <section className="about-section">
      <div className="blob"></div>
      <div className="blob"></div>

      <h1 className="about-title">About Me</h1>
      <p className="about-intro">
        I’m Kayla — an AI engineer in banking who cares more about the foundations than the headlines. I design domain-driven data and AI systems, fix root causes instead of symptoms, and standardize the “boring” parts of engineering so teams can ship trustworthy AI instead of one-off demos.
      </p>

      <SectionCard title="Who I Am">
        <p>
        I’m the person in the room asking, “What problem are we actually solving?” before a single line of code gets written.
        I like AI, but I love clean architecture, stable pipelines, and humans who are not drowning in manual work.

        My sweet spot is designing systems that:
        <br /><br />
        • Turn messy business processes into clear domains and contracts.<br />
        • Make data and AI behavior observable, not mysterious.<br />
        • Feel boring in production — because they just work.
        </p>
      </SectionCard>

      <SectionCard title="How It Started">
        <TimelineBlock events={timelineEvents} />
      </SectionCard>

      <SectionCard title="What I Work On">
        <h2>AI applications built on boring, reliable foundations.</h2>
        <div className="carousel-container">
          <button className="carousel-button left" onClick={scrollLeft}>‹</button>

          <motion.div
            className="carousel-track"
            ref={carouselRef}
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {[
              'Built a low-code ETL framework so intuitive even finance loves it.',
              'Replaced manual workflows with automation across compliance, ingestion, and scheduling',
              'Led CI/CD standardization across 5 tech stacks using Azure DevOps with semantic versioning and artifact control.',
              'Wrote modular Python that made onboarding a pleasant experience. Seriously.',
              'Replaced manual workflows with automation across compliance, data ingestion, and scheduling.',
              'Building a Monte Carlo Option Pricing Engine in C++.',
              'Exploring quant strategy development and financial modeling with Python.'
            ].map((item, index) => (
              <motion.div
                className="carousel-item"
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <p>{item}</p>
              </motion.div>
            ))}
          </motion.div>

          <button className="carousel-button right" onClick={scrollRight}>›</button>
        </div>
      </SectionCard>

      <SectionCard title="What I Believe">
        {beliefs.map((text, index) => (
          <BeliefQuote key={index} quote={text} />
        ))}
      </SectionCard>

      <SectionCard title="What I’m Learning">
        <div className="terminal-quote">
          <pre>
            <code>
              - Currently diving into:<br />
              - AI application architectures and domain-driven design for LLM systems<br />
              - Evaluation, telemetry, and feedback loops for AI in production<br />
              - Vectorization strategies and retrieval patterns for governed data platforms<br />
              - Multi-agent and orchestration patterns that respect real-world constraints<br />
              <br />
              Because tools will change.<br />
              Principles, patterns, and clean boundaries are what actually last.
            </code>
          </pre>
        </div>
      </SectionCard>

      <CTAConnect />
    </section>
  );
};

export default About;
