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
import logo from './assets/logo.png';

function App() {
  return (
    <div className="relative w-full">
      <Helmet>
        <title>Khairpur Institute of Skill and Development</title>
        <meta name="description" content="Join Khairpur Institute of Skill Development for the best IT, web development, and short courses in Khairpur. Admissions are open now." />
        <meta name="keywords" content="computer courses in Khairpur, short courses in Khairpur, IT institute in Khairpur, best institute in Khairpur, IT courses in Khairpur" />
        <link rel="icon" type="image/png" href={logo} />
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
