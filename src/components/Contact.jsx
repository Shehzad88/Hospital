import React from 'react';
import { NavLink } from 'react-router-dom';
import ContactSection from '/src/components/ContactSection.jsx';
import StatisticSection from '/src/components/StatisticSection.jsx';
import Navbar from '/src/components/Navbar.jsx';  
import FAQSection from '/src/components/FAQSection.jsx'; 
import Footer from '/src/components/Footer.jsx'; 

import aboutImg from '../assets/8.jpg';

const Contact = () => {
  return (
    <div className="w-full">
     
      <div className="relative h-screen w-full">
        <img
          src={aboutImg}
          alt="Contact Us"
          className="h-full w-full object-cover object-top absolute inset-0 z-0"
        />

        
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10"></div>

      
        <div className="absolute top-0 left-0 w-full z-30">
          <Navbar />
        </div>

        
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-20 px-4">
          <h1 className="text-4xl md:text-5xl font-semibold mb-4 border-b border-gray-300 pb-2">
            Contact Us
          </h1>
          <p className="max-w-xl text-sm md:text-base text-gray-300">
            Odio cras proin proin sit quis fringilla aliquet. Consectetur elementum viverra egestas egestas nulla ullamcorper varius quam.
          </p>
        </div>
      </div>

      
      <div className="relative z-10 bg-white">
        <ContactSection />
        <StatisticSection />
        <FAQSection />
        <Footer />
      </div>
    </div>
  );
};

export default Contact;
