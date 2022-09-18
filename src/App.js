import React, { useState } from 'react';
import Nav from '../src/components/Nav';
import About from '../src/components/About';
import Resume from '../src/components/Resume';
import Contact from '../src/components/Contact';
import Portfolio from '../src/components/Portfolio';
import Hero from '../src/components/Hero';

function App() {


  return (
    
    <div>
      <Hero></Hero>
      <Nav></Nav>
      <main>
      <About></About>
      <Portfolio></Portfolio>
      <Resume></Resume>
        <Contact></Contact>
      </main>
    </div>
  );
}

export default App;