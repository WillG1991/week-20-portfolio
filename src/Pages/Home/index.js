import React, { useState } from "react";
import Works from "./works";
import About from "../../components/About";
import Hero from "../../components/Hero";
import Nav from "../../components/Nav";



function Home() {
  return (
    <>
    <Nav></Nav>
    
    <section >
    <Hero></Hero>
    <Works className="allWorks"></Works>
    <About ></About>
    </section>

    </>


  );
}

export default Home;