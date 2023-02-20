import React, { useEffect, useRef } from "react";
import apiarySite from "../../assets/img/worksImages/apiaryWorks.png"
import searchSite from "../../assets/img/worksImages/searchWorks.png"
import movieSite from "../../assets/img/worksImages/movieWorks.png"
import codeSite from "../../assets/img/worksImages/codeWorks.png"
import reikiSite from "../../assets/img/worksImages/reikiWorks.png"
import dinerSite from "../../assets/img/worksImages/dinerWorks.png"
import blankSite from "../../assets/img/worksImages/blankWorks.png"


function Works() {
  return (
    <>
    
    <section id="works">
        <h1 className="worksHeader damionFont">Works</h1>
      
<div className="worksContainer">
<div class="grid image-grid">
<div class="grid-block">
  <div class="tile">
    <a class="tile-link" >
      <img class="tile-img tile-img2" src={blankSite} alt="blanksite" useRef={blankSite}/>
    </a>
  </div>
</div>
<div class="grid-block">
  <div class="tile">
    <a class="tile-link" >
      <img class="tile-img tile-img2" src={blankSite} alt="blanksite"/>
    </a>
  </div>
</div>

<div class="grid-block">
  <div class="tile">
    <a class="tile-link" >
      <img class="tile-img tile-img1" src={blankSite} alt="blanksite"/>
    </a>
  </div>
</div>
<div class="grid-block">
  <div class="tile">
    <a class="tile-link" >
      <img class="tile-img tile-img2" src={blankSite} alt="blanksite"/>
    </a>
  </div>
</div>

<div class="grid-block">
  <div class="tile">
    <a class="tile-link" href="https://github.com/rrvallar/Project-3 "target="_blank">
      <img class="tile-img tile-img2" src={movieSite} alt="moviesite" useRef={movieSite}/>
      <div className="message">MovieSwipe is a team-built full-stack MERN app that lets users swipe movies and save favorites to their profile. I was responsible for back-end, using HTML, CSS, Bootstrap, Javascript, Express, MongoDB, GraphQL, and React in a one-week sprint.</div>

    </a>
  </div>
</div>
<div class="grid-block">
  <div class="tile">
    <a class="tile-link" href="http://www.gehrkeapiaries.com" target="_blank" >
      <img class="tile-img tile-img3" src={apiarySite} alt="apiarysite" useRef={apiarySite}/>
      <div className="message">E-commerce website using React that includes custom CSS styling to create a unique design. I also utilized some React Material-UI components to enhance the user experience.</div>

    </a>
  </div>
</div>
<div class="grid-block">
  <div class="tile">
    <a class="tile-link" href="https://ohdangbro.github.io/Streaming-Search/" target="_blank">
      <img class="tile-img tile-img1" src={searchSite} alt="searchsite"/>
      <div className="message">A website that enables users to search for a particular movie or show to see where it is currently being streamed. The site was built using two APIs, along with Node, Express, JavaScript, HTML, and CSS to create a seamless and dynamic user experience.</div>
    </a>
  </div>
</div>





<div class="grid-block">
  <div class="tile">
    <a class="tile-link" href="http://www.christinaserafina.com" target="_blank">
      <img class="tile-img tile-img5" src={reikiSite} alt="reikisite"/>
      <div className="message">A single-page web app in React.js for a service-based website that leverages reusable components for each section of the page, while also incorporating React Material-UI displays. The app is driven by dynamic, iterable content.</div>

    </a>
  </div>
</div>
<div class="grid-block">
  <div class="tile">
    <a class="tile-link" href="http://www.branchburgsbest.com"  target="_blank">
      <img class="tile-img tile-img2" src={dinerSite} alt="blanksite"/>
      <div className="message">a restaurant website using HTML, CSS, and Bootstrap. The site features a sleek and modern design and a seamless user experience for customers</div>

    </a>
  </div>
</div>
<div class="grid-block">
  <div class="tile">
    <a class="tile-link" href="https://codeabreak.herokuapp.com/" target="_blank">
      <img class="tile-img tile-img4" src={codeSite} alt="codesite"/>
      <div className="message">A social media platform that connects coders with relaxing resources to improve their coding experience. The site allows users to log in, post, and comment on links for breaks during coding sessions. I built the site from the ground up in just one week, utilizing HTML, CSS, Bulma, SQL, Insomnia, and Express to create a seamless and intuitive user experience.</div>

    </a>
  </div>
</div>

<div class="grid-block">
  <div class="tile">
    <a class="tile-link" >
      <img class="tile-img tile-img2" src={blankSite} alt="blanksite"/>
    </a>
  </div>
</div>
<div class="grid-block">
  <div class="tile">
    <a class="tile-link" >
      <img class="tile-img tile-img2" src={blankSite} alt="blanksite"/>
    </a>
  </div>
</div>
<div class="grid-block">
  <div class="tile">
    <a class="tile-link" >
      <img class="tile-img tile-img2" src={blankSite} alt="blanksite"/>
    </a>
  </div>
</div>
<div class="grid-block">
  <div class="tile">
    <a class="tile-link" >
      <img class="tile-img tile-img2" src={blankSite} alt="blanksite"/>
    </a>
  </div>
</div>

</div>
</div>
  </section>
  </>
  );
}

export default Works;