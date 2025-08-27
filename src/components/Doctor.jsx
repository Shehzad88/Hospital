import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  FaBell,
  FaUserCircle,
  FaSearch,
  FaCalendarAlt,
  FaSignOutAlt,
} from 'react-icons/fa';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

// Chart data
const data = [
  { name: 'Jan', patients: 400 },
  { name: 'Feb', patients: 300 },
  { name: 'Mar', patients: 500 },
  { name: 'Apr', patients: 600 },
  { name: 'May', patients: 700 },
  { name: 'Jun', patients: 500 },
  { name: 'Jul', patients: 800 },
  { name: 'Aug', patients: 700 },
  { name: 'Sep', patients: 600 },
  { name: 'Oct', patients: 500 },
  { name: 'Nov', patients: 400 },
  { name: 'Dec', patients: 600 },
];

// Appointment data
const appointments = [
  { time: '09:00 - 09:30 am', name: 'Sultan Ramlod fensius' },
  { time: '09:30 - 10:00 am', name: 'Alexi Siti' },
  { time: '11:00 - 11:30 am', name: 'Mariana Dolla' },
  { time: '11:30 - 11:45 am', name: 'Kulbot Ronay' },
];

const Doctor = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-gray-100 p-6 flex flex-col justify-between">
        <div>
          <div className="mb-12">
            <div className="w-12 h-12 bg-gray-300 flex items-center justify-center rounded-full mx-auto">
              <FaUserCircle size={32} />
            </div>
          </div>
          <nav className="space-y-4">
            <p className="font-semibold text-gray-700">GENERAL</p>
            <ul className="space-y-2">
              <li
                className={`cursor-pointer ${
                  location.pathname === '/doctor' ? 'text-blue-500 font-semibold' : 'text-gray-600'
                }`}
                onClick={() => navigate('/doctor')}
              >
                Dashboard
              </li>
              <li className="text-gray-600 cursor-pointer">Activity</li>
              <li className="text-gray-600 cursor-pointer">Appointments</li>
              <li
                className={`cursor-pointer ${
                  location.pathname === '/message' ? 'text-blue-500 font-semibold' : 'text-gray-600'
                }`}
                onClick={() => navigate('/message')}
              >
                Message
              </li>
              <li className="text-gray-600 cursor-pointer">Schedule</li>
            </ul>
            <p className="font-semibold text-gray-700 mt-6">SYSTEM</p>
            <ul className="space-y-2">
              <li className="text-gray-600 cursor-pointer">Help Center</li>
              <li className="text-gray-600 cursor-pointer">Settings</li>
            </ul>
          </nav>
        </div>
        <button className="flex items-center gap-2 text-red-500 cursor-pointer">
          <FaSignOutAlt /> Logout
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-white p-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold">Hallo, Dr. Alice</h1>
            <p className="text-gray-500">Save the person who needs your help!</p>
          </div>
          <div className="flex items-center gap-4">
            <FaSearch className="text-gray-500 text-xl cursor-pointer" />
            <FaBell className="text-gray-500 text-xl cursor-pointer" />
            <div className="w-10 h-10 bg-gray-300 flex items-center justify-center rounded-full">
              <FaUserCircle size={24} />
            </div>
          </div>
        </div>

        {/* Training Card */}
        <div className="bg-yellow-100 p-4 rounded-lg mb-8 flex justify-between items-center">
          <div>
            <p className="font-semibold">Medical training</p>
            <p className="text-gray-500">The next training schedule, which must be followed!</p>
            <p className="text-sm mt-1">Medical training with Dr. Richard</p>
            <button className="mt-2 bg-blue-500 text-white px-4 py-1 rounded-md">Add to Schedule</button>
          </div>
          <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full shadow">
            <FaCalendarAlt className="text-blue-500 text-2xl" />
          </div>
        </div>

        {/* Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-white border p-4 rounded-lg shadow">
            <p className="text-gray-500">Total Patient</p>
            <h2 className="text-2xl font-bold">831</h2>
            <p className="text-green-500 text-sm">+25% from last week</p>
          </div>
          <div className="bg-white border p-4 rounded-lg shadow">
            <p className="text-gray-500">Recovered</p>
            <h2 className="text-2xl font-bold">627</h2>
            <p className="text-green-500 text-sm">+25% from last week</p>
          </div>
          <div className="bg-white border p-4 rounded-lg shadow">
            <p className="text-gray-500">Operation</p>
            <h2 className="text-2xl font-bold">199</h2>
            <p className="text-orange-500 text-sm">+25% from last week</p>
          </div>
        </div>

        {/* Statistics Chart */}
        <div className="bg-white border p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">Statistics Patient</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="patients" stroke="#8884d8" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="w-80 bg-gradient-to-b from-blue-900 to-blue-700 text-white p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-semibold">Appointments</h3>
          <p className="text-sm">May, 11 2025</p>
        </div>

        {/* Date Selector */}
        <div className="flex gap-2 mb-4 overflow-x-auto">
          {[13, 14, 15, 16, 17, 18].map((day) => (
            <div
              key={day}
              className={`flex flex-col items-center px-3 py-2 rounded-lg cursor-pointer ${
                day === 15 ? 'bg-white text-blue-900' : 'bg-blue-800'
              }`}
            >
              <span className="text-sm">{['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][day - 13]}</span>
              <span className="font-bold text-lg">{day}</span>
            </div>
          ))}
        </div>

        {/* Appointments List */}
        <div className="space-y-4">
          {appointments.map((appt, index) => (
            <div key={index} className="bg-blue-800 p-4 rounded-lg">
              <h4 className="font-semibold">{appt.name}</h4>
              <p className="text-sm">{appt.time}</p>
            </div>
          ))}
          <div className="bg-blue-800 p-4 rounded-lg text-center text-sm italic">Have a Break</div>
        </div>
      </div>
    </div>
  );
};

export default Doctor;
