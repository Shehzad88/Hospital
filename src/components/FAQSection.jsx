import React, { useState } from "react";
import doctorImg from "../assets/7.jpg"; // Replace with your image

const faqs = [
  {
    question: "How can I schedule an appointment?",
    answer:
      "Vulputate bibendum erat morbi interdum diam sit. Eu sit dolor vel sodales sed ut. Ac fringilla fames eget a aliquet. Gravida placerat viverra purus sed ac ultrices sem nulla.",
  },
  {
    question: "Do you accept insurance?",
    answer:
      "Yes, we accept a wide range of insurance providers. Please contact our support team to confirm if your provider is accepted.",
  },
  {
    question: "What types of payment do you accept?",
    answer:
      "We accept credit/debit cards, PayPal, bank transfers, and some mobile payment options.",
  },
  {
    question: "Are your services confidential?",
    answer:
      "Absolutely. We ensure all your information and sessions are completely private and handled with confidentiality.",
  },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="flex flex-col md:flex-row items-start justify-between gap-10 px-4 py-16 max-w-7xl mx-auto">
      {/* Left: FAQ Accordion */}
      <div className="w-full md:w-1/2">
        <p className="text-sm text-green-600 font-semibold mb-2">🌟 FAQ</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Your Questions Answered</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border rounded-lg overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className={`w-full text-left px-6 py-4 font-medium text-sm md:text-base flex justify-between items-center ${
                  activeIndex === index
                    ? "bg-green-100 text-green-800"
                    : "bg-gray-50 text-gray-800"
                }`}
              >
                {faq.question}
                <span className="ml-4">{activeIndex === index ? "▲" : "▼"}</span>
              </button>
              {activeIndex === index && faq.answer && (
                <div className="px-6 pb-4 text-sm text-gray-600">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Right: Image */}
      <div className="w-full md:w-1/2 flex justify-center flex-shrink-0">
        <img
          src={doctorImg}
          alt="Doctor holding a question mark"
          className="rounded-2xl max-w-sm h-[450px] md:max-w-md object-cover"
        />
      </div>
    </section>
  );
};

export default FAQSection;
