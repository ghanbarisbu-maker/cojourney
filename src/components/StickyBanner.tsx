import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { X, Sparkles } from 'lucide-react';

const StickyBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-emerald-100 border-t border-emerald-200 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Sparkles className="w-5 h-5 text-emerald-600 mr-3" />
            <p className="text-emerald-800 font-medium">
              We offer a Free 15-Minute Online Consultation for new clients.
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/contact" className="bg-emerald-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-emerald-700 transition-colors">
              Book Now
            </Link>
            <button
              onClick={() => setIsVisible(false)}
              className="text-emerald-600 hover:text-emerald-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyBanner;