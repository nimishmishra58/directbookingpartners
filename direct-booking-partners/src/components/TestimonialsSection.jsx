// src/components/TestimonialsSection.jsx
import React from "react";

const TestimonialsSection = ({ testimonials }) => {
  return (
    <section id="testimonials" className="py-14 lg:py-20 bg-base-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
          <h2 className="text-2xl md:text-3xl font-bold">
            What founders & CMOs say about working with DBP.
          </h2>
          <p className="text-base text-base-content/70">
            Unfiltered, unscripted and focused on one thing: predictable growth.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <figure key={t.name} className="card bg-base-200 shadow-sm">
              <div className="card-body">
                <blockquote className="text-sm text-base-content/80">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-4">
                  <p className="font-semibold text-sm">{t.name}</p>
                  <p className="text-xs text-base-content/60">{t.role}</p>
                </figcaption>
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
