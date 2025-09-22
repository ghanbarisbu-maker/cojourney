import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-teal-400 via-emerald-500 to-cyan-600 py-16 lg:py-24 overflow-hidden">
      {/* Custom CSS Dandelion Background */}
      <div className="absolute inset-0 dandelion-scene">
        {/* Main Dandelion */}
        <div className="dandelion-main">
          <div className="dandelion-stem"></div>
          <div className="dandelion-head">
            <div className="dandelion-center"></div>
            {/* Dandelion seeds radiating outward */}
            {Array.from({ length: 24 }).map((_, i) => (
              <div 
                key={i} 
                className="dandelion-seed" 
                style={{ 
                  transform: `rotate(${i * 15}deg)`,
                  animationDelay: `${i * 0.1}s`
                }}
              >
                <div className="seed-parachute"></div>
                <div className="seed-body"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Floating Seeds */}
        {Array.from({ length: 12 }).map((_, i) => (
          <div 
            key={i} 
            className="floating-seed" 
            style={{
              left: `${20 + (i * 7)}%`,
              top: `${30 + (i % 3) * 20}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${8 + (i % 3) * 2}s`
            }}
          >
            <div className="floating-parachute"></div>
            <div className="floating-body"></div>
          </div>
        ))}
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-br from-teal-900/20 via-transparent to-emerald-900/30"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

          {/* Highlight CTA Block */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto border border-white/20">
            <div className="flex items-center justify-center mb-4">
              <Sparkles className="w-6 h-6 text-yellow-300 mr-2" />
              <h4 className="text-xl font-semibold">Start with a Free 15-Minute Online Consultation</h4>
            </div>
            <p className="text-emerald-100 mb-6">
              Meet with a counsellor, share your concerns, and see if our approach feels right — no obligation.
            </p>
            <Link to="/contact" className="bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors inline-block">
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}