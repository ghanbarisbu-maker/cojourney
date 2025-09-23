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
            <h1 className="text-2xl font-bold text-gray-900">
              Co<span className="text-vintage-orange">Journey</span>
            </h1>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-900 hover:text-emerald-600 transition-colors font-medium">Home</Link>
            <Link to="/#services" className="text-gray-900 hover:text-emerald-600 transition-colors font-medium">Services</Link>
            <Link to="/approach" className="text-gray-900 hover:text-emerald-600 transition-colors font-medium">Approach</Link>
            <Link to="/#team" className="text-gray-900 hover:text-emerald-600 transition-colors font-medium">Team</Link>
            <Link to="/fees" className="text-gray-900 hover:text-emerald-600 transition-colors font-medium">Fees</Link>
            <Link to="/contact" className="text-gray-900 hover:text-emerald-600 transition-colors font-medium">Contact</Link>
            <button className="bg-vintage-orange text-white px-6 py-2 rounded-full hover:bg-vintage-green transition-colors">
              Book Appointment
            </button>
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
              <Link to="/" className="text-gray-900 hover:text-emerald-600 transition-colors">Home</Link>
              <Link to="/#services" className="text-gray-900 hover:text-emerald-600 transition-colors">Services</Link>
              <Link to="/approach" className="text-gray-900 hover:text-emerald-600 transition-colors">Approach</Link>
              <Link to="/#team" className="text-gray-900 hover:text-emerald-600 transition-colors">Team</Link>
              <Link to="/fees" className="text-gray-900 hover:text-emerald-600 transition-colors">Fees</Link>
              <Link to="/contact" className="text-gray-900 hover:text-emerald-600 transition-colors">Contact</Link>
              <button className="bg-vintage-orange text-white px-6 py-2 rounded-full hover:bg-vintage-green transition-colors w-fit">
                Book Appointment
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;