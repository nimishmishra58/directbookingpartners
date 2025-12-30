import { useState } from "react";
import { useEffect } from "react";

export const testimonials = [
  {
    title: "From empty January to a 30-night booking",
    quote:
      "I was staring at a completely empty January and didn’t want to keep slashing prices. After adjusting my strategy, I landed a 30-night stay that covered my month. The relief was instant.",
    author: "Sarah M.",
    meta: "2-Bedroom Condo • Orlando, FL",
  },
  {
    title: "Stopped racing prices to the bottom",
    quote:
      "I used to think lower prices were the only answer. Once I repositioned my listing for mid-term stays, I attracted better guests and steadier income without discounts.",
    author: "Jason L.",
    meta: "3-Bedroom Townhome • Phoenix, AZ",
  },
  {
    title: "Consistent income instead of panic",
    quote:
      "Instead of worrying every week about bookings, I now focus on fewer, longer stays. It’s calmer, more predictable, and honestly much easier to manage.",
    author: "Emily R.",
    meta: "1-Bedroom Apartment • San Diego, CA",
  },
  {
    title: "Booked when everyone else was slow",
    quote:
      "While other hosts in my area were complaining about slow months, I booked a 45-night stay. That completely changed how I look at seasonality.",
    author: "Michael T.",
    meta: "2-Bedroom Duplex • Austin, TX",
  },
  {
    title: "Higher-quality guests, fewer headaches",
    quote:
      "The guests I attract now treat the place like a home, not a hotel. Less turnover, less wear and tear, and better communication all around.",
    author: "Linda K.",
    meta: "Furnished Home • Tampa, FL",
  },
  {
    title: "My first long stay ever—and it worked",
    quote:
      "I was nervous about accepting longer stays, but it turned out to be the best decision I’ve made as a host. One booking replaced five short ones.",
    author: "Carlos P.",
    meta: "Studio Loft • Miami, FL",
  },
  {
    title: "Finally felt in control of my business",
    quote:
      "Once I stopped relying on one platform and one strategy, everything changed. I finally feel like I’m running a business—not reacting to algorithms.",
    author: "Nicole H.",
    meta: "4-Bedroom Home • Scottsdale, AZ",
  },
  {
    title: "Less cleaning, same revenue",
    quote:
      "Fewer turnovers alone made this worth it. I’m earning about the same monthly, but with far less stress and operating costs.",
    author: "David S.",
    meta: "2-Bedroom Condo • Denver, CO",
  },
  {
    title: "This saved my slow season",
    quote:
      "I was seriously considering switching to long-term renting. Instead, I found a middle ground that kept my flexibility and stabilized my income.",
    author: "Rachel W.",
    meta: "Vacation Home • Savannah, GA",
  },
];

export default function TestimonialSection() {
  const safeTestimonials = Array.isArray(testimonials) ? testimonials : [];
  const total = safeTestimonials.length;

  const [active, setActive] = useState(0);
  const [resetKey, setResetKey] = useState(0);

  if (total === 0) return null;

  // Auto-scroll
  useEffect(() => {
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % total);
    }, 4000);
    return () => clearInterval(id);
  }, [total, resetKey]);

  const prev = () => {
    setActive((i) => (i === 0 ? total - 1 : i - 1));
    setResetKey((k) => k + 1);
  };

  const next = () => {
    setActive((i) => (i === total - 1 ? 0 : i + 1));
    setResetKey((k) => k + 1);
  };

  const getIndex = (offset) => (active + offset + total) % total;

  return (
    <section className="py-28 px-6 bg-[#f6f6f4] dark:bg-[#0b0b0b] transition-colors">
      <h2 className="text-4xl font-bold text-center mb-20 text-black dark:text-white">
        What Hosts Are Saying
      </h2>

      {/* Wrapper */}
      <div className="relative max-w-6xl mx-auto">

        {/* Left Arrow */}
        <button
          onClick={prev}
          aria-label="Previous testimonial"
          className="
            absolute left-0 top-1/2 -translate-y-1/2
            w-12 h-12 rounded-full
            border border-gray-400 dark:border-gray-700
            text-black dark:text-white
            hover:bg-black hover:text-white
            dark:hover:bg-white dark:hover:text-black
            transition
            hidden md:flex items-center justify-center
          "
        >
          ←
        </button>

          {/* Cards Row */}
          <div className="flex items-stretch justify-center gap-4 sm:gap-8 px-4 sm:px-8 md:px-16 overflow-visible">
          {[-1, 0, 1].map((offset) => {
            const t = safeTestimonials[getIndex(offset)];
            const isActive = offset === 0;

              const hideOnMobile = offset !== 0 ? "hidden sm:flex" : "flex";

              return (
                <div
                  key={offset}
                  className={`
                    ${hideOnMobile}
                    w-full sm:w-[320px] max-w-[340px] h-auto min-h-[220px] sm:min-h-[260px]
                    flex flex-col justify-between
                    rounded-3xl p-6 sm:p-8
                    bg-white dark:bg-[#141414]
                    border border-gray-200 dark:border-gray-800
                    shadow-lg
                    text-center
                    transition-all duration-500 ease-in-out
                    ${isActive ? "scale-105 z-10" : "scale-95 opacity-70"}
                  `}
                >
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-black dark:text-white">
                    {t.title}
                  </h3>

                  <p className="italic text-gray-700 dark:text-gray-400 text-sm leading-relaxed whitespace-normal">
                    “{t.quote}”
                  </p>
                </div>

                <div className="mt-6">
                  <div className="font-semibold text-black dark:text-white">
                    {t.author}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-500 mt-1">
                    {t.meta}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Arrow */}
        <button
          onClick={next}
          aria-label="Next testimonial"
          className="
            absolute right-0 top-1/2 -translate-y-1/2
            w-12 h-12 rounded-full
            border border-gray-400 dark:border-gray-700
            text-black dark:text-white
            hover:bg-black hover:text-white
            dark:hover:bg-white dark:hover:text-black
            transition
            hidden md:flex items-center justify-center
          "
        >
          →
        </button>

        {/* Mobile nav (visible on small screens) */}
        <div className="mt-6 flex justify-center gap-4 md:hidden">
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="w-10 h-10 rounded-full border border-gray-300 dark:border-gray-700 text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition"
          >
            ←
          </button>

          <button
            onClick={next}
            aria-label="Next testimonial"
            className="w-10 h-10 rounded-full border border-gray-300 dark:border-gray-700 text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition"
          >
            →
          </button>
        </div>

      </div>
    </section>
  );
}
