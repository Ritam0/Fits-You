import React, { useState } from 'react'
import Navbar from "./Navbar";
import 'bootstrap/dist/css/bootstrap.css';
import './Registration.css'
import logo from './img/logo.png';
import { useNavigate } from 'react-router-dom';
const Login = () => { 
  const navigate=useNavigate();
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  
  const loginUser=async(e)=>{
    e.preventDefault();

    try{
      const res=await fetch("/signin",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          email, password
        })
      });
      const data=res.json();
      if(data.status===400 || !data){
        window.alert("Login Faild!!");
        console.log("Login Faild!!");
      }else{
        window.alert("Login Succesfull");
        console.log("Login Succesfull");
  
        navigate("/");
      }
    }catch(e){
      console.error(e);
    }
  }

  return (
    <div className='reg_bg'>
      <Navbar/>
      <div className="card_reg">
        <img src={logo} alt="Logo" className="logo_reg" />
        <form method='POST'>
          <input type="email" 
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          placeholder="Email" className="input-field_reg" />


          <input type="password" 
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          placeholder="Password" className="input-field_reg" />

          <div className="sections_reg">
            <a href="#" className="forgot-password_reg">Forgot Password?</a>
          </div>

          <button type="submit" onClick={loginUser} className="submit-btn_reg">Login</button>

          <div className="sections_reg">
            <p className="not-registered_reg">Not Registered? <a href="/registration">Register Here</a></p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
