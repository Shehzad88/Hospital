import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSearch, FaEllipsisV, FaUserCircle, FaPaperPlane, FaSmile } from 'react-icons/fa';

const patients = [
  {
    id: 1,
    name: 'Doctor',
    lastMessage: 'Absolutely, that would be great! I could use another...',
    time: '1 hour ago',
    unread: 0,
  },
];

const ChatUI = () => {
  const [selectedPatient, setSelectedPatient] = useState(patients[0]);
  const navigate = useNavigate();

  return (
    <div className="flex h-screen">
      
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
                className="text-gray-600 cursor-pointer hover:text-blue-600"
                onClick={() => navigate('/patient')}
              >
                Dashboard
              </li>
              <li className="text-gray-600 cursor-pointer hover:text-blue-600">Activity</li>
              <li className="text-gray-600 cursor-pointer hover:text-blue-600">Appointments</li>
              <li className="text-blue-500 font-semibold cursor-pointer hover:text-blue-600">Message</li>
              <li className="text-gray-600 cursor-pointer hover:text-blue-600">Schedule</li>
            </ul>
            <p className="font-semibold text-gray-700 mt-6 hover:text-blue-600">SYSTEM</p>
            <ul className="space-y-2">
              <li className="text-gray-600 cursor-pointer hover:text-blue-600">Help Center</li>
              <li className="text-gray-600 cursor-pointer hover:text-blue-600">Settings</li>
            </ul>
          </nav>
        </div>
      </div>

     
      <div className="flex-1 flex flex-col">
        
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-semibold">Messages</h2>
          <div className="flex gap-4 text-gray-500 text-xl cursor-pointer">
            <FaSearch />
            <FaEllipsisV />
          </div>
        </div>

       
        <div className="flex flex-1 overflow-hidden">
          
          <div className="w-80 border-r overflow-y-auto">
            <div className="p-4 border-b">
              <h3 className="font-semibold text-gray-700 mb-2">Message Archived</h3>
              <p className="text-gray-500 text-sm">There are 10 Contacts</p>
            </div>
            {patients.map((patient) => (
              <div
                key={patient.id}
                className={`flex items-center justify-between p-4 cursor-pointer hover:bg-gray-100 ${
                  selectedPatient.id === patient.id ? 'bg-gray-200' : ''
                }`}
                onClick={() => setSelectedPatient(patient)}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                    <FaUserCircle size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold">{patient.name}</h4>
                    <p className="text-sm text-gray-500 truncate w-40">{patient.lastMessage}</p>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <p className="text-xs text-gray-400">{patient.time}</p>
                  {patient.unread > 0 && (
                    <span className="bg-red-500 text-white text-xs rounded-full px-2">
                      {patient.unread}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          
          <div className="flex-1 flex flex-col justify-between bg-gray-50">
            
            <div className="flex justify-between items-center p-4 border-b bg-white">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                  <FaUserCircle size={20} />
                </div>
                <div>
                  <h4 className="font-semibold">{selectedPatient.name}</h4>
                  <p className="text-sm text-green-500">Active Now</p>
                </div>
              </div>
              <div className="flex gap-4 text-gray-500 text-xl cursor-pointer">
                <FaSearch />
                <FaSmile />
                <FaEllipsisV />
              </div>
            </div>

            
            <div className="flex-1 p-6 overflow-y-auto flex flex-col gap-4">
              <div className="self-start max-w-lg bg-white p-3 rounded-lg shadow">
                Hi Doctor, I just wanted to check in...
                <p className="text-xs text-gray-400 mt-1">11:12 AM</p>
              </div>
              <div className="self-start max-w-lg bg-white p-3 rounded-lg shadow">
                Fatigue and headaches can be caused by several things...
                <p className="text-xs text-gray-400 mt-1">11:20 AM</p>
              </div>
              <div className="self-end max-w-lg bg-blue-100 p-3 rounded-lg shadow">
                I’ve been sleeping a little less...
                <p className="text-xs text-gray-400 mt-1 text-right">11:22 AM</p>
              </div>
            </div>

            
            <div className="flex items-center p-4 border-t bg-white">
              <input
                type="text"
                placeholder="Enter Message..."
                className="flex-1 p-2 border rounded-lg mr-4"
              />
              <FaSmile className="text-2xl text-gray-500 mr-4 cursor-pointer" />
              <FaPaperPlane className="text-2xl text-blue-500 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatUI;
