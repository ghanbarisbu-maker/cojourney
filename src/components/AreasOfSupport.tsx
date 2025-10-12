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
      backgroundImage: areaDetails['trauma-ptsd']?.heroImage
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
      backgroundImage: areaDetails['attachment-relationships']?.heroImage
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
      backgroundImage: areaDetails['immigration-adjustment']?.heroImage
    },
    {
      icon: Flower2,
      title: 'Grief & Loss',
      description: 'Compassionate support through life\'s difficult transitions.',
      slug: 'grief-loss',
      backgroundImage: areaDetails['grief-loss']?.heroImage
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {areas.map((area, index) => {
            const IconComponent = area.icon;
            return (
              <Link
                key={index}
                to={`/areas/${area.slug}`}
                className="relative bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-xl transition-all duration-300 group overflow-hidden min-h-[280px]"
              >
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage: `url("${area.backgroundImage}")`
                  }}
                ></div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-gray-900/70 to-gray-900/60"></div>

                {/* Content */}
                <div className="relative z-10 flex flex-col justify-between h-full">
                  <div>
                    <div className="w-14 h-14 rounded-full bg-soft-mint flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <IconComponent className="w-8 h-8 text-deep-teal" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">
                      {area.title}
                    </h3>
                  </div>
                  <div>
                    <span className="mt-4 text-warm-apricot font-semibold hover:text-white transition-colors inline-block">
                      Learn More →
                    </span>
                  </div>
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