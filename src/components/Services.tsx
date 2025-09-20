import React from 'react';
import { Link } from 'react-router-dom';
import { UserCheck, UsersRound, Home, CalendarDays, Headphones } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: UserCheck,
      title: 'Individual Therapy',
      description: 'A safe space to explore anxiety, depression, trauma, or life transitions. Together, we\'ll focus on healing, growth, and building resilience.',
      features: ['Anxiety & Depression', 'Trauma Recovery', 'Life Transitions', 'Building Resilience'],
      color: 'blue',
      route: '/services/individual-therapy'
    },
    {
      icon: UsersRound,
      title: 'Couples Therapy',
      description: 'Helping partners improve communication, rebuild trust, and navigate conflict. Strengthen your connection with guidance rooted in attachment and mentalization.',
      features: ['Communication Skills', 'Rebuilding Trust', 'Conflict Navigation', 'Attachment-Based Care'],
      color: 'green',
      route: '/services/couples-therapy'
    },
    {
      icon: Home,
      title: 'Family Therapy',
      description: 'Support for parents, children, and adolescents to create healthier dynamics, manage stress, and foster stronger relationships.',
      features: ['Parent-Child Relationships', 'Adolescent Support', 'Family Dynamics', 'Stress Management'],
      color: 'purple',
      route: '/services/family-therapy'
    }
  ];

  const colorClasses = {
    blue: 'text-vintage-green bg-vintage-cream',
    green: 'text-vintage-orange bg-vintage-cream',
    purple: 'text-vintage-plum bg-vintage-cream',
    orange: 'text-vintage-orange bg-vintage-cream',
    teal: 'text-vintage-green bg-vintage-cream',
    red: 'text-vintage-orange bg-vintage-cream'
  };

  return (
    <section id="services" className="py-12 bg-vintage-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-vintage-darkest mb-4">
            Our Counselling Services
          </h2>
          <p className="text-xl text-vintage-green max-w-3xl mx-auto">
            Personalized therapy to support individuals, couples, and families through life's challenges.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-xl transition-all duration-300 group"
              >
                <div className={`w-14 h-14 rounded-full ${colorClasses[service.color]} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <IconComponent className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-deep-navy-800 mb-3">
                  {service.title}
                </h3>
                <p className="text-mystic-dark mb-4 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-vintage-orange rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link to={service.route} className="mt-4 text-vintage-orange font-semibold hover:text-vintage-green transition-colors inline-block">
                  Learn More →
                </Link>
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <p className="text-gray-600 mb-6">
            Ready to start your healing journey?
          </p>
          <button className="bg-vintage-orange text-white px-8 py-3 rounded-full hover:bg-vintage-green transition-colors">
            Schedule a Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;