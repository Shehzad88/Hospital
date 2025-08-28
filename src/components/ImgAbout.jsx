// src/components/ImgAbout.jsx
import React from 'react';

// ✅ Import images
import ceoImg from '../assets/39.jpg';
import client1 from '../assets/Logo Client 1.png';
import client2 from '../assets/Logo Client 2.png';
import client3 from '../assets/Logo Client 3.png';
import client4 from '../assets/Logo Client 4.png';
import client5 from '../assets/Logo Client 5.png';

const ImgAbout = () => {
  return (
    <div className="bg-white px-6 md:px-20 py-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* Left Side */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-sm font-semibold text-gray-500">
            <span className="text-green-500 text-xl">🌼</span>
            ABOUT US
          </div>

          <h2 className="text-4xl font-serif font-medium text-gray-800 leading-tight">
            Transforming Lives <br /> Through Care
          </h2>

          {/* CEO Message Card */}
          <div className="flex items-center bg-white rounded-xl shadow-sm border p-4 gap-4">
            <img
              src={ceoImg}
              alt="CEO"
              className="w-40 h-44 rounded-xl object-cover"
            />
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-gray-800">
                Welcome Message from Our CEO
              </h3>
              <p className="text-sm text-gray-600">
                Vulputate bibendum erat morbi interdum diam sit. Eu sit dolor
                vel sodales sed nibh ut. Ac fringilla fames eget a aliquet.
                Gravida placerat viverra purus sed ac ultricies sem nulla.
              </p>
              <p className="text-sm font-semibold text-green-600">
                Shehzad Ahmed <br />
                <span className="text-xs font-normal">CEO, FlamSafe</span>
              </p>
            </div>
          </div>
        </div>

        {/* Right Side - Our Mission */}
        <div className="space-y-18">
          <div className="inline-block bg-green-100 text-green-900 font-medium px-5 py-2 rounded-md">
            Our Mission
          </div>

          {/* Mission Points */}
          <div className="space-y-5">
            <div>
              <h4 className="flex items-center gap-2 font-semibold text-gray-800">
                <span className="text-green-500 text-xl">🌼</span>
                Promoting Mental Wellness
              </h4>
              <p className="text-sm text-gray-600 mt-1">
                Vulputate bibendum erat morbi interdum diam sit. Eu sit dolor
                vel sodales sed nibh ut. Ac fringilla fames eget a aliquet.
                Gravida placerat viverra purus sed ac ultricies sem nulla.
              </p>
            </div>

            <div>
              <h4 className="flex items-center gap-2 font-semibold text-gray-800">
                <span className="text-green-500 text-xl">🌼</span>
                Empowering Individuals
              </h4>
              <p className="text-sm text-gray-600 mt-1">
                Vulputate bibendum erat morbi interdum diam sit. Eu sit dolor
                vel sodales sed nibh ut. Ac fringilla fames eget a aliquet.
                Gravida placerat viverra purus sed ac ultricies sem nulla.
              </p>
            </div>

            <div>
              <h4 className="flex items-center gap-2 font-semibold text-gray-800">
                <span className="text-green-500 text-xl">🌼</span>
                Supporting Personal Growth
              </h4>
              <p className="text-sm text-gray-600 mt-1">
                Vulputate bibendum erat morbi interdum diam sit. Eu sit dolor
                vel sodales sed nibh ut. Ac fringilla fames eget a aliquet.
                Gravida placerat viverra purus sed ac ultricies sem nulla.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Client Logos */}
      <div className="flex flex-wrap gap-32 mt-22 items-center justify-center">
        <img src={client1} alt="Client 1" />
        <img src={client2} alt="Client 2" />
        <img src={client3} alt="Client 3" />
        <img src={client4} alt="Client 4" />
        <img src={client5} alt="Client 5" />
      </div>
    </div>
  );
};

export default ImgAbout;
