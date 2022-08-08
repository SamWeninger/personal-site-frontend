import React from "react";
import Navbar from "./nav/Navbar";
import Home from "./home/Home";
import Projects from "./projects/Projects";
import Work from "./work/Work";
import Education from "./edu/Education";
import Footer from "./footer/Footer";
// import { Routes, Route } from "react-router-dom";

import "../styles.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Projects />
      <Work />
      <Education />
      <Footer />
    </div>
  );
}

export default App;
