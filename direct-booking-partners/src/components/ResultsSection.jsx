// src/components/ResultsSection.jsx
import React from "react";

import resultImg1 from "/assets/casestudy1.png";
import resultImg2 from "/assets/casestudy2.png";
import resultImg3 from "/assets/casestudy3.png";

const resultImages = [resultImg1, resultImg2, resultImg3];

const ResultsSection = () => {
  // Fallback if you haven't defined case studies in data.js
  const fallbackCaseStudies = [
    {
      title: "How One Video Generated $6,500 in Commission-Free Revenue",
      body: "We took a property in a saturated market (Joshua Tree, CA). Instead of posting another photo of a bedroom, we created the “Ultimate Weekend Guide to Joshua Tree.” The result: 30,000+ organic views, $0 ad spend and over $6,500 in direct revenue — pure profit, no OTA tax.",
    },
    {
      title: "Portfolio Owner Shifted 25% of Bookings Direct",
      body: "A multi-unit operator redirected part of their demand through a direct booking engine, email flows and Local Guide content, resulting in higher NOI without adding more units.",
    },
    {
      title: "Boutique Stay Filled Slow Season With One Campaign",
      body: "By emailing and retargeting past guests with a city-specific guide, we helped fill shoulder-season dates that were historically discounted or empty.",
    },
  ];

  return (
    <section
      id="results"
      className="py-14 lg:py-20 bg-base-300 border-b border-base-300 scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto px-4 space-y-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-base-content/60">
            Results, Not “Likes”
          </p>
          <h2 className="text-2xl md:text-3xl font-bold">
            Case Studies From Real Properties
          </h2>
          <p className="text-sm md:text-base text-base-content/70">
            We don&apos;t optimize for views or vanity metrics. We optimize for
            Net Operating Income (NOI), commission-free bookings and repeat
            revenue.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {fallbackCaseStudies.map((cs, idx) => {
            const img = resultImages[idx % resultImages.length];

            return (
              <article
                key={cs.title + idx}
                className="card bg-base-200 shadow-md border border-base-300 hover:shadow-xl transition-shadow duration-300 flex flex-col"
              >
                {/* Image */}
                <figure className="relative">
                  <img
                    src={img}
                    alt={cs.title}
                    className="w-full h-40 object-cover rounded-t-2xl"
                  />
                  <div className="absolute top-3 left-3 bg-base-100/90 backdrop-blur px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wide text-base-content/70 border border-base-300">
                    Case Study {idx + 1}
                  </div>
                </figure>

                {/* Content */}
                <div className="card-body flex-1 flex flex-col gap-3">
                  <h3 className="card-title text-base md:text-lg font-semibold text-purple-500">
                    {cs.title}
                  </h3>
                  <p className="text-sm text-base-content/80 flex-1">
                    {cs.body}
                  </p>

                  {/* Metrics row – you can customize per case later */}
                  <div className="mt-2 grid grid-cols-2 gap-3 text-[11px] md:text-xs text-base-content/70">
                    <div>
                      <p className="font-semibold">Views</p>
                      <p>30,000+ (Organic)</p>
                    </div>
                    <div>
                      <p className="font-semibold">Ad Spend</p>
                      <p>$0</p>
                    </div>
                    <div>
                      <p className="font-semibold">Direct Revenue</p>
                      <p>$6,500+ generated</p>
                    </div>
                    <div>
                      <p className="font-semibold">Channel</p>
                      <p>Local Guide + Direct</p>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Footer copy */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-xs md:text-sm text-base-content/70">
            On your strategy call, we&apos;ll map what your own “$6.5K video” or
            “slow-season fill” could look like based on your market, asset and
            current booking mix.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;

