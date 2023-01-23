import React from "react";
import LandingVid from "../../assets/vid/landingVid.mp4"
import videoGif from "../../assets/vid/videoBackGif.gif"




function Landing({ handleClick }) {
  return (
    <>
      <div class="heroContainer">
        <video autoPlay muted src={LandingVid} alt="blue smoke" loop="true"></video>
        <div class="text-box">
          <h1 className="heroBigText">Will</h1>
          <h1 className="heroBottom">Design & Development</h1>
          <span class="btn" href="home"    onClick={() => handleClick("Home")}>Enter</span>
        </div>
      </div>
      </>
  );
}

export default Landing;