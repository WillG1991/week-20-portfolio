import React, { useState } from 'react';
import Nav from '../src/components/Nav';
import About from '../src/components/About';
import Resume from '../src/components/Resume';
import Contact from '../src/components/Contact';
import Portfolio from '../src/components/Portfolio';
import Hero from '../src/components/Hero';

function App() {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    if (currentPage === 'Home') {
      return <About />;
    }
    if (currentPage === 'About') {
      return <Resume />;
    }
    if (currentPage === 'Blog') {
      return <Portfolio />;
    }
    return <Contact />;
  };


  return (
    
    <div>
      <Hero></Hero>
      <Nav></Nav>
      <main>
      {renderPage()}
      </main>
    </div>
  );
}

export default App;