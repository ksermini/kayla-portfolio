// src/pages/Home.js
import React from "react";
import Hero from "../components/Hero";
import LandingTopics from "../components/LandingTopics";
import Skills from "../components/Skills";
import AboutPreview from "../components/AboutPreview";
import CurrentlyBuilding from "../components/CurrentlyBuilding";
import Timeline from "../components/Timeline";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Skills />
      <AboutPreview />
      <CurrentlyBuilding />
      <Timeline />
      <LandingTopics />
      
      <Footer />
    </>
  );
}
