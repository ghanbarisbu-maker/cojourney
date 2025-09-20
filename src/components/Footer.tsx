import React from 'react';
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4">
              Co<span className="text-vintage-orange">Journey</span>
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Providing compassionate, evidence-based mental health services to 
              help you overcome challenges and live your best life. Your journey 
              to wellness starts here.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-vintage-orange transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-vintage-orange transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-vintage-orange transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-vintage-orange transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-300 hover:text-vintage-orange transition-colors">Home</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-vintage-orange transition-colors">Services</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-vintage-orange transition-colors">About</a></li>
              <li><a href="#team" className="text-gray-300 hover:text-vintage-orange transition-colors">Team</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-vintage-orange transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-300 hover:text-vintage-orange transition-colors">Patient Portal</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-vintage-green mt-0.5 mr-3 flex-shrink-0" />
                <div className="text-gray-300">
                  <p>123 Wellness Boulevard</p>
                  <p>Suite 200</p>
                  <p>Mindful City, MC 12345</p>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-vintage-orange mr-3" />
                <span className="text-gray-300">236 886 7223</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-vintage-plum mr-3" />
                <span className="text-gray-300">info@cojourney.ca</span>
              </div>
            </div>
          </div>
        </div>

        {/* Emergency Resources */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="bg-red-900 rounded-lg p-6 mb-8">
            <h4 className="text-lg font-semibold text-red-100 mb-3">Crisis Resources</h4>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div>
                <p className="text-red-200 font-medium">National Suicide Prevention Lifeline</p>
                <p className="text-red-100">988</p>
              </div>
              <div>
                <p className="text-red-200 font-medium">Crisis Text Line</p>
                <p className="text-red-100">Text HOME to 741741</p>
              </div>
              <div>
                <p className="text-red-200 font-medium">Emergency</p>
                <p className="text-red-100">Call 911</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-800">
            <p className="text-gray-400 mb-4 md:mb-0">
              © 2024 CoJourney. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-vintage-orange transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-vintage-orange transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-vintage-orange transition-colors">HIPAA Notice</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;