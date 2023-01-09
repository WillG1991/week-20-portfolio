import React from "react";
import MovieSwipe from "../../assets/img/MovieSwipe.png";
import Zoom from 'react-reveal/Zoom';


function Weather() {
  return (
    <Zoom>
      <section>
        <h2 id="about" className="text-center varela-font">
          Movie Swipe
        </h2>
        <div className="my-2">
          <div className="container text-center borderBox">
            <div className="container">
              <div className="row">
                <div className="col">
                  <h6>MovieSwipe is a full stack MERN application that allows users to swipe through movies and save favorites to their profile. It was built using HTML, CSS, Bootstrap, Javascript, Express, mongodb, GraphQl and React.
                  </h6>
                </div>
                <div className="col">
                  <a target="_blank" href="https://github.com/rrvallar/Project-3">
                    <img className="selfie" src={MovieSwipe} alt="5 day forecast" />
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

export default Weather;
