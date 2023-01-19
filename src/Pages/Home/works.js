import React, { useState } from "react";
import searchWorks from "../../assets/img/worksImages/searchWorks.png"
import codeWorks from "../../assets/img/worksImages/codeWorks.png"
import movieWorks from "../../assets/img/worksImages/movieWorks.png"
import reikiWorks from "../../assets/img/worksImages/reikiWorks.png"
import apiaryWorks from "../../assets/img/worksImages/apiaryWorks.png"
import IconBootstrap from 'react-devicon/bootstrap/plain'





function Works() {
  return (

    <section id="work">

      
      <div className="photoGrid">

<div className="worksHeader">
<div className="worksWorks"> Works</div>

</div>
        <div class="container">
          <div ></div>
          
          <div class="box">
            <img src={apiaryWorks} />
            <span className="spanWorks">1</span>
          </div>
          <div class="box">
            <img src={searchWorks} />
            <span className="spanWorks">2</span>
          </div>
          <div class="box">
            <img src={movieWorks} />
            <span className="spanWorks">3</span>
          </div>
          <div class="box">
          <img src={codeWorks} />
            <span className="spanWorks">4</span>
          </div>
          <div class="box">
            <img src={reikiWorks} />
            <span className="spanWorks">5</span>
          </div>
        </div>
      </div>

    </section>




  );
}

export default Works;