// src/App.jsx
import React from "react";
import "./index.css";
import { navLinks, steps, faqs, caseStudies } from "./data";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ResultsSection from "./components/ResultsSection";
import HowItWorksSection from "./components/HowItWorksSection";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";
import DependencySection from "./components/DependencySection";
import ComparisonSection from "./components/ComparisonSection";

const App = () => {
  return (
    <div data-theme="directbooking" className="min-h-screen flex flex-col">
      <Navbar navLinks={navLinks} />
      <main className="flex-1">
        <Hero />
        <DependencySection />
        <ComparisonSection />
        <HowItWorksSection steps={steps} />
        <ResultsSection caseStudies={caseStudies} />
        <FAQSection faqs={faqs} />

      </main>
      <Footer />
    </div>
  );
};

export default App;
