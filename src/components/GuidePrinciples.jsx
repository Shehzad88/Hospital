import React from 'react';
import guideImg from '../assets/37.jpg'; // Import the image correctly

const GuidePrinciples = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-8 bg-[#f2f8f5]">
      <div className="md:w-1/2 text-center md:text-left">
        <p className="text-sm uppercase tracking-wide text-green-600 font-medium mb-2">Our Value</p>
        <h2 className="text-3xl font-semibold text-gray-900 mb-4">The FlamSafe Guiding Principles</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            { title: 'Compassion', desc: 'Vulputate bibendum erat morbi interdum diam sit. Eu sit dolor vel sodales sed nibh ut.' },
            { title: 'Integrity', desc: 'Vulputate bibendum erat morbi interdum diam sit. Eu sit dolor vel sodales sed nibh ut.' },
            { title: 'Excellence', desc: 'Vulputate bibendum erat morbi interdum diam sit. Eu sit dolor vel sodales sed nibh ut.' },
            { title: 'Collaboration', desc: 'Vulputate bibendum erat morbi interdum diam sit. Eu sit dolor vel sodales sed nibh ut.' },
          ].map((item, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-green-600 flex items-center justify-center text-white font-bold">*</div>
              <div>
                <p className="text-lg font-semibold text-gray-900">{item.title}</p>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="md:w-1/2 mt-8 md:mt-0 md:pl-12 relative">
        <img
          src={guideImg}
          alt="Professionals smiling"
          className="rounded-2xl w-full h-auto object-cover"
        />
        <div className="absolute top-4 left-4 bg-white shadow-md px-6 py-2 rounded-full flex items-center">
          <p className="text-2xl font-bold text-gray-900 mr-2">25+</p>
          <span className="text-sm text-gray-600">Qualified Professionals</span>
        </div>
      </div>
    </div>
  );
};

export default GuidePrinciples;
