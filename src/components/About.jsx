import React from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiBookOpen, FiUsers } from 'react-icons/fi';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="about" className="section-padding bg-white relative">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.h2 variants={itemVariants} className="text-secondary font-semibold text-lg uppercase tracking-wider mb-2">
            About Us
          </motion.h2>
          <motion.h3 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-primary mb-6 leading-tight">
            The Best IT Institute in Khairpur Mirs
          </motion.h3>
          
          <motion.p variants={itemVariants} className="text-gray-600 text-lg leading-relaxed mb-6">
            <strong className="text-primary">Khairpur Institute of Skill Development</strong> is a leading training institute offering professional short courses in IT, digital skills, and vocational training. 
          </motion.p>
          
          <motion.p variants={itemVariants} className="text-gray-600 leading-relaxed mb-8">
            We focus on practical learning to help students gain real-world skills and start their careers. Whether you are looking for computer courses in Khairpur or advanced web development training, we provide an environment built for success.
          </motion.p>

          <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="flex flex-col items-start p-4 bg-background rounded-xl border border-gray-100 shadow-sm">
              <div className="bg-primary/10 p-3 rounded-lg text-primary mb-3">
                <FiAward size={24} />
              </div>
              <h4 className="font-bold text-textMain">Certified</h4>
              <p className="text-sm text-gray-500">Professional Courses</p>
            </div>
            <div className="flex flex-col items-start p-4 bg-background rounded-xl border border-gray-100 shadow-sm">
              <div className="bg-secondary/10 p-3 rounded-lg text-secondary mb-3">
                <FiBookOpen size={24} />
              </div>
              <h4 className="font-bold text-textMain">Practical</h4>
              <p className="text-sm text-gray-500">Hands-on Learning</p>
            </div>
            <div className="flex flex-col items-start p-4 bg-background rounded-xl border border-gray-100 shadow-sm">
              <div className="bg-accent/10 p-3 rounded-lg text-accent mb-3">
                <FiUsers size={24} />
              </div>
              <h4 className="font-bold text-textMain">Expert</h4>
              <p className="text-sm text-gray-500">Instructors</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Image Grid */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="grid grid-cols-2 gap-4">
            <img 
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop" 
              alt="IT classes" 
              className="rounded-2xl w-full h-64 object-cover shadow-lg"
            />
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" 
              alt="Students collaborating" 
              className="rounded-2xl w-full h-64 object-cover shadow-lg mt-8"
            />
          </div>
          {/* Decorative element */}
          <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-secondary/5 rounded-full blur-3xl"></div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
