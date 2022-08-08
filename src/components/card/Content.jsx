import React from "react";
import WorkContent from "../work/WorkContent";
import HomeContent from "../home/HomeContent";
import ProjectContent from "../projects/ProjectContent";

function Content(props) {
  switch(props.type) {
    case "work":
      return <WorkContent {...props}/>;
    case "project":
      return <ProjectContent {...props}/>;
    default:
      return <HomeContent {...props}/>;
  }

}

export default Content;