import React from 'react';
import { motion } from 'framer-motion';
import { FiMonitor, FiZap, FiWifi } from 'react-icons/fi';

const Facilities = () => {
  const facilities = [
    { id: 1, title: 'Laptop Lab', icon: <FiMonitor size={32} />, desc: 'Fully equipped modern computer lab for hands-on practice.' },
    { id: 2, title: 'Standby Generator', icon: <FiZap size={32} />, desc: 'Uninterrupted power supply to ensure smooth learning.' },
    { id: 3, title: '24/7 Internet', icon: <FiWifi size={32} />, desc: 'High-speed internet access for research and development.' },
  ];

  return (
    <section id="facilities" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="section-title mb-2">Campus Facilities</h3>
          <p className="text-gray-600">We provide a comfortable and professional environment.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {facilities.map((fac, index) => (
            <motion.div 
              key={fac.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="flex flex-col items-center text-center p-8 bg-background rounded-2xl"
            >
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center text-secondary mb-6 shadow-lg">
                {fac.icon}
              </div>
              <h4 className="text-xl font-bold text-primary mb-3">{fac.title}</h4>
              <p className="text-gray-600">{fac.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facilities;
