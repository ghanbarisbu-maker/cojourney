import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Phone, Mail, Clock, Award, Globe, Heart, Users, Baby } from 'lucide-react';
import CVSection from '../components/CVSection';

const TeamProfile = () => {
  const { slug } = useParams();

  // Team member data
  const teamMembers = {
    'parisa-mousavi': {
      name: 'Parisa Mousavi',
      credentials: 'PhD, RCC',
      image: '/6008065674490005730.jpg',
      tagline: 'Trauma-informed care with compassion and expertise',
      about: 'Dr. Parisa Mousavi brings over 15 years of experience in trauma-informed therapy, specializing in attachment-based care and mentalization-focused therapy. She has extensive experience working with individuals who have experienced trauma, immigration challenges, and relationship difficulties.',
      specialties: ['Trauma & PTSD', 'Attachment & Relationships', 'Immigration & Adjustment', 'Anxiety & Stress'],
      approaches: ['Mentalization-Based Therapy (MBT)', 'Trauma-Informed Care', 'Attachment-Based Therapy', 'Cognitive Behavioral Therapy (CBT)'],
      languages: ['English', 'Persian'],
      whoIHelp: ['Adults experiencing trauma', 'Immigrants and newcomers', 'Individuals with attachment difficulties', 'Those struggling with anxiety and depression'],
      rccNumber: '22169',
      availability: 'Monday-Friday: 9:00 AM - 6:00 PM, Saturday: 10:00 AM - 4:00 PM',
      cv: [
        {
          title: 'Education',
          items: [
            'PhD in Clinical Psychology, University of British Columbia',
            'Master of Arts in Counselling Psychology, Simon Fraser University',
            'Bachelor of Science in Psychology, University of Tehran'
          ]
        },
        {
          title: 'Research Interests',
          items: [
            'Trauma and attachment across the lifespan',
            'Immigration and cross-cultural mental health',
            'Mentalization-based interventions',
            'Therapeutic relationship and alliance building'
          ]
        },
        {
          title: 'Clinical Experience',
          items: [
            'Private Practice, CoJourney Counselling Services (2018-Present)',
            'Clinical Psychologist, Vancouver Coastal Health (2015-2018)',
            'Trauma Specialist, Immigrant Services Society of BC (2012-2015)',
            'Counsellor, UBC Student Counselling Services (2010-2012)'
          ]
        },
        {
          title: 'Workshops & Group Facilitation',
          items: [
            'Trauma-Informed Care for Professionals (ongoing)',
            'Building Secure Attachments: A Workshop for Parents',
            'Mindfulness and Emotional Regulation Groups',
            'Immigration and Mental Health Support Groups'
          ]
        },
        {
          title: 'Publications & Books',
          items: [
            'Mousavi, P. (2020). "Attachment and trauma in immigrant populations." Journal of Cross-Cultural Psychology.',
            'Mousavi, P., & Singh, R. (2019). "Mentalization-based therapy for complex trauma." Clinical Psychology Review.',
            'Co-author, "Healing Through Connection: A Guide to Attachment-Based Therapy" (2021)'
          ]
        },
        {
          title: 'Teaching & Supervision',
          items: [
            'Clinical Supervisor, BC Association of Clinical Counsellors (2016-Present)',
            'Guest Lecturer, UBC Department of Psychology (2018-Present)',
            'Training Facilitator, Trauma-Informed Care Certificate Program'
          ]
        },
        {
          title: 'Professional Membership & Service',
          items: [
            'Registered Clinical Counsellor (RCC), BC Association of Clinical Counsellors',
            'Member, Canadian Psychological Association',
            'Board Member, Immigrant Mental Health Coalition of BC',
            'Peer Reviewer, Journal of Trauma & Dissociation'
          ]
        },
        {
          title: 'Awards & Honors',
          items: [
            'Excellence in Clinical Practice Award, BCACC (2022)',
            'Community Service Recognition, ISS of BC (2017)',
            'Graduate Research Award, UBC (2014)'
          ]
        }
      ]
    },
    'saeed-ghanbari': {
      name: 'Saeed Ghanbari',
      credentials: 'PhD, RCC',
      image: '/DSC00656.jpg.JPG',
      tagline: 'Supporting families and relationships with evidence-based care',
      about: 'Dr. Saeed Ghanbari specializes in family therapy, couples counseling, and parent support. With a background in developmental psychology, he helps families navigate challenges and build stronger connections through evidence-based therapeutic approaches.',
      specialties: ['Parenting Support', 'Couples Therapy', 'Family Therapy', 'Adolescent & Young Adult'],
      approaches: ['Family Systems Therapy', 'Emotionally Focused Therapy (EFT)', 'Parent Training Programs', 'Solution-Focused Brief Therapy'],
      languages: ['English', 'Persian'],
      whoIHelp: ['Parents and families', 'Couples in distress', 'Adolescents and young adults', 'Blended families'],
      rccNumber: '22170',
      availability: 'Tuesday-Saturday: 10:00 AM - 7:00 PM',
      cv: [
        {
          title: 'Education',
          items: [
            'PhD in Developmental Psychology, University of Toronto',
            'Master of Family Therapy, McGill University',
            'Bachelor of Arts in Psychology and Sociology, University of British Columbia'
          ]
        },
        {
          title: 'Research Interests',
          items: [
            'Family systems and dynamics',
            'Emotionally focused therapy for couples',
            'Parent-child attachment and bonding',
            'Adolescent development and family transitions'
          ]
        },
        {
          title: 'Clinical Experience',
          items: [
            'Private Practice, CoJourney Counselling Services (2017-Present)',
            'Family Therapist, BC Children\'s Hospital (2014-2017)',
            'Couples Counsellor, Relate Counselling Centre (2012-2014)',
            'Youth and Family Counsellor, Surrey Family Services (2010-2012)'
          ]
        },
        {
          title: 'Workshops & Group Facilitation',
          items: [
            'Positive Parenting Skills Workshop Series (ongoing)',
            'Couples Communication and Connection Workshops',
            'Blended Family Support Groups',
            'Parent-Teen Relationship Building Programs'
          ]
        },
        {
          title: 'Publications & Books',
          items: [
            'Ghanbari, S. (2021). "Emotionally focused therapy with immigrant couples." Journal of Marital and Family Therapy.',
            'Ghanbari, S., & Thompson, L. (2019). "Parenting across cultures: Challenges and strengths." Family Process.',
            'Contributing author, "The Connected Family: Building Strong Relationships" (2020)'
          ]
        },
        {
          title: 'Teaching & Supervision',
          items: [
            'Clinical Supervisor, BC Association of Clinical Counsellors (2015-Present)',
            'Adjunct Faculty, City University of Seattle (Vancouver Campus)',
            'EFT Training Program Facilitator, International Centre for Excellence in EFT'
          ]
        },
        {
          title: 'Professional Membership & Service',
          items: [
            'Registered Clinical Counsellor (RCC), BC Association of Clinical Counsellors',
            'Member, American Association for Marriage and Family Therapy',
            'Certified Emotionally Focused Therapist (EFT)',
            'Member, Canadian Association for Family Therapy'
          ]
        },
        {
          title: 'Awards & Honors',
          items: [
            'Outstanding Family Therapist Award, BC Children\'s Hospital (2016)',
            'Research Excellence Award, University of Toronto (2013)',
            'Community Impact Award, Surrey Family Services (2012)'
          ]
        }
      ]
    }
  };

  const member = teamMembers[slug as keyof typeof teamMembers];

  if (!member) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Team Member Not Found</h1>
          <Link to="/" className="text-deep-teal hover:text-teal-accent">
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
          <Link to="/" className="flex items-center text-deep-teal hover:text-teal-accent transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-deep-teal via-teal-accent to-deep-teal overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url("${member.image}")`,
            backgroundPosition: 'center'
          }}
        ></div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-transparent"></div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 font-serif text-white">
              {member.name}
            </h1>
            <p className="text-xl md:text-2xl text-soft-mint mb-6">
              {member.credentials}
            </p>
            <p className="text-lg md:text-xl text-white mb-8">
              {member.tagline}
            </p>
            <Link
              to="/contact"
              className="bg-white text-teal-accent px-8 py-4 rounded-lg font-semibold hover:bg-soft-mint transition-colors inline-block shadow-lg"
            >
              Book Consultation
            </Link>
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
                          <div className="bg-soft-mint rounded-full p-2 mr-3">
                            <IconComponent className="w-5 h-5 text-deep-teal" />
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
                      <div className="w-2 h-2 bg-deep-teal rounded-full mr-3"></div>
                      {group}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Professional Background (CV) */}
              <CVSection cvData={member.cv} />
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Facts */}
              <div className="bg-white rounded-2xl shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Quick Facts</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 text-deep-teal mr-3" />
                    <span className="text-gray-700">British Columbia, Canada</span>
                  </div>
                  <div className="flex items-center">
                    <Globe className="w-5 h-5 text-deep-teal mr-3" />
                    <span className="text-gray-700">{member.languages.join(', ')}</span>
                  </div>
                  <div className="flex items-center">
                    <Award className="w-5 h-5 text-deep-teal mr-3" />
                    <span className="text-gray-700">RCC #{member.rccNumber}</span>
                  </div>
                </div>
              </div>

              {/* Availability */}
              <div className="bg-white rounded-2xl shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Availability</h3>
                <div className="flex items-start">
                  <Clock className="w-5 h-5 text-deep-teal mr-3 mt-0.5" />
                  <span className="text-gray-700">{member.availability}</span>
                </div>
                <p className="text-sm text-gray-500 mt-3">
                  Online and in-person sessions available
                </p>
              </div>

              {/* Contact Card */}
              <div className="bg-soft-mint rounded-2xl p-6 border border-soft-mint">
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
                  className="w-full bg-deep-teal text-white py-3 px-4 rounded-lg font-semibold hover:bg-teal-accent transition-colors mt-4 block text-center"
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
