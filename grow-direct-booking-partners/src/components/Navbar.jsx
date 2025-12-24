import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/70 dark:bg-black/60 border-b border-gray-200 dark:border-gray-800"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <div className="font-bold text-lg">
          DirectBooking<span className="text-gray-500">Partners</span>
        </div>

        {/* Navigation */}
        <div className="hidden md:flex gap-8 text-sm font-medium">
          <a href="#services" className="hover:text-gray-500 transition">
            What We Do
          </a>
          <a href="#how-it-works" className="hover:text-gray-500 transition">
            How Growth Happens
          </a>
          <a href="#pricing" className="hover:text-gray-500 transition">
            Engagement Options
          </a>
        </div>

        {/* CTA */}
        <a
          href="https://api.leadconnectorhq.com/widget/booking/NbfvhE7Ieaib1RC6mCpA"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2 rounded-xl bg-black text-white dark:bg-white dark:text-black text-sm font-semibold"
        >
          Book a Call
        </a>
      </div>
    </motion.nav>
  );
}
