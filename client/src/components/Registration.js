import React from 'react'
import Navbar from "./Navbar";
import 'bootstrap/dist/css/bootstrap.css';
import './Registration.css'
import logo from './img/logo.png';
const Registration = () => {
  return (
    <div className='reg_bg'>
      <Navbar/>
      <div  className="card_reg">
        <img src={logo} alt="Logo" className="logo_reg" />
        <form>
          <input type="text" placeholder="Name" className="input-field_reg" />
          <input type="email" placeholder="Email" className="input-field_reg" />
          <input type="password" placeholder="Password" className="input-field_reg" />
          <input type="password" placeholder="Confirm Password" className="input-field_reg" />
          <button type="submit" className="submit-btn_reg">Register</button>
        </form>
        <div className="sections_reg">
          <span className="already-registered_reg">Already Registered? <a href="#">signin</a></span>
        </div>
      </div>
    </div>
  )
}

export default Registration
