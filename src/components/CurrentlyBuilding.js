// src/components/CurrentlyBuilding.js
import React from "react";

const projects = [
  { title: "Monte Carlo Option Pricing Engine", tech: "C++", detail: "Threaded and designed using clean architecture" },
  { title: "Portfolio Refresh", tech: "React", detail: "Landing experience + modular structure" },
  { title: "Exploring Quant Strategies", tech: "Python", detail: "Momentum signals, backtesting, and ML" }
];

export default function CurrentlyBuilding() {
  return (
    <section className="container">
      <h2>Currently Building</h2>
      <ul className="building-list">
        {projects.map((item) => (
          <li key={item.title}>
            <strong>{item.title} ({item.tech})</strong>
            <p>{item.detail}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
