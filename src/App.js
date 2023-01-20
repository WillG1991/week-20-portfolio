import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from "./Pages/Landing";
import Home from "./Pages/Home";


function App() {

  return (
    <Router>
    <Routes>
    <Route exact path="/">
    <Home/>
</Route>
<Route exact path="/home">
    <Landing/>
</Route>
    </Routes>
    </Router>
  );
}

export default App;
