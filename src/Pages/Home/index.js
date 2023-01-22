import React, { useState } from "react";

import About from "../../components/About";
import Hero from "../../components/Hero";
import Nav from "../../components/Nav";
import Skills from "../../components/Skills";
import Footer from "../../components/Footer";

function Home() {
  return (
    <>
    <Nav></Nav>
    
    <section id="#home" >
    <Hero></Hero>
    <About></About>
    <Skills></Skills>
    <Footer></Footer>
    </section>

    </>


  );
}

export default Home;