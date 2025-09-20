import React from 'react';
import { ArrowLeft, CheckCircle2, Clock, Users, Award, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

const FamilyTherapyDetails = () => {
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
              Family Therapy
            </h1>
            <p className="text-xl text-vintage-green max-w-3xl mx-auto">
              Heal family relationships, improve communication, and create a more harmonious 
              home environment with professional family counseling services.
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
                Strengthen Family Bonds
              </h2>
              <p className="text-vintage-green mb-6 leading-relaxed">
                Family therapy helps families work through challenges together, improve communication 
                patterns, and develop healthier ways of relating to one another. We work with families 
                of all sizes and configurations to create positive change.
              </p>
              
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Our Family-Centered Approach
              </h3>
              
              <ul className="space-y-3 mb-8">
                {[
                  'Systems-based family therapy',
                  'Structural family therapy techniques',
                  'Solution-focused family interventions',
                  'Narrative therapy approaches',
                  'Play therapy for younger children',
                  'Teen-focused communication strategies'
                ].map((approach, index) => (
                  <li key={index} className="flex items-center text-vintage-green">
                    <Home className="w-5 h-5 text-vintage-darkest mr-3" />
                    {approach}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Column */}
            <div>
              <img
                src="https://images.pexels.com/photos/5327647/pexels-photo-5327647.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Family therapy session"
                className="rounded-2xl shadow-lg w-full h-80 object-cover mb-8"
              />
              
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Session Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 text-vintage-orange mr-3" />
                    <span className="text-gray-700">60-90 minute sessions</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-5 h-5 text-vintage-green mr-3" />
                    <span className="text-gray-700">All family members participate</span>
                  </div>
                  <div className="flex items-center">
                    <Award className="w-5 h-5 text-vintage-darkest mr-3" />
                    <span className="text-gray-700">Evidence-based family interventions</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Family Issues */}
      <section className="py-16 bg-vintage-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Family Challenges We Address
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Parent-Teen Conflicts',
                description: 'Navigate the challenges of adolescence and improve parent-teen relationships.'
              },
              {
                title: 'Divorce & Separation',
                description: 'Help families adjust to changes and maintain healthy relationships.'
              },
              {
                title: 'Blended Family Issues',
                description: 'Support stepfamilies in creating new traditions and bonds.'
              },
              {
                title: 'Behavioral Problems',
                description: 'Address challenging behaviors and develop consistent family responses.'
              },
              {
                title: 'Sibling Rivalry',
                description: 'Reduce conflicts between siblings and promote cooperation.'
              },
              {
                title: 'Family Trauma',
                description: 'Heal from traumatic experiences that affect the entire family system.'
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

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Benefits of Family Therapy
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Improved Communication',
                description: 'Learn to express feelings and needs in healthy, constructive ways that strengthen family bonds.'
              },
              {
                title: 'Conflict Resolution Skills',
                description: 'Develop tools to resolve disagreements peacefully and find win-win solutions.'
              },
              {
                title: 'Stronger Family Unity',
                description: 'Build a sense of belonging and support that helps each family member thrive.'
              },
              {
                title: 'Better Boundaries',
                description: 'Establish healthy boundaries that respect individual needs while maintaining family connection.'
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
                <div className="flex items-center mb-4">
                  <CheckCircle2 className="w-6 h-6 text-vintage-orange mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">
                    {benefit.title}
                  </h3>
                </div>
                <p className="text-vintage-green">
                  {benefit.description}
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
            Ready to Heal Your Family?
          </h2>
          <p className="text-xl text-white mb-8">
            Take the first step towards a more harmonious family life with professional family therapy.
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

export default FamilyTherapyDetails;
