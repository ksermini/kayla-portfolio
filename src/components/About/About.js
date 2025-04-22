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
      title: 'Early Exposure',
      description: 'My dad’s a senior architect. So naturally, I rebelled... by becoming a data engineer.',
    },
    {
      title: 'Education-as-a-Sampler',
      description: 'Majors? Sampled them like tapas. Got a front-end dev cert for fun, and earned a pen-testing cert because why not? Eventually, I landed in Computer Information Systems and realized: Wait, I actually love building stuff that works.',
    },
    {
      title: 'Finding My Path',
      description: 'I started out chasing a cybersecurity path — fresh off a pen-testing cert in Python and ready to hack the planet. Then someone said, “You won’t be coding much here.” So I pivoted hard. Now I design and build low-code and no-code frameworks from the ground up. At this point, I am the framework.',
    },
  ];

  const beliefs = [
    'Systems should be elegant, not duct-taped.',
    'Code should solve real pain points — like Tim in Treasury’s 1-hour data load.',
    'Documentation is a love letter to your future self.',
    'DevOps isn’t a toolset. It’s a mindset.',
    'Mentorship is engineering, but for people.',
    'Culture is core architecture, not an afterthough',
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
        I’m Kayla, A FinTech data engineer who believes clean code is self-care, and automation should actually make things easier (wild, I know). I’m obsessed with building modular systems, automating away the boring stuff, and writing Python that doesn’t make future-you cry.
      </p>

      <SectionCard title="Who I Am">
        <p>
        Other kids got bedtime stories — I got architecture diagrams and lectures on clean design. Fast-forward: I’m the kind of person who asks why, how, and “what’s the uptime?” before I’ve even had coffee.

        I build things that work and scale:

        Modular ETL frameworks that onboard new data sources without a code rewrite.

        CI/CD pipelines across 5 tech stacks that don’t flinch under pressure.

        DevOps workflows that actually... flow.

        Also: I write documentation like it’s going in a time capsule. Because future-you deserves better.
        </p>
      </SectionCard>

      <SectionCard title="How It Started">
        <TimelineBlock events={timelineEvents} />
      </SectionCard>

      <SectionCard title="What I Work On">
        <h2>Modular systems. Clean pipelines. Real-world impact.</h2>
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
              - C++ memory management (because masochism builds character)<br />
              - Monte Carlo simulations<br />
              - Options pricing engines<br />
              - Alpha modeling + quant strategy dev<br />
              <br />
              Curiosity is the compiler.<br />
              Discipline is the runtime.
            </code>
          </pre>
        </div>
      </SectionCard>

      <CTAConnect />
    </section>
  );
};

export default About;
