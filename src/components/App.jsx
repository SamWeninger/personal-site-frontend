import React, { useEffect, useState } from "react";
import Navbar from "./nav/Navbar";
import Home from "./home/Home";
import Projects from "./projects/Projects";
import Work from "./work/Work";
import Education from "./edu/Education";
import Footer from "./footer/Footer";
import axios from "axios";
import "../styles.css";

function App() {
  const [data, setData] = useState({});

  const url = "https://yx5zqe1vr1.execute-api.us-east-2.amazonaws.com/dev/";

  function backendCall() {
    axios.get(url, { crossdomain: true }).then(response => {
      setData(response.data.data);
    });
  }

  useEffect(() =>  {
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
