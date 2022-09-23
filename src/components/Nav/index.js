import React from "react";

// Defines handleclick
function Nav({ handleClick }) {
  return (
    <header>
      <h5>
        <a  data-testid="link" href="./">
          <p class="forHover"> Clear </p>
        </a>
      </h5>

      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <span
              data-testid="about"
              href="#About"
              onClick={() => handleClick("About")}
            >
              
              <h3>
                <a data-testid="link" href="#About">
                  <span role="img" aria-label="camera">
                  <h3 class="text-center circle">👨‍🔧</h3>
                    {" "}
                   <h3>About-Me</h3> 
                  </span>
                </a>
              </h3>
            </span>
          </li>

          <li className="mx-2">
            <span
              data-testid="about"
              href="#About"
              onClick={() => handleClick("Portfolio")}
            >
              
              <h3>
                <a data-testid="link" href="#Portfolio">
                  <span role="img" aria-label="camera">
                  <h3 class="text-center circle">🖥️</h3>
                    {" "}
                   <h3>Portfolio</h3> 
                  </span>
                </a>
              </h3>
            </span>
          </li>
          <li className="mx-2">
            <span
              data-testid="about"
              onClick={() => handleClick("Resume")}
            >
              
              <h3>
                <a data-testid="link" href="#Resume">
                  <span role="img" aria-label="camera">
                  <h3 class="text-center circle">📄</h3>
                    {" "}
                   <h3>Resume</h3> 
                  </span>
                </a>
              </h3>
            </span>
          </li>
          <li className="mx-2">
            <span
              data-testid="contact"
              onClick={() => handleClick("Contact")}
            >
              
              <h3>
                <a data-testid="link" href="#Contact">
                  <span role="img" aria-label="camera">
                  <h3 class="text-center circle">📞</h3>
                    {" "}
                   <h3>Contact</h3> 
                  </span>
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
