import React from "react";
import heroMe from "../../assets/img/meBlackAndWhite.png"
import Flip from 'react-reveal/Flip';
import Fade from 'react-reveal/Fade';
import { RandomReveal } from 'react-random-reveal'

function Hero() {
  return (
    <>
      <section id="hero">
        <div className="containerIMWILL">
          <div className="info">
            <h1>Hello, my name is
              <Flip top duration={3500}><span className="heroName"> <RandomReveal
                isPlaying
                duration={3.4}
                revealDuration={0.5}
                characters="Will."
              ></RandomReveal> </span></Flip></h1>
            <h2>I'm a Web Developer.</h2>
            <div className="productLine ver"></div>
            <Fade duration={16000}><p>I'm a freelance web developer based in the New York Metro area.</p></Fade>
            <Fade duration={6000} ><span ><img alt="selfie of web developer" className="heroImageMe" src={heroMe} /></span></Fade>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;