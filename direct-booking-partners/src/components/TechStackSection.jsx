import React from "react";

const TechStackSection = () => {
  return (
    <section className="py-12 lg:py-16 bg-base-200 border-b border-base-300">
      <div className="max-w-6xl mx-auto px-4 space-y-6">
        <div className="space-y-3 text-left">
          <h2 className="text-2xl md:text-3xl font-bold">
            Powered By Best-in-Class Infrastructure
          </h2>
          <p className="text-sm md:text-base text-base-content/70 max-w-2xl">
            We integrate with the tools that power professional hospitality
            businesses — so your direct booking engine plugs into the same
            systems your team already lives in.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          <div className="card bg-base-100 shadow-sm">
            <div className="card-body">
              <p className="text-xs font-semibold uppercase text-base-content/60 mb-1">
                Data Capture
              </p>
              <h3 className="text-lg font-semibold">StayFi</h3>
              <p className="text-sm text-base-content/70 mt-1">
                For legal, compliant Wi-Fi data capture so every stay grows your
                guest database automatically.
              </p>
            </div>
          </div>

          <div className="card bg-base-100 shadow-sm">
            <div className="card-body">
              <p className="text-xs font-semibold uppercase text-base-content/60 mb-1">
                PMS & Channel Management
              </p>
              <h3 className="text-lg font-semibold">Lodgify / Guesty / Hostfully</h3>
              <p className="text-sm text-base-content/70 mt-1">
                For seamless calendar syncing, automation, and distribution while
                your direct booking engine becomes the profit center.
              </p>
            </div>
          </div>

          <div className="card bg-base-100 shadow-sm">
            <div className="card-body">
              <p className="text-xs font-semibold uppercase text-base-content/60 mb-1">
                Payments
              </p>
              <h3 className="text-lg font-semibold">Stripe</h3>
              <p className="text-sm text-base-content/70 mt-1">
                For secure, instant payments so high-value guests can book direct
                without friction or risk.
              </p>
            </div>
          </div>
        </div>

        {/* You can later replace these cards with actual logos if you want images */}
      </div>
    </section>
  );
};

export default TechStackSection;
