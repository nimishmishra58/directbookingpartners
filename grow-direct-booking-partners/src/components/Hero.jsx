import { motion } from "framer-motion";
import HeroImage from "../assets/images/hero.png"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center px-6 md:px-16 overflow-hidden">
      
      {/* Background image */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${HeroImage})` }}
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5 }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-white/50 dark:bg-black/60" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl">
        <motion.h1
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-4xl md:text-6xl font-bold leading-tight"
        >
          Turn social attention into predictable, high-quality leads
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-6 text-lg text-gray-700 dark:text-gray-300"
        >
          Content, ads, funnels & automation designed to convert — not just look good.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-10 flex gap-4"
        >
          <a
            href="https://api.leadconnectorhq.com/widget/bookings/grow-direct-booking-partners"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-2xl bg-black text-white dark:bg-white dark:text-black font-semibold inline-block text-center"
          >
            Book Free Strategy Call
          </a>
          <a href="#services" className="px-8 py-4 rounded-2xl border border-black dark:border-white font-semibold">
            View Services
          </a>
        </motion.div>
      </div>
    </section>
  );
}
