import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';

export const Hero = () => {
  const [sunRise, setSunRise] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSunRise(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-emerald-800 via-emerald-700 to-sky-600 py-16 lg:py-24 overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?auto=compress&cs=tinysrgb&w=1200")'
        }}
      ></div>
      
      {/* Sun Element */}
      <div 
        className="absolute rounded-full bg-gradient-to-br from-yellow-300 via-yellow-400 to-orange-400 transition-all duration-[4000ms] ease-out shadow-2xl"
        style={{
          width: '150px',
          height: '150px',
          left: '50%',
          transform: 'translateX(-50%)',
          bottom: sunRise ? '20%' : '-10%',
          opacity: sunRise ? 1 : 0,
          zIndex: 1,
          boxShadow: sunRise ? '0 0 100px rgba(255, 255, 0, 0.3), 0 0 200px rgba(255, 255, 0, 0.1)' : 'none'
        }}
      ></div>
      
      <div className="absolute inset-0 bg-emerald-900/70 z-20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-30">
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-serif">
            Healing is a Journey
            <span className="block">Creating Change Together</span>
          </h1>
          <h3 className="text-xl md:text-2xl mb-8 text-emerald-100 font-light">
            Trauma-informed, attachment-based, and mentalization-focused care.
          </h3>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/contact" className="bg-white text-emerald-800 px-8 py-4 rounded-lg font-semibold hover:bg-emerald-50 transition-colors flex items-center justify-center">
              Book Your Free Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link to="/approach" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-emerald-800 transition-colors">
              Learn More About Our Approach
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}