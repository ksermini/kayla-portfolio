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
        I’m Kayla — an AI engineer who likes architecture clean, systems predictable, and automation meaningful. I design AI and data platforms the same way I write code: modular, thoughtful, and something people won’t curse at six months later.
      </p>

      <div className="about-cards">
        <div className="about-card reveal">
          <h2 className="about-subheading">Who I Am</h2>
          <p>
            I’m someone who thinks in systems first.
            I care about boundaries, domains, and designing workflows that make sense to the humans who use them.
            I solve problems by simplifying them: clean patterns, clear contracts, and code that teams actually want to maintain.
          </p>
        </div>

        <div className="about-card reveal">
          <h2 className="about-subheading">How I Think About AI</h2>
          <p>
           I like AI that’s grounded in reality.
           AI that understands the business language, works inside real constraints, and helps people make better decisions.
            I don’t chase model hype.
            I build the foundations that make AI trustworthy, observable, and actually usable.
          </p>
        </div>

        <div className="about-card reveal">
          <h2 className="about-subheading">Core Principles That Beat AI Every Time</h2>
          <ul className="about-list">
            <li>
              Strong domains beat strong models, bounded contexts prevent 90% of downstream issues
            </li>
            <li>
              Clean architecture beats clever prototypes, separation of concerns is the real velocity
            </li>
            <li>
              Observability beats assumptions: logs, metrics, and traces reveal truth early
            </li>
            <li>
              Governance beats guesswork: access, lineage, and lifecycle reduce systemic risk
            </li>
            <li>
              Config-driven frameworks that keep teams out of repetitive, soul-crushing code
            </li>
            <li>
              Modular AI and data systems that don’t break when someone sneezes
            </li>
          </ul>
        </div>

        <div className="about-card reveal">
          <h2 className="about-subheading">What I Build</h2>
          <ul className="about-list">
            <li>
             Fix root causes, not symptoms
            <li>
              Make systems predictable
            </li>
            <li>
              Make architecture obvious
            </li>
            <li>
              Build for the humans who actually use the thing
            </li>
            <li>
              Automate the boring parts
            </li>
            <li>Write documentation like someone will read it</li>
          </ul>
        </div>

        <div className="about-card reveal">
          <h2 className="about-subheading">Why Foundations Matter More Than Models</h2>
          <p>
            I’ve learned that most problems aren’t “AI problems.” They’re data issues, unclear ownership, missing standards, or workflows that make no sense. I focus on the architecture and processes that prevent the fire drill in the first place, because clean foundations beat clever patches every time.
          </p>
        </div>

        
        <div className="about-card reveal">
          <h2 className="about-subheading">What I’m Learning Next</h2>
          <p>
            Right now I’m deepening my work in AI product patterns, evaluation frameworks, and quant-inspired modeling. I like challenges that stretch both the math side and the architecture side of my brain, so I’m always building something new.          
          </p>
        </div>

        <div className="about-card reveal">
          <h2 className="about-subheading">Let’s Connect</h2>
          <p>
           If you love talking about clean systems, AI that’s actually useful, or the joy of deleting 300 lines of code because a config file does it better, we’ll get along great.
          </p>
        </div>
      </div>
    </section>
  );
}
