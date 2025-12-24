import { motion } from "framer-motion";
import ContentImage from "../assets/images/content.png"
import AdsImage from "../assets/images/ads.png"
import FunnelImage from "../assets/images/funnel.png"
import AutomationImage from "../assets/images/automation.png"
const services = [
    {
        title: "Strategic Content Creation",
        desc: "We create content that positions you as the obvious choice — so people trust you before they ever DM or click an ad.",
        image: ContentImage,
    },
    {
        title: "Instagram & Meta Ads",
        desc: "We run Meta ads designed to attract the right audience — not cheap clicks — so you get inquiries that are ready to convert.",
        image: AdsImage,
        reverse: true,
    },
    {
        title: "Lead Generation Funnels",
        desc: "We build landing pages and funnels that guide visitors step-by-step toward booking a call or sending an inquiry.",
        image: FunnelImage,
    },
    {
        title: "Marketing Automation & DM Funnels",
        desc: "We automate follow-ups across DMs and email so leads are nurtured, reminded, and booked — without manual chasing.",
        image: AutomationImage,
        reverse: true,
    },
];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const imageVariant = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1 },
};

const textVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Services() {
  return (
    <section
      id="services"
      className="py-28 px-6 md:px-16 bg-white dark:bg-[#0b0b0b]"
    >
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-24 text-center"
      >
        What We Do
      </motion.h2>

      <div className="space-y-32">
        {services.map((service, i) => (
          <motion.div
            key={i}
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-120px" }}
            className={`flex flex-col md:flex-row items-center gap-14 ${
              service.reverse ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Image */}
            <motion.img
              src={service.image}
              alt={service.title}
              variants={imageVariant}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="w-full md:w-1/2 rounded-3xl shadow-xl"
            />

            {/* Text */}
            <div className="md:w-1/2">
              <motion.h3
                variants={textVariant}
                transition={{ duration: 0.5 }}
                className="text-2xl font-semibold mb-4"
              >
                {service.title}
              </motion.h3>

              <motion.p
                variants={textVariant}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed"
              >
                {service.desc}
              </motion.p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}