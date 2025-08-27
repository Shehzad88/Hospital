import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#e2f0dc] px-8 py-10 text-sm text-gray-700">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8">
        {/* Left section */}
        <div className="md:w-1/3">
          <img src="/src/assets/logo (3).png" alt="FlamSafe Logo" className="mb-3 w-32" />
          <p className="mb-4">Feel free to call us in working hours Mon – Fri (8:00 – 16:00). Our team will be happy to help answer your queries</p>
          <div className="flex gap-3 text-white">
            <div className="w-8 h-8 bg-[#8bc34a] rounded-full flex items-center justify-center">
              <FaFacebookF />
            </div>
            <div className="w-8 h-8 bg-[#8bc34a] rounded-full flex items-center justify-center">
              <FaTwitter />
            </div>
            <div className="w-8 h-8 bg-[#8bc34a] rounded-full flex items-center justify-center">
              <FaInstagram />
            </div>
            <div className="w-8 h-8 bg-[#8bc34a] rounded-full flex items-center justify-center">
              <FaLinkedinIn />
            </div>
          </div>
        </div>

        {/* Middle sections */}
        <div className="flex gap-16">
          <div>
            <h3 className="font-semibold mb-3">Company</h3>
            <ul className="space-y-2">
              <li>Home</li>
              <li>About Us</li>
              <li>Courses</li>
              <li>Programs</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Services</h3>
            <ul className="space-y-2">
              <li>Individual Therapy</li>
              <li>Group Therapy</li>
              <li>Family Counselling</li>
              <li>Couples Counselling</li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="font-semibold mb-3">Subscribe To Newsletter</h3>
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 rounded-md bg-gray-100 w-full max-w-xs mb-3 outline-none"
          />
          <button className="bg-lime-300 cursor-pointer text-black font-semibold px-5 py-2 rounded-full hover:bg-lime-400 transition">
            SUBSCRIBE
          </button>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-300 mt-10 pt-4 flex flex-col md:flex-row justify-between text-xs text-gray-600">
        <p>Copyright © 2025 FlamSafe</p>
        <p>Design by IrshadUllah Khan</p>
        <div className="flex gap-4">
          <p>Terms of Use</p>
          <p>Privacy Policy</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
