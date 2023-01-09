import React from "react";
import GehrkeApiariesImage from "../../assets/img/GehrkeApiaries.png";
import Zoom from 'react-reveal/Zoom';


function Apiary() {
  return (
    <Zoom>
          <section>
        <h2 id="about" className="text-center varela-font">
        Apiary Site
        </h2>
        <div className="my-2">
          <div className="container text-center borderBox">
            <div className="container">
              <div className="row">
                <div className="col">
                <h6>
                React built website using custom CSS styling. Minor React MUI components.
                </h6>
                </div>
                <div className="col">
                <a target="_blank" href="http://www.gehrkeapiaries.com" rel="noreferrer">
                <img className="selfie" src={GehrkeApiariesImage} alt="apiary site logo" />
                <h4>
                      Click to be taken to the site
                    </h4>
                </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
   
    </Zoom>
  );
}

export default Apiary;