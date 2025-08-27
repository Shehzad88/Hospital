import React from "react";
import { Phone, Clock, MapPin } from "lucide-react";

const contactDetails = [
  {
    icon: <Phone className="w-5 h-5 text-white" />,
    title: "Phone Number",
    description: "+92 1234567890",
  },
  {
    icon: <Clock className="w-5 h-5 text-white" />,
    title: "Business Hours",
    description: "Mon-Fri, 07.00-16.00",
  },
  {
    icon: <MapPin className="w-5 h-5 text-white" />,
    title: "Address",
    description: "04403, I-8 sector, Islamabad",
  },
];

const ContactInfo = () => {
  return (
    <section className="bg-gray-50 py-16 px-4 max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-between gap-10">
      {/* Left: Text Section */}
      <div className="md:w-1/2">
        <p className="text-sm text-green-600 font-semibold mb-2">🌟 GET IN TOUCH</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          We’d Love to Hear <br /> From You
        </h2>
        <p className="text-gray-600 max-w-md">
          Vulputate bibendum erat morbi interdum diam sit. Eu sit dolor vel sodales sed nibh ut. Ac fringilla fames eget a aliquet. Gravida placerat viverra purus sed ac ultricies sem nulla.
        </p>
      </div>

      {/* Right: Contact Details */}
      <div className="md:w-1/2 space-y-6">
        {contactDetails.map((item, index) => (
          <div key={index} className="flex items-start gap-4">
            <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
              {item.icon}
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-900">
                {item.title}
              </h4>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ContactInfo;
