import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Courses from './components/Courses';
import Facilities from './components/Facilities';
import Information from './components/Information';
import Scholarships from './components/Scholarships';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="relative w-full">
      <Helmet>
        <title>Best IT Institute in Khairpur | Short Courses & Computer Courses</title>
        <meta name="description" content="Join Khairpur Institute of Skill Development for the best IT, web development, and short courses in Khairpur. Admissions are open now." />
        <meta name="keywords" content="computer courses in Khairpur, short courses in Khairpur, IT institute in Khairpur, best institute in Khairpur, IT courses in Khairpur" />
      </Helmet>

      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Courses />
        <Facilities />
        <Information />
        <Scholarships />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
