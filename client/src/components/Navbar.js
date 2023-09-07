import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import logo from './img/logo.png';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='nav-cont'>
      <nav className={`navbar ${isMenuOpen ? 'open' : ''}`}>
        <img src={logo} className="navbar-brand" alt="Logo" />
        <div className="menu-toggle" onClick={toggleMenu}>
          <div className={`bar ${isMenuOpen ? 'open' : ''}`} />
          <div className={`bar ${isMenuOpen ? 'open' : ''}`} />
          <div className={`bar ${isMenuOpen ? 'open' : ''}`} />
        </div>
        <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <li><NavLink className="nav-link" to="/">Home</NavLink></li>
          <li><NavLink className="nav-link" to="/gym">Gym</NavLink></li>
          <li><NavLink className="nav-link" to="/yoga">Yoga</NavLink></li>
          <li><NavLink className="nav-link" to="/meditation">Meditation</NavLink></li>
          <li><NavLink className="nav-link" to="/nutration">Nutrition</NavLink></li>
          <li><NavLink className="nav-link" to="/about">About Us</NavLink></li>
          <li><NavLink className="nav-link" to="/profile">My Profile</NavLink></li>
          <li><NavLink className="nav-link" to="/login">Login</NavLink></li>
          <li><NavLink className="nav-link" to="/registration">Register</NavLink></li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
