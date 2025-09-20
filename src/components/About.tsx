import React from 'react';
import { Medal, UserCheck, Zap, Timer } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: UserCheck, number: '15+', label: 'Years Experience', color: 'vintage-green' },
    { icon: Timer, number: 'BC', label: 'Licensed in British Columbia', color: 'vintage-orange' },
    { icon: Medal, number: '100%', label: 'Confidential Care', color: 'vintage-plum' },
    { icon: Zap, number: 'Online', label: 'In-Person & Virtual', color: 'vintage-orange' }
  ];

  return (
    <section id="about" className="py-12 bg-vintage-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-4xl font-bold text-vintage-darkest mb-6">
              About CoJourney
            </h2>
            <p className="text-xl text-vintage-green mb-4 leading-relaxed font-medium">
              Healing is not a destination — it's a shared journey.
            </p>
            <p className="text-lg text-vintage-green mb-6 leading-relaxed">
              CoJourney is a counselling and psychotherapy practice in British Columbia dedicated to helping individuals, couples, and families build resilience and restore balance. Our counsellors draw on trauma-informed, attachment-based, and mentalization-focused approaches, while integrating evidence-based methods such as CBT and mindfulness. We believe therapy works best when it is collaborative, compassionate, and tailored to your unique story.
            </p>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-start">
                <div className="bg-vintage-cream rounded-full p-2 mr-4 mt-1">
                  <Zap className="w-5 h-5 text-vintage-orange" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-vintage-darkest mb-1">Our Approach</h3>
                  <p className="text-vintage-green">
                    Evidence-based care, personalized for you. Every journey is unique, so we combine different therapeutic perspectives to meet your needs.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-vintage-cream rounded-full p-2 mr-4 mt-1">
                  <Medal className="w-5 h-5 text-vintage-green" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-vintage-darkest mb-1">Our Foundation</h3>
                  <p className="text-vintage-green">
                    Our work is rooted in trauma-informed therapy, attachment-based care, and mentalization-focused therapy (MBT) to help clients not just cope, but thrive.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                const iconColor = `text-${stat.color}`;
                return (
                  <div key={index} className="text-center">
                    <div className="bg-white rounded-xl p-3 shadow-md mb-2">
                      <IconComponent className={`w-8 h-8 ${iconColor} mx-auto`} />
                    </div>
                    <div className="text-2xl font-bold text-gray-900">{stat.number}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.pexels.com/photos/6749773/pexels-photo-6749773.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Modern therapy office"
              className="rounded-2xl shadow-2xl w-full h-80 object-cover"
            />
            <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl p-4 shadow-lg">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Professional & Licensed</h4>
              <div className="space-y-1 text-sm text-gray-600">
                <p>✓ Registered Clinical Counsellors</p>
                <p>✓ Licensed in British Columbia</p>
                <p>✓ Confidential & Secure</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;