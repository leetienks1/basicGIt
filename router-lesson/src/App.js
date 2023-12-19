import { Router } from "react-router-dom";
import Navbar from "./conponents/Navbar";
import { Route , Routes } from "react-router-dom";
import About from "./conponents/pages/About";
import Contact from "./conponents/pages/Contact";
import Services from "./conponents/pages/Services";
import Home from "./conponents/pages/Home";
import { useState } from "react";
function App() {
  const [openMenu, setOpenMenu]=useState(false)
  return (
    <div className="App">
      <Navbar openMenu={openMenu} setOpenMenu={setOpenMenu}/>
      <Routes>
        <Route path="/about" element={<About/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/contact" element={<Contact/>}/>
        

      </Routes>
    </div>
  );
}

export default App;
