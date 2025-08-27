import React from 'react'
import statImg from '../assets/32.jpg';

const HealthStat = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center bg-white px-6 md:px-20 py-12 gap-10">
      
      {/* Left - Image with green overlay */}
      <div className="relative w-[80%]">
        <img
          src={statImg}
          alt="Meditation"
          className="rounded-[68px] w-full h-auto object-cover"
        />
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-green-300 opacity-30 rounded-full blur-2xl"></div>
      </div>

      {/* Right - Text & Stats */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <p className="text-green-600 font-semibold text-sm mb-2">🌿 STATISTIC</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Mental Health by the Numbers
        </h2>
        <p className="text-gray-600 mb-6 text-sm md:text-base">
          Vulputate bibendum erat morbi interdum diam sit. Eu sit dolor vel sodales sed nibh ut. 
          Ac fringilla fames eget a aliquet. Gravida placerat viverra purus sed ac ultrices sem nulla.
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-x-10 gap-y-6 text-left">
          <div>
            <h3 className="text-2xl font-bold text-gray-900">1500+</h3>
            <p className="text-sm text-gray-600 mt-1">SATISFIED CLIENTS</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900">1200+</h3>
            <p className="text-sm text-gray-600 mt-1">POSITIVE REVIEWS</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900">200+</h3>
            <p className="text-sm text-gray-600 mt-1">WORKSHOPS HELD</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900">1800+</h3>
            <p className="text-sm text-gray-600 mt-1">THERAPY SESSIONS</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HealthStat
