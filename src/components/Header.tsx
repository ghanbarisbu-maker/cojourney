import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* Top contact bar */}
      <div className="bg-vintage-cream py-2 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Desktop layout */}
          <div className="hidden md:flex justify-between items-center text-sm">
            <div className="flex items-center space-x-4">
              <div className="flex items-center text-vintage-green">
                <Phone className="w-4 h-4 mr-1" />
                <span className="text-base font-medium">236 886 7223</span>
              </div>
              <div className="flex items-center text-vintage-green">
                <Mail className="w-4 h-4 mr-1" />
                <span className="text-base font-medium">info@cojourney.ca</span>
              </div>
            </div>
            <div className="text-vintage-orange font-medium text-base">
              Now accepting new clients
            </div>
          </div>
          
          {/* Mobile layout */}
          <div className="md:hidden space-y-2">
            <div className="flex items-center text-black">
              <Phone className="w-4 h-4 mr-1" />
              <span className="text-base font-medium">236 886 7223</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center text-black">
                <Mail className="w-4 h-4 mr-1" />
                <span className="text-base font-medium">info@cojourney.ca</span>
              </div>
              <div className="text-vintage-orange font-medium text-sm">
                Now accepting new clients
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link to="/" className="flex flex-col group">
              <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 leading-none mb-1 transition-colors">
                Co<span className="text-vintage-orange group-hover:text-vintage-green transition-colors">Journey</span>
              </h1>
              <p className="text-xs lg:text-sm font-light text-gray-700 leading-tight tracking-wide" style={{ fontFamily: 'Georgia, serif' }}>
                Counselling and Psychotherapy Clinic
              </p>
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-gray-900 hover:text-emerald-600 transition-colors font-medium">Home</a>
            <a href="/#services" className="text-gray-900 hover:text-emerald-600 transition-colors font-medium">Services</a>
            <a href="/#areas" className="text-gray-900 hover:text-emerald-600 transition-colors font-medium">Areas</a>
            <Link to="/approach" className="text-gray-900 hover:text-emerald-600 transition-colors font-medium">Approach</Link>
            <a href="/#team" className="text-gray-900 hover:text-emerald-600 transition-colors font-medium">Team</a>
            <Link to="/fees" className="text-gray-900 hover:text-emerald-600 transition-colors font-medium">Fees</Link>
            <Link to="/contact" className="text-gray-900 hover:text-emerald-600 transition-colors font-medium">Contact</Link>
            <Link to="/contact" className="bg-vintage-orange text-white px-5 py-2 rounded-full hover:bg-vintage-green transition-colors whitespace-nowrap text-sm lg:text-base">
              Book Appointment
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-vintage-green hover:text-vintage-orange"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <a href="/" className="text-gray-900 hover:text-emerald-600 transition-colors">Home</a>
              <a href="/#services" className="text-gray-900 hover:text-emerald-600 transition-colors">Services</a>
              <a href="/#areas" className="text-gray-900 hover:text-emerald-600 transition-colors">Areas</a>
              <Link to="/approach" className="text-gray-900 hover:text-emerald-600 transition-colors">Approach</Link>
              <a href="/#team" className="text-gray-900 hover:text-emerald-600 transition-colors">Team</a>
              <Link to="/fees" className="text-gray-900 hover:text-emerald-600 transition-colors">Fees</Link>
              <Link to="/contact" className="text-gray-900 hover:text-emerald-600 transition-colors">Contact</Link>
              <Link to="/contact" className="bg-vintage-orange text-white px-6 py-2 rounded-full hover:bg-vintage-green transition-colors w-fit">
                Book Appointment
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;