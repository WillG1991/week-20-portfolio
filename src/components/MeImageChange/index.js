import React, { useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import hoverEffect from "hover-effect";
import meTent from "../../assets/img/meTent.jpg";
import meBees from "../../assets/img/meBees.jpg";
import "../../assets/styles/style.css";

function MeImage() {
  const container = useRef();

  useEffect(() => {
    console.log(container.current);

    new hoverEffect({
      parent: container.current,
      intensity: 0.3,
      image1: meTent,
      image2: meBees,
      displacementImage:
        "https://raw.githubusercontent.com/robin-dela/hover-effect/master/images/fluid.jpg"
    });
  }, [container]);

  return (
    
   
      <div
        id="imgContainer"
        ref={container}
        style={{
          width: 400,
          height: 400
        }}
      />
   
  );
}

export default MeImage;