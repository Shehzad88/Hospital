import React from 'react';
import Navbar from '/src/components/Navbar.jsx';
import { FaGoogle, FaEye } from 'react-icons/fa';
import Footer from '/src/components/Footer.jsx';
import { Link } from 'react-router-dom';


// Login Container (Signup Form)
const LoginContainer = () => {
  return (
    <div className="bg-white shadow-lg p-8 rounded-2xl w-full max-w-md mx-auto -mt-48 z-20 relative">
      {/* Toggle Buttons */}
      <div className="flex  gap-4 mb-6">
        <h1 className='font-bold text-xl'>Sign up to Flamsafe</h1>
      </div>

      {/* Google Login */}
      <button className="flex items-center cursor-pointer justify-center gap-2 w-full bg-blue-600 text-white px-4 py-2 rounded-md mb-4 hover:bg-blue-700">
        <FaGoogle /> Sign up with Google
      </button>

      {/* Divider */}
      <div className="flex items-center mb-4">
        <hr className="flex-grow border-gray-300" />
        <span className="px-2 text-gray-500 text-sm">or</span>
        <hr className="flex-grow border-gray-300" />
      </div>

      {/* Signup Form */}
      <form className="space-y-4">
        <div>
          <label className="block text-sm text-gray-700">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 border rounded-md text-sm"
          />
        </div>

        <div className="flex gap-2">
          <input
            type="text"
            placeholder="First Name"
            className="w-1/2 px-4 py-2 border rounded-md text-sm"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="w-1/2 px-4 py-2 border rounded-md text-sm"
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

        <div className="flex items-start gap-2 text-sm">
          <input type="checkbox" id="terms" className="accent-green-500 mt-1" />
          <label htmlFor="terms" className="text-gray-600">
            By clicking Create account, I agree that I have read and accepted the{' '}
            <span className="text-blue-500 underline cursor-pointer">Terms of Use</span> and{' '}
            <span className="text-blue-500 underline cursor-pointer">Privacy Policy</span>.
          </label>
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 cursor-pointer text-white py-2 rounded-md hover:bg-green-700"
        >
          Sign up
        </button>

        <div className="text-center mt-2 text-sm text-gray-500">
          Already have an account?{' '}
         <Link to="/login">
  <span className="text-blue-500 underline cursor-pointer">Sign in</span>
</Link>
        </div>
      </form>

      <p className="text-xs text-center mt-6 text-gray-400">
        Protected by reCAPTCHA and subject to the Cuboid Privacy Policy and Terms of Service.
      </p>
    </div>
  );
};

// Signup Page Layout
const Signup = () => {
  return (
    <div className="relative min-h-screen bg-gray-50">
      {/* Navbar */}
      <div className="absolute top-0 left-0 w-full z-30">
        <Navbar />
      </div>

      {/* Background Section */}
      <div className="relative w-full h-[220px]">
        <img
          src="/src/assets/15.jpg"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10" />
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <h1 className="text-white text-4xl font-bold">Sign Up</h1>
        </div>
      </div>

      {/* Signup Form */}
      <div className="flex justify-center mt-32 px-4 z-40 relative">
        <LoginContainer />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Signup;
