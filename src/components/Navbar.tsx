import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Leaf } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-green-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Leaf className="h-8 w-8 text-yellow-400" />
              <span className="text-xl font-bold">The Groundskeeper</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className="hover:text-yellow-400 px-3 py-2 rounded-md text-sm font-medium">Home</Link>
              <Link to="/about" className="hover:text-yellow-400 px-3 py-2 rounded-md text-sm font-medium">About</Link>
              <Link to="/services" className="hover:text-yellow-400 px-3 py-2 rounded-md text-sm font-medium">Services</Link>
              <Link to="/membership" className="hover:text-yellow-400 px-3 py-2 rounded-md text-sm font-medium">Membership</Link>
              <Link to="/contact" className="hover:text-yellow-400 px-3 py-2 rounded-md text-sm font-medium">Contact</Link>
              <Link to="/membership" className="bg-yellow-400 text-green-800 px-4 py-2 rounded-md text-sm font-medium hover:bg-yellow-300">
                Join Now
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-yellow-400 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium hover:text-yellow-400">Home</Link>
            <Link to="/about" className="block px-3 py-2 rounded-md text-base font-medium hover:text-yellow-400">About</Link>
            <Link to="/services" className="block px-3 py-2 rounded-md text-base font-medium hover:text-yellow-400">Services</Link>
            <Link to="/membership" className="block px-3 py-2 rounded-md text-base font-medium hover:text-yellow-400">Membership</Link>
            <Link to="/contact" className="block px-3 py-2 rounded-md text-base font-medium hover:text-yellow-400">Contact</Link>
            <Link to="/membership" className="block bg-yellow-400 text-green-800 px-4 py-2 rounded-md text-base font-medium hover:bg-yellow-300 mt-4">
              Join Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;