import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/923148102826"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-xl hover:scale-110 transition-transform duration-300 flex items-center justify-center group"
      aria-label="Contact on WhatsApp"
    >
      <FaWhatsapp size={32} />
      <span className="absolute right-16 bg-white text-textMain px-3 py-1 rounded-lg shadow-md text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
        Chat with us!
      </span>
    </a>
  );
};

export default WhatsAppButton;
