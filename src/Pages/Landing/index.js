import React from "react";
import LandingVid from "../../assets/vid/landingVid.mp4"
import videoGif from "../../assets/vid/videoBackGif.gif"




function Landing({ handleClick }) {
  return (
    <>
      <div class="heroContainer">
        <video className="onDesktop" autoPlay muted src={LandingVid} alt="blue smoke" loop="true"></video>
        <img className="onMobile" src={videoGif} alt="blue smoke" loop="true"></img>
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