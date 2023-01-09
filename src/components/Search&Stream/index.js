import React from "react";
import Stream from "../../assets/img/stream.png";
import Zoom from 'react-reveal/Zoom';

function Movie() {
  return (
    <Zoom>
      <section>
        <h2 id="about" className="text-center varela-font">
          Search & Stream
        </h2>
        <div className="my-2">
          <div className="container text-center borderBox">
            <div className="container">
              <div className="row">
                <div className="col">
                  <h6>
                    This website allows a user to search a movie or show to see what platform it is currently being streamed on. It was built using two API's, node, express, javascript, HTML and CSS.
                  </h6>
                </div>
                <div className="col">
                  <a target="_blank" href="https://ohdangbro.github.io/Streaming-Search/">
                    <img className="selfie" src={Stream} alt="Streaming search" />
                    <h4>
                      Click to be taken to the site
                    </h4>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Zoom>
  );
}

export default Movie;
