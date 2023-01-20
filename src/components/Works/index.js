import React, { useState } from "react";
import searchWorks from "../../assets/img/worksImages/searchWorks.png"
import codeWorks from "../../assets/img/worksImages/codeWorks.png"
import movieWorks from "../../assets/img/worksImages/movieWorks.png"
import reikiWorks from "../../assets/img/worksImages/reikiWorks.png"
import apiaryWorks from "../../assets/img/worksImages/apiaryWorks.png"
import IconBootstrap from 'react-devicon/bootstrap/plain'





function Works() {
  return (

    <section id="works">

      
      <div className="photoGrid">

<div className="worksHeader">
<div className="worksWorks"> Works</div>

</div>
        <div class="container">
          <div ></div>
          
          <div class="box">
            <img src={apiaryWorks} />
            <span className="spanWorks"><p className="spanText"> A content driven eCommerce website for a service created as a single page web app in React.js. It utilizes components for each section while mapping over the iterable content mixed with React MUI displays.</p></span>
          </div>
          <div class="box">
            <img src={searchWorks} />
            <span className="spanWorks"><p className="spanText"> This website allows a user to search a movie or show to see what platform it is currently being streamed on. It was built using two API's, node, express, javascript, HTML and CSS.</p></span>
          </div>
          <div class="box">
            <img src={movieWorks} />
            <span className="spanWorks"><p className="spanText"> MovieSwipe is a full stack MERN application that allows users to swipe through movies and save favorites to their profile. It was built using HTML, CSS, Bootstrap, Javascript, Express, mongodb, GraphQl and React.</p></span>
          </div>
          <div class="box">
          <img src={codeWorks} />
            <span className="spanWorks"><p className="spanText"> Code-A-Break is a social media site allowing users to find relaxing resources for coding. A user is able to log in and post or comment links for breaks during coding sessions. It was built using HTML, CSS, Bulma, SQL, Insomnia, Express.</p></span>
          </div>
          <div class="box">
            <img src={reikiWorks} />
            <span className="spanWorks"><p className="spanText"> A content driven website for a service created as a single page web app in React.js. It utilizes components for each section while mapping over the iterable content mixed with React MUI displays.</p></span>
          </div>
        </div>
      </div>

    </section>




  );
}

export default Works;