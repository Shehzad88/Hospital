import React, { useState } from "react";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import Input from "@mui/material/Input";
import LinearProgress from "@mui/material/LinearProgress";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import { Link } from "react-router-dom";

const PatientPage = () => {
  const [tabValue, setTabValue] = useState("Counselling");

  const tabs = ["Profile", "Clinical Record", "Counselling", "Documents", "Insurance"];
  const sessions = [
    {
      title: "Introductory Session",
      type: "Session Type",
      duration: 19,
      startDate: "13/05/2025",
      progress: 70,
    },
    {
      title: "Cognitive Behavioral Therapy",
      type: "Session Type",
      duration: 19,
      startDate: "13/05/2025",
      progress: 50,
    },
    {
      title: "Stress Management Techniques",
      type: "Session Type",
      duration: 19,
      startDate: "13/05/2025",
      progress: 40,
    },
    {
      title: "Mindfulness Practice",
      type: "Session Type",
      duration: 19,
      startDate: "13/05/2025",
      progress: 80,
    },
  ];

  return (
    <div className="flex bg-gray-100 min-h-screen text-gray-800">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg p-6 flex flex-col justify-between">
        <div>
          <div className="w-12 h-12 bg-gray-300 rounded-md mb-6 mx-auto flex items-center justify-center">
            <PhotoCameraIcon className="text-gray-600" />
          </div>
          <ul className="space-y-4 text-sm font-medium">
            <li>
              <Link to="/" className="text-blue-600">
                Dashboard
              </Link>
            </li>
            <li className="text-gray-600 hover:text-blue-600 cursor-pointer">Schedule</li>
            <li>
              <Link
                to="/chat"
                className="text-gray-600 hover:text-blue-600 cursor-pointer"
              >
                Message with Doctor
              </Link>
            </li>
            <li className="text-gray-600 hover:text-blue-600 cursor-pointer">Documents</li>
            <li className="text-gray-600 hover:text-blue-600 cursor-pointer">Settings</li>
          </ul>
        </div>
        <button className="flex items-center justify-center bg-blue-600 text-white py-2 rounded-md">
          Logout
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <div>
            <h1 className="text-xl font-bold">Welcome, Amanda</h1>
            <p className="text-sm text-gray-500">Tue, 23 March 2025</p>
          </div>
          <Input placeholder="Search" className="w-64" />
        </div>

        <button className="text-blue-600 mb-4">&larr; Back</button>

        {/* Patient Info */}
        <div className="bg-white p-6 rounded-xl shadow mb-6">
          <div className="flex justify-between items-start">
            <div className="flex gap-4">
              <div className="w-14 h-14 bg-gray-300 rounded-full flex items-center justify-center">
                <PhotoCameraIcon className="text-gray-600" />
              </div>
              <div>
                <p className="font-semibold text-sm">Joshua Willy</p>
                <p className="text-sm text-gray-500">Medical number: JJ1245679LK</p>
                <p className="text-sm text-blue-600">
                  Diagnosis: <span className="underline cursor-pointer">Gastritis</span>,{" "}
                  <span className="underline cursor-pointer">Chronic cholecystitis</span>
                </p>
              </div>
            </div>
            <div className="w-64 bg-gray-50 p-4 rounded-md text-sm text-gray-500">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry’s standard.
              </p>
            </div>
          </div>

          {/* Tabs */}
          <div className="mt-6 flex gap-2">
            {tabs.map((tab, i) => (
              <button
                key={i}
                onClick={() => setTabValue(tab)}
                className={`px-4 py-2 text-sm rounded-md ${
                  tab === tabValue
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-600"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Counselling Section */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Counselling</h2>
          <Button variant="contained" color="primary">
            + Add Counselling Session
          </Button>
        </div>

        <div className="space-y-4">
          {sessions.map((session, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row sm:items-center justify-between bg-white p-4 rounded-xl shadow"
            >
              <div className="flex items-center gap-4">
                <Checkbox />
                <div className="w-12 h-12 bg-gray-300 rounded flex items-center justify-center">
                  <PhotoCameraIcon className="text-gray-600" />
                </div>
                <div>
                  <p className="font-medium">{session.title}</p>
                  <p className="text-xs text-gray-500">{session.type}</p>
                  <button className="text-blue-600 text-xs mt-1">View Details</button>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-4 mt-4 sm:mt-0">
                <p className="text-sm text-gray-500">
                  Started date: {session.startDate}
                </p>
                <div className="w-40">
                  <LinearProgress
                    variant="determinate"
                    value={session.progress}
                    sx={{ height: 8, borderRadius: 4 }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PatientPage;
