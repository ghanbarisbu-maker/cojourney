import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import FeesAndPolicies from '../components/FeesAndPolicies';

const FeesPage = () => {
  return (
    <div className="min-h-screen bg-vintage-cream">
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
      <section className="bg-gradient-to-br from-deep-teal via-teal-accent to-deep-teal py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-serif">
            Fees & Policies
          </h1>
          <p className="text-xl text-soft-mint max-w-3xl mx-auto">
            Transparent pricing and clear policies for all our counseling services.
          </p>
        </div>
      </section>

      <FeesAndPolicies />
    </div>
  );
};

export default FeesPage;