import React from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      name: 'Ali Raza',
      course: 'Web Development',
      text: 'I learned Web Development here and it was completely hands-on. The instructors guided us on real projects. Highly recommended for anyone in Khairpur!',
    },
    {
      id: 2,
      name: 'Sana Fatima',
      course: 'Graphic Designing',
      text: 'The instructors at Khairpur Institute are very cooperative. The Graphic Design course helped me build a strong portfolio and start my freelancing career.',
    },
    {
      id: 3,
      name: 'Muhammad Usman',
      course: 'CIT (Certificate in IT)',
      text: 'Excellent environment and modern lab facilities. The CIT course improved my computer skills significantly. Best IT institute in the city without a doubt.',
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-secondary font-semibold text-lg uppercase tracking-wider mb-2">Testimonials</h2>
          <h3 className="section-title mb-4">What Our Students Say</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-background p-8 rounded-2xl relative shadow-sm border border-gray-100"
            >
              <FaQuoteLeft className="text-primary/10 text-6xl absolute top-4 right-4" />
              <div className="flex text-secondary mb-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic relative z-10">"{review.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-textMain">{review.name}</h4>
                  <p className="text-sm text-secondary font-semibold">{review.course}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
