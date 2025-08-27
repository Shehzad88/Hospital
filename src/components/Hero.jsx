import React from 'react';
import Navbar from './Navbar';

import ConditionWeTreat from './conditionwetreat';
import AboutUsSelection from './AboutUsSelection';
import MentalHealthCare from './MentalHealthCarry';
import ServicesSection from './ServicesSection';
import MentalHealthStats from './MentalHealthStats';
import GuidePrinciples from './GuidePrinciples';
import RealStories from './RealStories';
import WellnessHero from './WellnessHero';
import Chatbox from '/src/components/Chatbox.jsx'; 
import Footer from './Footer';

const Hero = () => {
  return (
    <div className="font-sans">
     
      <div className="relative w-full h-screen overflow-hidden">
        <img
          src="/src/assets/main.jpg"
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        
        <div className="absolute top-0 left-0 w-full z-30">
          <Navbar />
        </div>

        
        <div className="relative z-20 h-full flex flex-col justify-center items-start px-6 sm:px-10 md:px-20 text-white">
          <h3 className="text-lg mb-2">FLAMSAF-MENTAL HEALTH</h3>
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-4">
            Your Path to <br /> Mental Wellness <br /> Starts Here
          </h1>
          <div className="w-full max-w-md border border-amber-50 my-2"></div>
          <p className="max-w-md text-lg mb-4">
            FlamSafe offers support, resources, and a compassionate community for abuse survivors. Here, you can find understanding, hope, and the strength to rebuild.
          </p>
          <button className="bg-green-500 cursor-pointer shadow shadow-lg shadow-white hover:bg-green-600 text-black font-semibold px-6 py-2 rounded-full transition">
            GET HELP NOW
          </button>
        </div>

    
        <div className="absolute bottom-10 right-10 md:bottom-20 md:right-20 z-20 w-60 bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            src="/src/assets/41.jpg"
            alt="Service"
            className="w-full h-40 object-cover object-top"
          />
          <div className="p-4">
            <h2 className="text-lg font-semibold mb-2">Core Services</h2>
            <div className="bg-green-400 cursor-pointer hover:bg-green-500 text-black rounded-full px-3 py-1 text-sm font-medium text-center mb-2 cursor-pointer">
              Therapy Session
            </div>
            <div className="bg-green-400 cursor-pointer hover:bg-green-500 text-black rounded-full px-3 py-1 text-sm font-medium text-center cursor-pointer">
              Psychiatric Consultation
            </div>
          </div>
        </div>
      </div>

      
      <div className="w-full bg-green-400 py-4 flex justify-center">
        <button className="border border-black px-4 shadow shadow-lg shadow-white py-2 rounded-full font-semibold hover:bg-green-500 transition">
          GO TO POST GALLERY
        </button>
      </div>

      
      <div className="bg-white px-4 sm:px-6 lg:px-20 py-10 space-y-6">
       
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-gray-300 pb-4">
          <h2 className="text-2xl font-serif font-medium mb-4 md:mb-0">
            Discover Our Range of Services
          </h2>
          <div className="flex space-x-6 text-sm">
            <span className="border-b-2 border-black pb-1">General</span>
            <span className="text-gray-500 hover:text-black cursor-pointer">Periodic</span>
            <span className="text-gray-500 hover:text-black cursor-pointer">Online</span>
            <span className="text-gray-500 hover:text-black cursor-pointer">In-House</span>
          </div>
        </div>

      
        <div className="flex flex-wrap justify-between gap-4">
          
          <div className="flex items-center bg-gray-100 p-4 rounded-md w-full sm:w-64">
            <div className="bg-black text-white p-2 rounded-full mr-4">📍</div>
            <div>
              <div className="text-sm text-gray-500">Location</div>
              <div className="text-base font-medium">Islamabad, Sector I-8</div>
            </div>
          </div>

         
          <div className="flex items-center bg-gray-100 p-4 rounded-md w-full sm:w-64">
            <div className="bg-black text-white p-2 rounded-full mr-4">📅</div>
            <div>
              <div className="text-sm text-gray-500">Appointment Date</div>
              <div className="text-base font-medium">12 July 2025</div>
            </div>
          </div>

     
          <div className="flex items-center bg-gray-100 p-4 rounded-md w-full sm:w-64">
            <div className="bg-black text-white p-2 rounded-full mr-4">⏱️</div>
            <div>
              <div className="text-sm text-gray-500">Appointment Time</div>
              <div className="text-base font-medium">02:00 PM - 03:00 PM</div>
            </div>
          </div>

         
          <div className="flex items-center">
            <button className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition">
              Book An Appointment
            </button>
          </div>
        </div>
      </div>

     
      <ConditionWeTreat />
      <AboutUsSelection />
      <MentalHealthCare />
      <ServicesSection />
      <MentalHealthStats />
      <GuidePrinciples />
      <RealStories />
      <WellnessHero />
      <Chatbox />
      <Footer />
    </div>
  );
};

export default Hero;
