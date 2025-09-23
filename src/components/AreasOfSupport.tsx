import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Brain, Shield, Users, Baby, Globe, Flower2, User } from 'lucide-react';

const AreasOfSupport = () => {
  const areas = [
    {
      icon: Shield,
      title: 'Trauma & PTSD',
      description: 'Healing from traumatic experiences with specialized care.',
      slug: 'trauma-ptsd'
    },
    {
      icon: Brain,
      title: 'Anxiety & Depression',
      description: 'Support for managing anxiety and overcoming depression.',
      slug: 'anxiety-depression'
    },
    {
      icon: User,
      title: 'Personality Disorders',
      description: 'Specialized treatment for personality-related challenges.',
      slug: 'personality-disorders'
    },
    {
      icon: Heart,
      title: 'Eating Disorders & Body Image',
      description: 'Compassionate care for eating disorders and body image issues.',
      slug: 'eating-disorders-body-image'
    },
    {
      icon: Baby,
      title: 'Pregnancy & Postpartum Support',
      description: 'Mental health support during pregnancy and after birth.',
      slug: 'pregnancy-postpartum-support'
    },
    {
      icon: Users,
      title: 'Attachment & Relationships',
      description: 'Building secure attachments and healthy relationships.',
      slug: 'attachment-relationships'
    },
    {
      icon: Baby,
      title: 'Infant–Mother Interaction',
      description: 'Supporting the crucial early bond between mother and baby.',
      slug: 'infant-mother-interaction'
    },
    {
      icon: Users,
      title: 'Parenting Support',
      description: 'Guidance for confident and connected parenting.',
      slug: 'parenting-support'
    },
    {
      icon: Globe,
      title: 'Immigration & Adjustment',
      description: 'Support for newcomers navigating life transitions.',
      slug: 'immigration-adjustment'
    },
    {
      icon: Flower2,
      title: 'Grief & Loss',
      description: 'Compassionate support through life\'s difficult transitions.',
      slug: 'grief-loss'
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
            We provide specialized care across a wide range of mental health challenges.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {areas.map((area, index) => {
            const IconComponent = area.icon;
            return (
              <Link
                key={index}
                to={`/areas/${area.slug}`}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 group"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-emerald-100 rounded-xl mb-4 mx-auto group-hover:bg-emerald-200 transition-colors">
                  <IconComponent className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 text-center">
                  {area.title}
                </h3>
                <p className="text-gray-600 text-sm text-center leading-relaxed">
                  {area.description}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AreasOfSupport;