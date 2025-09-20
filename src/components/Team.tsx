import React from 'react';
import { UserRound, GraduationCap, Timer } from 'lucide-react';

export const Team = () => {
  const teamMembers = [
    {
      name: "Registered Clinical Counsellor",
      role: "Trauma & Attachment Specialist",
      experience: "15+ years",
      specialties: ["Trauma-Informed Therapy", "Attachment-Based Care", "Mentalization-Focused Therapy"],
      image: "https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Registered Clinical Counsellor",
      role: "Family & Developmental Specialist",
      experience: "10+ years",
      specialties: ["Parent-Child Relationships", "Developmental Psychopathology", "Psychoanalytic Perspectives"],
      image: "https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  return (
    <section id="team" className="py-12 bg-vintage-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-vintage-darkest mb-4">
            Meet Our Counsellors
          </h2>
          <p className="text-xl text-vintage-green max-w-3xl mx-auto">
            Experienced, compassionate, and committed to your journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-w-3 aspect-h-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-vintage-darkest mb-2">
                  {member.name}
                </h3>
                <p className="text-vintage-green mb-3">
                  {member.role}
                </p>
                
                <div className="flex items-center text-vintage-green mb-2">
                  <Timer className="w-4 h-4 mr-2" />
                  <span className="text-sm font-medium">{member.experience} experience</span>
                </div>

                <div className="mb-3">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Specialties:</h4>
                  <div className="flex flex-wrap gap-2">
                    {member.specialties.map((specialty, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-vintage-cream text-vintage-orange text-xs rounded-full"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                <button className="w-full bg-vintage-orange text-white py-2 px-4 rounded-lg hover:bg-vintage-green transition-colors duration-200 flex items-center justify-center">
                  <UserRound className="w-4 h-4 mr-2" />
                  View Profile
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <div className="bg-white rounded-xl shadow-lg p-6 max-w-2xl mx-auto">
            <GraduationCap className="w-12 h-12 text-vintage-orange mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-vintage-darkest mb-4">
              Professional Excellence
            </h3>
            <p className="text-vintage-green">
              Our counsellors are Registered Clinical Counsellors with extensive training in 
              trauma-informed, attachment-based, and mentalization-focused approaches. We bring 
              international clinical and academic experience to support your healing journey.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};