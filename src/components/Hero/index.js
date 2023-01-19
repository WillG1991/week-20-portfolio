import React from "react";
import heroMe from "../../assets/img/meBlackAndWhite.png"
import Flip from 'react-reveal/Flip';
import Fade from 'react-reveal/Fade';
import { RandomReveal } from 'react-random-reveal'


function Hero() {

  const styleMe = {
    position: "absolute",
    bottom: "-35px",
    right: "200px",
    backgroundColor: "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 59%, rgba(0, 0, 0, 0.65) 100%),",
  }


  return (
    <>
    <section id="hero">
    <div class="container">
      <div class="info">
        <h1>Hello, my name is  
        <Flip top duration={4000}><span className="heroName"> <RandomReveal
    isPlaying
    duration={2.6}
    revealDuration={0.5}
    characters="Will"
  ></RandomReveal> </span></Flip></h1>
        <h2>I'm a Web Developer</h2>
        <div class="productLine ver"></div>

        <p>I'm a freelance web developer based in the New York Metro area.</p>
       
        <Fade duration={8000}><img alt="" class="heroImageMe" src={heroMe} style={styleMe}/></Fade>

      </div>
    </div>
  </section>
  </>
  );
}

export default Hero;