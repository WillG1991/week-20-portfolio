import React, { useState } from "react";
import Home from "../src/Pages/Home"
import Landing from "../src/Pages/Landing"


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
  };

  


  return (
    <div className="back">
      <div currentPage={currentPage} handleClick={handlePageChange}></div>
      <main id="Main">{renderPage()}</main>
    </div>
  );
}

export default App;
