import React, { useState } from "react";
import Movie from "../Movie/index";
import Weather from "../Weather/index";
import Code from "../CodeABR/index";

function Portfolio({ handleClick }) {
  const [currentPage, setCurrentPage] = useState("");

  const renderPage = () => {
    if (currentPage === "Movie") {
      return <Movie />;
    }
    if (currentPage === "Weather") {
      return <Weather />;
    }
    if (currentPage === "Code") {
      return <Code />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="d-flex justify-content-center">
      <div id="about" className="my-2">
        <p>
          <nav>
            <ul className="flex-row">
              <li className="mx-2">
                
                <a
                  data-testid="movie"
                  href="#Portmain"
                  onClick={() => handlePageChange("Movie")}
                >
                  <h2 class="text-center circle">🔎</h2>
                  <h3>
                    <a role="img" aria-label="camera">
                      {" "}
                      Search and Stream
                    </a>
                  </h3>
                </a>
              </li>
              <li className="mx-2">
                <a
                  data-testid="portfolio"
                  href="#Portmain"
                  onClick={() => handlePageChange("Weather")}
                >
                  <h2 class="text-center circle">🎥</h2>
                  <h3>
                    <a role="img" aria-label="camera">
                      MovieSwipe
                    </a>
                  </h3>
                </a>
              </li>
              <li className="mx-2">
                <a
                  data-testid="code"
                  href="#Portmain"
                  onClick={() => handlePageChange("Code")}
                >
                  <h2 class="text-center circle">📁</h2>
                  <h3>
                    <a href="https://codeabreak.herokuapp.com/" role="img" aria-label="camera" id="#codeabr">
                      Code-A-BR{" "}
                    </a>
                  </h3>
                </a>
              </li>
            </ul>
          </nav>
        </p>
        <div id="Portmain">{renderPage()}</div>
      </div>
      <div></div>
    </div>
  );
}

export default Portfolio;
