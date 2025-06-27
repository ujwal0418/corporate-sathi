'use client';
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from "../../context/ThemeContext";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef(null);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    setIsVisible(true);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("hero-visible");
        }
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) observer.observe(heroRef.current);
    return () => {
      if (heroRef.current) observer.unobserve(heroRef.current);
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.215, 0.61, 0.355, 1],
      },
    },
  };

  return (
    <section
      className="relative flex-col min-h-[100svh] flex items-center overflow-hidden"
      ref={heroRef}
    >
      {/* Header with Logo and Theme Toggle */}
      <div className="w-full px-4 md:w-[90vw] max-w-6xl mx-auto z-50 py-6 flex justify-between items-center">
        <motion.div
          className="w-32 md:w-40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {/* <Image
            src={"/assets/ush_logo.svg"} // Replace with your logo path
            alt="Corporate-saathi logo"
            width={160}
            height={70}
            className="w-28 h-auto"
          /> */}
        </motion.div>

        {/* <motion.button
          onClick={toggleTheme}
          className="p-3 rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-white/20 transition-colors duration-200"
          aria-label="Toggle Dark Mode"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {theme === "dark" ? <FaSun size={18} /> : <FaMoon size={18} />}
        </motion.button> */}
      </div>

      {/* Background Image with gradient overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/corporate-bg.jpg" // Use an elegant event/photo or brand image
          alt="Corporate Event Background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black"></div>
      </div>

      {/* Content */}
      <div className="w-[100vw] md:w-[90vw] mx-auto px-4 relative z-10">
        <motion.div
          className="max-w-6xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-4 text-white leading-tight"
            variants={itemVariants}
          >
            Corporate-साथी
          </motion.h1>

          <motion.div
            className="w-16 md:w-20 h-1 bg-[#A88941] mb-6"
            variants={itemVariants}
          ></motion.div>

          <motion.p
            className="text-lg md:text-2xl mb-8 text-gray-300 font-light max-w-3xl"
            variants={itemVariants}
          >
            “I knew, of course, that trees and plants had stems, bark, branches,
            and foliage that reached up toward the light. But I was coming to
            realize that the real magician was Light itself.”<br />– Edward Steichen
          </motion.p>

          <motion.div className="flex flex-wrap gap-4" variants={itemVariants}>
            <motion.a
              href="#contact"
              className="inline-block bg-[#A88941] hover:bg-[#987835] text-white font-medium py-3 px-8 rounded-none transition text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Contact Us
            </motion.a>
            <motion.a
              href="#plans"
              className="inline-block border border-white/30 hover:border-white/60 text-white font-medium py-3 px-8 rounded-none transition text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              View Portfolio
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

     {/* Premium Scroll Indicator */}
<motion.div
  className="absolute bottom-10 md:bottom-14 left-1/2 transform -translate-x-1/2 z-10"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 1.2, duration: 0.6 }}
>
  <a href="#town-square" className="group relative flex flex-col items-center space-y-2">
    {/* Outer Ring */}
    <div className="h-14 w-14 rounded-full border-2 border-white/30 group-hover:border-white/60 transition-all duration-300 flex items-center justify-center">
      {/* Pulsing Dot */}
      <motion.div
        className="h-2.5 w-2.5 bg-white rounded-full shadow-md"
        animate={{
          y: [0, 6, 0],
          opacity: [1, 0.4, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
          ease: "easeInOut",
        }}
      />
    </div>
    {/* Label */}
    <span className="text-xs text-white/50 group-hover:text-white tracking-wide">
      Scroll
    </span>
  </a>
</motion.div>

    </section>
  );
}
