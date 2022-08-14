import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import ProjectTitle from "./ProjectTitle";

function ProjectContent(props) {
    return (
        <div className="work-text">
            <div className="work-header">
              <ProjectTitle {...props.project}/>
              <h3>{props.timeline}</h3>
            </div>
            <div className="work-description">
                <p>{props.description}</p>
                <p>skills: {props.skills}</p>

                {props.github && <div className="project-github" >
                    <a href={props.github} target="_blank" rel="noreferrer">
                        <GitHubIcon 
                            fontSize="inherit" 
                            sx={{color: "inherit", borderRadius: "50%" }}
                        />
                        <span>repo</span>
                    </a>
                </div>}
            </div>
        </div>
    );
}

export default ProjectContent;