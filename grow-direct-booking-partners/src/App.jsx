import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Footer from "./components/Footer";
import Pricing from "./components/Pricing";
import CTA from "./components/CTA";
import HowItWorks from "./components/HowItWorks";
import Testimonials from "./components/Testimonials";

export default function App() {
  return (
    <div className="font-sans text-gray-900 dark:text-gray-100 bg-white dark:bg-[#0b0b0b]">
      <Navbar />

      {/* Offset for fixed navbar */}
      <div className="pt-24">
        <Hero />
        <Services />
        <HowItWorks/>
        <Pricing />
        <Testimonials />
        <CTA />
        <Footer/>
      </div>
    </div>
  );
}
