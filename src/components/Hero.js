// src/components/Hero.js

import React from "react";
import { Link } from "react-router-dom";
import profile from "../assets/kayla.png"; // Make sure kayla.png is in src/assets

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 bg-white text-center md:text-left">
      <div className="md:w-1/2 space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          I’m Kayla — a systems-focused data engineer
        </h1>
        <p className="text-xl text-gray-600">
          I build modular ETL frameworks, lead CI/CD transformations, and design human-first DevOps systems.
        </p>
        <p className="text-md text-gray-500">
          Right now: Scaling my low-code ETL framework, building a Monte Carlo pricing engine in C++, and refining cloud pipelines.
        </p>
        <Link
          to="/projects"
          className="inline-block mt-4 px-6 py-3 bg-black text-white rounded-xl shadow hover:bg-gray-800 transition"
        >
          View Projects
        </Link>
      </div>

      <div className="mt-10 md:mt-0 md:ml-12 md:w-1/3">
        <img
          src={profile}
          alt="Kayla Sermini"
          className="rounded-2xl shadow-xl max-w-full"
        />
      </div>
    </section>
  );
}
