import React from 'react';

const WellnessHero = () => {
  return (
    <div className="relative h-screen w-full">
      {/* Background Image */}
      <img
        src="/src/assets/50.png"
        alt="Wellness Hero"
        className="h-full w-full object-cover absolute inset-0"
      />

      {/* Overlay */}
      

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        {/* Dot and Heading */}
        <div className="flex items-center gap-2 mb-4">
          <div className="w-3 h-3 bg-green-600 rounded-full"></div>
          <h2 className="text-sm uppercase tracking-wider">Start Your Journey</h2>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Begin Your Path To Wellness
        </h1>

        {/* Paragraph */}
        <p className="max-w-md text-gray-200 mb-8 text-base md:text-lg">
          Vulputate bibendum erat morbi interdum diam sit. Eu sit dolor vel sodales sed nibh ut.
          Ac fringilla fames eget a aliquet. Gravida placerat viverra purus sed ac ultricies sem nulla.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-amber-200 shadow shadow-lg shadow-white cursor-pointer hover:bg-amber-300 text-black px-6 py-3 rounded-full font-medium">
            Schedule a Consultation
          </button>
          <button className="bg-blue-950 cursor-pointer shadow shadow-lg shadow-white hover:bg-blue-900 text-white px-6 py-3 rounded-full font-medium">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default WellnessHero;
