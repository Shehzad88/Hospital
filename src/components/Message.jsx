import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FaSearch,
  FaEllipsisV,
  FaUserCircle,
  FaPaperPlane,
  FaSmile,
} from 'react-icons/fa';

const initialPatients = [
  { id: 1, name: 'Patient 1', lastMessage: 'Absolutely, that would be great!', time: '1 hour ago', unread: 0 },
  { id: 2, name: 'Patient 2', lastMessage: "There's exciting news today!", time: '1 hour ago', unread: 2 },
  { id: 3, name: 'Patient 3', lastMessage: "Let's tighten our schedule...", time: '1 hour ago', unread: 0 },
  { id: 4, name: 'Patient 4', lastMessage: 'Thank you for your help...', time: '1 hour ago', unread: 3 },
  { id: 5, name: 'Patient 5', lastMessage: 'Not too bad, just trying to work...', time: '1 hour ago', unread: 0 },
  { id: 6, name: 'Patient 6', lastMessage: 'Any plans for the weekend?', time: '1 hour ago', unread: 4 },
  { id: 7, name: 'Patient 7', lastMessage: "It's been a while...", time: '1 hour ago', unread: 0 },
  { id: 8, name: 'Patient 8', lastMessage: 'Have you sent the document?', time: '1 hour ago', unread: 5 },
  { id: 9, name: 'Patient 9', lastMessage: 'Urgent documents needed...', time: '1 hour ago', unread: 3 },
  { id: 10, name: 'Patient 10', lastMessage: 'Discuss plans tomorrow?', time: '1 hour ago', unread: 0 },
];

const defaultChat = [
  {
    sender: 'patient',
    message: `Hi Doctor, I've been feeling more tired than usual. Should I be concerned?`,
    time: '11:12 AM',
  },
  {
    sender: 'doctor',
    message:
      'Fatigue and headaches can be caused by several things. Any changes in sleep or eating habits?',
    time: '11:20 AM',
  },
  {
    sender: 'patient',
    message: `Yes, I've been sleeping less and skipping meals.`,
    time: '11:22 AM',
  },
  {
    sender: 'doctor',
    message:
      'Try to rest, hydrate, and eat well. Also track headaches: time, intensity, and triggers.',
    time: '11:30 AM',
  },
  {
    sender: 'patient',
    message: 'Okay, I’ll do that. Should I avoid screen time for now?',
    time: '11:32 AM',
  },
];

const Message = () => {
  const [patients, setPatients] = useState(initialPatients);
  const [selectedPatientId, setSelectedPatientId] = useState(patients[0].id);
  const [messagesMap, setMessagesMap] = useState(
    Object.fromEntries(patients.map((p) => [p.id, [...defaultChat]]))
  );
  const [inputMessage, setInputMessage] = useState('');

  const selectedMessages = messagesMap[selectedPatientId] || [];
  const selectedPatient = patients.find((p) => p.id === selectedPatientId);

  const handleSendMessage = () => {
    if (inputMessage.trim() === '') return;

    const newMessage = {
      sender: 'doctor',
      message: inputMessage.trim(),
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    const updatedMessages = {
      ...messagesMap,
      [selectedPatientId]: [...selectedMessages, newMessage],
    };

    setMessagesMap(updatedMessages);
    setInputMessage('');
  };

  return (
    <div className="flex h-screen">
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
              <li className="text-gray-600 cursor-pointer">
  <Link to="/doctor">Dashboard</Link>
</li>
              <li className="text-gray-600 cursor-pointer">Activity</li>
              <li className="text-gray-600 cursor-pointer">Appointments</li>
              <li className="text-blue-500 font-semibold cursor-pointer">Message</li>
              <li className="text-gray-600 cursor-pointer">Schedule</li>
            </ul>
            <p className="font-semibold text-gray-700 mt-6">SYSTEM</p>
            <ul className="space-y-2">
              <li className="text-gray-600 cursor-pointer">Help Center</li>
              <li className="text-gray-600 cursor-pointer">Settings</li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Chat Section */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-semibold">Messages</h2>
          <div className="flex gap-4 text-gray-500 text-xl cursor-pointer">
            <FaSearch />
            <FaEllipsisV />
          </div>
        </div>

        {/* Chat Layout */}
        <div className="flex flex-1 overflow-hidden">
          {/* Patient List */}
          <div className="w-80 border-r overflow-y-auto">
            <div className="p-4 border-b">
              <h3 className="font-semibold text-gray-700 mb-2">Message Archived</h3>
              <p className="text-gray-500 text-sm">{patients.length} Contacts</p>
            </div>
            {patients.map((patient) => (
              <div
                key={patient.id}
                className={`flex items-center justify-between p-4 cursor-pointer hover:bg-gray-100 ${
                  selectedPatientId === patient.id ? 'bg-gray-200' : ''
                }`}
                onClick={() => setSelectedPatientId(patient.id)}
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
                    <span className="bg-red-500 text-white text-xs rounded-full px-2">{patient.unread}</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Chat Window */}
          <div className="flex-1 flex flex-col justify-between bg-gray-50">
            {/* Chat Header */}
            <div className="flex justify-between items-center p-4 border-b bg-white">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                  <FaUserCircle size={20} />
                </div>
                <div>
                  <h4 className="font-semibold">{selectedPatient?.name}</h4>
                  <p className="text-sm text-green-500">Active Now</p>
                </div>
              </div>
              <div className="flex gap-4 text-gray-500 text-xl cursor-pointer">
                <FaSearch />
                <FaSmile />
                <FaEllipsisV />
              </div>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 p-6 overflow-y-auto flex flex-col gap-4">
              {selectedMessages.map((msg, index) => (
                <div
                  key={index}
                  className={`max-w-lg p-3 rounded-lg shadow ${
                    msg.sender === 'doctor'
                      ? 'self-end bg-blue-100'
                      : 'self-start bg-white'
                  }`}
                >
                  {msg.message}
                  <p
                    className={`text-xs text-gray-400 mt-1 ${
                      msg.sender === 'doctor' ? 'text-right' : ''
                    }`}
                  >
                    {msg.time}
                  </p>
                </div>
              ))}
            </div>

            {/* Message Input */}
            <div className="flex items-center p-4 border-t bg-white">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Enter Message..."
                className="flex-1 p-2 border rounded-lg mr-4"
              />
              <FaSmile className="text-2xl text-gray-500 mr-4 cursor-pointer" />
              <FaPaperPlane
                className="text-2xl text-blue-500 cursor-pointer"
                onClick={handleSendMessage}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
