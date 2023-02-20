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
            <a href="#hero" className="menu-item" onClick={() => setIsOpen(false)}>Home</a>
            <a href="#works" className="menu-item" onClick={() => setIsOpen(false)}>Works</a>
            <a href="#about" className="menu-item" onClick={() => setIsOpen(false)}>About</a>
            <a href="#skills" className="menu-item" onClick={() => setIsOpen(false)}>Skills</a>
            <a href="mailto:WilliamEGehrke@gmail.com" className="menu-item" onClick={() => setIsOpen(false)}>Contact</a>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;