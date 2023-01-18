import React from "react";
import { RandomReveal } from 'react-random-reveal'






function About() {
  return (
    <>
      <section id="about">
    <div class="container">
      <div class="info">
      <RandomReveal
    isPlaying
    duration={2.6}
    revealDuration={0.5}
    characters="Know the developer"
  ></RandomReveal>
                <div class="productLine2"></div>

        <div class="productText">A New Jersey native, mom to Shmoo.   </div>
        <div class="productText"></div>
        <div class="productText"></div>

       
       
       

      </div>
    </div>
  </section>
  </>
  );
}

export default About;