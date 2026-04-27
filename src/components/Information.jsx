import React from 'react';
import { motion } from 'framer-motion';
import { FiClock, FiCalendar } from 'react-icons/fi';

const Information = () => {
  return (
    <section className="py-12 bg-primary relative overflow-hidden">
      {/* Abstract background shapes */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/5 rounded-full blur-2xl"></div>
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-secondary/10 rounded-full blur-2xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          
          {/* Timings */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-6 bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/10"
          >
            <div className="flex-shrink-0 flex items-center justify-center w-16 h-16 bg-secondary text-primary rounded-full">
              <FiClock size={28} />
            </div>
            <div>
              <h4 className="text-2xl font-bold text-white mb-4">Class Timings</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center bg-white/5 px-4 py-2 rounded-lg">
                  <span className="text-gray-300 font-semibold">Morning Shift:</span>
                  <span className="text-white font-bold text-lg">9:00 AM - 12:00 PM</span>
                </div>
                <div className="flex justify-between items-center bg-white/5 px-4 py-2 rounded-lg">
                  <span className="text-gray-300 font-semibold">Evening Shift:</span>
                  <span className="text-white font-bold text-lg">5:00 PM - 7:00 PM</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Important Date */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex justify-center lg:justify-end"
          >
            <div className="bg-accent text-white p-8 rounded-2xl shadow-xl flex flex-col items-center text-center transform hover:scale-105 transition-transform duration-300 border-4 border-white/20">
              <FiCalendar size={40} className="mb-4 opacity-90" />
              <h4 className="text-xl font-semibold mb-2">Important Deadline</h4>
              <p className="text-3xl font-poppins font-bold">Last Date to Apply</p>
              <div className="mt-4 bg-white text-accent px-6 py-2 rounded-full font-bold text-xl shadow-inner">
                30 April 2026
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Information;

