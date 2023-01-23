import React, { useState } from "react";
import Home from "../src/Pages/Home"
import Landing from "../src/Pages/Landing"


function App() {
  const [currentPage, setCurrentPage] = useState("Landing");

  const renderPage = () => {
    if (currentPage === "Landing") {
      return <Landing />;
    }
    if (currentPage === "Home") {
      return <Home />;
    }
  };

  

  const handlePageChange = (page) => setCurrentPage(page);
  return (
    <div className="back">
    
      <div currentPage={currentPage} handleClick={handlePageChange}></div>
      <main id="Main">{renderPage()}</main>
    </div>
  );
}

export default App;
