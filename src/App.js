import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from "./Pages/Landing";
import Home from "./Pages/Home";


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
    <>
    
    <Router>
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/home" element={<Home />} />
    </Routes>
    </Router>
    
</>
  );
}

export default App;
