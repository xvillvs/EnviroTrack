import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 

const Navbar = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img src="./public/logo.png" alt="Logo" className="logo-img" />
        <Link to="/" className="logo-text">EnviroTrack</Link>
      </div>
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/faq">FAQ</Link>
        <Link to="/signin">Sign In</Link>
      </nav>
    </div>
  );
}

export default Navbar;
