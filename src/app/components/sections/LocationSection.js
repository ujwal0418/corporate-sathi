"use client";
import { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import SectionBackground from "../ui/SectionBackground";

export default function LocationSection() {
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

  return (
    <section
      id="location"
      ref={sectionRef}
      className="bg-white dark:bg-black text-black dark:text-white"
    >
      <SectionBackground position="middle" />

      <div className="w-[100vw] md:w-[90vw] mx-auto px-4 py-16 md:py-20 relative z-10">
        <motion.div
          className="max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.div
            className="text-center mb-10 md:mb-16"
            variants={itemVariants}
          >
            <h2 className="section-title text-3xl md:text-4xl">
              Presence & Reach
              <div className="section-title-underline"></div>
            </h2>
            <p className="section-subtitle text-sm md:text-base dark:text-gray-300 text-gray-700">
              Spanning India and beyond — delivering experiences across borders
            </p>
          </motion.div>

          <div className="section-card dark:bg-white/5 bg-black/5 dark:backdrop-blur-lg backdrop-blur-lg p-4 md:p-8 rounded-xl">
            <div className="flex flex-col md:flex-row items-center">
              <motion.div
                className="w-full md:w-1/2 mb-10 md:mb-0 md:pr-12"
                variants={itemVariants}
              >
                <p className="text-base md:text-lg mb-4 md:mb-6">
                  Corporate-साथी has built a reputation of excellence across major Indian cities and global event hubs. With a trusted partner network and in-house execution capability, we enable seamless delivery of world-class experiences anywhere.
                </p>

                <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                  {[
                    { number: "50+", label: "Cities Covered in India" },
                    { number: "5+", label: "Countries Served Internationally" },
                    { number: "100+", label: "Corporate Clients" },
                    { number: "24x7", label: "Execution & Support Capability" },
                  ].map((stat, idx) => (
                    <div key={idx} className="flex items-center">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 flex items-center justify-center mr-4 flex-shrink-0">
                        <span className="text-brand font-bold text-xl md:text-2xl">
                          {stat.number}
                        </span>
                      </div>
                      <div>
                        <h4 className="font-medium text-sm md:text-base">
                          {stat.label}
                        </h4>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                className="w-full md:w-1/2 relative"
                variants={itemVariants}
              >
                <div className="relative h-[300px] md:h-[500px] w-full rounded-xl overflow-hidden">
                  <Image
                    src="/assets/global-presence-map.jpg" // Add a visual map image to /public/assets
                    alt="Corporate Saathi Global Presence"
                    fill
                    className="object-cover rounded-xl"
                  />
                  <div className="absolute top-3 right-3 md:top-4 md:right-4 z-10">
                    <div className="bg-white p-3 md:p-4 rounded-lg shadow-lg">
                      <h3 className="text-lg md:text-xl font-bold text-brand">
                        Corporate-साथी
                      </h3>
                      <p className="text-black text-sm md:text-base">
                        Global Activation Partner
                      </p>
                    </div>
                  </div>
                </div>

                <motion.div
                  className="absolute -bottom-4 md:-bottom-6 -right-4 md:-right-6 bg-brand p-4 md:p-6 shadow-xl rounded-lg text-white"
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  <span className="text-3xl md:text-4xl font-bold">India + Global</span>
                  <span className="text-xs md:text-sm block mt-1 md:mt-2">
                    Our Operational Footprint
                  </span>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
