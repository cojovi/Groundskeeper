import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-green-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Leaf className="h-8 w-8 text-yellow-400" />
              <span className="text-xl font-bold">Groundskeeper HTX</span>
            </div>
            <p className="text-sm">
              Your trusted partner in home preventive maintenance and care. Serving Houston and surrounding areas.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-yellow-400">Home</Link></li>
              <li><Link to="/about" className="hover:text-yellow-400">About Us</Link></li>
              <li><Link to="/services" className="hover:text-yellow-400">Services</Link></li>
              <li><Link to="/membership" className="hover:text-yellow-400">Membership</Link></li>
              <li><Link to="/contact" className="hover:text-yellow-400">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>Monthly Maintenance</li>
              <li>HVAC Checks</li>
              <li>Plumbing Services</li>
              <li>Roofing Inspection</li>
              <li>Exterior Maintenance</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-yellow-400" />
                <span>(832) 641-5671</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-yellow-400" />
                <span>info@groundskeeperhtx.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-yellow-400" />
                <span>Houston, Texas</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-green-700 mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Built by cojovi.com | Groundskeeper.Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;