import React, { useEffect } from "react";
import "./About.css";

// Scroll-reveal animation hook
function useRevealAnimation() {
  useEffect(() => {
    const revealElements = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
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
}

export default function About() {
  useRevealAnimation();

  return (
    <section className="about-section">
      {/* Background Blobs */}
      <div className="blob"></div>
      <div className="blob"></div>

      <h1 className="about-title">About Me</h1>
      <p className="about-intro">
        I’m Kayla — a FinTech data engineer with a passion for modular systems,
        automation that matters, and writing code that people actually enjoy
        working with.
      </p>

      <div className="about-cards">
        <div className="about-card reveal">
          <h2 className="about-subheading">Who I Am</h2>
          <p>
            While others got bedtime stories, I got design patterns. I'm the
            kind of person who asks why, how, and “what’s the uptime?” — all
            before coffee. I build modular ETL frameworks, DevOps pipelines that
            don’t flinch under pressure, and low-code systems that actually
            ship.
          </p>
        </div>

        <div className="about-card reveal">
          <h2 className="about-subheading">How It Started</h2>
          <p>
            My dad’s a senior architect. So naturally, I rebelled... by becoming
            a data engineer. I tried dodging tech — sampled majors like
            appetizers, got a front-end dev cert “for fun,” earned a
            pen-testing cert out of curiosity, and finally landed in CIS.
            Cybersecurity sounded cool until I heard “you won’t be coding much
            here.” So I built everything I could.
          </p>
        </div>

        <div className="about-card reveal">
          <h2 className="about-subheading">What I Work On</h2>
          <ul className="about-list">
            <li>
              Built a low-code ETL framework that lets teams launch pipelines
              without touching core logic
            </li>
            <li>
              Led CI/CD standardization across 5 tech stacks using Azure DevOps
              with semantic versioning and artifact control
            </li>
            <li>
              Wrote modular Python that actually made onboarding... enjoyable
            </li>
            <li>
              Replaced manual workflows with automation across compliance, data
              ingestion, and scheduling
            </li>
            <li>
              Building a Monte Carlo Option Pricing Engine in C++
            </li>
            <li>
              Exploring quant strategy development and financial modeling with
              Python
            </li>
          </ul>
        </div>

        <div className="about-card reveal">
          <h2 className="about-subheading">What I Believe</h2>
          <ul className="about-list">
            <li>
              Systems should be clean, modular, and resilient — not duct-taped
              together
            </li>
            <li>
              Code should solve real pain points — like Tim in Treasury’s 1-hour
              load times
            </li>
            <li>
              Documentation is a love letter to your future self (and your team)
            </li>
            <li>DevOps isn’t a toolset — it’s a mindset</li>
            <li>Mentorship is engineering in human form</li>
            <li>Culture is core architecture — not a perk</li>
          </ul>
        </div>

        <div className="about-card reveal">
          <h2 className="about-subheading">What I’m Learning</h2>
          <p>
            Right now, I’m neck-deep in C++, options math, and scalable systems
            for quant strategies. I’m diving into finance modeling — not because
            I have to, but because I *want* to.
          </p>
        </div>

        <div className="about-card reveal">
          <h2 className="about-subheading">Let’s Connect</h2>
          <p>
            If you’ve made it this far, you’re probably someone who writes clean
            commit messages and reads docs for fun. Let’s debug life together.
          </p>
        </div>
      </div>
    </section>
  );
}
