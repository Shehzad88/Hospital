import React, { useState } from 'react';

const AppointmentForm = () => {
  const [activeTab, setActiveTab] = useState('General');

  const tabs = ['General', 'Periodic', 'Online', 'In-House'];

  return (
    <div className="min-h-screen bg-white px-8 py-12 font-sans">
      <h1 className="text-3xl font-semibold text-center mb-8">Schedule A Session Today</h1>

      {/* Tabs */}
      <div className="flex justify-center space-x-8 border-b border-gray-300 mb-10">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-2 text-lg font-medium relative ${
              activeTab === tab ? 'text-green-600 border-b-2 border-green-600' : 'text-gray-700'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Form */}
      <form className="space-y-10 max-w-6xl mx-auto">
        <div>
          <h2 className="text-xl font-semibold mb-4">Patient Details*</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input type="text" placeholder="First name" className="input" />
            <input type="text" placeholder="Last name" className="input" />
            <input type="text" placeholder="Age" className="input" />
            <input type="text" placeholder="Mobile number" className="input" />
            <input type="email" placeholder="Email address" className="input" />
          </div>
          <input type="text" placeholder="Address" className="input mt-4 w-full" />
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Appointment Details*</h2>
          <input type="text" placeholder="Type of service needed" className="input w-full mb-4" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="input flex items-center gap-2">
              <span role="img" aria-label="location">📍</span> Islamabad, Sector I-8
            </div>
            <div className="input flex items-center gap-2">
              <span role="img" aria-label="calendar">📅</span> 12 July 2025
            </div>
            <div className="input flex items-center gap-2">
              <span role="img" aria-label="clock">⏱</span> 02:00 PM - 03:00 PM
            </div>
          </div>

          <textarea
            placeholder="Additional Message"
            className="input w-full mt-4 h-24 resize-none"
          ></textarea>
        </div>

        <div className="flex justify-between gap-4">
          <button type="button" className="w-full py-3 cursor-pointer bg-lime-600 text-white font-medium hover:bg-lime-700 transition rounded-md">
            Preview
          </button>
          <button type="button" className="w-full py-3 cursor-pointer bg-lime-600 text-white font-medium hover:bg-lime-700 transition rounded-md">
            Download
          </button>
          <button type="submit" className="w-full py-3 cursor-pointer bg-black text-white font-medium hover:bg-gray-800 transition rounded-md">
            Book an appointment
          </button>
        </div>
      </form>
    </div>
  );
};

export default AppointmentForm;