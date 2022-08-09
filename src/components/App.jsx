import React, { useEffect, useState } from "react";
import Navbar from "./nav/Navbar";
import Home from "./home/Home";
import Projects from "./projects/Projects";
import Work from "./work/Work";
import Education from "./edu/Education";
import Footer from "./footer/Footer";
// import { Routes, Route } from "react-router-dom";

// import Quotes from "./Quotes";

import axios from "axios";

import "../styles.css";

function App() {
  const [data, setData] = useState({});

  function backendCall() {
    axios.get("http://localhost:5000/",  { crossdomain: true }).then(response => {
      setData(response.data)
    });
  }

  useEffect(() => {
    backendCall();
  }, []); // '[]' param => only use effect once on page render

  // useEffect(() => {
  //   fetch("/")
  //   .then(res => res.json())
  //   .then(data => setData(data))
  // }, []);

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
