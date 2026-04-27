import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop" 
          alt="Students learning" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/80 mix-blend-multiply"></div>
        {/* Gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent opacity-80"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-secondary/20 text-secondary font-semibold text-sm mb-6 backdrop-blur-sm border border-secondary/30">
            Welcome to Excellence
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-poppins font-bold text-white leading-tight mb-6 drop-shadow-lg">
            Admissions Are <span className="text-secondary">Open</span> in Khairpur
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto font-inter">
            Build Your Future with Professional Skills. Join the best IT training institute in Khairpur Mirs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact" 
              className="btn-accent text-lg px-8 py-4 flex items-center justify-center"
            >
              Apply Now
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#courses" 
              className="bg-white/10 hover:bg-white/20 border-2 border-white text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 backdrop-blur-sm flex items-center justify-center text-lg"
            >
              Explore Courses
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70"
      >
        <a href="#about" className="flex flex-col items-center">
          <span className="text-sm mb-2">Scroll Down</span>
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-white rounded-full"></div>
          </div>
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
