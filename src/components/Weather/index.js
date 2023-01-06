import React from "react";
import MovieSwipe from "../../assets/img/MovieSwipe.png";

function Weather() {
  return (
    <section className="my-5">
      <h2 id="about" class="text-center">
        Movie Swipe
      </h2>

      <div className="my-2 borderBoxPort">
        <div class="container">
          <div class="row">
            <div class="col">
              <a target="_blank" href="https://github.com/rrvallar/Project-3">
              <img className="selfie" src={MovieSwipe} alt="5 day forecast" />
              </a>
              <h5 class="textSmall">Click the image to be taken to the source code!</h5>
            </div>
            <div class="col">
              <h6>MovieSwipe is a full stack MERN application that allows users to swipe through movies and save favorites to their profile. It was built using HTML, CSS, Bootstrap, Javascript, Express, mongodb, GraphQl and React. </h6>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Weather;
