"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import SectionBackground from "../ui/SectionBackground";

const projects = [
  // 1–6
  {
    client: "DS Group",
    title: "Founders’ Day Celebrations",
    category: "Corporate Event",
    image: "/projects/ds-founders.jpg",
    description: "90 Years celebration setup at DS Group headquarters, Noida.",
  },
  {
    client: "Xiaomi",
    title: "LED Smart TV Retail Units",
    category: "Retail",
    image: "/projects/xiaomi-ncr.jpg",
    description: "Multi-store display installations across Delhi NCR.",
  },
  // {
  //   client: "PVR / 7 Coffee Beans",
  //   title: "Kiosk Setup",
  //   category: "Retail",
  //   image: "/projects/pvr-7coffee.jpg",
  //   description: "Branded kiosks for 7 Coffee Beans in PVR multiplexes.",
  // },
  {
    client: "Iris International",
    title: "Airport Branding",
    category: "Activation",
    image: "/projects/iris-airport.jpg",
    description: "‘Teachers at Airport’ activations in Hyderabad & Delhi T3.",
  },
  {
    client: "Theme Weavers",
    title: "Optum Office Fixtures",
    category: "Corporate",
    image: "/projects/optum-fixtures.jpg",
    description: "Office activations in Gurgaon, Noida, Hyderabad & Bangalore.",
  },
   {
    client: "Clout Mobitech",
    title: "Retail Chain Rollout",
    category: "Retail",
    image: "/projects/clout-mobitech.jpg",
    description: "Stay Connect outlets launched across 10 cities in Rajasthan.",
  },

  // 7–12
  {
    client: "Samsung (Hansa Events)",
    title: "Canter Activity",
    category: "Activation",
    image: "/projects/samsung-canter.jpg",
    description:
      "Mobile brand activation campaign with demo trucks across Delhi NCR.",
  },
  {
    client: "Logitech (Retail Matrix)",
    title: "Retail Showcase",
    category: "Tech",
    image: "/projects/logitech-retail.jpg",
    description:
      "Interactive demo stations at HOT Store, Nehru Place, New Delhi.",
  },
  // {
  //   client: "Lenovo (Retail Matrix)",
  //   title: "Store Fabrication",
  //   category: "Retail",
  //   image: "/projects/lenovo-store.jpg",
  //   description: "Modular store setups in Amritsar, Bareilly & Roorkee.",
  // },
  // {
  //   client: "S. Oliver",
  //   title: "Press Launch Setup",
  //   category: "Fashion",
  //   image: "/projects/soliver-launch.jpg",
  //   description:
  //     "Beach-house themed showroom for S. Oliver press launch in Delhi.",
  // },
  // {
  //   client: "VLCC",
  //   title: "Display Rack Installation",
  //   category: "Wellness",
  //   image: "/projects/vlcc-rack.jpg",
  //   description:
  //     "Custom display rack installations for VLCC retail spaces.",
  // },
  {
    client: "Schimmer Chemicals",
    title: "Expo Stall",
    category: "Exhibition",
    image: "/projects/schimmer-expo.jpg",
    description: "Product demo stall at Pragati Maidan for Schimmer Chemicals.",
  },

  // 13–18
  {
    client: "Thomas Cook",
    title: "Ambience Mall Kiosk",
    category: "Retail",
    image: "/projects/thomascook.jpg",
    description:
      "Branded travel kiosk at Ambience Mall, Gurgaon for Thomas Cook.",
  },
  {
    client: "Blender’s Pride (Enthuse)",
    title: "Globetrotter Install",
    category: "Lifestyle",
    image: "/projects/blenders-globetrotter.jpg",
    description:
      "Experiential installation in Chandigarh reflecting global journeys.",
  },
  // {
  //   client: "Oberoi Hotels (Ample Events)",
  //   title: "GITB Stall",
  //   category: "Exhibition",
  //   image: "/projects/oberoi-gitb.jpg",
  //   description: "Luxury travel stall at GITB, JECC Jaipur for Oberoi Hotels.",
  // },
  {
    client: "TIC (TATA Motors)",
    title: "Prima Truck Race",
    category: "Auto",
    image: "/projects/tata-prima.jpg",
    description:
      "Activation for TATA Prima Truck Race at Buddh International Circuit.",
  },
  {
    client: "Iris International",
    title: "Airport Branding (Kolkata & Chennai)",
    category: "Activation",
    image: "/projects/iris-kolkata-chennai.jpg",
    description:
      "‘Teachers at Airport’ branding across Kolkata & Chennai airports.",
  },
  {
    client: "Pullman Aerocity (Shaze)",
    title: "Display Installation",
    category: "Hospitality",
    image: "/projects/shaze-pullman.jpg",
    description:
      "Luxury brand display for Shaze at Pullman Aerocity, Delhi.",
  },

  // 19–24
  {
    client: "DS Group",
    title: "Foundations Day – Noida",
    category: "Corporate Event",
    image: "/projects/ds-foundations.jpg",
    description: "89th Founders’ Day setup for DS Group, Noida headquarters.",
  },
  {
    client: "Clout Mobitech",
    title: "Stay Connect Outlet – Delhi Airport",
    category: "Retail",
    image: "/projects/stayconnect-airport.jpg",
    description:
      "Retail outlet launch at Delhi Airport Terminal 3 for Clout Mobitech.",
  },
  {
    client: "Woke Juice",
    title: "Mall Bar Activation",
    category: "Retail",
    image: "/projects/woke-juice.jpg",
    description: "Pop-up juice bar at DLF Saket Mall for Woke Juice brand.",
  },
  // {
  //   client: "Media Expo (Mimaki)",
  //   title: "Exhibition Setup",
  //   category: "Exhibition",
  //   image: "/projects/media-expo.jpg",
  //   description:
  //     "Large-scale expo stall at Pragati Maidan for Media Expo 2015.",
  // },
  // {
  //   client: "Burberry",
  //   title: "Show Window",
  //   category: "Retail",
  //   image: "/projects/burberry-window.jpg",
  //   description:
  //     "Premium window displays in Delhi, Gurgaon, Hyderabad, Chennai & Bangalore.",
  // },
  {
    client: "Shandong Tai Kai",
    title: "Backlit Showcase",
    category: "Exhibition",
    image: "/projects/tai-kai.jpg",
    description:
      "Perfumery showcase stall with motorized ceilings at Pragati Maidan.",
  },

  // 25–30
  {
    client: "Olympus",
    title: "Jaypee Convention Stall",
    category: "Exhibition",
    image: "/projects/olympus-jaypee.jpg",
    description:
      "Photography equipment stall at Jaypee Convention, Agra for Olympus.",
  },
  {
    client: "ASSA ABLOY",
    title: "Expo Centre Stall",
    category: "Exhibition",
    image: "/projects/assa-abloy.jpg",
    description:
      "High-security product display at Mumbai Expo Centre for ASSA ABLOY.",
  },
  {
    client: "DLH Woods",
    title: "Mumbai Expo Stall",
    category: "Exhibition",
    image: "/projects/dlh-woods.jpg",
    description:
      "Wood product showcase stall at Mumbai Expo Centre for DLH Woods Intl.",
  },
  {
    client: "Alkem Pharma",
    title: "RSSDL Conference Stall",
    category: "Exhibition",
    image: "/projects/alkem-pharma.jpg",
    description:
      "Pharma product display at India Expo Mart, Greater Noida for Alkem Pharma.",
  },
  {
    client: "Mac Cosmetics",
    title: "Select City Walk Mall Stall",
    category: "Retail",
    image: "/projects/mac-cosmetics.jpg",
    description:
      "Live makeup stations and mock grocery store display at Select City Walk.",
  },
  // {
  //   client: "S. Oliver",
  //   title: "Temporary Showroom",
  //   category: "Fashion",
  //   image: "/projects/soliver-showroom.jpg",
  //   description:
  //     "Media-guest beach-house themed temporary showroom at press launch.",
  // },

  // 31–36
  {
    client: "Honeywell (MYKA EXP)",
    title: "Sales Kick-Off Meet",
    category: "Corporate Event",
    image: "/projects/honeywell-goa2.jpg",
    description:
      "Global sales meet at Goa & Hua Hin (Thailand) for Honeywell.",
  },
  {
    client: "ZEE Sangam",
    title: "Signature Fashion Party",
    category: "Event",
    image: "/projects/zee-sangam.jpg",
    description: "Fashion-themed party at Marriott, Jaipur for ZEE Sangam.",
  },
  {
    client: "Honda (Clearchannel Mudra)",
    title: "Launch Event",
    category: "Auto",
    image: "/projects/honda-launch.jpg",
    description:
      "New product launch at Hyatt Regency, New Delhi for Honda.",
  },
  // {
  //   client: "Nestlé",
  //   title: "Christmas Carnival",
  //   category: "Event",
  //   image: "/projects/nestle-carnival.jpg",
  //   description:
  //     "Festive carnival setup in Delhi for Nestlé Christmas events.",
  // },
  // {
  //   client: "HSIL Benelave",
  //   title: "Jaipur Installation",
  //   category: "Retail",
  //   image: "/projects/hsil-benelave.jpg",
  //   description:
  //     "Working rain-shower display in Jaipur for HSIL Benelave.",
  // },
  // {
  //   client: "Chevrolet (Bellset)",
  //   title: "Sail U-VA Launch",
  //   category: "Auto",
  //   image: "/projects/chevrolet-sail.jpg",
  //   description:
  //     "Vehicle launch activation at The Grand, New Delhi for Chevrolet Sail U-VA.",
  // },

  // 37–42
  {
    client: "Digitas",
    title: "Solutions Launch",
    category: "Corporate",
    image: "/projects/digitas.jpg",
    description:
      "Corporate event activation in Delhi for Solutions Digitas.",
  },
  // {
  //   client: "Dabur",
  //   title: "Family Day",
  //   category: "Event",
  //   image: "/projects/dabur-family.jpg",
  //   description:
  //     "Mexican-theme family day for Dabur employees in Delhi (500 pax).",
  // },
  {
    client: "Fila India",
    title: "Press Launch",
    category: "Fashion",
    image: "/projects/fila-india.jpg",
    description:
      "Brand ambassador unveiling with motorized turntable (Virendra Sehwag).",
  },
  // {
  //   client: "Cisco",
  //   title: "Services Team Offsite",
  //   category: "Corporate Event",
  //   image: "/projects/cisco-goa.jpg",
  //   description:
  //     "Full guest management and production for Cisco offsite in Goa.",
  // },
  {
    client: "TOI Group",
    title: "Brand Equity Quiz",
    category: "Event",
    image: "/projects/toi-quiz.jpg",
    description:
      "Pan-India quiz in 9 cities culminating in Mumbai finale for TOI.",
  },
  // {
  //   client: "BHPC",
  //   title: "Polo Club Launch",
  //   category: "Event",
  //   image: "/projects/bhpc.jpg",
  //   description:
  //     "Beverly Hills Polo Club launch event setup in Mumbai.",
  // },

  // 43–48
  // {
  //   client: "Voltas",
  //   title: "Dealers Meet (Shenzhen)",
  //   category: "Corporate Event",
  //   image: "/projects/voltas-shenzhen.jpg",
  //   description:
  //     "Product reveal with rotating backdrops in Shenzhen for Voltas.",
  // },
  // {
  //   client: "Voltas",
  //   title: "Dealers Meet (Phuket)",
  //   category: "Corporate Event",
  //   image: "/projects/voltas-phuket.jpg",
  //   description:
  //     "Repeat of Shenzhen activation for Voltas dealers in Phuket.",
  // },
  {
    client: "Modi Mundi Pharma",
    title: "Exhibition Setup",
    category: "Exhibition",
    image: "/projects/modi-mundi.jpg",
    description:
      "Modular SS structure for multi-city pharma exhibitions across India.",
  },
  // {
  //   client: "Cisco",
  //   title: "Customer Meet (Dhaka)",
  //   category: "Corporate Event",
  //   image: "/projects/cisco-dhaka.jpg",
  //   description:
  //     "Conference-level execution for Cisco customer meet in Dhaka, Bangladesh.",
  // },
  // {
  //   client: "HP India",
  //   title: "Graphics Arts Showcase",
  //   category: "Exhibition",
  //   image: "/projects/hp-graphics.jpg",
  //   description:
  //     "HP Graphics Arts showcase stall design and execution in Delhi.",
  // },
  {
    client: "LG Electronics",
    title: "India Partners Meet",
    category: "Corporate Event",
    image: "/projects/lg-partners.jpg",
    description:
      "Partner meet activations in Delhi & Mumbai for LG Electronics.",
  },

  // 49–54
  // {
  //   client: "Ericsson India",
  //   title: "Technical Meet",
  //   category: "Corporate Event",
  //   image: "/projects/ericsson.jpg",
  //   description:
  //     "Technical conference setup in Manesar for Ericsson India.",
  // },
  {
    client: "Alkem Pharma",
    title: "RSSDL Conference Stall",
    category: "Exhibition",
    image: "/projects/alkem.jpg",
    description:
      "Pharma expo stall at India Expo Mart, Greater Noida.",
  },
  {
    client: "Honeywell",
    title: "Sales Kick-Off Meet",
    category: "Corporate Event",
    image: "/projects/honeywell-goa.jpg",
    description:
      "Sales meet and activation in Goa & Hua Hin (Thailand) for Honeywell.",
  },
  {
    client: "Mac Cosmetics",
    title: "Mall Display & Makeup Station",
    category: "Retail",
    image: "/projects/mac.jpg",
    description:
      "Mock grocery store and live makeup demo at Select City Walk Mall.",
  },
];

export default function ProjectsSection() {
  const [filter, setFilter] = useState("All");
  const [displayCount, setDisplayCount] = useState(6);

  const filters = [
    "All",
    "Corporate Event",
    "Retail",
    "Activation",
    "Exhibition",
    "Event",
    "Tech",
    "Auto",
    "Fashion",
    "Wellness",
  ];

  const filtered =
    filter === "All"
      ? projects
      : projects.filter((p) => p.category === filter);

  const visibleProjects = filtered.slice(0, displayCount);

  const handleSeeMore = () => {
    setDisplayCount((prev) => Math.min(prev + 6, filtered.length));
  };

  return (
    <section
      id="projects"
      className="relative bg-white dark:bg-black text-black dark:text-white"
    >
      {/* make background non-interactive */}
      <SectionBackground position="middle" className="pointer-events-none" />

      <div className="relative z-10 w-[100vw] md:w-[90vw] mx-auto px-4 py-20">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            Projects We’ve Executed
            <div className="section-title-underline" />
          </h2>
          <p className="section-subtitle">
            A showcase of our brand activations, exhibitions, and live events.
          </p>
        </motion.div>

        {/* Filters (clickable now!) */}
        <div className="relative z-10 flex flex-wrap justify-center gap-3 mb-10 ">
          {filters.map((f) => (
            <motion.button
              key={f}
              onClick={() => {
                setFilter(f);
                setDisplayCount(6);
              }}
              className={`px-4 py-2 rounded-full text-sm transition ${
                filter === f
                  ? "bg-brand text-white"
                  : "bg-black/5 dark:bg-white/10 text-gray-700 dark:text-gray-300 hover:text-brand"
              }`}
              whileHover={{ scale: 1.05 }}
            >
              {f}
            </motion.button>
          ))}
        </div>

        {/* Project Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {visibleProjects.map((p, i) => (
            <motion.div
              key={i}
              className="group bg-white dark:bg-white/5 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all font-sans"
              whileHover={{ y: -5 }}
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30" />
              </div>
              <div className="p-5 relative z-10">
                <h3 className="text-lg font-bold">{p.title}</h3>
                <p className="text-sm text-brand mb-1">{p.client}</p>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  {p.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* See More (now clickable!) */}
        {filtered.length > displayCount && (
          <div className="relative z-10 mt-10 text-center">
            <motion.button
              onClick={handleSeeMore}
              whileHover={{ scale: 1.05 }}
              className="bg-brand hover:bg-brand-hover text-white font-medium py-3 px-6 rounded transition"
            >
              See More Projects
            </motion.button>
          </div>
        )}
      </div>
    </section>
  );
}
