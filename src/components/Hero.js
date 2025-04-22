import React from "react";
import kayla from "../assets/kayla.png";

export default function Hero() {
  return (
    <div className="hero-wrapper">
      <div className="hero-intro">
        <div className="hero-left">
          <h1 className="hero-title">Building clean, scalable data systems</h1>
          <p className="hero-tagline">
            Modular ETL. Dynamic CI/CD. Obsessed with SDLC excellence.
          </p>
          <a href="#projects" className="hero-btn">
            View Projects
          </a>
        </div>
        <div className="hero-right">
          <img src={kayla} alt="Kayla Sermini" className="hero-avatar" />
        </div>
      </div>
    </div>
  );
}
