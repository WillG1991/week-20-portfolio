import React from 'react';
import Zoom from 'react-reveal/Zoom';
import Flash from 'react-reveal/Flash';


const firstNavSections = [
  {
    id: 1,
    name: "About Me",
    icon: "👨‍🔧",
    link: "About"
  },
  {
    id: 2,
    name: "Portfolio",
    icon: "🖥️",
    link: "Portfolio"
  },
  {
    id: 3,
    name: "Resume",
    icon: "📄",
    link: "Resume"
  },
  {
    id: 4,
    name: "Contact",
    icon: "📞",
    link: "Contact"
  },
]


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
      {firstNavSections.map(section =>
        <nav>
          <ul className="flex-row">
            <Zoom>
              <li className="mx-2">
                <span
                  onClick={() => handleClick(section.link)}
                >
                  <a data-testid="link" href="#Main">
                    <h3 className="largeIcon text-center circle">{section.icon}</h3>
                    {" "}
                    <h3>{section.name}</h3>
                  </a>
                </span>
              </li>
            </Zoom>
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Nav;
