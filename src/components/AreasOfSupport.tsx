import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Brain, Shield, Users, Baby, Globe, Flower2, User } from 'lucide-react';
import { areaDetails } from '../pages/AreaOfSupportDetail';

const AreasOfSupport = () => {
  const areas = [
    {
      icon: Shield,
      title: 'Trauma & PTSD',
      description: 'Healing from traumatic experiences with specialized care.',
      slug: 'trauma-ptsd',
      backgroundImage: '/23.jpg'
    },
    {
      icon: Brain,
      title: 'Anxiety & Depression',
      description: 'Support for managing anxiety and overcoming depression.',
      slug: 'anxiety-depression',
      backgroundImage: areaDetails['anxiety-depression']?.heroImage
    },
    {
      icon: User,
      title: 'Personality Disorders',
      description: 'Specialized treatment for personality-related challenges.',
      slug: 'personality-disorders',
      backgroundImage: areaDetails['personality-disorders']?.heroImage
    },
    {
      icon: Heart,
      title: 'Eating Disorders & Body Image',
      description: 'Compassionate care for eating disorders and body image issues.',
      slug: 'eating-disorders-body-image',
      backgroundImage: areaDetails['eating-disorders-body-image']?.heroImage
    },
    {
      icon: Baby,
      title: 'Pregnancy & Postpartum Support',
      description: 'Mental health support during pregnancy and after birth.',
      slug: 'pregnancy-postpartum-support',
      backgroundImage: areaDetails['pregnancy-postpartum-support']?.heroImage
    },
    {
      icon: Users,
      title: 'Attachment & Relationships',
      description: 'Building secure attachments and healthy relationships.',
      slug: 'attachment-relationships',
      backgroundImage: '/24.jpg'
    },
    {
      icon: Baby,
      title: 'Infant–Mother Interaction',
      description: 'Supporting the crucial early bond between mother and baby.',
      slug: 'infant-mother-interaction',
      backgroundImage: areaDetails['infant-mother-interaction']?.heroImage
    },
    {
      icon: Users,
      title: 'Parenting Support',
      description: 'Guidance for confident and connected parenting.',
      slug: 'parenting-support',
      backgroundImage: areaDetails['parenting-support']?.heroImage
    },
    {
      icon: Globe,
      title: 'Immigration & Adjustment',
      description: 'Support for newcomers navigating life transitions.',
      slug: 'immigration-adjustment',
      backgroundImage: '/27.jpg'
    },
    {
      icon: Flower2,
      title: 'Grief & Loss',
      description: 'Compassionate support through life\'s difficult transitions.',
      slug: 'grief-loss',
      backgroundImage: '/25.jpg'
    }
  ];

  return (
    <section className="py-16 xl:py-24 bg-vintage-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-deep-teal mb-4 font-serif">
            Areas of Support
          </h2>
          <p className="text-xl text-dark-charcoal max-w-3xl mx-auto">
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
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 group relative overflow-hidden min-h-[200px] flex flex-col justify-between"
              >
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-opacity duration-500 opacity-0 group-hover:opacity-100"
                  style={{
                    backgroundImage: `url("${area.backgroundImage}")`
                  }}
                ></div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gray-900/70 transition-opacity duration-500 opacity-0 group-hover:opacity-100"></div>

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center text-center h-full justify-center">
                <div className="flex items-center justify-center w-12 h-12 bg-soft-mint rounded-xl mb-4 group-hover:bg-white transition-colors">
                  <IconComponent className="w-6 h-6 text-deep-teal group-hover:text-teal-accent" />
                </div>
                <h3 className="text-lg font-bold text-dark-charcoal mb-2 text-center group-hover:text-white">
                  {area.title}
                </h3>
                <p className="text-dark-charcoal/70 text-sm text-center leading-relaxed group-hover:text-gray-200">
                  {area.description}
                </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AreasOfSupport;