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
                  <h6>
                  Hello! I am Will. A New Jersey native with a knack for making things beautiful. With a certification from Rutgers, a degree in Human Services and a collaborative approach - I am equipped to make all your digital dreams a reality. Some of my hobbies include photography, farming, landscaping + more! Leaning in to these hobbies has ultimately inspired my career path of capturing the beauty in everything through a story-telling lens. I look forward to working with you to create the platform to tell your story. 
                  </h6>
                </div>
                <div class="col">
                  <img class="selfie1" src={Me} alt="BigCo Inc. logo" />
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
