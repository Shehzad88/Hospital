import React from "react";

const AboutUsSection = () => {
  return (
    <div className="bg-white px-6 md:px-20 py-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-sm font-semibold text-gray-500">
            <span className="text-green-500 text-xl">🌼</span>
            ABOUT US
          </div>

          <h2 className="text-4xl font-serif font-medium text-gray-800 leading-tight">
            Transforming Lives <br /> Through Care
          </h2>

          <div className="flex items-center bg-white rounded-xl shadow-sm border p-4 gap-4">
            <img
              src="/src/assets/39.jpg"
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
                Shezad Ahmed <br />
                <span className="text-xs font-normal">CEO, FlamSafe</span>
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-18">
          <div className="inline-block bg-green-100 text-green-900 font-medium px-5 py-2 rounded-md">
            Our Mission
          </div>

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
    </div>
  );
};

export default AboutUsSection;
