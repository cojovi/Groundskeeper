import React from 'react';
import { Users, Award, MapPin, Shield } from 'lucide-react';

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-green-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-6">Your Trusted Home Maintenance Partner</h1>
            <p className="text-xl">
              The Groundskeeper is Houston's premier home maintenance service, dedicated to protecting your investment through proactive care and expert maintenance.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <Users className="w-12 h-12 text-green-800 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
              <p className="text-gray-600">Certified professionals with years of experience</p>
            </div>
            <div className="text-center p-6">
              <Award className="w-12 h-12 text-green-800 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Quality Service</h3>
              <p className="text-gray-600">Committed to excellence in every task</p>
            </div>
            <div className="text-center p-6">
              <MapPin className="w-12 h-12 text-green-800 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Locally Owned</h3>
              <p className="text-gray-600">Proudly serving the Houston community</p>
            </div>
            <div className="text-center p-6">
              <Shield className="w-12 h-12 text-green-800 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Trusted Care</h3>
              <p className="text-gray-600">Your home's protection is our priority</p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-lg text-gray-600 mb-8">
              Founded in Houston with a simple mission: to help homeowners protect their biggest investment through proactive maintenance and expert care. We understand that preventing problems is better than fixing them, and we're here to ensure your home stays in perfect condition year-round.
            </p>
            <p className="text-lg text-gray-600">
              Today, we're proud to be Houston's leading home maintenance service, trusted by hundreds of homeowners to keep their properties in pristine condition.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;