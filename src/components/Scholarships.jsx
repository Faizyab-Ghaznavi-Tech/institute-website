import React from 'react';
import { motion } from 'framer-motion';

const Scholarships = () => {
  return (
    <section className="py-20 bg-background relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-secondary to-yellow-500 rounded-3xl p-10 md:p-16 shadow-2xl relative overflow-hidden"
        >
          {/* Decorative Pattern */}
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, black 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-poppins font-bold text-primary mb-6">
              Scholarships Available for Deserving Students
            </h2>
            <p className="text-primary/80 text-lg md:text-xl font-medium max-w-2xl mx-auto mb-8">
              We believe financial constraints should never stand in the way of education. Apply for our merit and need-based scholarships today.
            </p>
            <a href="#contact" className="inline-block bg-primary text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-900 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Apply for Scholarship
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Scholarships;
