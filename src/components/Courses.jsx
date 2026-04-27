import React from 'react';
import { motion } from 'framer-motion';

const coursesData = [
  { id: 1, title: 'AI with Python', duration: '6 Months', desc: 'Learn Python programming and fundamental Artificial Intelligence concepts.' },
  { id: 2, title: 'Web Development', duration: '6 Months', desc: 'Master front-end and back-end web technologies to build modern websites.' },
  { id: 3, title: 'Digital Marketing', duration: '6 Months', desc: 'Learn SEO, social media marketing, and digital advertising strategies.' },
  { id: 4, title: 'Graphic Designing', duration: '6 Months', desc: 'Create stunning visuals using Adobe Photoshop, Illustrator, and Canva.' },
  { id: 5, title: 'CIT (Certificate in IT)', duration: '6 Months', desc: 'Basic to intermediate computer skills for professional office work.' },
  { id: 6, title: 'DIT (Diploma in IT)', duration: '10 Months', desc: 'Comprehensive diploma covering advanced IT, software, and hardware.' },
  { id: 7, title: 'Beautician Course', duration: '6 Months', desc: 'Professional makeup, styling, and salon management training.' },
  { id: 8, title: 'Stitching Course', duration: '6 Months', desc: 'Learn modern tailoring, dress designing, and stitching techniques.' },
];

const Courses = () => {
  return (
    <section id="courses" className="section-padding bg-background">
      <div className="text-center mb-16">
        <h2 className="text-secondary font-semibold text-lg uppercase tracking-wider mb-2">Our Programs</h2>
        <h3 className="section-title mb-4">Professional Short Courses</h3>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Choose from our industry-relevant programs designed to give you practical skills and boost your career opportunities.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {coursesData.map((course, index) => (
          <motion.div 
            key={course.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col h-full group"
          >
            <div className="bg-primary/5 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
              <span className="font-bold text-xl text-primary group-hover:text-white">{index + 1}</span>
            </div>
            <h4 className="text-xl font-bold text-textMain mb-2">{course.title}</h4>
            <p className="text-sm font-semibold text-secondary mb-3">{course.duration}</p>
            <p className="text-gray-600 text-sm mb-6 flex-grow">{course.desc}</p>
            
            <a href="#contact" className="mt-auto block text-center w-full py-2 rounded-lg border border-primary text-primary font-semibold hover:bg-primary hover:text-white transition-colors duration-300">
              Enroll Now
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Courses;
