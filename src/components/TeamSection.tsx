import React from 'react';
import { Link } from 'react-router-dom';
import { User, Tag } from 'lucide-react';

const TeamSection = () => {
  const teamMembers = [
    {
      name: 'Parisa Mousavi',
      credentials: 'PhD, RCC',
      image: '/p.jpg copy.jpg',
      focusTags: ['Trauma', 'Attachment', 'Immigration'],
      slug: 'parisa-mousavi'
    },
    {
      name: 'Saeed Ghanbari',
      credentials: 'PhD, RCC',
      image: '/saeed-profile.jpg',
      focusTags: ['Parenting', 'Relationships', 'Young Adults'],
      slug: 'saeed-ghanbari'
    }
  ];

  return (
    <section className="py-16 xl:py-24 bg-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" viewBox="0 0 100 100" className="absolute inset-0 text-emerald-300">
          <defs>
            <pattern id="team-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="1" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#team-pattern)" />
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-serif">
            Our Team
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="w-full">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-80 object-cover object-top"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  {member.credentials}
                </p>
                
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {member.focusTags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-emerald-100 text-emerald-700 text-sm rounded-full flex items-center"
                      >
                        <Tag className="w-3 h-3 mr-1" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <Link to={`/team/${member.slug}`} className="w-full bg-emerald-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-emerald-700 transition-colors flex items-center justify-center">
                  <User className="w-4 h-4 mr-2" />
                  View Profile
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;