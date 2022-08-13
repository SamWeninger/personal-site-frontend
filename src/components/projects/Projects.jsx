import React from "react";
import Grid from "@mui/material/Grid";
import ContentCard from "../card/ContentCard";

import "./projects.css"

function Projects(props) {
  return (
    <div className="project-page">
      <h1 className="page-title">
        <span>Projects </span>
      </h1>
      <div className="project-apps">
        <Grid container justifyContent="center" alignItems="center">
          {props.items && props.items.map((proj) => 
              <div className="project-wrapper" style={{backgroundColor: proj.color}}>
                <ContentCard type="project" {...proj}/>
              </div>
          )}
        </Grid>
      </div>
      <div className="page-anchor" id="projects"></div>
    </div>
  );
}

export default Projects;