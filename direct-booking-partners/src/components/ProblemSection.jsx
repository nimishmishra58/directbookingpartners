// src/components/ProblemSection.jsx
import React, { useState, useEffect } from "react";

const painSlides = [
  {
    id: 0,
    label: "Airbnb Tax",
    icon: "💸",
    title: "You Lose 15–20% on Every Booking",
    body: "Between guest service fees and host fees, OTAs quietly strip 15–20% from every stay. The nicer your property, the more painful this hidden tax becomes.",
    tag: "Margin Leak",
  },
  {
    id: 1,
    label: "No Guest Data",
    icon: "📧",
    title: "No Guest Data, No Audience",
    body: "Airbnb masks guest emails and owns the relationship. You can’t follow up, can’t remarket and can’t bring them back directly — even if they loved their stay.",
    tag: "Zero Asset",
  },
  {
    id: 2,
    label: "Platform Risk",
    icon: "⚠️",
    title: "One Algorithm Change Can Hurt Overnight",
    body: "A single vindictive review, policy tweak or shadow ban can cut your bookings in half. When 100% of your demand comes from one platform, your portfolio is exposed.",
    tag: "Concentration Risk",
  },
];

const ProblemSection = () => {
  const [activeId, setActiveId] = useState(0);

  // Auto-rotate every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveId((prev) => (prev + 1) % painSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const activeSlide = painSlides.find((p) => p.id === activeId) ?? painSlides[0];

  const handleSelect = (id) => {
    setActiveId(id);
  };

  return (
    <section className="py-14 lg:py-20 bg-base-100 border-b border-base-200">
      <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-10 items-stretch">
        {/* LEFT SIDE – Story (stretched height) */}
        <div className="space-y-6 h-full flex flex-col">
          <div className="space-y-3">
            <p className="text-xs font-semibold tracking-[0.18em] uppercase text-base-content/60">
              The Bleeding Neck Problem
            </p>
            <h2 className="text-2xl md:text-3xl font-bold">
              The Mathematics of Dependency
            </h2>
          </div>

          <p className="text-base text-base-content/70">
            You own the asset. You pay the mortgage. You manage the cleaners.
            You handle the 2 AM guest emergencies.
          </p>

          <p className="text-base text-base-content/80 font-semibold">
            So why is Airbnb keeping the customer?
          </p>

          <p className="text-sm md:text-base text-base-content/70">
            Every time you accept a booking on an OTA (Online Travel Agency),
            you are agreeing to a bad deal:
          </p>

          <ul className="space-y-3 text-sm md:text-base text-base-content/80">
            <li className="flex gap-2">
              <span className="mt-1 text-error">●</span>
              <span>
                <span className="font-semibold">You Lose 15–20%:</span>{" "}
                Between guest service fees and host fees, your pricing power is
                stripped away.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="mt-1 text-error">●</span>
              <span>
                <span className="font-semibold">You Own Nothing:</span>{" "}
                Airbnb masks guest emails. You cannot market to them. You
                cannot bring them back.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="mt-1 text-error">●</span>
              <span>
                <span className="font-semibold">You Are Vulnerable:</span>{" "}
                One algorithm change, one vindictive review, or one “shadow ban”
                can wipe out your cash flow overnight.
              </span>
            </li>
          </ul>

          <p className="text-base text-base-content/80 font-semibold">
            The hard truth: If you rely 100% on Airbnb, you don&apos;t have a
            business. You have a gig.
          </p>

          <div className="mt-auto" />
        </div>

        {/* RIGHT SIDE – Auto-rotating carousel, same height as left */}
        <div className="space-y-4 h-200 flex flex-col">
          <div className="card flex-1 bg-gradient-to-br from-base-200 via-base-300 to-base-200 shadow-2xl border border-base-300/60 overflow-hidden">
            <div className="card-body flex flex-col space-y-4 relative">
              {/* Glow background */}
              <div className="pointer-events-none absolute -right-10 -top-10 w-32 h-32 rounded-full bg-primary/10 blur-3xl" />
              {/* Slide content (centered vertically within card) */}
              <div className="flex-1 md:flex-row justify-center md:justify-center z-10">
              
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-3xl bg-base-100/90 flex items-center justify-center shadow-xl border border-base-200">
                    <span className="text-3xl md:text-4xl">
                      {activeSlide.icon}
                    </span>
                  </div>
              

                {/* Text content */}
                <div className="flex-1 space-y-2">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="text-lg md:text-xl font-semibold">
                      {activeSlide.title}
                    </h3>
                    <span className="badge badge-outline badge-xs">
                      {activeSlide.tag}
                    </span>
                  </div>
                  <p className="text-sm md:text-base text-base-content/80">
                    {activeSlide.body}
                  </p>
                </div>
              </div>

              {/* Progress dots */}
              <div className="flex items-center justify-center gap-2 pt-2 z-10">
                {painSlides.map((slide) => {
                  const isActive = activeId === slide.id;
                  return (
                    <button
                      key={slide.id}
                      type="button"
                      onClick={() => handleSelect(slide.id)}
                      aria-label={`Show slide: ${slide.label}`}
                      className={`w-2.5 h-2.5 rounded-full transition-all ${
                        isActive
                          ? "bg-error scale-110"
                          : "bg-base-400/60 hover:bg-error/60"
                      }`}
                    />
                  );
                })}
              </div>
            </div>
          </div>

          {/* Subtext */}
          <p className="text-[11px] md:text-xs text-base-content/60">
            On our strategy call, we&apos;ll quantify exactly how much profit
            you&apos;re losing to OTA tax and what your portfolio looks like
            with a direct booking engine in place.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
