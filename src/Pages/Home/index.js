import React, { useState } from "react";
import Works from "../../components/Works";
import About from "../../components/About";
import Hero from "../../components/Hero";
import Nav from "../../components/Nav";
import Skills from "../../components/Skills";
import Footer from "../../components/Footer";

function Home() {
  return (
    <>
    <Nav></Nav>
    
    <section >
    <Hero></Hero>
    <Works></Works>
    <About></About>
    <Skills></Skills>
    <Footer></Footer>
    </section>

    </>


  );
}

export default Home;