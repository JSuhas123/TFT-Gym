import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import React, { useState } from 'react';
import logo from '/logo1.png';

import { Link, useLocation } from 'react-router-dom';

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Trainers', path: '/trainers' },
    { name: 'Classes', path: '/classes' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <nav className="fixed w-full z-50 bg-black/90 backdrop-blur-lg border-b border-yellow-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-2">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
          <img
              src={logo}
              alt="Thrust Fitness Logo"
              className="h-20 w-20 object-cover shadow-lg"
          />
          <span className="text-white text-xl font-bold">Thrust Fitness</span>
          </Link>
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="relative group"
              >
                <span className={`font-medium transition-colors ${
                  location.pathname === link.path
                    ? 'text-yellow-500'
                    : 'text-gray-300 hover:text-yellow-500'
                }`}>
                  {link.name}
                </span>
                <motion.div
                  className="absolute bottom-0 left-1/2 h-0.5 bg-yellow-500"
                  initial={{ width: 0, x: "-50%" }}
                  whileHover={{ width: "75%" }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                />
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="text-white" size={24} />
            ) : (
              <Menu className="text-white" size={24} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-black border-t border-red-500/20">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className="relative group block"
              >
                <span className={`block py-2 font-medium transition-colors ${
                  location.pathname === link.path
                    ? 'text-yellow-400'
                    : 'text-gray-300 hover:text-yellow-400'
                }`}>
                  {link.name}
                </span>
                <motion.div
                  className="absolute bottom-0 left-1/2 h-0.5 bg-yellow-400"
                  initial={{ width: 0, x: "-50%" }}
                  whileHover={{ width: "75%" }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                />
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;