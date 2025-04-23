// src/components/MilestoneTimeline.js
import React from "react";
import "./MilestoneTimeline.css";

const milestones = [
  {
    icon: "🍼",
    title: "While others got bedtime stories, I got design patterns",
    description:
      "Grew up with a senior architect dad who snuck SOLID principles into casual conversation. I thought OOP was a game until I turned 12.",
    gradient: "linear-gradient(135deg, #dbeafe, #f3e8ff)"
  },
  {
    icon: "🎮",
    title: "Tried to dodge tech — accepted my fate instead",
    description:
      "After years of resisting the family legacy, I finally gave in. Turns out, inheritance isn’t just a C++ keyword.",
    gradient: "linear-gradient(135deg, #fce7f3, #e0f2fe)"
  },
  {
    icon: "🔄",
    title: "Sampled every major like I was at a career buffet",
    description:
      "From business to psych to a front-end dev cert — then landed in CIS. Foreshadowed my love of low-code by clicking through every drag-and-drop builder I could find.",
    gradient: "linear-gradient(135deg, #ede9fe, #fae8ff)"
  },
  {
    icon: "🔐",
    title: "Got a pentesting cert because chaos is a valid career path",
    description:
      "“I didn’t get a pentesting cert just for the title. I wanted to understand how systems work from the ground up. While studying, I got hands-on with network scanning, explored tools like Burp Suite, and saw how Python could be used in new ways for automation and testing.

This experience taught me how to look at infrastructure through a security lens and helped me connect the dots between code, networks, and real-world vulnerabilities.",
    gradient: "linear-gradient(135deg, #fef9c3, #d1fae5)"
  },
  {
    icon: "💼",
    title: "Internship turned production-grade",
    description:
      "Wrote modular ETL pipelines, mentored teammates, and launched a Python framework that actually made onboarding... fun?",
    gradient: "linear-gradient(135deg, #e0f2fe, #f0fdf4)"
  },
  {
    icon: "📌",
    title: "Got the full-time offer by thinking like an architect",
    description:
      "Owned delivery pipelines, built with intention, and designed systems that scaled — without ever saying “It works on my machine.”",
    gradient: "linear-gradient(135deg, #fee2e2, #fff7ed)"
  },
  {
    icon: "🧱",
    title: "Engineered a low-code/no-code ETL platform",
    description:
      "Built a metadata-driven framework that lets non-devs launch pipelines and devs sleep at night.",
    gradient: "linear-gradient(135deg, #f0abfc, #e9d5ff)"
  },
  {
    icon: "📊",
    title: "Discovered quant dev and got slightly obsessed",
    description:
      "Algorithms, momentum, risk models — suddenly my Python scripts had purpose. I was all in.",
    gradient: "linear-gradient(135deg, #c7d2fe, #a5f3fc)"
  },
  {
    icon: "🧠",
    title: "Stacked Python finance + quant modeling certs",
    description:
      "Filled in the gaps with theory. Learned just enough math to be dangerous — in a good way.",
    gradient: "linear-gradient(135deg, #fef3c7, #fce7f3)"
  },
  {
    icon: "💻",
    title: "Started building a Monte Carlo engine in C++",
    description:
      "Because what’s life without memory management and a little multithreading?",
    gradient: "linear-gradient(135deg, #dbeafe, #f5d0fe)"
  },
  {
    icon: "🌐",
    title: "Launched this portfolio",
    description:
      "Crafted it like I do my code: intentionally, modularly, and with just the right shadow radius.",
    gradient: "linear-gradient(135deg, #d1fae5, #f0fdf4)"
  }
];

export default function MilestoneTimeline() {
  return (
    <section className="timeline-wrapper">
      <h2 className="timeline-title">Steps That Brought Me Here <span className="hint">(Hint: SOLID Ones)</span></h2>
      <div className="timeline-scroll">
        {milestones.map((m, i) => (
          <div
            key={i}
            className="milestone-card"
            style={{ background: m.gradient }}
          >
            <div className="milestone-icon">{m.icon}</div>
            <h3 className="milestone-title">{m.title}</h3>
            <p className="milestone-description">{m.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
