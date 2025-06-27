'use client';
import { useRef, useEffect } from 'react';
import Image from 'next/image';

export default function AmenitiesSection() {
  const amenitiesRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.amenity-item');
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('opacity-100', 'translate-y-0');
              }, index * 150);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (amenitiesRef.current) {
      observer.observe(amenitiesRef.current);
    }
    
    return () => {
      if (amenitiesRef.current) {
        observer.unobserve(amenitiesRef.current);
      }
    };
  }, []);

  const amenities = [
    { name: 'Infinity Pool', icon: '/assets/icons/pool.svg', description: 'Stunning rooftop pool with panoramic views' },
    { name: 'Private Gym', icon: '/assets/icons/gym.svg', description: 'State-of-the-art fitness center' },
    { name: 'Residents Lounge', icon: '/assets/icons/lounge.svg', description: 'Elegant space for relaxation and socializing' },
    { name: 'Children\'s Playground', icon: '/assets/icons/playground.svg', description: 'Safe and engaging play areas' },
    { name: 'Landscaped Gardens', icon: '/assets/icons/garden.svg', description: 'Beautifully maintained outdoor spaces' },
    { name: 'BBQ Areas', icon: '/assets/icons/bbq.svg', description: 'Dedicated spaces for outdoor entertaining' },
    { name: 'Concierge Service', icon: '/assets/icons/concierge.svg', description: '24/7 assistance for residents' },
    { name: 'Security', icon: '/assets/icons/security.svg', description: 'Round-the-clock security for peace of mind' }
  ];

  return (
    <section id="amenities" className="py-20 bg-white" ref={amenitiesRef}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">Amenities</h2>
          <div className="w-20 h-1 bg-brand mx-auto mb-8"></div>
          <p className="text-lg text-black max-w-3xl mx-auto">
            ALTON offers an extensive range of amenities designed to enhance your lifestyle and provide 
            the perfect balance of relaxation, recreation, and social interaction.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {amenities.map((amenity, idx) => (
            <div 
              key={idx} 
              className="amenity-item bg-gray-50 p-6 rounded-lg transform translate-y-10 opacity-0 transition-all duration-500 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="w-16 h-16 bg-brand bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                <Image 
                  src={amenity.icon || '/assets/icons/default.svg'} 
                  alt={amenity.name}
                  width={32}
                  height={32}
                />
              </div>
              <h3 className="text-xl font-bold mb-2 text-black">{amenity.name}</h3>
              <p className="text-gray-600">{amenity.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="/assets/documents/Alton-Amenities-Guide.pdf" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-transparent border border-brand text-brand hover:bg-brand hover:text-white font-medium py-3 px-8 rounded-none transition duration-300"
          >
            Download Amenities Guide
          </a>
        </div>
      </div>
    </section>
  );
}
