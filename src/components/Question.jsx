import React, { useState } from "react";
import doctorImg from "../assets/4.jpg"; // Replace with your image

const faqs = [
  {
    question: "How can I schedule an appointment?",
    answer:
      "Vulputate bibendum erat morbi interdum diam sit. Eu sit dolor vel sodales sed ut. Ac fringilla fames eget a aliquet. Gravida placerat viverra purus sed ac ultrices sem nulla.",
  },
  {
    question: "Do you accept insurance?",
    answer:
      "Yes, we accept most major insurance providers. Please contact us to verify your coverage before scheduling.",
  },
  {
    question: "What types of payment do you accept?",
    answer:
      "We accept cash, credit/debit cards, and online payments. Payment is due at the time of service unless other arrangements are made.",
  },
  {
    question: "Are your services confidential?",
    answer:
      "Absolutely. All services are completely confidential and we follow strict data privacy and patient confidentiality guidelines.",
  },
];

const infoCards = [
  {
    title: "How to Schedule an Appointment",
    description:
      "Id nisl lacus penatibus bibendum vitae lectus et a. Lorem nulla nulla nulla faucibus amet feugiat ultricies. Posuere arcu enim.",
  },
  {
    title: "Services Offered at FlamSafe",
    description:
      "Id nisl lacus penatibus bibendum vitae lectus et a. Lorem nulla nulla nulla faucibus amet feugiat ultricies. Posuere arcu enim.",
  },
  {
    title: "Understanding Mental Health Conditions",
    description:
      "Id nisl lacus penatibus bibendum vitae lectus et a. Lorem nulla nulla nulla faucibus amet feugiat ultricies. Posuere arcu enim.",
  },
];

const Question = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="flex flex-col items-center justify-center px-4 py-16 max-w-7xl mx-auto">
      {/* Top: FAQ Section */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 w-full">
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
                  <span className="ml-4">
                    {activeIndex === index ? "▲" : "▼"}
                  </span>
                </button>
                {activeIndex === index && faq.answer && (
                  <div className="px-6 pb-4 text-sm text-gray-600">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right: Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={doctorImg}
            alt="Doctor holding a question mark"
            className="rounded-2xl max-w-sm h-[400px] md:max-w-md"
          />
        </div>
      </div>

      {/* Bottom: Info Cards */}
      <div className="flex justify-center gap-30  flex-wrap mt-16 w-full">
        {infoCards.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-6 w-80 cursor-pointer hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center justify-center w-10 h-10 bg-green-600 rounded-full text-white text-lg font-semibold mb-4">
              ?
            </div>
            <h3 className="text-lg font-semibold mb-2 text-gray-900">
              {card.title}
            </h3>
            <p className="text-sm text-gray-600">{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Question;