import React from "react";

const ResultsSection = ({ caseStudies }) => {
  return (
    <section id="results" className="py-14 lg:py-20 bg-base-100 border-b border-base-200">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
          <h2 className="text-2xl md:text-3xl font-bold">
            Results, Not “Likes”
          </h2>
          <p className="text-base text-base-content/70">
            We don&apos;t chase vanity metrics. We chase Net Operating Income
            (NOI). Every campaign is built to generate commission-free revenue,
            not just views.
          </p>
        </div>
        <div className="grid md:grid-cols-1 gap-6">
          {caseStudies.map((cs) => (
            <article key={cs.title} className="card bg-base-200 shadow-md">
              <div className="card-body">
                <div className="badge badge-outline badge-sm mb-3">Case Study</div>
                <h3 className="card-title text-lg">{cs.title}</h3>
                <p className="text-sm text-base-content/70 mt-2">{cs.body}</p>

                <div className="mt-4 grid gap-3 md:grid-cols-4 text-xs md:text-sm">
                  <div>
                    <p className="font-semibold">Views</p>
                    <p className="text-base-content/70">30,000+ (Organic)</p>
                  </div>
                  <div>
                    <p className="font-semibold">Ad Spend</p>
                    <p className="text-base-content/70">$0</p>
                  </div>
                  <div>
                    <p className="font-semibold">Direct Revenue</p>
                    <p className="text-base-content/70">$6,500+</p>
                  </div>
                  <div>
                    <p className="font-semibold">ROI</p>
                    <p className="text-base-content/70">Effectively infinite</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
