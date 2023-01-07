import React from "react";
import Stream from "../../assets/img/stream.png";
import Zoom from 'react-reveal/Zoom';

function Movie() {
  return (
    <Zoom>
    <section className="my-5">
      <h2 id="about" className="text-center varela-font">
      Search and Stream
      </h2>

      <div className="my-2 borderBoxPort">
        <div className="container">
          <div className="row">
            <div className="col">
            <a target="_blank" href="https://ohdangbro.github.io/Streaming-Search/">
              <img className="selfie" src={Stream} alt="Streaming search" />
              </a>
              <h5 className="textSmall">Click the image to be taken to the site!</h5>
            </div>
            <div className="col">
              <h6>
                This website allows a user to search a movie or show to see what platform it is currently being streamed on. It was built using two API's, node, express, javascript, HTML and CSS.
              </h6>
            </div>
          </div>
        </div>
      </div>
    </section>
    </Zoom>
  );
}

export default Movie;
