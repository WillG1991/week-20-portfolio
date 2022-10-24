import React from "react";
import CodeBR from "../../assets/img/codeabr.png";

function Code() {
  return (
    <section className="my-5">
      <h2 id="about" class="text-center varela-font">
        Code A Break
      </h2>

      <div className="my-2 borderBox">
        <div class="container">
          <div class="row">
            <div class="col">
              <a target="_blank" href="https://codeabreak.herokuapp.com/">
              <img className="selfie" src={CodeBR} alt="CodeABreak landing page" href="https://codeabreak.herokuapp.com/" />
              </a>
            </div>
            <div class="col">
              <h6>
                Social media site allowing users to find relaxing resources for
                coding.
              </h6>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Code;
