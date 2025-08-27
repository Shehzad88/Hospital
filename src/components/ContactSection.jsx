import React from "react";

export default function ContactSection() {
  return (
    <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-center items-start gap-12 p-32 bg-white font-sans">
      {/* Left Contact Info */}
      <div className="w-full md:w-1/2">
        <h4 className="text-green-600 uppercase font-semibold text-sm mb-2">Get in Touch</h4>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 leading-snug">
          We’d Love to Hear
          <br />
          From You
        </h2>
        <p className="text-gray-600 mb-6 text-sm">
          Volutpat bibendum erat morbi interdum diam sit. Eu sit dolor vel
          sodales sed nibh ut. Ac fringilla fames eget a aliquet. Gravida
          placerat viverra purus sed ac ultrices sem nulla.
        </p>

        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="bg-green-100 p-2 rounded-full">
              <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h1.5a2 2 0 011.8 1.2L9.6 7.6a2 2 0 01-.4 2.4l-1.2 1.2a16 16 0 006.4 6.4l1.2-1.2a2 2 0 012.4-.4l3.4 1.3A2 2 0 0121 19.5V21a2 2 0 01-2 2h-.5C9.6 23 1 14.4 1 3.5V3a2 2 0 012-2z" />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-gray-800">Phone Number</p>
              <p className="text-sm text-gray-600">+92 1234567890</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-green-100 p-2 rounded-full">
              <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8h18M3 16h18" />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-gray-800">Business Hours</p>
              <p className="text-sm text-gray-600">Mon-Fri, 07:00-16:00</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-green-100 p-2 rounded-full">
              <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 12.414 12 13.828 16.243 18.071A8 8 0 1118.071 16.243z" />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-gray-800">Address</p>
              <p className="text-sm text-gray-600">04403, H-8 sector, Islamabad</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Contact Form */}
      <div className="w-full md:w-1/2 bg-green-50 p-6 rounded-2xl">
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Your Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full p-2 rounded-md border border-gray-300 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Your Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 rounded-md border border-gray-300 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Your Message</label>
            <textarea
              placeholder="Enter your message"
              rows="4"
              className="w-full p-2 rounded-md border border-gray-300 focus:outline-none"
            ></textarea>
          </div>
          <button type="submit" className="mt-2 bg-lime-300 cursor-pointer text-black px-6 py-2 rounded-full font-semibold hover:bg-lime-400">
            SEND MESSAGE
          </button>
        </form>
      </div>
    </div>
  );
}
