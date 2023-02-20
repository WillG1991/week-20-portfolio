import React, { useState } from "react";
import Home from "../src/Pages/Home"
import Landing from "../src/Pages/Landing"
import Contact from "./Pages/Contact";
import Navbar from "./components/Nav";


function App() {
  const [currentPage, setCurrentPage] = useState("Landing");
  const handlePageChange = (page) => setCurrentPage(page);
  const renderPage = () => {
    if (currentPage === "Landing") {
      return <Landing currentPage={currentPage} handleClick={handlePageChange} />;
    }
    if (currentPage === "Home") {
      return <Home />;
    }
    if (currentPage === "Contact") {
      return <Contact currentPage={currentPage} handleClick={handlePageChange} />;
    }
  };

  return (
    <div className="back">
      {currentPage !== "Landing" && <Navbar currentPage={currentPage} handleClick={handlePageChange}/>}
      <main id="Main">{renderPage()}</main>
    </div>
  );
}

export default App;