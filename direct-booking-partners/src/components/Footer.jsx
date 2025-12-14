// src/components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-base-100 border-t border-base-200 py-6 mt-8">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-3 text-xs md:text-sm text-base-content/60">
        <p>
          © {new Date().getFullYear()} Direct Booking Partners. All rights reserved.
        </p>
        <div className="flex gap-4">
          <a href="https://api.leadconnectorhq.com/widget/bookings/direct-booking-partners" target="_blank" className="link link-hover">
            Book a call
          </a>
          <a href="#" className="link link-hover">
            Privacy
          </a>
          <a href="#" className="link link-hover">
            Terms
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
