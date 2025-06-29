"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import SectionBackground from "../ui/SectionBackground";

export default function TownSquareSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in");
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

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
      id="town-square"
      ref={sectionRef}
      className="bg-white dark:bg-black text-black dark:text-white"
    >
      <SectionBackground position="top" />

      <div className="w-[100vw] md:w-[90vw] mx-auto px-4 py-16 md:py-20 relative z-10">
        <motion.div
          className=" mx-auto"
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
              Our Credo
              <div className="section-title-underline"></div>
            </h2>
            <p className="section-subtitle  dark:text-gray-300 text-gray-700  px-2">
              A strong foundation of seamless & flawless backend operations
            </p>
          </motion.div>

          <div className="section-card dark:bg-white/5 bg-black/5 dark:backdrop-blur-lg backdrop-blur-lg p-4 md:p-8">
            <div className="flex flex-col md:flex-row items-center">
              <motion.div
                className="md:w-1/2 w-full mb-10 md:mb-0 md:pr-12"
                variants={itemVariants}
              >
                <p className="text-base md:text-lg mb-6 text-gray-700 dark:text-gray-300 font-sans">
                  At Corporate<span className="text-[#A88941] font-bold">–साथी</span>, we empower our clients by providing a
                  rock-solid backbone of event infrastructure, flawless
                  execution, and operational excellence. We are not just a
                  service provider — we’re a partner in every activation.
                </p>
                <p className="text-base md:text-lg mb-6 text-gray-700 dark:text-gray-300 font-sans">
                  Our mission is to deliver seamless backend operations and
                  precise execution to ensure guaranteed success across
                  corporate events, exhibitions, BTL activations, and themed
                  setups.
                </p>

                <div className="grid grid-cols-2 gap-3 md:gap-4 mt-6 md:mt-8">
                  <motion.div
                    className="stat-card dark:bg-white/10 bg-black/10 p-3 md:p-4"
                    whileHover={{ y: -5 }}
                    variants={itemVariants}
                  >
                    <span className="block text-2xl md:text-3xl font-bold text-brand">
                      100+
                    </span>
                    <span className="text-xs md:text-sm text-gray-700 dark:text-gray-300">
                      Clients Served
                    </span>
                  </motion.div>
                  <motion.div
                    className="stat-card dark:bg-white/10 bg-black/10 p-3 md:p-4"
                    whileHover={{ y: -5 }}
                    variants={itemVariants}
                  >
                    <span className="block text-2xl md:text-3xl font-bold text-brand">
                      10+
                    </span>
                    <span className="text-xs md:text-sm text-gray-700 dark:text-gray-300">
                      Years of Experience
                    </span>
                  </motion.div>
                  <motion.div
                    className="stat-card dark:bg-white/10 bg-black/10 p-3 md:p-4"
                    whileHover={{ y: -5 }}
                    variants={itemVariants}
                  >
                    <span className="block text-2xl md:text-3xl font-bold text-brand">
                      50+
                    </span>
                    <span className="text-xs md:text-sm text-gray-700 dark:text-gray-300">
                      Cities Covered
                    </span>
                  </motion.div>
                  <motion.div
                    className="stat-card dark:bg-white/10 bg-black/10 p-3 md:p-4"
                    whileHover={{ y: -5 }}
                    variants={itemVariants}
                  >
                    <span className="block text-2xl md:text-3xl font-bold text-brand">
                      Global
                    </span>
                    <span className="text-xs md:text-sm text-gray-700 dark:text-gray-300">
                      Partner Network
                    </span>
                  </motion.div>
                </div>
              </motion.div>

              <motion.div
                className="md:w-1/2 w-full relative"
                variants={itemVariants}
              >
                <div className="relative h-[300px] md:h-[500px] w-full overflow-hidden rounded-xl shadow-xl">
                  <Image
                    src="/our-credo.jpg"
                    alt="Corporate Events Overview"
                    fill
                    className="object-cover rounded-xl"
                  />
                  <div className="absolute inset-0 bg-black/30" />
                </div>
                <motion.div
                  className="absolute -bottom-4 md:-bottom-6 -left-4 md:-left-6 bg-brand p-4 md:p-6 shadow-xl rounded-lg text-white"
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  <span className="text-3xl md:text-4xl font-bold">Credo</span>
                  <span className="text-xs md:text-sm block mt-1 md:mt-2">
                    Foundation of Execution
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
