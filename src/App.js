import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from "./Pages/Landing";
import Home from "./Pages/Home";


function App() {

  return (
    <Router>
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/home" element={<Home />} />
    </Routes>
    </Router>
  );
}

export default App;
