import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';


import "./Navbar.css"

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  let toggleMenu = () => {
    setIsActive((prevActive) => !prevActive);
  }

  return (
    <div className='Navbar'>
      <div className="logo-part">
      <div className="logo">
        <h1> Fariha</h1>
      </div>
      <div className="toggle-btn" onClick={toggleMenu} >
        {isActive ?<CloseIcon fontSize="large"/> :<MenuIcon fontSize="large"/> }
      </div>

      </div>
    

      <div className={`links-box ${isActive ? "active-links-box" : ""}`}>

        <div className="nav-links">
          <a href="#home" className="item">Home</a>
          <a href="#about" className="item">About</a>
          <a href="#skills" className="item">Skills</a>
          <a href="#works" className="item">Works</a>
          <a href="#contact" className="item">Contact Me</a>
        </div>
      </div>
    </div>
  );


}

export default Navbar;
