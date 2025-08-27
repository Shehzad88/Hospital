import React from 'react'

const MentalHealthStats = () => {
  return (
     <div className="flex flex-col md:flex-row items-center justify-between p-8 bg-white">
      <div className="md:w-1/2 mb-6 md:mb-0">
        <img
          src="/src/assets/38.jpg"
          alt="Smiling person in a consultation"
          className="rounded-2xl w-full h-auto object-cover"
        />
      </div>

      <div className="md:w-1/2 md:pl-12 text-center md:text-left">
        <p className="text-sm uppercase tracking-wide text-green-600 font-medium mb-2">Statistic</p>
        <h2 className="text-3xl font-semibold text-gray-900 mb-4">Mental Health by the Numbers</h2>
        <p className="text-gray-600 mb-8">
          Vulputate bibendum erat morbi interdum diam sit. Eu sit dolor vel sodales sed nibh ut. Ac fringilla fames eget aliquet. Gravida placerat viverra purus sed ac ultrices sem nulla.
        </p>

        <div className="grid grid-cols-2 gap-x-8 gap-y-6">
          <div>
            <p className="text-2xl font-bold text-gray-900">1500+</p>
            <p className="text-sm text-gray-600">Satisfied Clients</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-gray-900">1200+</p>
            <p className="text-sm text-gray-600">Positive Reviews</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-gray-900">200+</p>
            <p className="text-sm text-gray-600">Workshops Held</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-gray-900">1800+</p>
            <p className="text-sm text-gray-600">Therapy Sessions</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MentalHealthStats
