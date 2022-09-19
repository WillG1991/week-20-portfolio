import React from "react";



// Defines handleclick
function Nav({handleClick}) {
 
 return (
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">
          <span role="img" aria-label="camera"> 📸</span> Icon
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">      
                                  {/*Handle Click picks */}
            <span data-testid="about" href="#About" onClick={() => handleClick('About')}>
            <img src="man.png" style={{width: "50px"}} alt="icon"></img> 
              About me
            </span>
          </li>
          <li className="mx-2">
            <span data-testid="about" href="#About" onClick={() => handleClick('Resume')}>
            <img src="cv.png" style={{width: "50px"}} alt="icon"></img>  
              Resume
            </span>
          </li>
          <li className={"mx-2"}>
            <span href="#portfolio" onClick={() => handleClick('Portfolio')}>
            <img src="portfolio.png" style={{width: "50px"}} alt="icon"></img> 
              Portfolio
            </span>
          </li>
          <li className={"mx-2"}>
            <span onClick={() => handleClick('Contact')}>
            <img src="contact-book.png" style={{width: "50px"}} alt="icon"></img> 
              Contact
            </span>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;