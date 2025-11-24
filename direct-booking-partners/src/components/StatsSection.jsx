// src/components/StatsSection.jsx
import React from "react";

const StatsSection = ({ stats }) => {
  return (
    <section className="py-8 lg:py-10 bg-base-200">
      <div className="max-w-6xl mx-auto px-4 grid gap-4 md:grid-cols-3">
        {stats.map((stat) => (
          <div key={stat.label} className="card bg-base-100 shadow-md">
            <div className="card-body">
              <p className="text-xs font-medium uppercase text-base-content/60">
                {stat.label}
              </p>
              <p className="text-2xl font-bold mt-2">{stat.value}</p>
              <p className="text-sm text-base-content/70 mt-1">{stat.sub}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
