import React from "react";
import ReikiHealingSite from "../../assets/img/ReikiHealingSite.png";

function ReikiHealing() {
  return (
    <section className="my-5">
      <h2 id="about" class="text-center varela-font">
      ChristinaSerafina.com
      </h2>

      <div className="my-2 borderBox">
        <div class="container">
          <div class="row">
            <div class="col">
            <a target="blank" href="http://www.christinaserafina.com">
              <img className="selfie" src={ReikiHealingSite} alt="Streaming search" />
              </a>
            </div>
            <div class="col">
              <h6>
              A content driven website for a service created as a single page web app in React.js. It utilizes components for each section while mapping over the iterable content mixed with React MUI displays.         </h6>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ReikiHealing;