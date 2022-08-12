import React from "react";
import ContentCard from "../card/ContentCard";
import Grid from "@mui/material/Grid";

// import microsoft from "../../img/microsoft.jpeg";
// import huawei from "../../img/huawei.png";
// import bloorview from "../../img/bloorview.jpeg";

import "./work.css";

function Work(props) {
  return (
    <div className="work-page">
      <h1 className="page-title">
        <span>Work</span>
      </h1>
      
      <div className="work-apps">
        <Grid container justifyContent="flex-start" alignItems="center">
          {props.jobs && props.jobs.map((job) => 
            <div className="work-wrapper" style={{backgroundColor: job.color}}>
              <ContentCard type="work" {...job}/>
            </div>
          )}
          
          {/* <div className="work-wrapper" style={{backgroundColor: "white"}}>
            <ContentCard type="work" {...props}/>
          </div>
          <div className="work-wrapper" style={{backgroundColor: "#Fdf7f7"}}>
            <ContentCard type="work" {...props}/>
          </div>
          <div className="work-wrapper" style={{backgroundColor: "#01ae07"}}>
            <ContentCard type="work" {...props}/>
          </div> */}
        </Grid>
      </div>

      <div className="page-anchor" id="work">
      </div>
    </div>
  );
}

export default Work;