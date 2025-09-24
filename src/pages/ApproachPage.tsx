import React from 'react';
import { ArrowLeft, Heart, Brain, Shield, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const ApproachPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Back Navigation */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link to="/" className="flex items-center text-soft-emerald hover:text-deep-forest transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-deep-forest via-soft-emerald to-soft-blue py-16">
        <div className="absolute inset-0 bg-soft-emerald/50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-serif">
            Our Therapeutic Approach
          </h1>
          <p className="text-xl text-warm-sand max-w-3xl mx-auto">
            Trauma-informed, attachment-based, and mentalization-focused care that honors your unique journey.
          </p>
        </div>
      </section>

      {/* Core Approaches */}
      <section className="py-16 xl:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-serif">
              Three Pillars of Our Practice
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-md p-8 text-center">
              <div className="bg-warm-sand rounded-full p-4 w-16 h-16 mx-auto mb-6">
                <Shield className="w-8 h-8 text-soft-emerald" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Trauma-Informed Care</h3>
              <p className="text-gray-600">
                We understand how trauma affects the mind and body, creating a safe space where healing can begin naturally and at your own pace.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-8 text-center">
              <div className="bg-warm-sand rounded-full p-4 w-16 h-16 mx-auto mb-6">
                <Heart className="w-8 h-8 text-soft-emerald" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Attachment-Based Therapy</h3>
              <p className="text-gray-600">
                We explore how early relationships shape current patterns, helping you build secure, healthy connections with others and yourself.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-8 text-center">
              <div className="bg-warm-sand rounded-full p-4 w-16 h-16 mx-auto mb-6">
                <Brain className="w-8 h-8 text-soft-emerald" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Mentalization-Focused</h3>
              <p className="text-gray-600">
                We help you understand your own thoughts and feelings, as well as those of others, leading to better relationships and emotional regulation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Approach */}
      <section className="py-16 xl:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 font-serif">
                How We Work Together
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our approach is collaborative and personalized. We believe that you are the expert on your own life, 
                and our role is to provide guidance, support, and evidence-based tools to help you achieve your goals.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-warm-sand rounded-full p-2 mr-4 mt-1">
                    <Users className="w-4 h-4 text-soft-emerald" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Collaborative Partnership</h3>
                    <p className="text-gray-600">We work together as partners in your healing journey.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-warm-sand rounded-full p-2 mr-4 mt-1">
                    <Heart className="w-4 h-4 text-soft-emerald" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Compassionate Care</h3>
                    <p className="text-gray-600">Every session is conducted with empathy and understanding.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-warm-sand rounded-full p-2 mr-4 mt-1">
                    <Brain className="w-4 h-4 text-soft-emerald" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Evidence-Based Methods</h3>
                    <p className="text-gray-600">We use proven therapeutic techniques tailored to your needs.</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <img
                src="https://images.pexels.com/photos/6749773/pexels-photo-6749773.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Therapeutic approach"
                className="rounded-2xl shadow-lg w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-soft-emerald to-soft-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-xl text-warm-sand mb-8">
            Experience our compassionate, evidence-based approach with a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-white text-soft-emerald px-8 py-4 rounded-lg font-semibold hover:bg-warm-sand transition-colors"
            >
              Book Free Consultation
            </Link>
            <Link 
              to="/" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-soft-emerald transition-colors"
            >
              Learn More About Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ApproachPage;