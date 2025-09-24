import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Users, UserCheck, Baby, FileText, AlertCircle } from 'lucide-react';

const FeesAndPolicies = () => {
  const fees = [
    {
      icon: UserCheck,
      service: 'Individual Therapy',
      duration: '50 minutes',
      price: '$150 CAD'
    },
    {
      icon: Users,
      service: 'Couples / Family Therapy',
      duration: '75 minutes',
      price: '$200 CAD'
    },
    {
      icon: Users,
      service: 'Group Therapy',
      duration: '90 minutes',
      price: '$60 per participant'
    },
    {
      icon: Baby,
      service: 'Parent Support',
      duration: '50 minutes',
      price: '$150 CAD'
    }
  ];

  return (
    <section className="py-16 xl:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-serif">
            Fees & Policies
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Fees Section */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Session Fees</h3>
            <div className="space-y-4 mb-8">
              {fees.map((fee, index) => {
                const IconComponent = fee.icon;
                return (
                  <div key={index} className="bg-gray-50 rounded-2xl p-6 flex items-center">
                    <div className="bg-warm-sand rounded-full p-3 mr-4">
                      <IconComponent className="w-6 h-6 text-soft-emerald" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900">{fee.service}</h4>
                      <p className="text-gray-600 text-sm">({fee.duration})</p>
                    </div>
                    <div className="text-xl font-bold text-emerald-600">
                    <div className="text-xl font-bold text-soft-emerald">
                      {fee.price}
                    </div>
                  </div>
                );
              })}
            </div>
                )
            
            <div className="bg-warm-sand rounded-2xl p-6 mb-8">
              <div className="flex items-center mb-3">
                <FileText className="w-5 h-5 text-soft-emerald mr-2" />
                <h4 className="font-semibold text-gray-900">Insurance & Receipts</h4>
              </div>
              <p className="text-gray-700">
                Receipts provided for insurance reimbursement (RCC #22169)
              </p>
            </div>

            <Link to="/contact" className="w-full bg-soft-emerald text-white py-4 px-8 rounded-lg font-semibold hover:bg-deep-forest transition-colors inline-block text-center">
              Book a Free Consultation
            </Link>
          </div>

          {/* Policies Section */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Cancellation Policy</h3>
            <div className="bg-gray-50 rounded-2xl p-8 border-l-4 border-soft-emerald">
              <div className="space-y-6">
                <div className="flex items-start">
                  <Clock className="w-6 h-6 text-soft-emerald mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">≥24 Hours Notice</h4>
                    <p className="text-gray-700">No charge for cancellations made 24 hours or more in advance.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <AlertCircle className="w-6 h-6 text-amber-500 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">&lt;24 Hours Notice</h4>
                    <p className="text-gray-700">Full session fee applies for cancellations made less than 24 hours in advance.</p>
                  </div>
                </div>
                
                <div className="border-t border-gray-200 pt-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Additional Information</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Emergencies considered case by case</li>
                    <li>• Reminder emails sent 24 hours before sessions</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    }
    )
    }
    </section>
  );
};

export default FeesAndPolicies;