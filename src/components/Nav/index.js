import React from 'react';
import Zoom from 'react-reveal/Zoom';
import Flash from 'react-reveal/Flash';



// Defines handleclick
function Nav({ handleClick }) {
  return (
    <header className="hidden-mobile">
      <Flash>
        <h5>
          <a data-testid="link" href="https://ohdangbro.github.io/week-20-portfolio">
            <p className="forHover"> Clear </p>
          </a>
        </h5>
      </Flash>
      <nav>
        <ul className="flex-row">
          <Zoom>
            <li className="mx-2">
              <span
                data-testid="about"
                href="#About"
                onClick={() => handleClick("About")}
              >
                <h3>
                  <a data-testid="link" href="#Main">
                    <span role="img" aria-label="camera">
                      <h3 className="largeIcon text-center circle">👨‍🔧</h3>
                      {" "}
                      <h3>About-Me</h3>
                    </span>
                  </a>
                </h3>
              </span>
            </li>
          </Zoom>
          <Zoom>
            <li className="mx-2">
              <span
                data-testid="about"
                href="#About"
                onClick={() => handleClick("Portfolio")}
              >
                <h3>
                  <a data-testid="link" href="#Main">
                    <span role="img" aria-label="camera">
                      <h3 className="largeIcon text-center circle">🖥️</h3>
                      {" "}
                      <h3>Portfolio</h3>
                    </span>
                  </a>
                </h3>
              </span>
            </li>
          </Zoom>
          <Zoom>
            <li className="mx-2">
              <span
                data-testid="about"
                onClick={() => handleClick("Resume")}
              >

                <h3>
                  <a data-testid="link" href="#Main">
                    <span role="img" aria-label="camera">
                      <h3 className="largeIcon text-center circle">📄</h3>
                      {" "}
                      <h3>Resume</h3>
                    </span>
                  </a>
                </h3>
              </span>
            </li>
          </Zoom>
          <Zoom>
            <li className="mx-2">
              <span
                data-testid="contact"
                onClick={() => handleClick("Contact")}
              >

                <h3>
                  <a data-testid="link" href="#Main">
                    <span role="img" aria-label="camera">
                      <h3 className="largeIcon text-center circle">📞</h3>
                      {" "}
                      <h3>Contact</h3>
                    </span>
                  </a>
                </h3>
              </span>
            </li>
          </Zoom>
        </ul>
      </nav>
    </header>


  );
}

export default Nav;
