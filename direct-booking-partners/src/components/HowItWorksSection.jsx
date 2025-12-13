import React from "react";

const HowItWorksSection = ({ steps }) => {
  return (
    <section id="how-it-works" className="py-14 lg:py-20 bg-base-200 border-b border-base-300 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
          <h2 className="text-2xl md:text-3xl font-bold">
            We Install the “Local Guide Protocol”
          </h2>
          <p className="text-base text-base-content/70">
            We don&apos;t just “post on social media.” We build a three-step asset
            that turns strangers into direct bookings — traffic, conversion and
            retention, all under your brand.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step, idx) => (
            <div key={step.title} className="card bg-base-100 shadow-md">
              <div className="card-body">
                <div className="badge badge-primary badge-sm mb-2">
                  {`Step ${idx + 1}`}
                </div>
                <h3 className="card-title text-base">{step.title}</h3>
                <p className="text-sm text-base-content/70 mt-2">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
