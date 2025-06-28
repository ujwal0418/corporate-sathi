'use client';

import HeroSection from "./components/sections/HeroSection";
import TownSquareSection from "./components/sections/TownSquareSection";
import LocationSection from "./components/sections/LocationSection";
import FacilitiesSection from "./components/sections/FacilitiesSection";
import LifestyleSection from "./components/sections/LifestyleSection";
import AltonSection from "./components/sections/AltonSection";
import DesignSection from "./components/sections/DesignSection";
import AmenitiesSection from "./components/sections/AmenitiesSection";
import ScrollProgressIndicator from "./components/ui/ScrollProgressIndicator";
import Header from "./components/layout/Header";
import ContactSection from "./components/sections/ContactSection";
import PlansSection from "./components/sections/PlansSection";
import OurOfferingsSection from "./components/sections/OurOfferingsSection";

export default function HomePage() {
  return (
    <div className="bg-black text-white">
      <ScrollProgressIndicator />
      {/* <Header /> */}
      <main className="overflow-hidden">
          <HeroSection />
          <TownSquareSection />
          <DesignSection />
          <OurOfferingsSection/>
          <LifestyleSection />
          <FacilitiesSection />
          <PlansSection />
          <AltonSection />
          <LocationSection />
          <ContactSection/>
      </main>
      {/* <Footer /> */}
    </div>
  );
}





