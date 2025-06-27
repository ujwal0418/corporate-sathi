import Image from 'next/image';

export default function FeaturesSection() {
  return (
    <section id="features" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-black">A Vibrant Community</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg mb-6 text-black">
              Located at the heart of Town Square Park, ALTON combines sweeping park views with urban accessibility. 
              Designed for families and professionals with access to over 250 retail outlets, sports arenas, and green trails.
            </p>
            <ul className="space-y-3">
              {['Premium finishes', 'Spacious layouts', 'Modern kitchens', 'Close proximity to schools', 
                "Easy access to Dubai's main highways"].map((feature, idx) => (
                <li key={idx} className="flex items-center text-black">
                  <svg className="w-5 h-5 text-brand mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative h-80 md:h-96">
            <Image 
              src="/assets/images/interior-view.jpg" 
              alt="ALTON Interior" 
              fill 
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

