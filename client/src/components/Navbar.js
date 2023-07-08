import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import React from 'react'
import logo from './img/logo.png';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className='nav-cont'>
      <nav className="navbar">
          <img src={logo} className="navbar-brand"></img>
        <ul>
            <li><a href="#"><NavLink className="nav-link" to="/">Home</NavLink></a></li>
            <li><a href="#"><NavLink className="nav-link" to="/gym">Gym</NavLink></a></li>
            <li><a href="#"><NavLink className="nav-link" to="/yoga">Yoga</NavLink></a></li>
            <li><a href="#"><NavLink className="nav-link" to="/meditation">Meditation</NavLink></a></li>
            <li><a href="#"><NavLink className="nav-link" to="/nutration">Nutration</NavLink></a></li>
            <li><a href="#"><NavLink className="nav-link" to="/about">About Us</NavLink></a></li>
            <li><a href="#"><NavLink className="nav-link" to="/login">Login</NavLink></a></li>
            <li><a href="#"><NavLink className="nav-link" to="/registration">Register</NavLink></a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
