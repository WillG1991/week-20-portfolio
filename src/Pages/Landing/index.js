import React from "react";

import videoGif from "../../assets/vid/videoBackGif.gif"




function Landing() {
  return (
    <>
  
      <div class="heroContainer">
      
        <img autoPlay muted src={videoGif} alt="blue smoke" loop="true"></img>
        <div class="text-box">
          <h1 className="heroBigText">Will</h1>
          <h1 className="heroBottom">Design & Development</h1>
          <a class="btn" href="/home">Enter</a>
        </div>
        

      </div>
      </>
  );
}

export default Landing;