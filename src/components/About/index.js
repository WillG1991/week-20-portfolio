import React from 'react'
import Me from '../../assets/img/me.JPG';


function About() {

  return (
    <div >
    <section >
      <h2 id="about" class="text-center varela-font">Who am I?</h2>
      <div className="my-2">
      <div class="container text-center borderBox" className="borderBox">
      <div class="container">
  <div class="row">
    <div class="col">
    <img class="selfie" src={Me} alt="BigCo Inc. logo"/>
    </div>
    <div class="col">
     <h4>
     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.
      </h4> 
    </div>
  </div>
</div>
</div>
      </div>
    </section>
    </div>
  )
}

export default About