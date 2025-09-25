import React, { useEffect, useRef, useState } from 'react';
import { Sprout, HandHeart, Lightbulb } from 'lucide-react';

const About = () => {
  const [visiblePillars, setVisiblePillars] = useState<boolean[]>([false, false, false]);
  const pillarRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = pillarRefs.current.map((ref, index) => {
      if (!ref) return null;
      
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisiblePillars(prev => {
              const newState = [...prev];
              newState[index] = true;
              return newState;
            });
          }
        },
        { threshold: 0.3 }
      );
      
      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach(observer => observer?.disconnect());
    };
  }, []);

  const pillars = [
    {
      icon: Sprout,
      title: 'Trauma-Focused Care',
      description: 'Healing past wounds and building resilience.',
      image: 'https://images.pexels.com/photos/1036936/pexels-photo-1036936.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: HandHeart,
      title: 'Attachment-Based Healing',
      description: 'Restoring trust and deeper connection.',
      image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: Lightbulb,
      title: 'Mentalization-Focused Growth',
      description: 'Gaining clarity and seeing minds more clearly.',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-stone-50 to-sage-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" viewBox="0 0 100 100" className="absolute inset-0">
          <defs>
            <pattern id="journey-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="1" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#journey-pattern)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-serif">
            About CoJourney
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 font-serif leading-tight">
            Healing is not a destination —<br />
            <span className="text-emerald-700">it's a shared journey.</span>
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            CoJourney is a counselling and psychotherapy practice dedicated to helping individuals, 
            couples, and families build resilience and restore balance through evidence-based, 
            compassionate care.
          </p>
        </div>

        {/* Our Approaches Title */}
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 font-serif">
            Our Approaches
          </h3>
        </div>

        {/* Journey Path SVG */}
        <div className="hidden lg:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-32 pointer-events-none">
          <svg viewBox="0 0 800 120" className="w-full h-full">
            <path
              d="M50 60 Q200 20 400 60 T750 60"
              stroke="url(#gradient)"
              strokeWidth="2"
              fill="none"
              strokeDasharray="5,5"
              className="animate-pulse"
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#10b981" stopOpacity="0.3" />
                <stop offset="50%" stopColor="#059669" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#10b981" stopOpacity="0.3" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Three Pillars */}
        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          {pillars.map((pillar, index) => {
            const IconComponent = pillar.icon;
            return (
              <div
                key={index}
                ref={el => pillarRefs.current[index] = el}
                className={`text-center transform transition-all duration-1000 ${
                  visiblePillars[index] 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Simple Icon */}
                <div className="mb-8 mx-auto">
                  <div className="bg-emerald-100 rounded-full p-6 w-20 h-20 mx-auto flex items-center justify-center shadow-sm">
                    <IconComponent className="w-10 h-10 text-emerald-600" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-emerald-800 mb-4 font-serif">
                  {pillar.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {pillar.description}
                </p>

                {/* Connecting dot for mobile */}
                <div className="lg:hidden mt-8 flex justify-center">
                  {index < pillars.length - 1 && (
                    <div className="w-2 h-2 bg-emerald-300 rounded-full"></div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Closing Statement */}
        <div className="text-center">
          <div className="inline-block bg-white/80 backdrop-blur-sm rounded-2xl px-8 py-6 shadow-lg border border-emerald-100">
            <p className="text-xl text-gray-700 font-medium leading-relaxed">
              At CoJourney, therapy is collaborative, compassionate,<br />
              and tailored to your unique story.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;