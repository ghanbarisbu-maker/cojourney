import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Users, Baby, Globe, Brain, Flower2, Shield, Star } from 'lucide-react';

const AreasOfSupport = () => {
  const areas = [
    {
      icon: Shield,
      title: 'Trauma & PTSD',
      description: 'Healing past wounds with care and safety.',
      slug: 'trauma-ptsd'
    },
    {
      icon: Heart,
      title: 'Attachment & Relationships',
      description: 'Rebuild trust and feel closer.',
      slug: 'attachment-relationships'
    },
    {
      icon: Baby,
      title: 'Parenting Support',
      description: 'Guidance for calmer, more connected families.',
      slug: 'parenting-support'
    },
    {
      icon: Globe,
      title: 'Immigration & Adjustment',
      description: 'Navigate change with clarity and resilience.',
      slug: 'immigration-adjustment'
    },
    {
      icon: Brain,
      title: 'Anxiety & Stress',
      description: 'Find calm and restore balance.',
      slug: 'anxiety-stress'
    },
    {
      icon: Flower2,
      title: 'Grief & Loss',
      description: 'Support through life\'s painful transitions.',
      slug: 'grief-loss'
    },
    {
      icon: Users,
      title: 'Addiction & Recovery',
      description: 'Compassionate support for lasting change.',
      slug: 'addiction-recovery'
    },
    {
      icon: Star,
      title: 'Adolescent & Young Adult',
      description: 'Helping youth and young adults thrive.',
      slug: 'adolescent-young-adult'
    }
  ];

  return (
    <section className="py-16 xl:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-serif">
            Areas of Support
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We help individuals, couples, and families with a range of challenges.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {areas.map((area, index) => {
            const IconComponent = area.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md p-8 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-2xl mb-6 mx-auto">
                  <IconComponent className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                  {area.title}
                </h3>
                <p className="text-gray-600 mb-6 text-center">
                  {area.description}
                </p>
                <div className="text-center">
                  <Link to={`/services/${area.slug}`} className="text-emerald-600 font-semibold hover:text-emerald-700 transition-colors">
                    Read More →
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AreasOfSupport;