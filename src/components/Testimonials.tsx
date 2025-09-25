import React from 'react';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Client, Vancouver',
      rating: 5,
      text: "I felt truly heard and supported. Therapy helped me rebuild my confidence and face challenges with strength.",
      service: 'Individual Therapy'
    },
    {
      name: 'Client, BC',
      rating: 5,
      text: "Our sessions gave us the tools to communicate better and reconnect as a couple.",
      service: 'Couples Therapy'
    },
    {
      name: 'Client, British Columbia',
      rating: 5,
      text: "The trauma-informed approach helped me feel safe to explore difficult experiences. I've learned to trust myself again.",
      service: 'Individual Therapy'
    },
    {
      name: 'Client, Vancouver',
      rating: 5,
      text: "Family therapy helped us understand each other better and create healthier patterns. Our home feels more peaceful now.",
      service: 'Family Therapy'
    }
  ];

  return (
    <section className="py-12 bg-vintage-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-vintage-darkest mb-4">
            What Clients Say
          </h2>
          <p className="text-xl text-vintage-green">
            Real experiences of healing and growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 relative"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-vintage-green" />
              
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-black mb-4 leading-relaxed text-lg italic">
                "{testimonial.text}"
              </p>
              
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-semibold text-vintage-darkest">{testimonial.name}</p>
                  <p className="text-vintage-orange text-sm">{testimonial.service}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <div className="bg-white rounded-2xl p-6 shadow-lg inline-block">
            <div className="flex items-center justify-center space-x-8 mb-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-vintage-darkest">15+</div>
                <div className="flex justify-center mt-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-sm text-gray-600 mt-1">Years Experience</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-vintage-orange">BC</div>
                <p className="text-sm text-gray-600 mt-1">Licensed in British Columbia</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-vintage-green">Online</div>
                <p className="text-sm text-gray-600 mt-1">& In-Person Sessions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}