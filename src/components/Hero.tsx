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
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1500 ${
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
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-serif font-bold text-white mb-8 leading-[1.1]">
              Healing is not a destination
            </h1>

            <div className="h-24 sm:h-28 lg:h-32 flex items-center mb-8">
              <h2
                key={currentMessageIndex}
                className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light text-teal-100 animate-fade-in leading-tight"
                style={{
                  fontFamily: '"Playfair Display", Georgia, serif'
                }}
              >
                {rotatingMessages[currentMessageIndex]}
              </h2>
            </div>

            <p className="text-xl sm:text-2xl lg:text-3xl text-slate-200 mb-12 leading-relaxed font-light max-w-3xl">
              Trauma-informed, attachment-based, and mentalization-focused care.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 sm:gap-6">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center bg-teal-600 hover:bg-teal-700 text-white px-10 py-5 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 text-lg sm:text-xl"
              >
                Book a Free Consultation
                <ArrowRight className="ml-3 w-6 h-6" />
              </Link>
              <Link
                to="/approach"
                className="inline-flex items-center justify-center bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-2 border-white/50 hover:border-white px-10 py-5 rounded-full font-semibold transition-all duration-300 text-lg sm:text-xl"
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