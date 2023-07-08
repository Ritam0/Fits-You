import './App.css';
import {BrowserRouter , Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar";
import Gym from "./components/Gym";
import Home from "./components/Home";
import Yoga from "./components/Yoga";
import Nutration from "./components/Nutration";
import Meditation from "./components/Meditation";
import Registration from "./components/Registration";
import Login from "./components/Login";
import About from "./components/About";



const App = () =>  {
  return (
    <>
        <Navbar/>
        <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/gym" element={<Gym/>}/>
              <Route path="/yoga" element={<Yoga/>}/>
              <Route path="/meditation" element={<Meditation/>}/>
              <Route path="/nutration" element={<Nutration/>}/>
              <Route path="/registration" element={<Registration/>}/>
              <Route path="/login" element={<Login/>}/>
       </Routes>
        
    </>
  );
}

export default App;
