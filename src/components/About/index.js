import React from "react";
import Fade from 'react-reveal/Fade';
import MeImage from "../MeImageChange";

function About() {
  return (
    <section id="about">
      <div className="aboutContainer">
        <div className="infoAbout">
          <Fade top duration={3000}>
            <h3 className="damionFont">
              <span className="aboutKnow damionFont">KNOW</span> THE DEVELOPER
            </h3>
          </Fade>
          <div className="aboutText">
          As a freelance web developer, I bring a unique perspective to my work thanks to my background in human services. I'm passionate about using my technical skills to build websites that are user-friendly and accessible to a diverse range of people.          </div>
          <div className="aboutText">
          In my free time, I enjoy beekeeping, raising chickens, and landscaping, which have taught me important skills such as attention to detail, problem-solving, and patience - all of which are highly valuable in web development.          </div>
          <div className="aboutText">
          Overall, my diverse background and hobbies have given me a well-rounded set of skills that I apply to my work as a web developer. I'm committed to creating websites that not only look great but help businesses and individuals achieve their goals online.          </div>
        </div>
        <Fade bottom duration={2300}>
          <MeImage className="meLooking" alt="web developer selfie" />
        </Fade>
      </div>
    </section>
  );
}

export default About;