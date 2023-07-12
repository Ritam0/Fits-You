import './App.css';
import {BrowserRouter , Route, Routes} from "react-router-dom";
import Gym from "./components/Gym";
import Home from "./components/Home";
import Yoga from "./components/Yoga";
import Nutration from "./components/Nutration";
import Meditation from "./components/Meditation";
import Registration from "./components/Registration";
import Login from "./components/Login";
import About from "./components/About";
import Profile from "./components/MyProfile";



const App = () =>  {
  return (
    <>
        
        <Routes>
              <Route path="/" element={<Home/>} className='home-page'/>
              <Route path="/gym" element={<Gym/>}/>
              <Route path="/yoga" element={<Yoga/>}/>
              <Route path="/meditation" element={<Meditation/>}/>
              <Route path="/nutration" element={<Nutration/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/registration" element={<Registration/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/profile" element={<Profile/>}/>
        
       </Routes>
        
    </>
  );
}

export default App;
