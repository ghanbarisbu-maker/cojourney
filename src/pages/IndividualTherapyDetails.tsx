import React from 'react';
import { ArrowLeft, CheckCircle2, Clock, Users, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const IndividualTherapyDetails = () => {
  return (
    <div className="min-h-screen bg-vintage-cream">
      {/* Back Navigation */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link to="/" className="flex items-center text-soft-emerald hover:text-deep-forest transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Services
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-deep-forest via-soft-emerald to-soft-blue py-16">
        <div className="absolute inset-0 bg-soft-emerald/50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-serif">
              Individual Therapy
            </h1>
            <p className="text-xl text-warm-sand max-w-3xl mx-auto">
              Personalized one-on-one therapy sessions designed to help you overcome challenges, 
              develop coping strategies, and achieve your mental health goals.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                What is Individual Therapy?
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Individual therapy, also known as psychotherapy or counseling, is a collaborative 
                process between you and a licensed therapist. In a safe, confidential environment, 
                you'll explore your thoughts, feelings, and behaviors to better understand yourself 
                and develop healthier ways of coping with life's challenges.
              </p>
              
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Our Approach
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We use evidence-based therapeutic approaches tailored to your unique needs, including:
              </p>
              
              <ul className="space-y-3 mb-8">
                {[
                  'Cognitive Behavioral Therapy (CBT)',
                  'Dialectical Behavior Therapy (DBT)',
                  'Mindfulness-Based Therapy',
                  'Trauma-Informed Care',
                  'Solution-Focused Brief Therapy'
                ].map((approach, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <CheckCircle2 className="w-5 h-5 text-soft-emerald mr-3" />
                    {approach}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Column */}
            <div>
              <img
                src="https://images.pexels.com/photos/6749773/pexels-photo-6749773.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Individual therapy session"
                className="rounded-2xl shadow-lg w-full h-80 object-cover mb-8"
              />
              
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Session Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 text-soft-emerald mr-3" />
                    <span className="text-gray-700">50-minute sessions</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-5 h-5 text-soft-emerald mr-3" />
                    <span className="text-gray-700">One-on-one with licensed therapist</span>
                  </div>
                  <div className="flex items-center">
                    <Award className="w-5 h-5 text-soft-emerald mr-3" />
                    <span className="text-gray-700">Evidence-based treatment</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conditions We Treat */}
      <section className="py-16 bg-vintage-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Conditions We Treat
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Depression & Anxiety',
                description: 'Overcome persistent sadness, worry, and fear that interfere with daily life.'
              },
              {
                title: 'Trauma & PTSD',
                description: 'Heal from past traumatic experiences and develop healthy coping mechanisms.'
              },
              {
                title: 'Life Transitions',
                description: 'Navigate major life changes like career shifts, relationships, or loss.'
              },
              {
                title: 'Stress Management',
                description: 'Learn effective techniques to manage work, family, and personal stress.'
              },
              {
                title: 'Self-Esteem Issues',
                description: 'Build confidence and develop a healthier relationship with yourself.'
              },
              {
                title: 'Relationship Difficulties',
                description: 'Improve communication skills and build healthier relationships.'
              }
            ].map((condition, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {condition.title}
                </h3>
                <p className="text-gray-600">
                  {condition.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-soft-emerald to-soft-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Start Your Healing Journey?
          </h2>
          <p className="text-xl text-white mb-8">
            Take the first step towards better mental health with personalized individual therapy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/#contact" 
              className="bg-white text-soft-emerald px-8 py-4 rounded-lg font-semibold hover:bg-warm-sand transition-colors"
            >
              Schedule Consultation
            </Link>
            <Link 
              to="/" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-soft-emerald transition-colors"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IndividualTherapyDetails;