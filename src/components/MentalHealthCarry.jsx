import React from "react";
import { MessageSquareQuote } from "lucide-react";

const MentalHealthCare = () => {
  return (
    <div className="min-h-screen bg-[#e3efe7] flex items-center justify-center p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full items-center">
        
        <div className="overflow-hidden rounded-2xl shadow-md">
          <img
            src="/src/assets/48.jpg"
            alt="Mental health support"
            className="w-full h-[520px] object-cover"
          />
        </div>

        
        <div className="space-y-6">
          <h1 className="text-3xl md:text-4xl font-semibold leading-snug text-gray-800">
            Comprehensive & Personalized <br />
            Care For Your Mental Wellness
          </h1>
          <p className="text-gray-700">
            Your mental health matters. We're here to support you through
            stress, anxiety, depression, and your journey to a balanced life.
          </p>

          <div className="bg-white border-l-4 border-[#ff7c73] shadow-sm p-4 flex items-start gap-4 rounded-md">
            <MessageSquareQuote className="text-[#ff7c73]" />
            <p className="text-gray-700">
              “Taking care of your mental health isn't a sign of weakness,
              it's a step toward strength, clarity, and healing.”
            </p>
          </div>

          <div className="space-y-1">
            <p className="text-xl italic font-semibold">K.P. Chisholm</p>
            <p className="text-sm font-medium text-gray-600">
              Ayesha Khan <span className="uppercase text-xs">Psychologist</span>
            </p>
          </div>

          <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-900">
            Book Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default MentalHealthCare;
