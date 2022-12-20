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
              <img className="selfie" src={CodeBR} alt="CodeABreak landing page" href="https://github.com/OhDangBro/Code-A-Break" />
              </a>
            </div>
            <div class="col">
              <h6>
                Code-A-Break is a social media site allowing users to find relaxing resources for
                coding. A user is able to log in and post or comment links for breaks during coding sessions. It was built using HTML, CSS, Bulma, SQL, Insomnia, Express.
              </h6>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Code;
