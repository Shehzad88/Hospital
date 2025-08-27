import React from 'react';
import approachImg from '../assets/31.jpg'; // Replace with your actual image path

const steps = [
  {
    title: 'Consultation and Assessment',
    step: 'STEP 1',
  },
  {
    title: 'Personalized Treatment Plan',
    step: 'STEP 2',
  },
  {
    title: 'Therapeutic Interventions',
    step: 'STEP 3',
  },
  {
    title: 'Ongoing Support and Progress',
    step: 'STEP 4',
  },
];

const ApproachSection = () => {
  return (
    <div className="bg-green-50 py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        
        {/* Left Text */}
        <div className="flex-1">
          <p className="text-green-600 font-semibold text-sm mb-2">🌿 HOW IT WORKS</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Understanding Our Approach</h2>
          <p className="text-gray-600 text-sm md:text-base">
            Vulputate bibendum erat morbi interdum diam sit. Eu sit dolor vel sodales sed nibh ut. 
            Ac fringilla fames eget a aliquet. Gravida placerat viverra purus sed ac ultricies sem nulla.
          </p>
        </div>

        {/* Right Image */}
        <div className="flex-1">
          <img
            src={approachImg}
            alt="Approach"
            className="rounded-[20px] w-full object-cover"
          />
        </div>
      </div>

      {/* Steps Row */}
      <div className="mt-16 flex flex-col md:flex-row justify-between items-center gap-10">
        {steps.map((item, idx) => (
          <div key={idx} className="flex flex-col items-center text-center relative">
            <div className="bg-green-400 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mb-2">
              ✳️
            </div>
            <p className="text-xs text-gray-500 font-semibold mb-1">{item.step}</p>
            <p className="text-sm text-gray-800">{item.title}</p>
            {idx !== steps.length - 1 && (
              <div className="hidden md:block absolute right-[-40px] top-6 text-gray-400 text-xl">→</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApproachSection;
