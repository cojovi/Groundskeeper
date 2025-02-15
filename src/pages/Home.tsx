import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, PenTool as Tool, Clock, Heart } from 'lucide-react';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section 
        className="relative h-[600px] bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")',
          backgroundBlendMode: 'overlay',
          backgroundColor: 'rgba(0, 0, 0, 0.4)'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/90 to-transparent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
            <div className="max-w-2xl text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Protect Your Home, Save Money, and Enjoy Peace of Mind
              </h1>
              <p className="text-xl mb-8">
                Join The Groundskeeper membership today for professional, proactive home maintenance.
              </p>
              <div className="space-x-4">
                <Link 
                  to="/membership" 
                  className="inline-block bg-yellow-400 text-green-800 px-8 py-3 rounded-md font-semibold hover:bg-yellow-300 transition-colors"
                >
                  View Membership Plans
                </Link>
                <Link 
                  to="/contact" 
                  className="inline-block bg-white/10 text-white px-8 py-3 rounded-md font-semibold hover:bg-white/20 transition-colors"
                >
                  Schedule Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose The Groundskeeper?</h2>
            <p className="text-lg text-gray-600">We're more than just maintenance - we're your home's dedicated caretaker.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <Shield className="w-12 h-12 text-green-800 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Preventative Care</h3>
              <p className="text-gray-600">Stop issues before they become expensive problems</p>
            </div>
            <div className="text-center p-6">
              <Tool className="w-12 h-12 text-green-800 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Expert Service</h3>
              <p className="text-gray-600">Professional maintenance from certified specialists</p>
            </div>
            <div className="text-center p-6">
              <Clock className="w-12 h-12 text-green-800 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Regular Visits</h3>
              <p className="text-gray-600">Monthly check-ups to keep your home in top shape</p>
            </div>
            <div className="text-center p-6">
              <Heart className="w-12 h-12 text-green-800 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Peace of Mind</h3>
              <p className="text-gray-600">Rest easy knowing your home is well-maintained</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-green-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
          <p className="text-xl mb-8">Join our membership program today and give your home the care it deserves.</p>
          <Link 
            to="/membership" 
            className="inline-block bg-yellow-400 text-green-800 px-8 py-3 rounded-md font-semibold hover:bg-yellow-300 transition-colors"
          >
            View Membership Plans
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;