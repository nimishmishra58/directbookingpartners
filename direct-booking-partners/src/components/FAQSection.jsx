import React from "react";

const FAQSection = ({ faqs }) => {
  return (
    <section id="faq" className="py-14 lg:py-20 bg-base-100 border-b border-base-200">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-8 space-y-3">
          <h2 className="text-2xl md:text-3xl font-bold">
            Frequently Asked Questions
          </h2>
          <p className="text-base text-base-content/70">
            This is where we remove the fear: terms of service, algorithms and
            all the “what if Airbnb…” questions.
          </p>
        </div>
        <div className="space-y-3">
          {faqs.map((item, idx) => (
            <div key={idx} className="collapse collapse-arrow bg-base-200">
              <input type="checkbox" defaultChecked={idx === 0} />
              <div className="collapse-title text-sm md:text-base font-medium">
                {item.q}
              </div>
              <div className="collapse-content text-sm text-base-content/80">
                <p>{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
