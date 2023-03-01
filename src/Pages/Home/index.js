import React from "react";
import Works from "../../components/Works";
import About from "../../components/About";
import Hero from "../../components/Hero";
import Navbar from "../../components/Nav";
import Skills from "../../components/Skills";
import Footer from "../../components/Footer";

function Home() {
  return (
    <>
      <section id="#Home" >
        <Navbar />
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