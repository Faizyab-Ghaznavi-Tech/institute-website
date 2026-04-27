import React, { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import logo from '../assets/logo.png';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Courses', href: '#courses' },
    { name: 'Facilities', href: '#facilities' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#home" className="flex items-center gap-2">
              <img src={logo} alt="Khairpur Institute Logo" className="w-12 h-12 object-contain" />
              <span className={`font-poppins font-bold text-xl md:text-2xl ${scrolled ? 'text-primary' : 'text-white'} transition-colors`}>
                Khairpur Institute
              </span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`font-medium hover:text-secondary transition-colors ${scrolled ? 'text-textMain' : 'text-white/90'}`}
              >
                {link.name}
              </a>
            ))}
            <a href="#contact" className="btn-accent px-5 py-2 text-sm">
              Apply Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${scrolled ? 'text-primary' : 'text-white'} hover:text-secondary focus:outline-none`}
            >
              {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg absolute w-full left-0 top-full">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-3 text-base font-medium text-textMain hover:text-primary hover:bg-gray-50 rounded-md"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact" 
              onClick={() => setIsOpen(false)}
              className="block mt-4 text-center btn-accent w-full"
            >
              Apply Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
