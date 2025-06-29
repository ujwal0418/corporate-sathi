"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import SectionBackground from "../ui/SectionBackground";

export default function FloorPlansSection() {
  const [activeCategory, setActiveCategory] = useState("1br");
  const [activeType, setActiveType] = useState("1br-A");

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

  const floorPlans = {
    "1br-A": {
      category: "1br",
      title: "1 Bedroom - Unit Type A",
      size: "650-750 sq.ft",
      image: "/assets/floor-plan-1br-A.png",
      features: [
        "Modern kitchen",
        "Spacious living area",
        "En-suite bathroom",
        "Built-in wardrobes",
      ],
    },
    "2br-A": {
      category: "2br",
      title: "2 Bedroom - Unit Type A",
      size: "950-1050 sq.ft",
      image: "/assets/floor-plan-2br-A.png",
      features: [
        "Master bedroom with en-suite",
        "Guest bathroom",
        "Open-plan kitchen",
        "Balcony/terrace",
      ],
    },
    "2br-B": {
      category: "2br",
      title: "2 Bedroom - Unit Type B",
      size: "1000-1100 sq.ft",
      image: "/assets/floor-plan-2br-B.png",
      features: [
        "Corner unit",
        "Dual aspect windows",
        "Separate dining area",
        "Walk-in closet",
      ],
    },
    "2br-C": {
      category: "2br",
      title: "2 Bedroom - Unit Type C",
      size: "1050-1150 sq.ft",
      image: "/assets/floor-plan-2br-C.png",
      features: [
        "Larger living space",
        "Study nook",
        "Dual balconies",
        "Separate laundry",
      ],
    },
    "2br-D": {
      category: "2br",
      title: "2 Bedroom - Unit Type D",
      size: "1100-1200 sq.ft",
      image: "/assets/floor-plan-2br-D.png",
      features: [
        "Premium finishes",
        "Panoramic views",
        "Larger master suite",
        "Built-in storage",
      ],
    },
    "2br-E": {
      category: "2br",
      title: "2 Bedroom - Unit Type E",
      size: "1150-1250 sq.ft",
      image: "/assets/floor-plan-2br-E.png",
      features: [
        "Penthouse level",
        "Upgraded fixtures",
        "Extended balcony",
        "Smart home features",
      ],
    },
    "3br-A": {
      category: "3br",
      title: "3 Bedroom - Unit Type A",
      size: "1400-1600 sq.ft",
      image: "/assets/floor-plan-3br-A.png",
      features: [
        "Master suite with walk-in closet",
        "Two additional bedrooms",
        "Family living area",
        "Maid's room (select units)",
      ],
    },
  };

  // Group floor plans by category
  const categories = {
    "1br": Object.keys(floorPlans).filter(
      (key) => floorPlans[key].category === "1br"
    ),
    "2br": Object.keys(floorPlans).filter(
      (key) => floorPlans[key].category === "2br"
    ),
    "3br": Object.keys(floorPlans).filter(
      (key) => floorPlans[key].category === "3br"
    ),
  };

  // Handle category change
  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    // Set the first unit type of the selected category as active
    setActiveType(categories[category][0]);
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
      id="floor-plans"
      className="bg-white dark:bg-black text-black dark:text-white"
    >
      <SectionBackground position="middle" />

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
              Floor Plans
              <div className="section-title-underline"></div>
            </h2>
            <p className="section-subtitle text-sm md:text-base">
              Thoughtfully designed spaces that maximize comfort and
              functionality
            </p>
          </motion.div>

          <motion.div
            className="section-card dark:bg-white/5 bg-black/5 dark:backdrop-blur-lg backdrop-blur-lg p-4 md:p-8 rounded-xl"
            variants={itemVariants}
          >
            {/* Main category tabs */}
            <div className="flex border-b border-white/10 mb-4">
              {Object.keys(categories).map((category) => (
                <button
                  key={category}
                  className={`py-3 md:py-4 px-3 md:px-6 font-medium flex-1 transition-all duration-300 text-sm md:text-base ${
                    activeCategory === category
                      ? "bg-brand text-white"
                      : "dark:text-gray-300 text-gray-700 hover:text-brand"
                  }`}
                  onClick={() => handleCategoryChange(category)}
                >
                  {category === "1br"
                    ? "1 Bedroom"
                    : category === "2br"
                    ? "2 Bedrooms"
                    : "3 Bedrooms"}
                </button>
              ))}
            </div>
            {/* Unit type tabs */}
            <div className="flex flex-wrap border-b border-white/10 mb-4 md:mb-6 overflow-x-auto scrollbar-hide">
              {categories[activeCategory].map((type) => (
                <button
                  key={type}
                  className={`py-2 px-3 md:px-4 text-xs md:text-sm transition-all duration-300 whitespace-nowrap ${
                    activeType === type
                      ? "bg-brand text-white"
                      : "text-gray-400 hover:text-white"
                  }`}
                  onClick={() => setActiveType(type)}
                >
                  {floorPlans[type].title.split(" - ")[1]}
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
                    src={floorPlans[activeType].image}
                    alt={floorPlans[activeType].title}
                    fill
                    className="object-contain"
                  />
                </motion.div>
                <motion.div variants={itemVariants}>
                  <h3 className="text-xl md:text-2xl font-bold mb-2">
                    {floorPlans[activeType].title}
                  </h3>
                  <p className="text-lg md:text-xl text-brand mb-3 md:mb-4">
                    {floorPlans[activeType].size}
                  </p>

                  <h4 className="text-base md:text-lg font-bold mb-2">
                    Key Features:
                  </h4>
                  <ul className="space-y-1 md:space-y-2 mb-4 md:mb-6">
                    {floorPlans[activeType].features.map((feature, idx) => (
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
                        handleDownload("/assets/ALTON-Floor-Plans.pdf")
                      }
                      className="inline-block bg-brand hover:bg-brand-hover text-white font-medium py-2 md:py-3 px-4 md:px-6 rounded-none transition duration-300 text-sm md:text-base"
                      whileHover={{ scale: 1.05 }}
                    >
                      Download Floor Plan
                    </motion.button>
                    <motion.button
                      onClick={() =>
                        handleDownload("/assets/ALTON-Block-Plans.pdf")
                      }
                      className="inline-block bg-transparent border border-brand text-brand hover:bg-brand hover:text-white font-medium py-2 md:py-3 px-4 md:px-6 rounded-none transition duration-300 text-sm md:text-base"
                      whileHover={{ scale: 1.05 }}
                    >
                      Download Block Plan
                    </motion.button>
                  </div>
                </motion.div>
              </div>
            </div>
            p{" "}
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
