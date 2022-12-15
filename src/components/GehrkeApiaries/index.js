import React from "react";
import GehrkeApiariesImage from "../../assets/img/GehrkeApiaries.jpg";

function Apiary() {
  return (
    <section className="my-5">
      <h2 id="about" class="text-center varela-font">
      Gehrke Apiaries
      </h2>

      <div className="my-2 borderBox">
        <div class="container">
          <div class="row">
            <div class="col">
            <a target="_blank" href="www.gehrkeapiaries.com">
              <img className="selfie" src={GehrkeApiariesImage} alt="apiary site logo" />
              </a>
            </div>
            <div class="col">
              <h6>
                This website allows a user to search a movie or show to see what platform it is currently being streamed on. It was built using two API's, node, express, javascript, HTML and CSS.
              </h6>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Apiary;