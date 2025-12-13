// src/components/DependencySection.jsx
import React from "react";

const DependencySection = () => {
  return (
    <section id="problem" className="py-14 lg:py-20 bg-base-200 border-b border-base-300 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-10 items-center">
        {/* LEFT CONTENT */}
        <div className="space-y-6">
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
                <strong>You Lose 15–20%:</strong> OTA fees kill your margins.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="mt-1 text-error">●</span>
              <span>
                <strong>You Own Nothing:</strong> You don’t control guest data.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="mt-1 text-error">●</span>
              <span>
                <strong>You Are Vulnerable:</strong> One algorithm shift can
                wipe you out.
              </span>
            </li>
          </ul>

          <p className="text-base font-semibold text-base-content/80">
            If you rely 100% on Airbnb, you don't own a business — you rent one.
          </p>
        </div>

        {/* RIGHT ILLUSTRATION BLOCK */}
        {/* RIGHT ILLUSTRATION IMAGE */}
        <div className="flex justify-center items-center">
          <div className="w-full max-w-md relative">
            <img
              src="/src/assets/dependency-illustration.png"
              alt="Platform Dependency Illustration"
              className="w-full h-auto rounded-2xl shadow-2xl border border-base-300"
            />

            {/* Optional overlay badge */}
            <div className="absolute bottom-4 left-4 bg-base-100/90 backdrop-blur px-4 py-2 rounded-xl shadow-md border border-base-300">
              <p className="text-xs font-semibold text-error">
                High Dependency Risk
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DependencySection;
