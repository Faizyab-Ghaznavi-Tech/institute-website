import React from 'react';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-[#061224] text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 pb-8 border-b border-gray-700">
          
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img src={logo} alt="Khairpur Institute Logo" className="w-10 h-10 object-contain" />
              <span className="font-poppins font-bold text-xl text-white">
                Khairpur Institute
              </span>
            </div>
            <p className="text-sm">
              The premier destination for technical skills and vocational training in Khairpur Mirs. Build your future with us.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="hover:text-secondary transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-secondary transition-colors">About Us</a></li>
              <li><a href="#courses" className="hover:text-secondary transition-colors">Courses</a></li>
              <li><a href="#contact" className="hover:text-secondary transition-colors">Admissions</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-white font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>Aresha Colony, Near Civil Hospital</li>
              <li>Khairpur Mirs, Sindh</li>
              <li className="mt-2 text-secondary font-semibold">0314-8102826</li>
            </ul>
          </div>

        </div>
        
        <div className="text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Khairpur Institute of Skill Development. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
