import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Phone, Mail, Clock, Award, Globe, Heart, Users, Baby } from 'lucide-react';

const TeamProfile = () => {
  const { slug } = useParams();

  // Team member data
  const teamMembers = {
    'parisa-mousavi': {
      name: 'Parisa Mousavi',
      credentials: 'PhD, RCC',
      image: 'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=400',
      tagline: 'Trauma-informed care with compassion and expertise',
      about: 'Dr. Parisa Mousavi brings over 15 years of experience in trauma-informed therapy, specializing in attachment-based care and mentalization-focused therapy. She has extensive experience working with individuals who have experienced trauma, immigration challenges, and relationship difficulties.',
      specialties: ['Trauma & PTSD', 'Attachment & Relationships', 'Immigration & Adjustment', 'Anxiety & Stress'],
      approaches: ['Mentalization-Based Therapy (MBT)', 'Trauma-Informed Care', 'Attachment-Based Therapy', 'Cognitive Behavioral Therapy (CBT)'],
      languages: ['English', 'Persian'],
      whoIHelp: ['Adults experiencing trauma', 'Immigrants and newcomers', 'Individuals with attachment difficulties', 'Those struggling with anxiety and depression'],
      rccNumber: '22169',
      availability: 'Monday-Friday: 9:00 AM - 6:00 PM, Saturday: 10:00 AM - 4:00 PM'
    },
    'saeed-ghanbari': {
      name: 'Saeed Ghanbari',
      credentials: 'PhD, RCC',
      image: '/saeed-profile.jpg',
      tagline: 'Supporting families and relationships with evidence-based care',
      about: 'Dr. Saeed Ghanbari specializes in family therapy, couples counseling, and parent support. With a background in developmental psychology, he helps families navigate challenges and build stronger connections through evidence-based therapeutic approaches.',
      specialties: ['Parenting Support', 'Couples Therapy', 'Family Therapy', 'Adolescent & Young Adult'],
      approaches: ['Family Systems Therapy', 'Emotionally Focused Therapy (EFT)', 'Parent Training Programs', 'Solution-Focused Brief Therapy'],
      languages: ['English', 'Persian'],
      whoIHelp: ['Parents and families', 'Couples in distress', 'Adolescents and young adults', 'Blended families'],
      rccNumber: '22170',
      availability: 'Tuesday-Saturday: 10:00 AM - 7:00 PM'
    }
  };

  const member = teamMembers[slug as keyof typeof teamMembers];

  if (!member) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Team Member Not Found</h1>
          <Link to="/" className="text-emerald-600 hover:text-emerald-700">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Back Navigation */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link to="/" className="flex items-center text-emerald-600 hover:text-emerald-700 transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-800 via-emerald-700 to-sky-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 items-center text-white">
            <div className="lg:col-span-2">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 font-serif">
                {member.name}
              </h1>
              <p className="text-xl text-emerald-100 mb-6">
                {member.credentials}
              </p>
              <p className="text-lg text-emerald-100 mb-8">
                {member.tagline}
              </p>
              <Link 
                to="/contact" 
                className="bg-white text-emerald-700 px-8 py-4 rounded-lg font-semibold hover:bg-emerald-50 transition-colors inline-block"
              >
                Book Consultation
              </Link>
            </div>
            <div className="flex justify-center">
              <img
                src={member.image}
                alt={member.name}
                className="w-64 h-96 rounded-2xl shadow-lg object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 xl:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* About */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6 font-serif">About</h2>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {member.about}
                </p>
              </div>

              {/* How I Work */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6 font-serif">How I Work</h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  My approach is grounded in attachment-based therapy, mentalization-focused therapy (MBT), and trauma-informed care. 
                  I believe in creating a safe, collaborative space where healing can naturally unfold.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {member.approaches.map((approach, index) => (
                    <div key={index} className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
                      <p className="font-medium text-gray-900">{approach}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Specialties */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6 font-serif">Specialties</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {member.specialties.map((specialty, index) => {
                    const icons = {
                      'Trauma & PTSD': Heart,
                      'Attachment & Relationships': Users,
                      'Immigration & Adjustment': Globe,
                      'Anxiety & Stress': Heart,
                      'Parenting Support': Baby,
                      'Couples Therapy': Users,
                      'Family Therapy': Users,
                      'Adolescent & Young Adult': Users
                    };
                    const IconComponent = icons[specialty as keyof typeof icons] || Heart;
                    
                    return (
                      <div key={index} className="bg-white rounded-xl p-6 shadow-md">
                        <div className="flex items-center mb-3">
                          <div className="bg-emerald-100 rounded-full p-2 mr-3">
                            <IconComponent className="w-5 h-5 text-emerald-600" />
                          </div>
                          <h3 className="font-semibold text-gray-900">{specialty}</h3>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Who I Help */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6 font-serif">Who I Help</h2>
                <ul className="space-y-3">
                  {member.whoIHelp.map((group, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full mr-3"></div>
                      {group}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Facts */}
              <div className="bg-white rounded-2xl shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Quick Facts</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 text-emerald-600 mr-3" />
                    <span className="text-gray-700">British Columbia, Canada</span>
                  </div>
                  <div className="flex items-center">
                    <Globe className="w-5 h-5 text-emerald-600 mr-3" />
                    <span className="text-gray-700">{member.languages.join(', ')}</span>
                  </div>
                  <div className="flex items-center">
                    <Award className="w-5 h-5 text-emerald-600 mr-3" />
                    <span className="text-gray-700">RCC #{member.rccNumber}</span>
                  </div>
                </div>
              </div>

              {/* Availability */}
              <div className="bg-white rounded-2xl shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Availability</h3>
                <div className="flex items-start">
                  <Clock className="w-5 h-5 text-emerald-600 mr-3 mt-0.5" />
                  <span className="text-gray-700">{member.availability}</span>
                </div>
                <p className="text-sm text-gray-500 mt-3">
                  Online and in-person sessions available
                </p>
              </div>

              {/* Contact Card */}
              <div className="bg-emerald-50 rounded-2xl p-6 border border-emerald-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Ready to Begin?</h3>
                <p className="text-gray-700 mb-6">
                  Book a free 15-minute consultation to see if we're a good fit.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center text-gray-700">
                    <Phone className="w-4 h-4 mr-2" />
                    <span className="text-sm">236 886 7223</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Mail className="w-4 h-4 mr-2" />
                    <span className="text-sm">info@cojourney.ca</span>
                  </div>
                </div>
                <Link 
                  to="/contact" 
                  className="w-full bg-emerald-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-emerald-700 transition-colors mt-4 block text-center"
                >
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeamProfile;