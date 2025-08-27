import React from "react";

const services = [
  {
    title: "Individual Therapy",
    description:
      "Id nisl luctus penatibus bibendum vitae lectus et a. Lorem nulla nulla nulla faucibus amet feugiat ultricies. Posuere arcu enim.",
    active: true,
  },
  {
    title: "Group Therapy",
    description:
      "Id nisl luctus penatibus bibendum vitae lectus et a. Lorem nulla nulla nulla faucibus amet feugiat ultricies. Posuere arcu enim.",
  },
  {
    title: "Family Counseling",
    description:
      "Id nisl luctus penatibus bibendum vitae lectus et a. Lorem nulla nulla nulla faucibus amet feugiat ultricies. Posuere arcu enim.",
  },
  {
    title: "Couples Counseling",
    description:
      "Id nisl luctus penatibus bibendum vitae lectus et a. Lorem nulla nulla nulla faucibus amet feugiat ultricies. Posuere arcu enim.",
  },
  {
    title: "Meditation Workshops",
    description:
      "Id nisl luctus penatibus bibendum vitae lectus et a. Lorem nulla nulla nulla faucibus amet feugiat ultricies. Posuere arcu enim.",
  },
  {
    title: "Teletherapy Services",
    description:
      "Id nisl luctus penatibus bibendum vitae lectus et a. Lorem nulla nulla nulla faucibus amet feugiat ultricies. Posuere arcu enim.",
  },
];

const ServicesSection = () => {
  return (
    <div className="bg-white py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <p className="text-sm text-green-700 font-medium flex items-center gap-2">
            <span className="text-xl">✳</span> OUR SERVICES
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mt-2">
            Holistic Mental Health Solutions
          </h2>
        </div>

        {/* All Services Button */}
        <div className="flex justify-end mb-6">
          <button className="bg-black text-green-300 text-sm px-4 py-1 rounded-full hover:bg-gray-800">
            ALL SERVICES
          </button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`p-6 rounded-xl border transition-all duration-200 shadow-sm ${
                service.active
                  ? "bg-green-100 border-green-300"
                  : "bg-gray-50 border-gray-200"
              }`}
            >
              <div className="text-green-600 text-2xl mb-2">✳</div>
              <h3 className="font-semibold text-lg mb-2 text-gray-800">
                {service.title}
              </h3>
              <p className="text-sm text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
