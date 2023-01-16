import React from "react";
import landingVid from "../../assets/vid/landingVid.mp4"
import NavBar from "../NavBar";



function Landing() {
  return (
    <>
   <NavBar/>
      <div class="heroContainer">
      
        <video autoPlay muted src={landingVid} loop="true"></video>
        <div class="text-box">
          <h1 className="heroBigText">Will</h1>
          <h1 className="heroBottom">Design & Development</h1>
        </div>
      </div>
      </>
  );
}

export default Landing;