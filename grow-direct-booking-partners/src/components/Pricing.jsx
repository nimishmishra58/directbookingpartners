import { motion } from "framer-motion";
import { useState } from "react";

const plans = [
  {
    title: "Strategy & Setup",
    desc: "Build a clear growth foundation.",
    points: [
      "Audit & strategy roadmap",
      "Content & funnel structure",
      "Ads & automation setup",
      "30-day execution plan",
    ],
    bestFor: "Early-stage brands & first-time system builders",
    price: "Custom quote",
  },
  {
    title: "Growth Management",
    desc: "Consistent inbound leads & ongoing optimization.",
    points: [
      "Content direction & execution",
      "Ads & funnel management",
      "Lead handling & automation",
      "Weekly optimization",
    ],
    bestFor: "Brands active but seeing inconsistent results",
    price: "Monthly retainer",
    highlight: true,
  },
  {
    title: "Scale Partner",
    desc: "Predictable growth without guesswork.",
    points: [
      "Everything in Growth Management",
      "Advanced funnels & segmentation",
      "Scaling ads & systems",
      "Priority support & strategy",
    ],
    bestFor: "Brands ready to scale what’s already working",
    price: "Custom partnership",
  },
];

export default function Pricing() {
  const [selected, setSelected] = useState(() => {
    const defaultIndex = plans.findIndex((p) => p.highlight === true);
    return defaultIndex >= 0 ? defaultIndex : 0;
  });

  return (
    <section id="pricing" className="py-20 sm:py-24 md:py-32 px-4 sm:px-6 md:px-16 bg-gray-50 dark:bg-[#0b0b0b]">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 text-center"
      >
        Engagement Options
      </motion.h2>
      <p className="text-center text-gray-500 mb-12 sm:mb-24">
        Choose how hands-on you want us to be.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 max-w-7xl mx-auto">
        {plans.map((plan, i) => {
          const isSelected = selected === i;
          const isLast = i === plans.length - 1;
          const spanOnSm = isLast ? 'sm:col-span-2 lg:col-span-1 sm:max-w-2xl sm:mx-auto' : '';

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              onClick={() => setSelected(i)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") setSelected(i);
              }}
              tabIndex={0}
              role="button"
              className={`${spanOnSm} flex justify-center`}
            >
              <div
                className={`relative flex flex-col rounded-2xl p-6 sm:p-8 md:p-10 border transition-all cursor-pointer focus:outline-none focus-visible:ring-4 focus-visible:ring-black/20 dark:focus-visible:ring-white/20 focus-visible:ring-offset-0
                ${
                  isSelected
                    ? "bg-white dark:bg-[#121212] border-black dark:border-white scale-[1.03] shadow-xl"
                    : "bg-white/60 dark:bg-[#121212]/60 border-gray-200 dark:border-gray-800 hover:scale-[1.02]"
                } w-full sm:w-[320px]`}
              >
                {/* Badge */}
                {plan.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-black text-white dark:bg-white dark:text-black px-3 sm:px-4 py-1 text-xs sm:text-sm font-semibold rounded-full">
                    Most Chosen
                  </div>
                )}

                {/* Header */}
                <h3 className="text-xl sm:text-2xl font-semibold mb-2">
                  {plan.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-8">
                  {plan.desc}
                </p>

                {/* Features */}
                <ul className="space-y-3 sm:space-y-4 mb-8 flex-1">
                  {plan.points.map((point, idx) => (
                    <li key={idx} className="flex gap-3">
                      <span className="text-black dark:text-white text-sm">✓</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Best for */}
                <div className="bg-gray-100 dark:bg-[#1a1a1a] rounded-lg p-3 mb-6">
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                    <strong>Best for:</strong> {plan.bestFor}
                  </p>
                </div>

                {/* Price + CTA */}
                <div className="mt-auto flex flex-col items-center">
                  <div className="text-lg sm:text-xl font-semibold mb-3 text-center break-words">
                    {plan.price}
                  </div>

                  <a
                    href="https://api.leadconnectorhq.com/widget/bookings/grow-direct-booking-partners"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-block text-center w-full sm:w-full py-2.5 sm:py-3 rounded-lg font-semibold text-sm sm:text-base transition
                      ${
                        isSelected
                          ? "bg-black text-white dark:bg-white dark:text-black"
                          : "border border-gray-300 dark:border-gray-700"
                      }
                    `}
                  >
                    Book a Strategy Call
                  </a>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
