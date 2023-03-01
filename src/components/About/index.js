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
            I am a freelance web developer with a background in human services. I have a passion for using my technical skills to create websites that have a positive impact on people's lives. My background in human services has given me a unique perspective on the needs of different communities, and this knowledge is valuable when designing websites that are user-friendly and accessible to all.
          </div>
          <div className="aboutText">
            In my free time, I enjoy beekeeping, raising chickens, and landscaping. These hobbies have taught me the importance of attention to detail, patience, and problem-solving skills - all of which are vital in web development.
          </div>
          <div className="aboutText">
            Overall, my background in human services and my hobbies have given me a well-rounded set of skills that I bring to my work as a web developer. I am dedicated to creating websites that are both functional and visually pleasing, and that make a real difference in the world.
          </div>
        </div>
        <Fade bottom duration={2300}>
          <MeImage className="meLooking" alt="web developer selfie" />
        </Fade>
      </div>
    </section>
  );
}

export default About;