import React from 'react';
import Navbar from "./Navbar";
import { NavLink } from 'react-router-dom';
import logo from './img/logo.png';
import gym from './img/gym.jpg';
import yoga from './img/yoga.jpg';
import nutration from './img/nutration.jpeg';
import meditation from './img/meditation.jpg';
import 'bootstrap/dist/css/bootstrap.css';
import './Home.css';


const Home = () => {
 
  return (
   
    
    <div className='Home-page-bg'>
      <Navbar/>
    <div className="container"> 
      <img className="logo" src={logo} alt="Logo" />
      
      <div className="slogan"><h2 className="hey">Hey Supersoul</h2>Welcome to FitsYou</div>
      <div className="slogan2">Look At Our Awesome <h4>Programs</h4></div>
      <div className="programs">
        <div className="program">
          <h3>Gym</h3>
          <div className="program-img">
            <img src={gym} alt="Program 1" />
          </div>
          <button ><NavLink className="nav-link" to="/gym">Go to Program</NavLink></button>
        </div>
        
        <div className="program">
          <h3>Yoga</h3>
          <div className="program-img">
            <img src={yoga} alt="Program 2" />
          </div>
          <button ><NavLink className="nav-link" to="/yoga">Go to Program</NavLink></button>
        </div>
        
        <div className="program">
          <h3>Meditation</h3>
          <div className="program-img">
            <img src={meditation} alt="Program 3" />
          </div>
          <button><NavLink className="nav-link" to="/meditation">Go to Program</NavLink></button>
        </div>
        
        <div className="program">
          <h3>Nutration</h3>
          <div className="program-img">
            <img src={nutration} alt="Program 4" />
          </div>
          <button><NavLink className="nav-link" to="/nutration">Go to Program</NavLink></button>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Home
