import React from 'react';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const Membership = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-green-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-6">Membership Plans</h1>
            <p className="text-xl">
              Choose the perfect plan for your home's maintenance needs. All plans include regular inspections and priority service.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Basic Plan */}
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Basic Care</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">$129</span>
                <span className="text-gray-600">/month</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-800 mr-2 flex-shrink-0" />
                  <span>Monthly maintenance visits</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-800 mr-2 flex-shrink-0" />
                  <span>Basic HVAC maintenance</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-800 mr-2 flex-shrink-0" />
                  <span>Exterior inspections</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-800 mr-2 flex-shrink-0" />
                  <span>10% off additional services</span>
                </li>
              </ul>
              <Link
                to="/contact"
                className="block text-center bg-green-800 text-white px-6 py-3 rounded-md font-semibold hover:bg-green-700 transition-colors"
              >
                Get Started
              </Link>
            </div>

            {/* Premium Plan */}
            <div className="bg-green-800 p-8 rounded-lg shadow-md text-white transform scale-105">
              <div className="bg-yellow-400 text-green-800 px-4 py-1 rounded-full text-sm font-semibold inline-block mb-4">
                Most Popular
              </div>
              <h3 className="text-2xl font-bold mb-4">Premium Care</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">$249</span>
                <span className="text-gray-200">/month</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-yellow-400 mr-2 flex-shrink-0" />
                  <span>Everything in Basic Care</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-yellow-400 mr-2 flex-shrink-0" />
                  <span>Priority scheduling</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-yellow-400 mr-2 flex-shrink-0" />
                  <span>Quarterly deep cleaning</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-yellow-400 mr-2 flex-shrink-0" />
                  <span>20% off additional services</span>
                </li>
              </ul>
              <Link
                to="/contact"
                className="block text-center bg-yellow-400 text-green-800 px-6 py-3 rounded-md font-semibold hover:bg-yellow-300 transition-colors"
              >
                Get Started
              </Link>
            </div>

            {/* Ultimate Plan */}
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Ultimate Care</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">$399</span>
                <span className="text-gray-600">/month</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-800 mr-2 flex-shrink-0" />
                  <span>Everything in Premium Care</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-800 mr-2 flex-shrink-0" />
                  <span>24/7 emergency support</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-800 mr-2 flex-shrink-0" />
                  <span>Unlimited service calls</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-800 mr-2 flex-shrink-0" />
                  <span>30% off additional services</span>
                </li>
              </ul>
              <Link
                to="/contact"
                className="block text-center bg-green-800 text-white px-6 py-3 rounded-md font-semibold hover:bg-green-700 transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Membership;