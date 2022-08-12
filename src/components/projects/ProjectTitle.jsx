import React from "react";

function ProjectTitle(props) {
  if (props.link) {
    return (
      <h1 className="project-title">
        <a href={props.link} target="_blank" rel="noreferrer">
          {props.title}
        </a>
      </h1>
    );
  } else {
    return (<h1 className="project-title">{props.title}</h1>)
  }
}

export default ProjectTitle;