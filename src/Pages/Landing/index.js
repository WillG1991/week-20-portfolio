import React from "react";
import LandingVid from "../../assets/vid/landingVid.mp4"
import videoGif from "../../assets/vid/videoBackGif.gif"

function Landing({ handleClick }) {
  return (
    <>
      <div id="Landing" className="heroContainer">
        <video className="onDesktop" autoPlay muted src={LandingVid} alt="blue smoke" loop={true} playbackrate={5} ></video>
        <img className="onMobile" autoPlay muted src={videoGif} alt="blue smoke" loop={true}></img>
        <div className="text-box">
          <h1 className="heroBigText">Will</h1>
          <h1 className="heroBottom">Design & Development</h1>
          <span className="btn" href="home" onClick={() => handleClick("Home")}>Enter</span>
        </div>
      </div>
    </>
  );
}

export default Landing;