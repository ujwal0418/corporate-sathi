"use client";
import { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import SectionBackground from "../ui/SectionBackground";

export default function DesignSection() {
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
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      id="design"
      ref={sectionRef}
      className="bg-white dark:bg-black text-black dark:text-white"
    >
      <SectionBackground position="top" />

      <div className="w-[100vw] md:w-[90vw] mx-auto px-4 py-20 relative z-10">
        <motion.div
          className=" mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="section-title">
              Why Choose Us
              <div className="section-title-underline"></div>
            </h2>
            <p className="section-subtitle">
              The most trusted event partner for India’s leading brands
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
            variants={itemVariants}
          >
            {/* Text Block */}
            <div className="space-y-6 font-sans">
              <h3 className="text-2xl font-bold">Execution. Scale. Trust.</h3>
              <p className="dark:text-gray-300 text-gray-700">
                With decades of combined experience and a rock-solid partner
                network, Corporate
                <span className="text-[#A88941] font-bold">–साथी  </span> 
                brings dependable delivery to every brand activation, exhibition
                setup, and corporate event.
              </p>

              <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="text-brand mr-3 text-xl">•</span>
                  <span>In-house fabrication & technical teams</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand mr-3 text-xl">•</span>
                  <span>Pan-India operations with global reach</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand mr-3 text-xl">•</span>
                  <span>One-point contact from ideation to execution</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand mr-3 text-xl">•</span>
                  <span>24x7 support team for client servicing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand mr-3 text-xl">•</span>
                  <span>Proven track record with top-tier brands</span>
                </li>
              </ul>
            </div>

            {/* Image */}
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/why-choose-us.jpg" // Add this image to public/assets
                alt="Why Corporate Saathi"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/30" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
