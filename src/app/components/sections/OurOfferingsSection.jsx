"use client";
import { useRef } from "react";
import { motion } from "framer-motion";
import {
  FaGift,
  FaSeedling,
  FaHandsHelping,
  FaSmile,
  FaGlobeAsia,
  FaRecycle,
} from "react-icons/fa";
import SectionBackground from "../ui/SectionBackground";

export default function OurOfferingsSection() {
  const sectionRef = useRef(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
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

  const offerings = [
    {
      icon: <FaGift size={28} />,
      title: "Thoughtful Green Gifting",
      desc: "We curate sustainable gifts that create lasting impressions.",
    },
    {
      icon: <FaSeedling size={28} />,
      title: "Potted Plants & Desktop Greens",
      desc: "Stylish greenery with custom care guides.",
    },
    {
      icon: <FaRecycle size={28} />,
      title: "Upcycled & Eco Goods",
      desc: "Gifts that repurpose materials and reduce waste.",
    },
    {
      icon: <FaHandsHelping size={28} />,
      title: "Support to Artisans & NGOs",
      desc: "Partnering with mission-driven groups for meaningful impact.",
    },
    {
      icon: <FaSmile size={28} />,
      title: "Employee & Client Gifting",
      desc: "Customized experiences that align with your brand.",
    },
    {
      icon: <FaGlobeAsia size={28} />,
      title: "Pan-India Reach",
      desc: "Delivering across India with care and speed.",
    },
  ];

  return (
    <section
      id="our-offerings"
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
          <motion.div className="text-center mb-12" variants={itemVariants}>
            <h2 className="section-title">
              Our Offerings
              <div className="section-title-underline"></div>
            </h2>
            <p className="section-subtitle">
              We design meaningful gifting solutions with purpose and care.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {offerings.map((item, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-xl p-6 shadow hover:shadow-md transition-all duration-300 text-center"
                variants={itemVariants}
              >
                <div className="mb-4 text-brand">{item.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
