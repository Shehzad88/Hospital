import React, { useState } from 'react';
import { FiPhone, FiMail, FiUser } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <nav className="relative flex items-center justify-between px-6 py-4 text-green-500 bg-gradient-to-b from-black to-transparent">
      {/* Logo */}
      <div className="flex items-center">
        <img src="/src/assets/logo (3).png" alt="Logo" className="h-16 w-auto" />
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex items-center gap-6 font-medium relative">
        <Link to="/" className="transition hover:text-green-600">Home</Link>
        <Link to="/about" className="transition hover:text-green-600">About</Link>

        {/* More Dropdown */}
        <div
          className="relative"
          onMouseEnter={() => setShowMore(true)}
          onMouseLeave={() => setShowMore(false)}
        >
          <span className="cursor-pointer transition hover:text-green-600">More</span>

          {showMore && (
            <div className="absolute top-3 left-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-10">
              <Link
                to="/help"
                className="block px-4 py-2 text-black hover:bg-green-600 hover:text-white transition"
              >
                Help Center
              </Link>
              <Link
                to="/book-appointment"
                className="block px-4 py-2 text-black hover:bg-green-600 hover:text-white transition"
              >
                Book Appointment
              </Link>
              <Link
                to="/login"
                className="block px-4 py-2 text-black hover:bg-green-600 hover:text-white transition"
              >
                Login Portal
              </Link>
              <Link
                to="/gallery"
                className="block px-4 py-2 text-black hover:bg-green-600 hover:text-white transition"
              >
                Post Gallery
              </Link>
            </div>
          )}
        </div>

        <Link to="/contact" className="transition hover:text-green-600">Contact</Link>

        {/* Icons */}
        <div className="flex items-center gap-3">
          <Link to="/login">
            <div className="p-2 rounded-full bg-green-600 hover:bg-green-700 transition">
              <FiUser className="text-lg cursor-pointer text-white" />
            </div>
          </Link>
          <div className="p-2 rounded-full bg-green-600 hover:bg-green-700 transition">
            <FiPhone className="text-lg cursor-pointer text-white" />
          </div>
          <div className="p-2 rounded-full bg-green-600 hover:bg-green-700 transition">
            <FiMail className="text-lg cursor-pointer text-white" />
          </div>
        </div>
      </div>

      {/* Mobile Hamburger Menu */}
      <div className="md:hidden">
        <button className="text-green-800 text-2xl">☰</button>
      </div>
    </nav>
  );
};

export default Navbar;
