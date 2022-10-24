import React from "react";
import Stream from "../../assets/img/stream.png";

function Movie() {
  return (
    <section className="my-5">
      <h2 id="about" class="text-center varela-font">
      Search and Stream
      </h2>

      <div className="my-2 borderBox">
        <div class="container">
          <div class="row">
            <div class="col">
            <a target="_blank" href="https://ohdangbro.github.io/Streaming-Search/">
              <img className="selfie" src={Stream} alt="Streaming search" />
              </a>
            </div>
            <div class="col">
              <h4>
                This website allows a user to search a movie or show to see what platform it is currently being streamed on. 
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Movie;
