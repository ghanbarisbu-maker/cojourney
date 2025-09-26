import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative py-16 lg:py-24 overflow-hidden bg-gradient-to-br from-emerald-800 via-emerald-700 to-sky-600 min-h-screen flex items-center">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-serif text-white">
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