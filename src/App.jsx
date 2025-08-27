import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import HelpCenter from './components/HelpCenter';
import BookAppointment from './components/BookAppointment';
import PostGallery from './components/PostGallery';
import PostAccount from './components/PostAccount'; 
import LoginPortal from './components/LoginPortal';
import Signup from './components/Signup'; 
import Doctor from './components/Doctor';
import PateintPage from './components/PateintPage';
import Message from './components/Message';
import ChatUI from './components/ChatUI';







const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/help" element={<HelpCenter />} />
        <Route path="/book-appointment" element={<BookAppointment />} />
        <Route path="/gallery" element={<PostGallery />} />
        <Route path="/account" element={<PostAccount />} />
        <Route path="/login" element={<LoginPortal />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/doctor" element={<Doctor />} />
        <Route path="/patient" element={<PateintPage />} />
        <Route path="/message" element={<Message />} />
        <Route path="/chat" element={<ChatUI />} />

        <Route path="/dashboard" element={<Doctor />} />
        
       

        

       
      </Routes>
    </Router>
  );
};

export default App;
