import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-green-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl">
              Have questions about our services? We're here to help. Reach out to us anytime.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-800 focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-800 focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-800 focus:border-transparent"
                    placeholder="(832) 641-5671"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-800 focus:border-transparent"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-green-800 text-white px-6 py-3 rounded-md font-semibold hover:bg-green-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Get in touch</h2>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-green-800 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Location</h3>
                    <p className="text-gray-600">Houston, TX 77001</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-green-800 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <p className="text-gray-600">(832) 641-5671</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-green-800 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-gray-600">info@groundskeeperhtx.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-green-800 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 8:00 AM - 6:00 PM<br />
                      Saturday: 9:00 AM - 2:00 PM<br />
                      Sunday: Appointment Only
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;