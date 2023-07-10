import React from 'react'
import Navbar from "./Navbar";
import 'bootstrap/dist/css/bootstrap.css';
import './Registration.css'
import logo from './img/logo.png';
const Login = () => { 
  return (
    <div className='reg_bg'>
      <Navbar/>
      <div className="card_reg">
        <img src={logo} alt="Logo" className="logo_reg" />
        <form>
          <input type="email" placeholder="Email" className="input-field_reg" />
          <input type="password" placeholder="Password" className="input-field_reg" />
          <div className="sections_reg">
            <a href="#" className="forgot-password_reg">Forgot Password?</a>
          </div>
          <button type="submit" className="submit-btn_reg">Login</button>
          <div className="sections_reg">
            <p className="not-registered_reg">Not Registered? <a href="#">Register Here</a></p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
