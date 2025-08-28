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
import Chatbox from './Chatbox'; 
import Footer from './Footer';

// ✅ Import your images from src/assets
import mainImg from '../assets/main.jpg';
import serviceImg from '../assets/41.jpg';

const Hero = () => {
  return (
    <div className="font-sans">
      <div className="relative w-full h-screen overflow-hidden">
        <img
          src={mainImg}   // ✅ imported image
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
            src={serviceImg}   // ✅ imported image
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

      {/* other sections remain unchanged */}
      <div className="w-full bg-green-400 py-4 flex justify-center">
        <button className="border border-black px-4 shadow shadow-lg shadow-white py-2 rounded-full font-semibold hover:bg-green-500 transition">
          GO TO POST GALLERY
        </button>
      </div>

      <div className="bg-white px-4 sm:px-6 lg:px-20 py-10 space-y-6">
        {/* ... rest of your content */}
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
