"use client";
import { motion } from "framer-motion";
import {
  FaIndustry,
  FaGlobeAsia,
  FaLightbulb,
  FaBolt,
  FaHandshake,
  FaTools,
} from "react-icons/fa";

const differentiators = [
  {
    icon: <FaIndustry size={32} className="text-brand" />,
    title: "In-House Production",
    description:
      "From concept to execution — faster timelines, full quality control, and seamless communication.",
  },
  {
    icon: <FaGlobeAsia size={32} className="text-brand" />,
    title: "Pan-India & Global Reach",
    description:
      "Executed events across 20+ Indian cities and multiple international destinations.",
  },
  {
    icon: <FaLightbulb size={32} className="text-brand" />,
    title: "Creative Innovation",
    description:
      "Props, kinetic lighting, experiential zones — every setup tells a story.",
  },
  {
    icon: <FaBolt size={32} className="text-brand" />,
    title: "Rapid Turnaround",
    description:
      "Delivered live demo booths, immersive pavilions, and large formats in record time.",
  },
  {
    icon: <FaHandshake size={32} className="text-brand" />,
    title: "Trusted by Top Brands",
    description:
      "Repeat clients include TATA, Nestlé, DS Group, HONDA, Lenovo, Samsung, and more.",
  },
  {
    icon: <FaTools size={32} className="text-brand" />,
    title: "Technical Expertise",
    description:
      "Large-format fabrication, 3D walkthroughs, AV rigging, and high-volume logistics — handled in-house.",
  },
];

export default function DifferentiatorsSection() {
  return (
    <section
      id="differentiators"
      className="bg-white dark:bg-black text-black dark:text-white py-20"
    >
      <div className="w-[100vw] md:w-[90vw]  mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">
            What Sets Us Apart
            <div className="section-title-underline"></div>
          </h2>
          <p className="section-subtitle">
            Why India’s leading brands trust us repeatedly
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {differentiators.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white/5 dark:bg-white/10 p-6 md:p-8 rounded-xl backdrop-blur-lg shadow-xl hover:shadow-2xl transition font-sans"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-lg md:text-xl font-bold mb-2">
                {item.title}
              </h3>
              <p className="text-sm md:text-base text-gray-700 dark:text-gray-300">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
