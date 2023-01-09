import React from "react";
import ReikiHealingSite from "../../assets/img/ReikiHealingSite.png";
import Zoom from 'react-reveal/Zoom';

function ReikiHealing() {
  return (
    <Zoom>
      <section>
        <h2 id="about" className="text-center varela-font">
          Reiki Site
        </h2>
        <div className="my-2">
          <div className="container text-center borderBox">
            <div className="container">
              <div className="row">
                <div className="col">
                  <h6>
                    A content driven website for a service created as a single page web app in React.js. It utilizes components for each section while mapping over the iterable content mixed with React MUI displays.
                  </h6>
                </div>
                <div className="col">
                  <a target="blank" href="http://www.christinaserafina.com">
                    <img className="selfie" src={ReikiHealingSite} alt="Streaming search" />
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

export default ReikiHealing;