import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const Hero = () => {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const rotatingMessages = [
    "It's a shared journey.",
    "Creating change together.",
    "Discovering safety, meaning, and connection."
  ];

  const backgroundImages = [
    "/2.jpg copy.jpg",
    "/1.jpg copy.jpg"
  ];

  const buttonColors = [
    { bg: 'bg-deep-teal', hover: 'hover:bg-teal-accent' },
    { bg: 'bg-warm-apricot', hover: 'hover:bg-[#e89551]' }
  ];

  useEffect(() => {
    const messageInterval = setInterval(() => {
      setCurrentMessageIndex((prevIndex) =>
        (prevIndex + 1) % rotatingMessages.length
      );
    }, 4000);

    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        (prevIndex + 1) % backgroundImages.length
      );
    }, 8000);

    return () => {
      clearInterval(messageInterval);
      clearInterval(imageInterval);
    };
  }, []);

  return (
    <section className="relative min-h-[75vh] lg:min-h-[85vh] overflow-hidden">
      {backgroundImages.map((image, index) => (
        <div
          key={image}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1500 animate-water-flow ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url("${image}")`
          }}
        ></div>
      ))}

      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/85 via-slate-900/50 to-transparent"></div>

      <div className="relative h-full min-h-[75vh] lg:min-h-[85vh] flex items-center">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
          <div className="max-w-4xl">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-serif font-bold text-white mb-8 leading-[1.1] drop-shadow-lg">
              Healing is not a destination
            </h1>

            <div className="h-24 sm:h-28 lg:h-32 flex items-center mb-8">
              <h2
                key={currentMessageIndex}
                className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light text-soft-mint animate-fade-in leading-tight drop-shadow-lg"
                style={{
                  fontFamily: '"Playfair Display", Georgia, serif'
                }}
              >
                {rotatingMessages[currentMessageIndex]}
              </h2>
            </div>


            <div className="flex flex-col sm:flex-row gap-5 sm:gap-6">
              <Link
                to="/contact"
                className={`inline-flex items-center justify-center ${buttonColors[currentImageIndex].bg} ${buttonColors[currentImageIndex].hover} text-white px-5 py-2.5 rounded-full font-semibold transition-all duration-500 shadow-lg hover:shadow-xl hover:scale-105 text-base sm:text-lg`}
              >
                Book a Free Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/approach"
                className="inline-flex items-center justify-center bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-2 border-white/50 hover:border-white px-5 py-2.5 rounded-full font-semibold transition-all duration-300 text-base sm:text-lg"
              >
                Explore Our Approach
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}