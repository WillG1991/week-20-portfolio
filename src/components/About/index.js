import React from "react";
import Fade from 'react-reveal/Fade';
import meLooking from "../../assets/img/meLooking.jpg"





function About() {
  return (
    <>
      <section id="about">
    <div class="container">
      <div class="info">
      <Fade top duration={3000}>
    <h3>Know the developer</h3>
    </Fade>
                <div class="productLine2"></div>
                <div class="productText">I'm a New Jersey native, Bee Keeper, Chicken Dad, Nature Enthuisiast. Leaning in to these hobbies has ultimately inspired my career path of capturing the beauty in everything through a story-telling lens.  </div>
        <div class="productText">Coming from a human services based background, I believe in community, collaboration and connection. I inspire to capture the beauty in everything through a story-telling lens.   </div>
        <div class="productText">I look forward to working with you to create the platform to tell your story.</div>

      </div>
      <img className="meLooking" src={meLooking}/>
    </div>
  </section>
  </>
  );
}

export default About;