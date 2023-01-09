import React, { useState } from "react";
import SearchandStream from "../Search&Stream/index";
import MovieSwipe from "../MovieSwipe/index";
import CodeABR from "../CodeABR/index";
import ReikiHealing from "../ReikiHealing";
import Apiary from "../GehrkeApiaries";
import Zoom from 'react-reveal/Zoom';


function Portfolio({ handleClick }) {
  const [currentPage, setCurrentPage] = useState("");

  const renderPage = () => {
    if (currentPage === "Search&Stream") {
      return <SearchandStream />;
    }
    if (currentPage === "MovieSwipe") {
      return <MovieSwipe />;
    }
    if (currentPage === "CodeABR") {
      return <CodeABR />;
    }
    if (currentPage === "Reiki") {
      return <ReikiHealing />;
    }
    if (currentPage === "Apiary") {
      return <Apiary />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  const portSections = [
    {
      id: 1,
      name: "Search & stream",
      icon: "🔎",
      link: "Search&Stream"
    },
    {
      id: 2,
      name: "Movie Swipe",
      icon: "🎥",
      link: "MovieSwipe"
    },
    {
      id: 3,
      name: "Code A <br>",
      icon: "📁",
      link: "CodeABR"
    },
    {
      id: 4,
      name: "Reiki Healing",
      icon: "🧘🏽",
      link: "Reiki"
    },
    {
      id: 4,
      name: "Apiary Site",
      icon: "🐝",
      link: "Apiary"
    },
  ]


  return (
    <div className="d-flex justify-content-center">
      <div id="about" className="my-2">
        <Zoom>
          <p className="largerText text-center varela-font"> My Work</p>
        </Zoom>
        <Zoom>
          {portSections.map(section =>
            <nav>
              <ul className="flex-row">
                <li className="mx-2">
                  <a
                    onClick={() => handlePageChange(section.link)}
                    href="#Portmain"
                  >
                    <h2 className="largeIcon text-center circle">{section.icon}</h2>
                    <h3>
                      <a>
                        {section.name}
                      </a>
                    </h3>
                  </a>
                </li>
              </ul>
            </nav>
            )}
            </Zoom>
        <div id="Portmain">{renderPage()}</div>
      </div>
    </div>
  );
}

export default Portfolio;
