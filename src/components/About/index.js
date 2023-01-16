import React from "react";
import Me from "../../assets/img/me.JPG";


function About() {
  return (
    <div>
      <section className="whoAmISection">
        <h2 id="about" className=" introSection text-center moon-font">
          Who am I?
        </h2>
        <div className="my-2">
          <div className="container text-center borderBox">
            <div className="container">
              <div className="row">
                <div className="col">
                  <h6 className="whoExpl">
                  Hello! I am Will. A New Jersey native with a knack for making things beautiful. With a certification from Rutgers, a degree in Human Services and a collaborative approach - I am equipped to make all your digital dreams a reality. Some of my hobbies include photography, farming, landscaping + more! Leaning in to these hobbies has ultimately inspired my career path of capturing the beauty in everything through a story-telling lens. I look forward to working with you to create the platform to tell your story. 
                  </h6>
                </div>
                <div className="col">
                  {/* <img className="selfie1" src={Me} alt="Selfie" /> */}
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
