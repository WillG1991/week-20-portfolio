import React from "react";



// Defines handleclick
function Nav({handleClick}) {
 
 return (
    <header >
     <h3> 
     <a data-testid="link" href="/">
        Clear
        </a>
      </h3>
      
      <nav>
        <ul className="flex-row">
          <li className="mx-2">      
            <span data-testid="about" href="#About" onClick={() => handleClick('About')}>
            <h3 class="text-center circle">👨‍🔧</h3>
            <h3>
        <a data-testid="link" href="#About">
          <span role="img" aria-label="camera"> About-Me</span> 
        </a>
      </h3>
            </span>
          </li>
          <li className="mx-2">      
            <span data-testid="portfolio" href="#Portfolio" onClick={() => handleClick('Portfolio')}>
            <h3 class="text-center circle">🖥️</h3>
            <h3>
        <a data-testid="link" href="/">
          <span role="img" aria-label="camera"> 
          Portfolio
          </span> 
        </a>
      </h3>
      </span>
      </li>
          <li className="mx-2">      
            <span data-testid="resume" href="#Resume" onClick={() => handleClick('Resume')}>
            <h3 class="text-center circle">📄</h3>
            <h3>
        <a data-testid="link" href="/">
          <span role="img" aria-label="camera">Resume </span> 
        </a>
      </h3>
            </span>
          </li>
          <li className="mx-2">      
            <span data-testid="contact" href="#Contact" onClick={() => handleClick('Contact')}>
            <h3 class="text-center circle">📞</h3>
            <h3>
        <a data-testid="link" href="/">
          <span role="img" aria-label="camera">Contact </span> 
        </a>
      </h3>
            </span>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;