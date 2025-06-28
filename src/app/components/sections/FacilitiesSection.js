"use client";
import { useRef } from "react";
import { motion } from "framer-motion";
import SectionBackground from "../ui/SectionBackground";
import {
  FaBriefcase,
  FaStore,
  FaLightbulb,
  FaPaintBrush,
  FaLandmark,
  FaBullhorn,
} from "react-icons/fa";

export default function FacilitiesSection() {
  const sectionRef = useRef(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const services = [
    {
      title: "Corporate Events",
      description: "Seamlessly planned high-impact corporate gatherings and celebrations.",
      icon: <FaBriefcase size={40} />,
    },
    {
      title: "Exhibition Setup",
      description: "End-to-end execution for exhibition booths, brand zones, and expos.",
      icon: <FaStore size={40} />,
    },
    {
      title: "Entertainment Events",
      description: "Live shows, celebrity management, and gala productions.",
      icon: <FaLightbulb size={40} />,
    },
    {
      title: "Customized Theme Setup",
      description: "Immersive, on-brand event themes tailored to each client.",
      icon: <FaPaintBrush size={40} />,
    },
    {
      title: "Mall Décor",
      description: "Stunning seasonal and branded décor across India’s top malls.",
      icon: <FaLandmark size={40} />,
    },
    {
      title: "BTL Activations",
      description: "Brand-focused experiences at ground level for real audience impact.",
      icon: <FaBullhorn size={40} />,
    },
  ];

  return (
    <section
      id="facilities"
      ref={sectionRef}
      className="bg-white dark:bg-black text-black dark:text-white"
    >
      <SectionBackground position="bottom" />

      <div className="w-[100vw] md:w-[90vw] mx-auto px-4 py-20 relative z-10">
        <motion.div
          className="max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="section-title">
              Our Services
              <div className="section-title-underline"></div>
            </h2>
            <p className="section-subtitle">
              Creative. Custom. Corporate — we deliver across categories.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-white/5 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                variants={itemVariants}
              >
                <div className="h-32 flex items-center justify-center bg-brand/10 dark:bg-white/10 text-brand dark:text-brand">
                  {service.icon}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-black dark:text-white">
                    {service.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
