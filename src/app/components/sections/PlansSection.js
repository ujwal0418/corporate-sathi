"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import SectionBackground from "../ui/SectionBackground";

const projects = [
  {
    client: "DS Group",
    title: "Pan-India Mall Activation",
    category: "Retail",
    image: "/projects/ds-group.jpg",
    description: "Created immersive brand zones across Tier 1 malls in 6 cities.",
  },
  {
    client: "Xiaomi",
    title: "Product Launch & Roadshow",
    category: "Tech",
    image: "/projects/xiaomi-launch.jpg",
    description: "Executed 10+ experiential launch zones with custom demo pods.",
  },
  {
    client: "Nikon",
    title: "Photography Exhibition Setup",
    category: "Exhibition",
    image: "/projects/nikon-exhibition.jpg",
    description: "Designed and fabricated experiential display booth for Nikon Pro.",
  },
  {
    client: "Prestige",
    title: "Retail Branding & Demo",
    category: "Retail",
    image: "/projects/prestige-retail.jpg",
    description: "End-to-end kiosk setup with product demo and live cooking.",
  },
  {
    client: "Max Fashion",
    title: "Festive Mall Décor",
    category: "Mall",
    image: "/projects/max-festive.jpg",
    description: "Executed Diwali décor and photo zones at 5 regional malls.",
  },
  {
    client: "Bluestone",
    title: "Pop-Up Store Build",
    category: "BTL",
    image: "/projects/bluestone-popup.jpg",
    description: "Custom retail pop-up execution with lighting & AV setup.",
  },
];

export default function ProjectsSection() {
  const [filter, setFilter] = useState("All");

  const filters = ["All", "Retail", "Exhibition", "Mall", "BTL", "Tech"];

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <section
      id="projects"
      className="bg-white dark:bg-black text-black dark:text-white"
    >
      <SectionBackground position="middle" />

      <div className="w-[100vw] md:w-[90vw] mx-auto px-4 py-20 relative z-10">
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <h2 className="section-title">
              Projects We’ve Executed
              <div className="section-title-underline"></div>
            </h2>
            <p className="section-subtitle">
              A showcase of our brand activations, exhibitions, and live events
            </p>
          </div>

          {/* Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {filters.map((item) => (
              <button
                key={item}
                className={`px-4 py-2 text-sm md:text-base rounded-full transition ${
                  filter === item
                    ? "bg-brand text-white"
                    : "bg-black/5 dark:bg-white/10 text-gray-700 dark:text-gray-300 hover:text-brand"
                }`}
                onClick={() => setFilter(item)}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((proj, i) => (
              <motion.div
                key={i}
                className="bg-white dark:bg-white/5 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <div className="relative h-56 md:h-64">
                  <Image
                    src={proj.image}
                    alt={proj.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold mb-1">{proj.title}</h3>
                  <p className="text-sm text-brand mb-2">{proj.client}</p>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    {proj.description}
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
