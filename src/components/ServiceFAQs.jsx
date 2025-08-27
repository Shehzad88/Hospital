import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const services = [
  {
    category: "Therapy Sessions",
    faqs: [
      "What types of therapy do you offer?",
      "How long does each therapy session last?",
    ],
  },
  {
    category: "Psychiatric Consultations",
    faqs: [
      "What happens during a psychiatric consultation?",
      "Do I need a referral for a psychiatric consultation?",
    ],
  },
  {
    category: "Mindfulness Workshops",
    faqs: [
      "What should I bring to a mindfulness workshop?",
      "Do I need prior experience in meditation to attend the workshops?",
    ],
  },
  {
    category: "Teletherapy Services",
    faqs: [
      "How do teletherapy sessions work?",
      "Are teletherapy sessions as effective as in-person sessions?",
    ],
  },
];

const ServiceFAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="max-w-7xl mx-auto py-16 px-4 grid grid-cols-1 md:grid-cols-2 gap-12">
      {services.map((service, idx) => (
        <div key={idx}>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            {service.category}
          </h3>
          <div className="space-y-3">
            {service.faqs.map((faq, i) => (
              <button
                key={i}
                className="flex items-center justify-between w-full bg-gray-50 px-4 py-3 rounded-lg hover:bg-gray-100"
              >
                <span className="text-sm text-gray-800 text-left">{faq}</span>
                <ChevronDown className="w-4 h-4 text-green-600" />
              </button>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default ServiceFAQs;
