import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaGoogle, FaEye } from 'react-icons/fa';
import Navbar from '/src/components/Navbar.jsx';
import Footer from '/src/components/Footer.jsx';

const LoginContainer = () => {
  const navigate = useNavigate();

  const handleDoctorClick = () => navigate('/doctor');
  const handlePatientClick = () => navigate('/patient');

  return (
    <div className="bg-white shadow-lg p-8 rounded-lg w-full max-w-md mx-auto z-20 relative">
      {/* Doctor/Patient Buttons */}
      <div className="flex justify-center gap-4 mb-6">
        <button
          onClick={handleDoctorClick}
          className="bg-green-500 hover:bg-green-600 cursor-pointer text-white font-semibold px-6 py-2 rounded-full w-1/2"
        >
          DOCTOR
        </button>
        <button
          onClick={handlePatientClick}
          className="bg-black hover:bg-black/80 cursor-pointer text-white font-semibold px-6 py-2 rounded-full w-1/2"
        >
          PATIENT
        </button>
      </div>

      {/* Google Login Button */}
      <button className="flex items-center justify-center cursor-pointer hover:bg-blue-700 gap-2 w-full bg-blue-600 text-white px-4 py-2 rounded-md mb-4">
        <FaGoogle /> Login with Google
      </button>

      {/* OR separator */}
      <div className="flex items-center mb-4">
        <hr className="flex-grow border-gray-300" />
        <span className="px-2 text-gray-500">or</span>
        <hr className="flex-grow border-gray-300" />
      </div>

      {/* Login Form */}
      <form className="space-y-4">
        <div>
          <label className="block text-sm text-gray-700">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 border rounded-md text-sm"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-700">Password</label>
          <div className="relative">
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-md text-sm"
            />
            <FaEye className="absolute right-3 top-3 text-gray-400 cursor-pointer" />
          </div>
        </div>

        <div className="flex items-center gap-2 text-sm">
          <input type="checkbox" id="remember" className="accent-green-500" />
          <label htmlFor="remember">Remember me</label>
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 cursor-pointer text-white py-2 rounded-md hover:bg-green-700"
        >
          Sign in
        </button>

        {/* Additional Links */}
        <div className="text-center mt-2 text-sm text-gray-500">
          <p className="underline cursor-pointer">Forgot your password?</p>
          <p>
            Don’t have an account?{" "}
            <Link to="/signup" className="text-blue-500 underline cursor-pointer">
              Sign up
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

const LoginPortal = () => {
  return (
    <div className="relative min-h-screen bg-gray-100">
      {/* Navbar */}
      <div className="absolute top-0 left-0 w-full z-30">
        <Navbar />
      </div>

      {/* Hero Image */}
      <div className="relative w-full h-[220px]">
        <img
          src="/src/assets/15.jpg"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10" />
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <h1 className="text-white text-4xl">Login Portal</h1>
        </div>
      </div>

      {/* Login Section */}
      <div className="mt-32 px-4 flex justify-center z-40 relative">
        <LoginContainer />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LoginPortal;
