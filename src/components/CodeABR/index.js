import React from "react";
import CodeBR from "../../assets/img/codeabr.png";

function Code() {
  return (
    <section className="my-5">
      <h2 id="about" class="text-center varela-font">
        Movie-Stream
      </h2>

      <div className="my-2 borderBox">
        <div class="container">
          <div class="row">
            <div class="col">
              <img className="selfie" src={CodeBR} alt="Streaming search" />
            </div>
            <div class="col">
              <h4>
                Social media site allowing users to find relaxing resources for
                coding.
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Code;
