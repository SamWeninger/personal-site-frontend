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
          {/* <div className="project-wrapper" style={{backgroundColor: "#14639f"}}>
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
          </div> */}
        </Grid>
      </div>
      <div className="page-anchor" id="projects"></div>
    </div>
  );
}

export default Projects;