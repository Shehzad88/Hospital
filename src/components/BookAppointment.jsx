
import React from 'react';
import aboutImg from '../assets/2.jpg';

import Navbar from '../components/Navbar.jsx';
import AppointmentForm from '/src/components/AppointmentForm.jsx'; 
import Footer from '../components/Footer.jsx'; 

const BookAppointment = () => {
  return (
    <div className="w-full">
      
      <div className="relative h-screen w-full overflow-hidden">
        <img
          src={aboutImg}
          alt="Help Center"
          className="h-full w-full object-cover object-top absolute -top-10 inset-x-0 z-0"
        />
        <div className="absolute top-0 left-0 w-full z-30">
          <Navbar />
        </div>

        
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10"></div>

      
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-20 px-4">
          <h1 className="text-4xl md:text-5xl font-semibold mb-4 border-b border-gray-300 pb-2">
           Book Appointment
          </h1>
          <button className='bg-green-600 shadow shadow-lg shadow-white text-white p-2 rounded-full cursor-pointer hover:bg-green-700'>BACK TO HOMEPAGE</button>
        </div>
      </div>

      
      <AppointmentForm />
      <Footer />

      
    </div>
  );
};

export default BookAppointment;
