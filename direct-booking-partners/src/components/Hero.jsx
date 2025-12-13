import React from "react";

const Hero = () => {
  return (
    <section id="hero" className="hero bg-base-100 py-10 lg:py-16 border-b border-base-200 scroll-mt-24">
      <div className="hero-content max-w-6xl mx-auto px-4 flex-col gap-8">
        <div className="w-full space-y-5 text-left">
          <p className="text-[11px] md:text-xs font-semibold tracking-[0.18em] uppercase text-base-content/60">
            FOR SHORT-TERM RENTAL INVESTORS & PROPERTY MANAGERS WITH $100K+ REVENUE
          </p>

          <h1 className="text-3xl md:text-5xl font-bold leading-tight max-w-3xl">
            Stop Paying the{" "}
            <span className="text-error font-extrabold">“Airbnb Tax”</span>
            <br />
            Build a Direct Booking Engine That Adds{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              15% to Your Net Profit.
            </span>
          </h1>

          <p className="text-base md:text-lg text-base-content/70 max-w-2xl">
            Airbnb is not your partner; they are your landlord. We help professional
            hosts escape platform dependency, capture guest data, and generate
            commission-free revenue using the{" "}
            <span className="font-semibold">Local Guide Protocol</span> — 100%
            compliant, zero risk to your ranking.
          </p>

          <div className="flex flex-col gap-2">
            <div className="flex flex-wrap gap-3 items-center">
              <a href="https://api.leadconnectorhq.com/widget/bookings/direct-booking-partners" target="_blank" className="btn btn-primary btn-lg text-white">
                Book a strategy call →
              </a>
              <button
                className="btn btn-ghost btn-sm md:btn-md"
                onClick={() => {
                  const el = document.getElementById("how-it-works");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
              >
                See how it works
              </button>
            </div>
            <p className="text-[11px] md:text-xs text-base-content/60">
              Strictly for hosts with <span className="font-semibold">5+ listings</span>{" "}
              or <span className="font-semibold">luxury assets</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
