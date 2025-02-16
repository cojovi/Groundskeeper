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
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Basic</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">$190</span>
                <span className="text-gray-600"> (below $400)</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-800 mr-2 flex-shrink-0" />
                  <span>Clean Gutters</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-800 mr-2 flex-shrink-0" />
                  <span>Power Wash Entryway & Walkway</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-800 mr-2 flex-shrink-0" />
                  <span>Check Outdoor Plumbing</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-800 mr-2 flex-shrink-0" />
                  <span>Reseed Lawn</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-800 mr-2 flex-shrink-0" />
                  <span>Inspect for Pests</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-800 mr-2 flex-shrink-0" />
                  <span>Winter Damage Check</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-800 mr-2 flex-shrink-0" />
                  <span>Foundation Check</span>
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
              <h3 className="text-2xl font-bold mb-4">Premium</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">$400</span>
                <span className="text-gray-200"> (targeted avg.)</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-yellow-400 mr-2 flex-shrink-0" />
                  <span>Clean Up Yard Debris</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-yellow-400 mr-2 flex-shrink-0" />
                  <span>Flush Outdoor Drainage</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-yellow-400 mr-2 flex-shrink-0" />
                  <span>Improve Landscape Along Foundation Perimeter</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-yellow-400 mr-2 flex-shrink-0" />
                  <span>Pressure Wash Driveway & Sidewalk</span>
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
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Ultimate</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">$675+</span>
                <span className="text-gray-600"> (above $400)</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-800 mr-2 flex-shrink-0" />
                  <span>Prune Trees and Shrubs</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-800 mr-2 flex-shrink-0" />
                  <span>Pressure Wash Full Exterior</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-800 mr-2 flex-shrink-0" />
                  <span>(One-Story or Two-Story)</span>
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