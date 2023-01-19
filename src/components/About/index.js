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
    <h3><span className="aboutKnow">Know</span> the developer</h3>
    </Fade>
                <div class="productText">I'm a New Jersey native, Bee Keeper, Chicken Dad, Landscaper, Nature Enthuisiast. Leaning in to these hobbies has ultimately inspired my career path of capturing the beauty in everything through a story-telling lens.  </div>
        <div class="productText">Coming from a human services based background, I believe in community, collaboration and connection. I inspire to capture the beauty in everything through a story-telling lens.   </div>
        <div class="productText">I look forward to working with you to create the platform to tell your story.</div>

      </div>
      
      < MeImage className="meLooking"/>
    </div>
  </section>
  </>
  );
}

export default About;