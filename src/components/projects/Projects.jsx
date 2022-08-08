import React from "react";
import Grid from "@mui/material/Grid";
import ContentCard from "../card/ContentCard";

import "./projects.css"

import huawei from "../../img/huawei.png";
import bri from "../../img/bri.png";
import courseFinder from "../../img/course-finder.png";
import janeStreet from "../../img/jane-street.png";
import snakes from "../../img/snakes.png";

function Projects() {

  const url = "https://github.com/SamWeninger/MachineLearning/blob/master/VenomousSnakes.ipynb";

  const props = {
    // img: {huawei},
    project: "Huawei",
    link: url,
    timeline: "May 2020 - August 2021",
    description: "huawei huawei",
    skills: "Software Engineering Intern"
  }

  return (
    <div className="project-page">
      <h1 className="page-title">
        <span>Projects </span>
      </h1>
      <div className="project-apps">
        <Grid container justifyContent="center" alignItems="center">
          <div className="project-wrapper" style={{backgroundColor: "#14639f"}}>
            <ContentCard type="project" img={courseFinder} {...props}/>
          </div>
          <div className="project-wrapper" style={{backgroundColor: "#94d8ac"}}>
            <ContentCard type="project" img={janeStreet} {...props} style={{padding: "1%"}}/>
          </div>
          <div className="project-wrapper" style={{backgroundColor: "#ffffff"}}>
            <ContentCard type="project" img={bri} {...props}/>
          </div>
          <div className="project-wrapper" style={{backgroundColor: "#ffffff"}}>
            <ContentCard type="project" img={snakes} {...props}/>
          </div>
          <div className="project-wrapper" >
            <ContentCard type="project" img={huawei} {...props}/>
          </div>
        </Grid>
      </div>
      <div className="page-anchor" id="projects"></div>
    </div>
  );
}

export default Projects;