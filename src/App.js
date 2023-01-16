import React, { useState } from "react";
import NavBar from "./components/NavBar";
import Landing from "./components/Landing";


function App() {
  // const [currentPage, setCurrentPage] = useState("Home");

  // const renderPage = () => {
  //   if (currentPage === "About") {
  //     return <About />;
  //   }
  //   if (currentPage === "Resume") {
  //     return <Resume />;
  //   }
  //   if (currentPage === "Portfolio") {
  //     return <Portfolio />;
  //   }
  //   if (currentPage === "Contact") {
  //     return <Contact />;
  //   }
  //   if (currentPage === "Movie") {
  //     return <MovieSwipe />;
  //   }
  // };

  

  // const handlePageChange = (page) => setCurrentPage(page);
  return (
    // <div className="back">
    //   <Hero></Hero>
    //   <Nav currentPage={currentPage} handleClick={handlePageChange}></Nav>
    //   <main id="Main">{renderPage()}</main>
    // </div>
    <>
    <Landing></Landing>
</>
  );
}

export default App;
