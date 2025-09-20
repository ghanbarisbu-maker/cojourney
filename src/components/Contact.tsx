import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-12 bg-vintage-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-vintage-darkest mb-4">
            Start Your Journey Today
          </h2>
          <p className="text-xl text-vintage-green">
            Book a free consultation and take the first step toward healing.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-vintage-darkest mb-6">
              Contact Information
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-vintage-cream rounded-full p-3 mr-4">
                  <MapPin className="w-6 h-6 text-vintage-green" />
                </div>
                <div>
                  <h4 className="font-semibold text-vintage-darkest mb-1">Office Address</h4>
                  <p className="text-vintage-green">British Columbia, Canada<br />In-person and online sessions available</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-vintage-cream rounded-full p-3 mr-4">
                  <Phone className="w-6 h-6 text-vintage-orange" />
                </div>
                <div>
                  <h4 className="font-semibold text-vintage-darkest mb-1">Phone Number</h4>
                  <p className="text-vintage-green">236 886 7223</p>
                  <p className="text-sm text-gray-500">Professional support available</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-vintage-cream rounded-full p-3 mr-4">
                  <Mail className="w-6 h-6 text-vintage-plum" />
                </div>
                <div>
                  <h4 className="font-semibold text-vintage-darkest mb-1">Email</h4>
                  <p className="text-vintage-green">info@cojourney.ca</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-vintage-cream rounded-full p-3 mr-4">
                  <Clock className="w-6 h-6 text-vintage-orange" />
                </div>
                <div>
                  <h4 className="font-semibold text-vintage-darkest mb-1">Office Hours</h4>
                  <div className="text-vintage-green space-y-1">
                    <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p>Saturday: 10:00 AM - 4:00 PM</p>
                    <p>Evening appointments available</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Insurance & Payment */}
            <div className="mt-8 bg-white rounded-2xl p-4">
              <h4 className="font-semibold text-gray-900 mb-4">Session Information</h4>
              <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                <div className="flex items-center">
                  <CheckCircle2 className="w-4 h-4 text-green-500 mr-2" />
                  In-Person Sessions
                </div>
                <div className="flex items-center">
                  <CheckCircle2 className="w-4 h-4 text-green-500 mr-2" />
                  Online Sessions
                </div>
                <div className="flex items-center">
                  <CheckCircle2 className="w-4 h-4 text-green-500 mr-2" />
                  Flexible Scheduling
                </div>
                <div className="flex items-center">
                  <CheckCircle2 className="w-4 h-4 text-green-500 mr-2" />
                  Confidential Care
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-bold text-mystic-darkest mb-6">
              Book Your Free Consultation
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mystic-rose focus:border-transparent transition-colors"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vintage-orange focus:border-transparent transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vintage-orange focus:border-transparent transition-colors"
                    placeholder="236 886 7223"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Service Interested In
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vintage-orange focus:border-transparent transition-colors"
                  >
                    <option value="">Select a service</option>
                    <option value="individual">Individual Therapy</option>
                    <option value="couples">Couples Therapy</option>
                    <option value="family">Family Therapy</option>
                    <option value="consultation">Free Consultation</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vintage-orange focus:border-transparent transition-colors resize-none"
                  placeholder="Tell us a bit about what you're looking for..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-vintage-orange text-white py-4 px-6 rounded-lg hover:bg-vintage-green transition-colors flex items-center justify-center group"
              >
                <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                Book Free Consultation
              </button>
            </form>

            <div className="mt-6 p-4 bg-vintage-cream rounded-lg">
              <p className="text-sm text-vintage-darkest">
                <strong>Note:</strong> In-person and online sessions available across British Columbia. 
                Confidential, compassionate, and tailored to you. We typically respond within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;