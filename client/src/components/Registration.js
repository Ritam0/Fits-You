import React from 'react'
import Navbar from "./Navbar";
import 'bootstrap/dist/css/bootstrap.css';
import {useNavigate} from 'react-router-dom';
import './Registration.css'
import logo from './img/logo.png';
import { useState } from "react";


const Registration = () => {

  const navigate=useNavigate();

  const[user,setUser]=useState({
    name:"",email:"",password:"",cpassword:""
  });
  let name,value;
  const handelInputs=(e)=>{
    name=e.target.name;
    value=e.target.value;

    setUser({...user,[name]:value});
    
  }

  const postData=async(e)=>{
    e.preventDefault();
    const {name, email, password, cpassword}=user;

    try{
      const res=await fetch("/signup",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          name, email, password, cpassword
        })
      });
      const data=res.json();
      if(data.status===400 || !data){
        window.alert("Registration Faild!!");
        console.log("Registration Faild!!");
      }else{
        window.alert("Registration Succesfull");
        console.log("Registration Succesfull");
  
        navigate("/login");
      }
    }catch(e){
      console.error(e);
    }
    
  }

  return (
    <div className='reg_bg'>
      <Navbar/>
      <div  className="card_reg">
        <img src={logo} alt="Logo" className="logo_reg" />

        <form method='POST'>

          <input type="text" 
          name='name'
          value={user.name}
          onChange={handelInputs}
          placeholder="Name" className="input-field_reg" />

          <input type="email" 
          name='email'
          value={user.email}
          onChange={handelInputs}
          placeholder="Email" className="input-field_reg" />

          <input type="password" 
          name='password'
          value={user.password}
          onChange={handelInputs}
          placeholder="Password" className="input-field_reg" />

          <input type="password" 
          name='cpassword'
          value={user.cpassword}
          onChange={handelInputs}
          placeholder="Confirm Password" className="input-field_reg" />

          <button type="submit" onClick={postData} className="submit-btn_reg">Register</button>

        </form>
        <div className="sections_reg">
          <span className="already-registered_reg">Already Registered? <a href="./login">signin</a></span>
        </div>
      </div>
    </div>
  )
}

export default Registration
