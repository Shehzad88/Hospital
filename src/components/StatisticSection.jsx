// StatisticSection.jsx

import React from 'react';
import image from '../assets/6.jpg'; // Make sure to place your image in the correct path

const StatisticSection = () => {
  return (
    <div className="bg-white py-16 px-6 md:px-20 lg:flex items-center gap-12">
      {/* Left image section */}
      <div className="w-full lg:w-1/2">
        <img
          src={image}
          alt="Mental Health"
          className="rounded-[20px] w-full h-auto object-cover"
        />
      </div>

      {/* Right content section */}
      <div className="w-full lg:w-1/2 mt-10 lg:mt-0">
        <p className="text-sm text-green-600 tracking-wider uppercase font-medium mb-2">
          Statistic
        </p>
        <h2 className="text-3xl font-semibold text-gray-900 mb-4">
          Mental Health by the Numbers
        </h2>
        <p className="text-gray-500 mb-8">
          Vulputate bibendum erat morbi interdum diam sit. Eu sit dolor vel sodales sed nibh ut.
          Ac fringilla fames eget a aliquet. Gravida placerat viverra purus sed ac ultrices sem nulla.
        </p>

        <div className="grid grid-cols-2 gap-x-8 gap-y-6">
          <div>
            <p className="text-2xl font-bold text-gray-900">1500+</p>
            <p className="text-sm text-gray-500 uppercase tracking-wide mt-1">Satisfied Clients</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-gray-900">1200+</p>
            <p className="text-sm text-gray-500 uppercase tracking-wide mt-1">Positive Reviews</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-gray-900">200+</p>
            <p className="text-sm text-gray-500 uppercase tracking-wide mt-1">Workshops Held</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-gray-900">1800+</p>
            <p className="text-sm text-gray-500 uppercase tracking-wide mt-1">Therapy Sessions</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatisticSection;
