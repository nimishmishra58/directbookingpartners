// src/components/ComparisonSection.jsx
import React from "react";

const ComparisonSection = () => {
  return (
    <section id="comparison" className="py-16 lg:py-24 bg-base-300 border-b border-base-300 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 space-y-12">
        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-base-content/60">
            Business Model Comparison
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">
            “Airbnb-Only” Operator vs Direct Booking Brand
          </h2>
          <p className="text-base text-base-content/70">
            Same property. Same work. Two completely different profit and control models.
          </p>
        </div>

        {/* Cards row */}
        <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-6 items-stretch">
          {/* LEFT CARD – Airbnb Only */}
          <div className="h-full flex">
            <div className="relative flex-1 rounded-3xl bg-base-100 shadow-xl border border-base-300 p-6 md:p-7 flex flex-col gap-5 hover:shadow-2xl transition-shadow duration-300">
              {/* Label pill */}
              <div className="inline-flex items-center gap-2 rounded-full bg-base-200 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-base-content/60">
                <span className="h-2 w-2 rounded-full bg-rose-400" />
                <span>Before Direct Booking Partners</span>
              </div>

              {/* Title */}
              <div className="space-y-1">
                <h3 className="text-lg md:text-xl font-bold text-rose-500">
                  “Airbnb-Only” Operator
                </h3>
                <p className="text-xs md:text-sm text-base-content/60">
                  Relies completely on platforms that quietly control reach,
                  pricing, and customer ownership.
                </p>
              </div>

              {/* Bullet list */}
              <ul className="list-disc list-inside space-y-2 text-sm text-base-content/80">
                <li>Pays 15–20% in OTA platform fees.</li>
                <li>Doesn’t own guest emails or audience.</li>
                <li>Revenue vulnerable to algorithm shifts.</li>
                <li>Forced to compete mainly on price.</li>
              </ul>

              {/* Profit bar */}
              <div className="mt-auto pt-4 space-y-2">
                <p className="text-xs font-semibold text-base-content/60">
                  Profit kept on ₹1,00,000 in bookings
                </p>
                <div className="h-3 rounded-full bg-base-content/10 overflow-hidden">
                  <div className="h-full w-[80%] bg-rose-400" />
                </div>
                <div className="flex justify-between text-[11px] text-base-content/60">
                  <span>Actual profit retained</span>
                  <span>≈ 80%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Middle Divider */}
          <div className="flex items-center justify-center">
            <div className="flex flex-col items-center gap-2">
              <div className="h-16 w-px bg-base-300 rounded-full" />
              <div className="px-4 py-2 rounded-full border border-base-300 bg-base-100 text-xs font-semibold tracking-[0.2em] uppercase text-base-content/70">
                vs
              </div>
              <div className="h-16 w-px bg-base-300 rounded-full" />
            </div>
          </div>

          {/* RIGHT CARD – Direct Booking */}
          <div className="h-full flex">
            <div className="relative flex-1 rounded-3xl bg-base-100 shadow-xl border border-base-300/80 p-6 md:p-7 flex flex-col gap-5 hover:shadow-2xl transition-shadow duration-300">
              {/* Top gradient accent */}
              <div className="pointer-events-none absolute -top-px left-6 h-1 w-28 bg-gradient-to-r from-purple-400 via-violet-400 to-fuchsia-400 rounded-full" />

              {/* Label pill */}
              <div className="inline-flex items-center gap-2 rounded-full bg-base-200 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-base-content/60">
                <span className="h-2 w-2 rounded-full bg-purple-400" />
                <span>After Direct Booking Partners</span>
              </div>

              {/* Title */}
              <div className="space-y-1">
                <h3 className="text-lg md:text-xl font-bold text-purple-500">
                  Direct Booking Brand
                </h3>
                <p className="text-xs md:text-sm text-base-content/60">
                  Owns demand, owns guest relationships and builds long-term
                  leverage with every stay.
                </p>
              </div>

              {/* Bullet list */}
              <ul className="list-disc list-inside space-y-2 text-sm text-base-content/80">
                <li>Keeps ~97% of booking revenue.</li>
                <li>Builds long-term guest email and WhatsApp lists.</li>
                <li>Can drive repeat bookings on demand.</li>
                <li>Competes on brand, not price.</li>
              </ul>

              {/* Profit bar */}
              <div className="mt-auto pt-4 space-y-2">
                <p className="text-xs font-semibold text-base-content/60">
                  Profit kept on ₹1,00,000 in bookings
                </p>
                <div className="h-3 rounded-full bg-base-content/10 overflow-hidden">
                  <div className="h-full w-[97%] bg-purple-400" />
                </div>
                <div className="flex justify-between text-[11px] text-base-content/60">
                  <span>Actual profit retained</span>
                  <span>≈ 97%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sub-copy */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-sm text-base-content/70">
            We show you exactly how this transformation works during your
            strategy call, using real numbers from your portfolio.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
