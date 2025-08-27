import React from 'react'

const ConditionWeTreat = () => {
  return (
    <div className="bg-[#e6f0e9] py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* Left Section */}
        <div className="space-y-8">
          {/* Title and Button */}
          <div className="flex justify-between items-center">
            <h2 className="text-3xl font-serif font-medium text-gray-800">
              Conditions We Treat
            </h2>
           
          </div>

          {/* Card 1 */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold text-gray-800">
              Anxiety disorders
            </h3>
            <p className="text-sm text-gray-600 mt-2">
              Vulputate bibendum erat morbi interdum diam sit. Eu sit dolor vel
              sodales sed nibh ut. Ac fringilla fames eget a aliquet. Gravida
              placerat viverra purus sed eu ultricies sem nulla.
            </p>
          </div>

          {/* Card 2 */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800">
              Post-Traumatic Stress Disorder
            </h3>
            <p className="text-sm text-gray-600 mt-2">
              Vulputate bibendum erat morbi interdum diam sit. Eu sit dolor vel
              sodales sed nibh ut. Ac fringilla fames eget a aliquet. Gravida
              placerat viverra purus sed eu ultricies sem nulla.
            </p>
          </div>

          {/* Card 3 */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800">
              Eating disorders
            </h3>
            <p className="text-sm text-gray-600 mt-2">
              Vulputate bibendum erat morbi interdum diam sit. Eu sit dolor vel
              sodales sed nibh ut. Ac fringilla fames eget a aliquet. Gravida
              placerat viverra purus sed eu ultricies sem nulla.
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-center md:items-end space-y-6">
          <button className="bg-black text-white px-6 py-3 cursor-pointer rounded-full transition text-sm self-end hover:bg-white hover:text-black">
  LEARN MORE
</button>

          <img
            src="/src/assets/40.jpg" // Replace with your actual image path
            alt="Woman eating"
            className="rounded-3xl object-cover w-full max-w-md h-[400px] shadow-lg"
          />
        </div>
      </div>
    </div>
  )
}

export default ConditionWeTreat
