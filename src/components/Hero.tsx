import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const Hero = () => {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  const rotatingMessages = [
    "It's a shared journey.",
    "Creating change together.",
    "Discovering safety, meaning, and connection."
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessageIndex((prevIndex) =>
        (prevIndex + 1) % rotatingMessages.length
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[75vh] lg:min-h-[85vh] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("/2.jpg copy.jpg")'
        }}
      ></div>

      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/85 via-slate-900/50 to-transparent"></div>

      <div className="relative h-full min-h-[75vh] lg:min-h-[85vh] flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl lg:max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold text-white mb-6 leading-tight">
              Healing is not a destination
            </h1>

            <div className="h-20 sm:h-24 lg:h-28 flex items-center mb-6">
              <h2
                key={currentMessageIndex}
                className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-light text-teal-100 animate-fade-in"
                style={{
                  fontFamily: '"Playfair Display", Georgia, serif'
                }}
              >
                {rotatingMessages[currentMessageIndex]}
              </h2>
            </div>

            <p className="text-lg sm:text-xl lg:text-2xl text-slate-200 mb-10 leading-relaxed font-light">
              Trauma-informed, attachment-based, and mentalization-focused care.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 text-base sm:text-lg"
              >
                Book a Free Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/approach"
                className="inline-flex items-center justify-center bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-2 border-white/50 hover:border-white px-8 py-4 rounded-full font-semibold transition-all duration-300 text-base sm:text-lg"
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