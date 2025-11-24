// src/components/ComparisonSection.jsx
import React, { useState } from "react";

const ComparisonSection = () => {
  const [selected, setSelected] = useState("airbnb"); // 'airbnb' | 'direct'

  return (
    <section className="py-12 lg:py-16 bg-base-200 border-b border-base-300">
      <div className="max-w-6xl mx-auto px-4 space-y-8">
        {/* Section header */}
        <div className="max-w-3xl space-y-3">
          <p className="text-xs font-semibold uppercase text-base-content/60">
            Why direct bookings matter
          </p>
          <h2 className="text-2xl md:text-3xl font-bold">
            Two types of hosts. Only one truly owns their business.
          </h2>
          <p className="text-sm md:text-base text-base-content/70">
            Most stays run everything through Airbnb or OTAs and feel &quot;fully
            booked&quot;—but pay 15–20% in fees and own none of their guest data.
            We help you move to the other side.
          </p>
        </div>

        {/* Comparison + journey */}
        <div className="grid lg:grid-cols-[1.1fr,1.2fr] gap-8 items-start">
          {/* Left: Journey bar + explanation */}
          <div className="space-y-5">
            <div>
              <div className="flex justify-between text-[11px] text-base-content/60 mb-1">
                <span>Airbnb Only</span>
                <span>Direct-First Brand</span>
              </div>
              <div className="h-2 rounded-full bg-base-300 relative overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all duration-500 ${
                    selected === "airbnb"
                      ? "w-1/3 bg-error"
                      : "w-full bg-gradient-to-r from-primary to-success"
                  }`}
                />
              </div>
            </div>

            <p className="text-sm text-base-content/70">
              You don&apos;t need to leave Airbnb. You just need a{" "}
              <span className="font-semibold">direct booking system</span> on
              top of it, so your best guests come back to you — not just to the
              platform.
            </p>

            <ul className="space-y-2 text-sm text-base-content/80">
              <li className="flex gap-2">
                <span className="badge badge-xs badge-outline mt-1" />
                <span>
                  We help you{" "}
                  <span className="font-semibold">
                    keep Airbnb for discovery
                  </span>{" "}
                  but build your{" "}
                  <span className="font-semibold">own website, funnels and
                  guest list</span>.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="badge badge-xs badge-primary mt-1" />
                <span>
                  Over time, a bigger share of your revenue comes from{" "}
                  <span className="font-semibold">email, WhatsApp and direct
                  bookings</span>, not just OTAs.
                </span>
              </li>
            </ul>
          </div>

          {/* Right: Clickable comparison cards */}
          <div className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              {/* COLUMN 1: Airbnb Only Host */}
              <button
                type="button"
                onClick={() => setSelected("airbnb")}
                className={`text-left transition-all duration-300 card bg-base-100 border ${
                  selected === "airbnb"
                    ? "border-error ring-2 ring-error/60 scale-[1.02]"
                    : "border-base-300 hover:border-error/60 hover:scale-[1.01]"
                }`}
              >
                <div className="card-body p-4 space-y-2">
                  <h3 className="text-sm font-bold text-error">
                    ❌ The &quot;Airbnb Only&quot; Host
                  </h3>
                  <ul className="text-xs space-y-1.5 text-base-content/80">
                    <li>❌ Loses 15–20% of every booking to fees.</li>
                    <li>
                      ❌ Zero Data: Airbnb masks guest emails. You can&apos;t
                      market to them again.
                    </li>
                    <li>
                      ❌ Algorithm Risk: One bad review or shadow-ban kills your
                      revenue overnight.
                    </li>
                    <li>
                      ❌ Price Wars: You compete with 5,000 other listings on
                      price alone.
                    </li>
                  </ul>
                </div>
              </button>

              {/* COLUMN 2: Direct Booking Partner */}
              <button
                type="button"
                onClick={() => setSelected("direct")}
                className={`text-left transition-all duration-300 card bg-base-100 border ${
                  selected === "direct"
                    ? "border-success ring-2 ring-success/60 scale-[1.02]"
                    : "border-base-300 hover:border-success/60 hover:scale-[1.01]"
                }`}
              >
                <div className="card-body p-4 space-y-2">
                  <h3 className="text-sm font-bold text-success">
                    ✅ The &quot;Direct Booking&quot; Partner
                  </h3>
                  <ul className="text-xs space-y-1.5 text-base-content/80">
                    <li>
                      ✅ Keeps 100% of the revenue (minus ~3% credit card
                      processing).
                    </li>
                    <li>
                      ✅ Owns the Asset: You build an email list of thousands of
                      past guests.
                    </li>
                    <li>
                      ✅ Repeat Revenue: You send one email to fill a slow
                      month—for free.
                    </li>
                    <li>
                      ✅ Brand Authority: You compete on experience, not price.
                    </li>
                  </ul>
                </div>
              </button>
            </div>

            {/* State-specific micro copy */}
            <div className="text-[11px] md:text-xs text-base-content/70">
              {selected === "airbnb" ? (
                <p>
                  If this is you today, our first goal is simple:{" "}
                  <span className="font-semibold">
                    set up one reliable direct booking channel
                  </span>{" "}
                  (website + email list) without hurting your Airbnb ranking.
                </p>
              ) : (
                <p>
                  This is where we&apos;re heading: a property brand that{" "}
                  <span className="font-semibold">
                    uses Airbnb as a channel, not a crutch
                  </span>
                  , with guests who remember <em>your</em> name — not just the
                  platform&apos;s.
                </p>
              )}
            </div>
          </div>
        </div>

        {/* CTA bar under section */}
        <div className="pt-2 flex flex-wrap gap-3 items-center justify-between text-[11px] md:text-xs text-base-content/60">
          <span>
            On our strategy call, we&apos;ll show you exactly what it would take
            to move from &quot;Airbnb Only&quot; to &quot;Direct Booking
            Partner&quot; for your property.
          </span>
          <a href="#book-call" className="btn btn-primary btn-sm">
            Map my direct booking plan →
          </a>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
