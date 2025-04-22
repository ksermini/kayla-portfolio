// src/components/AboutPreview.js
import React from "react";
import { Link } from "react-router-dom";

export default function AboutPreview() {
  return (
    <section className="container">
      <h2>About Me</h2>
      <p>
        I’m a data engineer with a business edge, building modular systems that scale.
        From financial compliance to quant strategies, I design with purpose.
      </p>
      <Link className="btn" to="/about">Read Full Story</Link>
    </section>
  );
}
