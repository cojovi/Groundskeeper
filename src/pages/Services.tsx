import React from 'react';
import { Home, Thermometer, Wrench, Shield, PaintBucket, Trees } from 'lucide-react';

const Services = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-green-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-6">Comprehensive Home Care Services</h1>
            <p className="text-xl">
              From routine maintenance to specialized repairs, we keep your home running smoothly and efficiently.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* HVAC Service */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Thermometer className="w-12 h-12 text-green-800 mb-4" />
              <h3 className="text-xl font-semibold mb-2">HVAC Maintenance</h3>
              <p className="text-gray-600 mb-4">Regular checks and maintenance of your heating and cooling systems.</p>
              <ul className="text-gray-600 space-y-2">
                <li>• Filter replacements</li>
                <li>• System efficiency checks</li>
                <li>• Ductwork inspection</li>
                <li>• Seasonal tune-ups</li>
              </ul>
            </div>

            {/* Plumbing Service */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Wrench className="w-12 h-12 text-green-800 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Plumbing Services</h3>
              <p className="text-gray-600 mb-4">Comprehensive plumbing maintenance and repairs.</p>
              <ul className="text-gray-600 space-y-2">
                <li>• Leak detection</li>
                <li>• Pipe maintenance</li>
                <li>• Fixture checks</li>
                <li>• Water pressure testing</li>
              </ul>
            </div>

            {/* Roofing Service */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Home className="w-12 h-12 text-green-800 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Roofing Inspection</h3>
              <p className="text-gray-600 mb-4">Regular roof maintenance and damage prevention.</p>
              <ul className="text-gray-600 space-y-2">
                <li>• Shingle inspection</li>
                <li>• Gutter cleaning</li>
                <li>• Leak prevention</li>
                <li>• Storm damage checks</li>
              </ul>
            </div>

            {/* Exterior Service */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <PaintBucket className="w-12 h-12 text-green-800 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Exterior Maintenance</h3>
              <p className="text-gray-600 mb-4">Keep your home's exterior in top condition.</p>
              <ul className="text-gray-600 space-y-2">
                <li>• Paint touch-ups</li>
                <li>• Siding inspection</li>
                <li>• Weatherproofing</li>
                <li>• Trim maintenance</li>
              </ul>
            </div>

            {/* Landscaping Service */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Trees className="w-12 h-12 text-green-800 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Landscape Maintenance</h3>
              <p className="text-gray-600 mb-4">Professional care for your outdoor spaces.</p>
              <ul className="text-gray-600 space-y-2">
                <li>• Lawn care</li>
                <li>• Tree trimming</li>
                <li>• Garden maintenance</li>
                <li>• Seasonal clean-up</li>
              </ul>
            </div>

            {/* Preventative Care */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Shield className="w-12 h-12 text-green-800 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Preventative Care</h3>
              <p className="text-gray-600 mb-4">Stop problems before they start.</p>
              <ul className="text-gray-600 space-y-2">
                <li>• Regular inspections</li>
                <li>• Seasonal maintenance</li>
                <li>• System checks</li>
                <li>• Repair recommendations</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;