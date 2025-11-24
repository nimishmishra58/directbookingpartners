// src/App.jsx
import React from "react";
import "./index.css";
import {
  navLinks,
  steps,
  faqs,
  caseStudies,
} from "./data";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import StatsSection from "./components/StatsSection";
import ProblemSection from "./components/ProblemSection";
import ResultsSection from "./components/ResultsSection";
import TechStackSection from "./components/TechStackSection";
import HowItWorksSection from "./components/HowItWorksSection";
import BookingSection from "./components/BookingSection";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div data-theme="directbooking" className="min-h-screen flex flex-col">
      <Navbar navLinks={navLinks} />
      <main className="flex-1">
        <Hero />
         <ProblemSection />
          <HowItWorksSection steps={steps} />
              <ResultsSection caseStudies={caseStudies} />
              <TechStackSection />
                  <FAQSection faqs={faqs} />
        
        <BookingSection />
    
      </main>
      <Footer />
    </div>
  );
};

export default App;
