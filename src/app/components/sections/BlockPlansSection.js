"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import SectionBackground from "../ui/SectionBackground";

export default function BlockPlansSection() {
  const [activeBlock, setActiveBlock] = useState("block-A");

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

  const blockPlans = {
    "block-A": {
      title: "Block A",
      image: "/assets/block-plan-A.png",
      description: "Central location with premium views of the park",
      features: [
        "Direct park access",
        "South-facing units available",
        "Premium lobby entrance",
        "Dedicated parking area",
      ],
    },
    "block-B": {
      title: "Block B",
      image: "/assets/block-plan-B.png",
      description: "Corner position with dual aspect views",
      features: [
        "Corner units with dual aspect windows",
        "Enhanced privacy features",
        "Larger balcony spaces",
        "Proximity to community amenities",
      ],
    },
    "block-C": {
      title: "Block C",
      image: "/assets/block-plan-C.png",
      description: "Quiet location with garden views",
      features: [
        "Garden-facing units",
        "Secluded position",
        "Extra sound insulation",
        "Private garden access for ground floor units",
      ],
    },
  };

  // Handle download
  const handleDownload = (fileUrl) => {
    const link = document.createElement("a");
    link.href = fileUrl;
    link.setAttribute("download", "");
    link.setAttribute("target", "_blank");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="block-plans"
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
          <motion.div
            className="text-center mb-10 md:mb-16"
            variants={itemVariants}
          >
            <h2 className="section-title text-3xl md:text-4xl">
              Block Plans
              <div className="section-title-underline"></div>
            </h2>
            <p className="section-subtitle text-sm md:text-base">
              Explore the layout and positioning of each residential block
            </p>
          </motion.div>

          <motion.div
            className="section-card dark:bg-white/5 bg-black/5 dark:backdrop-blur-lg backdrop-blur-lg p-4 md:p-8 rounded-xl"
            variants={itemVariants}
          >
            {/* Block tabs */}
            <div className="flex border-b border-white/10 mb-4">
              {Object.keys(blockPlans).map((block) => (
                <button
                  key={block}
                  className={`py-3 md:py-4 px-3 md:px-6 font-medium flex-1 transition-all duration-300 text-sm md:text-base ${
                    activeBlock === block
                      ? "bg-brand text-white"
                      : "dark:text-gray-300 text-gray-700 hover:text-brand"
                  }`}
                  onClick={() => setActiveBlock(block)}
                >
                  {blockPlans[block].title}
                </button>
              ))}
            </div>

            <div className="p-3 md:p-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
                <motion.div
                  className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden"
                  variants={itemVariants}
                >
                  <Image
                    src={blockPlans[activeBlock].image}
                    alt={blockPlans[activeBlock].title}
                    fill
                    className="object-contain"
                  />
                </motion.div>
                <motion.div variants={itemVariants}>
                  <h3 className="text-xl md:text-2xl font-bold mb-2">
                    {blockPlans[activeBlock].title}
                  </h3>
                  <p className="text-base md:text-lg mb-3 md:mb-4 dark:text-gray-300 text-gray-700">
                    {blockPlans[activeBlock].description}
                  </p>

                  <h4 className="text-base md:text-lg font-bold mb-2">
                    Block Features:
                  </h4>
                  <ul className="space-y-1 md:space-y-2 mb-4 md:mb-6">
                    {blockPlans[activeBlock].features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center dark:text-gray-300 text-gray-700 text-sm md:text-base"
                      >
                        <svg
                          className="w-4 h-4 md:w-5 md:h-5 text-brand mr-2"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-3 md:gap-4">
                    <motion.button
                      onClick={() =>
                        handleDownload("/assets/ALTON-Block-Plans.pdf")
                      }
                      className="inline-block bg-brand hover:bg-brand-hover text-white font-medium py-2 md:py-3 px-4 md:px-6 rounded-none transition duration-300 text-sm md:text-base"
                      whileHover={{ scale: 1.05 }}
                    >
                      Download Block Plan
                    </motion.button>
                    <motion.button
                      onClick={() =>
                        handleDownload("/assets/ALTON-Master-Plan.pdf")
                      }
                      className="inline-block bg-transparent border border-brand text-brand hover:bg-brand hover:text-white font-medium py-2 md:py-3 px-4 md:px-6 rounded-none transition duration-300 text-sm md:text-base"
                      whileHover={{ scale: 1.05 }}
                    >
                      Download Master Plan
                    </motion.button>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="mt-8 md:mt-12 text-center"
            variants={itemVariants}
          >
            <button
              onClick={() => handleDownload("/assets/ALTON-Brochure-Final.pdf")}
              className="inline-block bg-brand hover:bg-opacity-90 text-white font-medium py-2 md:py-3 px-4 md:px-6 rounded-none transition duration-300 text-sm md:text-base"
            >
              Download Full Brochure
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}