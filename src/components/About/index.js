import React from "react";
import Fade from 'react-reveal/Fade';
import meLooking from "../../assets/img/meLooking.jpg"
import MeImage from "../MeImageChange";




function About() {
  return (
    <>
      <section id="about">
    <div class="container">
      <div class="info">
      <Fade top duration={3000}>
    <h3 className="damionFont"><span className="aboutKnow damionFont">KNOW</span> THE DEVELOPER</h3>
    </Fade>
                <div class="aboutText">I'm a New Jersey native, Bee Keeper, Chicken Dad, Landscaper, Nature Enthuisiast. Leaning in to these hobbies has ultimately inspired my career path of capturing the beauty in everything through a story-telling lens.  </div>
        <div class="aboutText">Coming from a human services based background, I believe in community, collaboration and connection. I inspire to capture the beauty in everything through a story-telling lens.   </div>
        <div class="aboutText">I look forward to working with you to create the platform to tell your story.</div>
      </div>
      <Fade bottom duration={2300}>
      < MeImage className="meLooking"/>
      </Fade>
    </div>
  </section>
  </>
  );
}

export default About;