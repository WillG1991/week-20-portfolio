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
                <span
                  data-testid="movie"
                  href="#Main2"
                  onClick={() => handlePageChange("Movie")}
                >
                  <h2 class="text-center circle">🎬</h2>
                  <h3>
                    <span role="img" aria-label="camera">
                      {" "}
                      Movie-Stream
                    </span>
                  </h3>
                </span>
              </li>
              <li className="mx-2">
                <span
                  data-testid="portfolio"
                  href="#Main2"
                  onClick={() => handlePageChange("Weather")}
                >
                  <h2 class="text-center circle">⛅</h2>
                  <h3>
                    <span role="img" aria-label="camera">
                      Weather App
                    </span>
                  </h3>
                </span>
              </li>
              <li className="mx-2">
                <span
                  data-testid="code"
                  href="#Main2"
                  onClick={() => handlePageChange("Code")}
                >
                  <h2 class="text-center circle">📁</h2>
                  <h3>
                    <span href="https://codeabreak.herokuapp.com/" role="img" aria-label="camera" id="#codeabr">
                      Code-A-BR{" "}
                    </span>
                  </h3>
                </span>
              </li>
            </ul>
          </nav>
        </p>
        <div>{renderPage()}</div>
      </div>
      <div></div>
    </div>
  );
}

export default Portfolio;
