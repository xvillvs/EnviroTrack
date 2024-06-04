import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar/Navbar'; // Ensure the path is correct
import LoginRegister from './LoginRegister/LoginRegister'; // Ensure the path is correct
import About from './About/About'; // Ensure the path is correct
import FAQ from './FAQ/FAQ'; // Ensure the path is correct
import Contact from './Contact/Contact'; // Ensure the path is correct
import Home from './Home/Home';
import Navbar2 from './Navbar2/Navbar2';
import Profile from './PROFILE/Profile';
import Eco from './Eco/Eco';
import EcoFee from './Ecofee/Ecofee';
import TouristPass from './Touristpass/Touristpass';

import './App.css';

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<><Navbar /><Home /></>} />
        <Route path="/about" element={<><Navbar /><About /></>} />
        <Route path="/contact" element={<><Navbar /><Contact /></>} />
        <Route path="/faq" element={<><Navbar /><FAQ /></>} />
        <Route path="/login" element={<><Navbar /><Login /></>} />
        <Route path="/signin" element={<><Navbar /><LoginRegister /></>} />
        <Route path="/home" element={<><Navbar2 /><Home /></>} />
        <Route path="/profile" element={<><Navbar2 /><Profile /></>} />
        <Route path="/eco" element={<><Navbar2 /><Eco /></>} />
        <Route path="/ecofee" element={<><Navbar2 /><EcoFee /></>} />
        <Route path="/touristpass" element={<><Navbar2 /><TouristPass /></>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

const Login = () => <div>Login Page</div>;
const NotFound = () => <div>404 Page Not Found</div>;

export default App;
