import React, { useEffect, useState } from "react";
import Navbar from "./nav/Navbar";
import Home from "./home/Home";
import Projects from "./projects/Projects";
import Work from "./work/Work";
import Education from "./edu/Education";
import Footer from "./footer/Footer";
// import { Routes, Route } from "react-router-dom";

import axios from "axios";

import "../styles.css";

function App() {
  const [data, setData] = useState({});

  const url = "http://ec2-13-59-91-83.us-east-2.compute.amazonaws.com/";
  // const url = "http://localhost:5000/";

  function backendCall() {
    axios.get(url,  { crossdomain: true }).then(response => {
      setData(response.data)
    });
  }

  useEffect(() => {
    backendCall();
  }, []); // '[]' param => only use effect once on page render

  return (
    <div className="App">
      <Navbar />
      <Home {...data.home} />
      <Projects {...data.projects} />
      <Work {...data.work} />
      <Education {...data.education}/>
      <Footer {...data.footer} />
    </div>
  );
}

export default App;
