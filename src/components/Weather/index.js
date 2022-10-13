import React from "react";
import WeatherApp from "../../assets/img/MovieSwipe.png";

function Weather() {
  return (
    <section className="my-5">
      <h2 id="about" class="text-center">
        5 Day Forecast
      </h2>

      <div className="my-2 borderBox">
        <div class="container">
          <div class="row">
            <div class="col">
              <a href="https://movie-swipe-application.herokuapp.com/">
              <img className="selfie" src={WeatherApp} alt="5 day forecast" />
              </a>
            </div>
            <div class="col">
              <h4>Movie site that allows users to swipe through different movies and save them dependent on swipe direction. </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Weather;
