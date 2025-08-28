import React, { useState, useEffect, useRef } from 'react';
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

const initialMessages = [
  {
    id: 1,
    sender: 'patient',
    text: 'Hi Doctor, I just wanted to check in...',
    time: '11:12 AM',
  },
  {
    id: 2,
    sender: 'doctor',
    text: 'Fatigue and headaches can be caused by several things...',
    time: '11:20 AM',
  },
  {
    id: 3,
    sender: 'patient',
    text: 'I’ve been sleeping a little less...',
    time: '11:22 AM',
  },
];

const ChatUI = () => {
  const [selectedPatient, setSelectedPatient] = useState(patients[0]);
  const [messages, setMessages] = useState(initialMessages);
  const [newMessage, setNewMessage] = useState('');
  const navigate = useNavigate();
  const messagesEndRef = useRef(null);

  // Auto-scroll to bottom on new messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Send message handler
  const handleSend = () => {
    if (!newMessage.trim()) return;
    const msg = {
      id: messages.length + 1,
      sender: 'patient',
      text: newMessage,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };
    setMessages([...messages, msg]);
    setNewMessage('');
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
            <p className="font-semibold text-gray-700 mt-6">SYSTEM</p>
            <ul className="space-y-2">
              <li className="text-gray-600 cursor-pointer hover:text-blue-600">Help Center</li>
              <li className="text-gray-600 cursor-pointer hover:text-blue-600">Settings</li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Main Chat */}
      <div className="flex-1 flex flex-col">
        {/* Top Bar */}
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-semibold">Messages</h2>
          <div className="flex gap-4 text-gray-500 text-xl">
            <button aria-label="Search"><FaSearch /></button>
            <button aria-label="More options"><FaEllipsisV /></button>
          </div>
        </div>

        <div className="flex flex-1 overflow-hidden">
          {/* Contacts */}
          <div className="w-80 border-r overflow-y-auto">
            <div className="p-4 border-b">
              <h3 className="font-semibold text-gray-700 mb-2">Message Archived</h3>
              <p className="text-gray-500 text-sm">There are {patients.length} Contacts</p>
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

          {/* Chat Window */}
          <div className="flex-1 flex flex-col justify-between bg-gray-50">
            {/* Chat Header */}
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
              <div className="flex gap-4 text-gray-500 text-xl">
                <button aria-label="Search"><FaSearch /></button>
                <button aria-label="Emoji"><FaSmile /></button>
                <button aria-label="More options"><FaEllipsisV /></button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 p-6 overflow-y-auto flex flex-col gap-4">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`max-w-lg p-3 rounded-lg shadow ${
                    msg.sender === 'patient'
                      ? 'self-end bg-blue-100'
                      : 'self-start bg-white'
                  }`}
                >
                  {msg.text}
                  <p
                    className={`text-xs text-gray-400 mt-1 ${
                      msg.sender === 'patient' ? 'text-right' : ''
                    }`}
                  >
                    {msg.time}
                  </p>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="flex items-center p-4 border-t bg-white">
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Enter Message..."
                className="flex-1 p-2 border rounded-lg mr-4"
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              />
              <button aria-label="Emoji" className="mr-4 text-2xl text-gray-500">
                <FaSmile />
              </button>
              <button
                onClick={handleSend}
                aria-label="Send Message"
                className="text-2xl text-blue-500"
              >
                <FaPaperPlane />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatUI;
