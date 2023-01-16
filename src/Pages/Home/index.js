import React, { useState } from "react";
import About from "../../components/About"
import Resume from "../../components/Resume"
import Portfolio from "../../components/Portfolio"
import Contact from "../../components/Contact"
import Nav from "../../components/Nav"






function Home() {
    const [currentPage, setCurrentPage] = useState("Home");
    const handlePageChange = (page) => setCurrentPage(page);

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

  };

  return (
    <>
   
   
        <section className="homeBacks">
        <main className="mainSection" id="Main">{renderPage()}</main>
        <Nav currentPage={currentPage} handleClick={handlePageChange}></Nav>
      
        </section>
     
      </>
  );
}

export default Home;