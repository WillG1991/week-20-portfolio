import React from "react";
import Me from "../../assets/img/me.JPG";

function About() {
  return (
    <div>
      <section>
        <h2 id="about" class="text-center varela-font">
          Who am I?
        </h2>
        <div className="my-2">
          <div class="container text-center borderBox" className="borderBox">
            <div class="container">
              <div class="row">
                <div class="col">
                  <img class="selfie1" src={Me} alt="BigCo Inc. logo" />
                </div>
                <div class="col">
                  <h4>
                  Organized and hard-working individual looking to join the field of web development and engineering. Sparked by a hobby picked up during the "stay at home” era of the pandemic and looking to leverage new found skills into a career.
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
