"use client";
import { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import SectionBackground from "../ui/SectionBackground";

export default function LifestyleSection() {
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
      id="lifestyle"
      ref={sectionRef}
      className="bg-white dark:bg-black text-black dark:text-white"
    >
      <SectionBackground position="middle" />

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
              Curating Unforgettable Experiences
              <div className="section-title-underline"></div>
            </h2>
            <p className="section-subtitle">
              From concept to creation, we deliver immersive environments that resonate.
            </p>
          </motion.div>

          <div className="grid grid-cols-12 gap-4">
            {[
              {
                title: "Brand Installations",
                description: "Visual brand storytelling through creative builds.",
                image: "/brand-installation.jpg",
              },
              {
                title: "Gala Nights",
                description: "Luxury evenings with high-impact ambiance and flow.",
                image: "/gala-event.jpg",
              },
              {
                title: "Retail Activations",
                description: "Product-driven engagement at malls and stores.",
                image: "/retail-activation.jpg",
              },
              {
                title: "Festive Experiences",
                description: "Seasonal themes and décor that spark joy.",
                image: "/festival-decor.jpg",
              },
              {
                title: "Stage Shows",
                description: "Entertainment that elevates your brand’s voice.",
                image: "/stage-show.jpg",
              },
            ].map((block, i) => (
              <motion.div
                key={i}
                className={`${
                  i === 0 ? "col-span-12 md:col-span-8" : "col-span-12 md:col-span-4"
                } relative h-[300px] md:h-[400px] group overflow-hidden rounded-xl`}
                variants={itemVariants}
              >
                <Image
                  src={block.image}
                  alt={block.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30" />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-end p-6">
                  <div className="text-white">
                    <h3 className="text-xl md:text-2xl font-bold mb-2">
                      {block.title}
                    </h3>
                    <p className="text-sm md:text-base max-w-md">{block.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          
        </motion.div>
      </div>
    </section>
  );
}
