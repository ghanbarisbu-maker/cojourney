import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative py-16 lg:py-24 overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?auto=compress&cs=tinysrgb&w=1200")'
        }}
      ></div>
      
      <div className="absolute inset-0 bg-white/60"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-serif">
            Healing is a Journey
            <span className="block">Creating Change Together</span>
          </h1>
          <h3 className="text-xl md:text-2xl mb-8 text-gray-700 font-light">
            Trauma-informed, attachment-based, and mentalization-focused care.
          </h3>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/contact" className="bg-vintage-orange text-white px-8 py-4 rounded-lg font-semibold hover:bg-vintage-green transition-colors flex items-center justify-center">
              Book Your Free Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link to="/approach" className="border-2 border-vintage-orange text-vintage-orange px-8 py-4 rounded-lg font-semibold hover:bg-vintage-orange hover:text-white transition-colors">
              Learn More About Our Approach
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}