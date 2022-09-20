import React from "react";
import Stream from "../../assets/img/stream.png";

function Movie() {
  return (
    <section className="my-5">
      <h2 id="about" class="text-center varela-font">
        Movie-Stream
      </h2>

      <div className="my-2 borderBox">
        <div class="container">
          <div class="row">
            <div class="col">
              <img className="selfie" src={Stream} alt="Streaming search" />
            </div>
            <div class="col">
              <h4>
                This is a search engine that will find availability of sites to
                stream a specific show or movie at.
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Movie;
