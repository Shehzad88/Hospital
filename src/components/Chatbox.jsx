import React, { useState } from 'react';

const Chatbox = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Sticky Chat Icon */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg cursor-pointer transition-transform transform hover:scale-110"
        aria-label="Open Chatbox"
      >
        💬
      </button>

      {/* Popup Box */}
      {isOpen && (
        <div className="fixed bottom-20 right-6 z-50 w-80 bg-white rounded-lg shadow-2xl overflow-hidden border border-gray-200 animate-fadeIn">
          {/* Header */}
          <div className="bg-green-500 text-white px-4 py-2 font-semibold flex justify-between items-center">
            <span>Mental Health Chatbot</span>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white font-bold cursor-pointer"
              aria-label="Close Chatbox"
            >
              ×
            </button>
          </div>

          {/* Questions */}
          <div className="p-4 space-y-3">
            <p className="text-sm text-gray-600">Select a question to start:</p>
            {[
              "What is mental health?",
              "How can I improve my mood?",
              "When should I seek professional help?",
              "Do stress and anxiety go away?",
              "Where are the resources for mental health support?"
            ].map((q, idx) => (
              <button
                key={idx}
                className="w-full text-left bg-gray-100 cursor-pointer hover:bg-green-100 px-4 py-2 rounded-md text-sm transition"
              >
                {q}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbox;
