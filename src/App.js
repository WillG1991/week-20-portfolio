import React, { useState } from "react";
import Nav from "../src/components/Nav";
import About from "../src/components/About";
import Resume from "../src/components/Resume";
import Contact from "../src/components/Contact";
import Portfolio from "../src/components/Portfolio";
import Hero from "../src/components/Hero";
import Movie from "../src/components/Movie";

function App() {
  const [currentPage, setCurrentPage] = useState("Home");

  const renderPage = () => {
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Resume") {
      return <Resume />;
    }
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
    if (currentPage === "Contact") {
      return <Contact />;
    }
    if (currentPage === "Movie") {
      return <Movie />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);
  return (
    <div className="back">
      <Hero></Hero>
      <Nav currentPage={currentPage} handleClick={handlePageChange}></Nav>
      <main id="Main">{renderPage()}</main>
    </div>
  );
}

export default App;
