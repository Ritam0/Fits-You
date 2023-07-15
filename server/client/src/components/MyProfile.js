import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import './MyProfile.css'

const MyProfile = () => {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState({});

  const callProfile = async () => {
    try {
      const res = await fetch('/user', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        credentials: 'include'
      });

      if (!res.ok) {
        const err = new Error(res.statusText);
        throw err;
      }

      const data = await res.json();
      console.log(data.user);
      setUserDetails(data.user); 
    } catch (e) {
      console.log(e);
      navigate('/login'); // Navigate to login page
    }
  };

  useEffect(() => {
    callProfile();
  }, []);

  const logoutprofile=async (e)=>{
    e.preventDefault();
    try{
      const res=await fetch("/logout",{
        method:"GET",
        headers:{
          "Cookie":"token"
        }
      });
      window.alert("logged out");
      navigate("/login");
    }catch(err){
      console.error(err);
    }
   
  }

  return (
    <div className='mp_bg'>
      <Navbar />
      <form className='my_profile' method='GET'>
            <div className='card_mp'>
            <h2 className='card-title_mp'>Hello, <span className='name1_mp'>{userDetails.name}</span></h2>
                <div className='card-content_mp'>
                    <div className='user-details_mp'>
                    <p><strong>Name:</strong> <span className='name_mp'>{userDetails.name}</span></p>
                    <p><strong>User ID:</strong> <span className='userid_mp'>{userDetails._id}</span></p>
                    <p><strong>Email:</strong> <span className='email_mp'>{userDetails.email}</span></p>
                    </div>
                </div>
                <button className='logout_profile' method='GET' onClick={logoutprofile}>Log out</button>

            </div>

      </form>
    </div>
  );
};

export default MyProfile;

