import './App.css';
import Navbar from "./components/Navbar";
import Gym from "./components/Gym";
import Home from "./components/Home";
import Yoga from "./components/Yoga";
import Nutration from "./components/Nutration";
import Meditation from "./components/Meditation";
import Register from "./components/Register";
import Login from "./components/Login";
import About from "./components/About";


const App = () =>  {
  return (
    <>
        <Gym/>
        <Yoga/>
        <Nutration/>
        <About/>
    </>
  );
}

export default App;
