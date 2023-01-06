import React from "react";
import GehrkeApiariesImage from "../../assets/img/GehrkeApiaries.png";

function Apiary() {
  return (
    <section className="my-5">
      <h2 id="about" class="text-center varela-font">
      Gehrke Apiaries
      </h2>

      <div className="my-2 borderBoxPort">
        <div class="container">
          <div class="row">
            <div class="col">
            <a target="_blank" href="http://www.gehrkeapiaries.com" rel="noreferrer">
              <img className="selfie" src={GehrkeApiariesImage} alt="apiary site logo" />
              </a>
              <h5 class="textSmall">Click the image to be taken to the site!</h5>
            </div>
            <div class="col">
              <h6>
React built website using custom CSS styling. Minor React MUI components.               </h6>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Apiary;