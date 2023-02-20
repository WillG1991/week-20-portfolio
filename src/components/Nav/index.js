import React, { useState } from "react";

function Navbar({ handleClick }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      {isOpen && (
        <div className="menu-container">
          <div className="menu">
            <a href="#hero" className="menu-item" onClick={() =>{ setIsOpen(false); handleClick("Home")}} >Home</a>
            <a href="#works" className="menu-item" onClick={() => { setIsOpen(false); handleClick("Home")}}>Works</a>
            <a href="#about" className="menu-item" onClick={() => { setIsOpen(false); handleClick("Home")}}>About</a>
            <a href="#skills" className="menu-item" onClick={() => { setIsOpen(false); handleClick("Home")}}>Skills</a>
            <a href="#contact" className="menu-item" onClick={() => { setIsOpen(false); handleClick("Contact")}}>Contact</a>


           
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;