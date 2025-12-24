import { motion } from "framer-motion";
import Audit from "../assets/images/audit.png";
import Build from "../assets/images/build.png";
import Scale from "../assets/images/scale.png";

const DOT_SIZE = 48; // px
const DOT_RADIUS = DOT_SIZE / 2;

const steps = [
  {
    step: "01",
    title: "Audit & Strategy",
    desc: "We understand where you are, what’s blocking growth, and what will actually move the needle.",
    image: Audit,
  },
  {
    step: "02",
    title: "Build & Launch",
    desc: "We set up content, ads, funnels, and automations — everything working together.",
    image: Build,
  },
  {
    step: "03",
    title: "Optimize & Scale",
    desc: "We double down on what’s working and scale results without guesswork.",
    image: Scale,
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-28 px-6 md:px-16 bg-gray-50 dark:bg-[#0b0b0b]">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl font-bold mb-6 text-center"
      >
        How Growth Happens
      </motion.h2>

      <p className="text-center text-gray-500 mb-24">
        A simple, repeatable system — not guesswork.
      </p>

      {/* Timeline */}
      <div
        className="relative max-w-5xl mx-auto"
        style={{
          paddingTop: DOT_RADIUS,
          paddingBottom: DOT_RADIUS,
        }}
      >
        {/* Spine — clipped by padding, NEVER overflows */}
        <div className="absolute left-6 inset-y-0 w-px bg-gray-300 dark:bg-gray-700 pointer-events-none" />

        <div className="space-y-32">
          {steps.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="grid grid-cols-[48px_1fr] gap-16 items-center"
            >
              {/* Dot */}
              <div className="flex justify-center">
                <div
                  className="relative z-10 rounded-full bg-black text-white dark:bg-white dark:text-black flex items-center justify-center font-semibold"
                  style={{
                    width: DOT_SIZE,
                    height: DOT_SIZE,
                  }}
                >
                  {item.step}
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col md:flex-row gap-12 items-center">
                <div className="max-w-xl">
                  <h3 className="text-2xl font-semibold mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-lg">
                    {item.desc}
                  </p>
                </div>

                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full md:w-80 rounded-xl shadow-md"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
