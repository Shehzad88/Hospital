import React, { useState } from 'react';

const Chatbox = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Sticky Chat Icon */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg cursor-pointer transition"
      >
        💬
      </div>

      {/* Popup Box */}
      {isOpen && (
        <div className="fixed bottom-20 right-6 z-50 w-80 bg-white rounded-lg shadow-2xl overflow-hidden border border-gray-200">
          <div className="bg-green-500 text-white px-4 py-2 font-semibold">
            Mental Health Chatbot
            <button
              onClick={() => setIsOpen(false)}
              className="float-right text-white font-bold cursor-pointer"
            >
              ×
            </button>
          </div>
          <div className="p-4 space-y-3">
            <p className="text-sm text-gray-600">Select a question to start:</p>
            <button className="w-full text-left bg-gray-100 cursor-pointer hover:bg-green-100 px-4 py-2 rounded-md text-sm">
              What is mental health?
            </button>
            <button className="w-full text-left bg-gray-100 cursor-pointer hover:bg-green-100 px-4 py-2 rounded-md text-sm">
              How can I improve my mood?
            </button>
            <button className="w-full text-left bg-gray-100 cursor-pointer hover:bg-green-100 px-4 py-2 rounded-md text-sm">
              When should I seek professional help?
            </button>
            <button className="w-full text-left bg-gray-100 cursor-pointer hover:bg-green-100 px-4 py-2 rounded-md text-sm">
              Do stress and anxiety go away?
            </button>
            <button className="w-full text-left bg-gray-100 cursor-pointer hover:bg-green-100 px-4 py-2 rounded-md text-sm">
              Where are the resources for mental health support?
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbox;
