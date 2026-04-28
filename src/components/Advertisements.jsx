import React, { useEffect, useState } from 'react';
import { FiChevronLeft, FiChevronRight, FiDownload, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import ad1 from '../assets/Advertisment 1.jpeg';
import ad2 from '../assets/Advertisment 2.jpeg';
import ad3 from '../assets/Advertisment 3.jpeg';
import ad4 from '../assets/advertisment 4.jpeg';

const ads = [
  { image: ad1, title: 'Admission Campaign 1' },
  { image: ad2, title: 'Admission Campaign 2' },
  { image: ad3, title: 'Admission Campaign 3' },
  { image: ad4, title: 'Admission Campaign 4' },
];

const Advertisements = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % ads.length);
    }, 4500);

    return () => clearInterval(timer);
  }, []);

  const goPrev = () => {
    setActiveIndex((prev) => (prev - 1 + ads.length) % ads.length);
  };

  const goNext = () => {
    setActiveIndex((prev) => (prev + 1) % ads.length);
  };

  const openModal = (index) => {
    setActiveIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="section-padding pt-14 md:pt-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 md:mb-10">
          <p className="text-sm font-semibold tracking-wide uppercase text-accent">Live Promotions</p>
          <h2 className="text-3xl md:text-4xl text-primary mt-2">Current Advertisements</h2>
          <p className="text-textMain/80 mt-3 max-w-2xl mx-auto">
            Stay updated with our latest admission and course promotion campaigns.
          </p>
        </div>

        <div className="relative rounded-2xl overflow-hidden shadow-xl bg-white border border-slate-200">
          <button
            type="button"
            onClick={() => openModal(activeIndex)}
            className="relative w-full aspect-[16/9] md:aspect-[18/8] bg-slate-100 cursor-zoom-in"
            aria-label={`Open full advertisement ${activeIndex + 1}`}
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={activeIndex}
                src={ads[activeIndex].image}
                alt={ads[activeIndex].title}
                className="absolute inset-0 w-full h-full object-contain bg-slate-100"
                initial={{ opacity: 0.2, scale: 1.02 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0.2, scale: 0.98 }}
                transition={{ duration: 0.45, ease: 'easeOut' }}
              />
            </AnimatePresence>
          </button>

          <button
            onClick={goPrev}
            aria-label="Previous advertisement"
            className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-primary rounded-full p-2 md:p-3 shadow-md transition"
          >
            <FiChevronLeft size={24} />
          </button>

          <button
            onClick={goNext}
            aria-label="Next advertisement"
            className="absolute right-3 md:right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-primary rounded-full p-2 md:p-3 shadow-md transition"
          >
            <FiChevronRight size={24} />
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-black/25 backdrop-blur-sm px-3 py-2 rounded-full">
            {ads.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to advertisement ${index + 1}`}
                className={`h-2.5 rounded-full transition-all ${
                  activeIndex === index ? 'w-7 bg-white' : 'w-2.5 bg-white/60 hover:bg-white/80'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="relative w-full max-w-5xl bg-white rounded-2xl overflow-hidden shadow-2xl"
              initial={{ scale: 0.96, opacity: 0.8 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0.8 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between px-4 md:px-6 py-4 border-b border-slate-200">
                <h3 className="text-lg md:text-xl text-primary font-poppins font-bold">
                  {ads[activeIndex].title}
                </h3>
                <button
                  onClick={closeModal}
                  className="text-slate-500 hover:text-primary transition-colors"
                  aria-label="Close advertisement preview"
                >
                  <FiX size={26} />
                </button>
              </div>

              <div className="bg-slate-100 p-3 md:p-5">
                <img
                  src={ads[activeIndex].image}
                  alt={ads[activeIndex].title}
                  className="w-full max-h-[75vh] object-contain rounded-lg"
                />
              </div>

              <div className="px-4 md:px-6 py-4 flex justify-between items-center">
                <p className="text-sm text-textMain/70">Click download to save this advertisement.</p>
                <a
                  href={ads[activeIndex].image}
                  download={`khairpur-advertisement-${activeIndex + 1}.jpeg`}
                  className="btn-primary inline-flex items-center gap-2"
                >
                  <FiDownload size={18} />
                  Download
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Advertisements;
