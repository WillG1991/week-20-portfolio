import React, { useState } from "react";
import Works from "./works";
import Intro from "./intro";
import Hero from "../../components/Hero";




function Home() {
  return (

    <section >
      <div>
        <Hero/>
<Intro/>
<Works/>
</div>


    </section>




  );
}

export default Home;