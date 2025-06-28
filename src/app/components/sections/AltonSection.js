"use client";
import { useRef, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import SectionBackground from "../ui/SectionBackground";

const clientLogos = [
  "bp.png",
  "burberry.png",
  "cisco.png",
  "clout.png",
  "ds-group.png",
  "honda.png",
  "hp.png",
  "lenovo.png",
  "logitech.png",
  "mi.png",
  "swiss-military.png",
  "tata.png",
  "teachers.png",
  "the-oberoi.png",
  "vlcc.png",

  // Add or remove files as needed
];


export default function AltonSection() {
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
      transition: { duration: 0.4 },
    },
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const elements = entry.target.querySelectorAll(".animate-text");
          elements.forEach((el, index) => {
            setTimeout(() => {
              el.classList.add("opacity-100", "translate-y-0");
            }, index * 150);
          });
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      id="alton"
      ref={sectionRef}
      className="bg-white dark:bg-black text-black dark:text-white"
    >
      <SectionBackground position="bottom" />

      <div className="w-[100vw] md:w-[90vw] mx-auto px-4 py-16 md:py-20 relative z-10">
        <motion.div
          className="max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="section-title">
              Trusted by Leading Brands
              <div className="section-title-underline"></div>
            </h2>
            <p className="section-subtitle">
              We’ve partnered with national and global icons to deliver
              exceptional brand experiences.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 items-center justify-center"
            variants={containerVariants}
          >
            {clientLogos.map((logo, index) => (
              <motion.div
                key={index}
                className="flex items-center justify-center p-4 bg-black/5 dark:bg-white rounded-xl shadow-sm hover:shadow-md transition-all"
                variants={itemVariants}
              >
                <Image
                  src={`/clients/${logo}`}
                  alt={logo.replace(".png", "")}
                  width={180}
                  height={120}
                  className="max-h-12 w-auto object-contain"
                />
                
              </motion.div>
            ))}
          </motion.div>

          <motion.div className="mt-12 text-center" variants={itemVariants}>
            <a
              href="#plans"
              className="inline-block bg-brand hover:bg-brand-hover text-white font-medium py-3 px-8 rounded-none transition duration-300"
            >
              View Projects
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
