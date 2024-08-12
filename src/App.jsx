import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Signup from './components/Signup';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Drop from './components/Drop'; // Import Drop component
import SpeechToSign from './components/SpeechToSign'; 

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/drop" element={<Drop />} /> 
        <Route pat="/speech-to-sign" element={<SpeechToSign />} />
      </Routes>
    </Router>
  );
};

export default App;
