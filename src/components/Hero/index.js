import React from "react";
import heroMe from "../../assets/img/meBlackAndWhite.png"
import Flip from 'react-reveal/Flip';
import Fade from 'react-reveal/Fade';
import { RandomReveal } from 'react-random-reveal'


function Hero() {




  return (
    <>
    <section id="hero">
    <div class="containerIMWILL">
      <div class="info">
        <h1>Hello, my name is  
        <Flip top duration={3500}><span className="heroName"> <RandomReveal
    isPlaying
    duration={2.6}
    revealDuration={0.5}
    characters="Will."
  ></RandomReveal> </span></Flip></h1>
        <h2>I'm a Web Developer<span className="headerPeriod">.</span></h2>
        <div class="productLine ver"></div>

        <Fade duration={16000}><p>I'm a freelance web developer based in the New York Metro area.</p></Fade>
       
        <Fade duration={8000} ><span ><img alt="" class="heroImageMe" src={heroMe}/></span></Fade>

      </div>
    </div>
  </section>
  </>
  );
}

export default Hero;