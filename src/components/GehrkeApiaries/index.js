import React from "react";
import GehrkeApiariesImage from "../../assets/img/GehrkeApiaries.png";
import Zoom from 'react-reveal/Zoom';


function Apiary() {
  return (
    <Zoom>
    <section className="my-5">
      <h2 id="about" className="text-center varela-font">
        Gehrke Apiaries
      </h2>
      <div className="my-2 borderBoxPort">
        <div className="container">
          <div className="row">
            <div className="col">
              <a target="_blank" href="http://www.gehrkeapiaries.com" rel="noreferrer">
                <img className="selfie" src={GehrkeApiariesImage} alt="apiary site logo" />
              </a>
              <h5 className="textSmall">Click the image to be taken to the site!</h5>
            </div>
            <div className="col">
              <h6>
                React built website using custom CSS styling. Minor React MUI components.               </h6>
            </div>
          </div>
        </div>
      </div>
    </section>
    </Zoom>
  );
}

export default Apiary;