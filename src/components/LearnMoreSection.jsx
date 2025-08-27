import React from "react";

export default function LearnMoreSection() {
  return (
    <div className="bg-white py-12 px-6 text-center font-sans">
      <h2 className="text-3xl font-semibold mb-10">Learn More About Us</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <div className="bg-white rounded-2xl shadow-md overflow-hidden">
          <img
            src="/src/assets/30.jpg"
            alt="Our Comprehensive Services"
            className="w-full h-60 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">Our Comprehensive Services</h3>
            <p className="text-gray-600 mb-4 text-sm">
              Volutpatte bibendum erat morbi interdum diam sit. Eu sit dolor vel sodales sed nibh ut. Ac fringilla fames eget a aliquet.
            </p>
            <button className="bg-black cursor-pointer text-white px-5 py-2 rounded-full text-sm hover:bg-gray-800">
              LEARN MORE
            </button>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-md overflow-hidden">
          <img
            src="/src/assets/29.webp"
            alt="Our Community Impact"
            className="w-full h-60 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">Our Community Impact</h3>
            <p className="text-gray-600 mb-4 text-sm">
              Volutpatte bibendum erat morbi interdum diam sit. Eu sit dolor vel sodales sed nibh ut. Ac fringilla fames eget a aliquet.
            </p>
            <button className="bg-black cursor-pointer text-white px-5 py-2 rounded-full text-sm hover:bg-gray-800">
              LEARN MORE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
