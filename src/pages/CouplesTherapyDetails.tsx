import React from 'react';
import { ArrowLeft, CheckCircle2, Clock, Users, Award, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const CouplesTherapyDetails = () => {
  return (
    <div className="min-h-screen bg-vintage-cream">
      {/* Back Navigation */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link to="/" className="flex items-center text-vintage-green hover:text-vintage-orange transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Services
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-vintage-cream via-white to-vintage-cream py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-vintage-darkest mb-6">
              Couples Therapy
            </h1>
            <p className="text-xl text-vintage-green max-w-3xl mx-auto">
              Strengthen your relationship, improve communication, and rebuild intimacy 
              with professional couples counseling designed to help you reconnect.
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
                Rebuild Your Connection
              </h2>
              <p className="text-vintage-green mb-6 leading-relaxed">
                Couples therapy provides a safe, neutral space where both partners can express 
                their feelings, work through conflicts, and learn new ways to communicate and 
                connect. Our experienced therapists help couples at all stages of their relationship.
              </p>
              
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                What We Focus On
              </h3>
              
              <ul className="space-y-3 mb-8">
                {[
                  'Improving communication patterns',
                  'Resolving ongoing conflicts',
                  'Rebuilding trust and intimacy',
                  'Managing life transitions together',
                  'Strengthening emotional connection',
                  'Developing healthy boundaries'
                ].map((focus, index) => (
                  <li key={index} className="flex items-center text-vintage-green">
                    <Heart className="w-5 h-5 text-vintage-orange mr-3" />
                    {focus}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Column */}
            <div>
              <img
                src="https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Couples therapy session"
                className="rounded-2xl shadow-lg w-full h-80 object-cover mb-8"
              />
              
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Session Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 text-vintage-orange mr-3" />
                    <span className="text-gray-700">60-minute sessions</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-5 h-5 text-vintage-green mr-3" />
                    <span className="text-gray-700">Both partners attend together</span>
                  </div>
                  <div className="flex items-center">
                    <Award className="w-5 h-5 text-vintage-darkest mr-3" />
                    <span className="text-gray-700">Gottman Method & EFT approaches</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Issues */}
      <section className="py-16 bg-vintage-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Common Relationship Challenges We Address
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Communication Problems',
                description: 'Learn to express needs clearly and listen with empathy and understanding.'
              },
              {
                title: 'Trust Issues',
                description: 'Rebuild trust after betrayal and create a foundation for moving forward.'
              },
              {
                title: 'Intimacy Concerns',
                description: 'Reconnect emotionally and physically to strengthen your bond.'
              },
              {
                title: 'Financial Stress',
                description: 'Navigate money-related conflicts and develop shared financial goals.'
              },
              {
                title: 'Parenting Disagreements',
                description: 'Align on parenting approaches and co-parent more effectively.'
              },
              {
                title: 'Life Transitions',
                description: 'Support each other through major changes like career shifts or relocation.'
              }
            ].map((issue, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {issue.title}
                </h3>
                <p className="text-vintage-green">
                  {issue.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our Couples Therapy Process
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '1',
                title: 'Assessment',
                description: 'We begin with understanding your relationship history, current challenges, and goals for therapy.'
              },
              {
                step: '2',
                title: 'Skill Building',
                description: 'Learn practical communication tools and conflict resolution strategies you can use immediately.'
              },
              {
                step: '3',
                title: 'Integration',
                description: 'Practice new patterns and strengthen your connection with ongoing support and guidance.'
              }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="bg-vintage-orange text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {process.title}
                </h3>
                <p className="text-vintage-green">
                  {process.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-vintage-green to-vintage-orange">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Strengthen Your Relationship?
          </h2>
          <p className="text-xl text-white mb-8">
            Take the first step towards a healthier, happier relationship with professional couples therapy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/#contact" 
              className="bg-white text-vintage-darkest px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Schedule Consultation
            </Link>
            <Link 
              to="/" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-vintage-darkest transition-colors"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CouplesTherapyDetails;