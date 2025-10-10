import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Heart, Shield, Sparkles } from 'lucide-react';

export const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-[85vh] lg:min-h-[90vh] overflow-hidden bg-gradient-to-br from-emerald-900 via-teal-800 to-sky-700">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[3000ms] hover:scale-105"
        style={{
          backgroundImage: 'url("https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?auto=compress&cs=tinysrgb&w=1200")'
        }}
      ></div>

      <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/85 via-teal-800/80 to-sky-700/75"></div>

      <div className="absolute top-20 right-10 w-72 h-72 bg-teal-400/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="absolute top-1/4 right-1/4 opacity-20">
        <Heart className="w-16 h-16 text-white animate-float" />
      </div>
      <div className="absolute bottom-1/3 left-1/4 opacity-20">
        <Sparkles className="w-12 h-12 text-white animate-float" style={{ animationDelay: '0.5s' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <Shield className="w-4 h-4 text-emerald-200" />
              <span className="text-sm text-emerald-100 font-medium">Licensed & Experienced Therapists</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-serif text-white leading-tight">
              Healing is a{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 to-teal-200">
                Journey
              </span>
              <span className="block mt-2">Creating Change</span>
              <span className="block">Together</span>
            </h1>

            <p className="text-xl md:text-2xl text-emerald-50 font-light leading-relaxed max-w-xl">
              Trauma-informed, attachment-based, and mentalization-focused care designed to support your path to wellness.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                to="/contact"
                className="group bg-white text-emerald-900 px-8 py-4 rounded-xl font-semibold hover:bg-emerald-50 transition-all duration-300 flex items-center justify-center shadow-xl hover:shadow-2xl hover:scale-105 transform"
              >
                Book Your Free Consultation
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/approach"
                className="group border-2 border-white/80 backdrop-blur-sm bg-white/5 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-emerald-900 transition-all duration-300 hover:scale-105 transform shadow-lg"
              >
                Learn Our Approach
              </Link>
            </div>

            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center gap-2 text-emerald-100">
                <div className="w-2 h-2 bg-emerald-300 rounded-full animate-pulse"></div>
                <span className="text-sm">Individual Therapy</span>
              </div>
              <div className="flex items-center gap-2 text-emerald-100">
                <div className="w-2 h-2 bg-emerald-300 rounded-full animate-pulse" style={{ animationDelay: '0.3s' }}></div>
                <span className="text-sm">Couples Counseling</span>
              </div>
              <div className="flex items-center gap-2 text-emerald-100">
                <div className="w-2 h-2 bg-emerald-300 rounded-full animate-pulse" style={{ animationDelay: '0.6s' }}></div>
                <span className="text-sm">Family Therapy</span>
              </div>
            </div>
          </div>

          <div className={`hidden lg:block transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 to-teal-400/20 rounded-3xl blur-2xl"></div>
              <div className="relative bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl">
                <div className="space-y-6">
                  <div className="flex items-start gap-4 p-4 bg-white/10 rounded-xl backdrop-blur-sm border border-white/10">
                    <div className="bg-emerald-400/20 p-3 rounded-lg">
                      <Heart className="w-6 h-6 text-emerald-200" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">Compassionate Care</h3>
                      <p className="text-emerald-100 text-sm">A safe, non-judgmental space for healing</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-white/10 rounded-xl backdrop-blur-sm border border-white/10">
                    <div className="bg-teal-400/20 p-3 rounded-lg">
                      <Shield className="w-6 h-6 text-teal-200" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">Evidence-Based</h3>
                      <p className="text-emerald-100 text-sm">Proven therapeutic approaches</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-white/10 rounded-xl backdrop-blur-sm border border-white/10">
                    <div className="bg-sky-400/20 p-3 rounded-lg">
                      <Sparkles className="w-6 h-6 text-sky-200" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">Personalized Journey</h3>
                      <p className="text-emerald-100 text-sm">Tailored to your unique needs</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}