import React from "react";
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
    <a class="tile-link" href="https://ohdangbro.github.io/Streaming-Search/" target="_blank">
      <img class="tile-img tile-img1" src={searchSite} alt="searchsite"/>
    </a>
  </div>
</div>

<div class="grid-block">
  <div class="tile">
    <a class="tile-link" href="http://www.gehrkeapiaries.com" target="_blank">
      <img class="tile-img tile-img3" src={apiarySite} alt="apiarysite"/>
    </a>
  </div>
</div>
<div class="grid-block">
  <div class="tile">
    <a class="tile-link" href="https://github.com/rrvallar/Project-3 "target="_blank">
      <img class="tile-img tile-img2" src={movieSite} alt="moviesite"/>
    </a>
  </div>
</div>




<div class="grid-block">
  <div class="tile">
    <a class="tile-link" href="http://www.christinaserafina.com" target="_blank">
      <img class="tile-img tile-img5" src={reikiSite} alt="reikisite"/>
    </a>
  </div>
</div>
<div class="grid-block">
  <div class="tile">
    <a class="tile-link" href="https://codeabreak.herokuapp.com/" target="_blank">
      <img class="tile-img tile-img4" src={codeSite} alt="codesite"/>
    </a>
  </div>
</div>

<div class="grid-block">
  <div class="tile">
    <a class="tile-link" href="http://www.branchburgsbest.com"  target="_blank">
      <img class="tile-img tile-img2" src={dinerSite} alt="blanksite"/>
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