import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiPhone, FiMapPin, FiSend } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    course: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for applying! We will contact you soon.');
    setFormData({ name: '', phone: '', course: '' });
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-secondary font-semibold text-lg uppercase tracking-wider mb-2">Get In Touch</h2>
          <h3 className="section-title mb-4">Admissions & Contact</h3>
          <p className="text-gray-600">Have questions? Fill out the form or reach us at our campus.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100">
          
          {/* Contact Info & Map */}
          <div className="p-8 lg:p-12 bg-primary text-white flex flex-col justify-between relative">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-bl-full pointer-events-none"></div>
            
            <div className="relative z-10 mb-10">
              <h4 className="text-3xl font-bold mb-8">Contact Information</h4>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-secondary/20 p-3 rounded-full text-secondary mt-1">
                    <FiPhone size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-300 font-semibold mb-1">Phone Number</p>
                    <p className="text-xl font-bold">0314-8102826</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-secondary/20 p-3 rounded-full text-secondary mt-1">
                    <FiMapPin size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-300 font-semibold mb-1">Campus Location</p>
                    <p className="text-lg leading-relaxed">
                      Aresha Colony, Near Civil Hospital,<br/>
                      Khairpur Mirs, Sindh
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Embed */}
            <div className="w-full h-64 rounded-xl overflow-hidden relative z-10 border-4 border-white/10 shadow-inner">
              <iframe 
                title="Khairpur Institute Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14336.577685608754!2d68.7562852!3d27.5284488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3935d4f9b893fbd7%3A0x633d9f2d1136b694!2sCivil%20Hospital%20Khairpur!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Admission Form */}
          <div className="p-8 lg:p-12">
            <h4 className="text-2xl font-bold text-primary mb-6">Online Admission Form</h4>
            <p className="text-gray-500 mb-8">Secure your seat today by registering online.</p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                <input 
                  type="text" 
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">Phone / WhatsApp Number</label>
                <input 
                  type="tel" 
                  id="phone"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="e.g. 0314-8102826"
                />
              </div>

              <div>
                <label htmlFor="course" className="block text-sm font-semibold text-gray-700 mb-2">Select Course</label>
                <select 
                  id="course"
                  required
                  value={formData.course}
                  onChange={(e) => setFormData({...formData, course: e.target.value})}
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                >
                  <option value="" disabled>Choose a course...</option>
                  <option value="AI with Python">AI with Python</option>
                  <option value="Web Development">Web Development</option>
                  <option value="Digital Marketing">Digital Marketing</option>
                  <option value="Graphic Designing">Graphic Designing</option>
                  <option value="CIT">CIT (Certificate in IT)</option>
                  <option value="DIT">DIT (Diploma in IT)</option>
                  <option value="Beautician Course">Beautician Course</option>
                  <option value="Stitching Course">Stitching Course</option>
                </select>
              </div>

              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit" 
                className="w-full btn-primary flex items-center justify-center gap-2 mt-4"
              >
                <FiSend /> Submit Application
              </motion.button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
