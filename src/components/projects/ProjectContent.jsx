import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';

function ProjectContent(props) {
    return (
        <div className="work-text">
            <div className="work-header">
              <h1>{props.project}</h1>
              <h3>{props.timeline}</h3>
            </div>
            <div className="work-description">
                <p>{props.description}</p>
                <p>{props.skills}</p>

                <a href={props.link} target="_blank" rel="noreferrer">
                    <GitHubIcon 
                        fontSize="inherit" 
                        sx={{color: "white", borderRadius: "50%" }}
                    />
                </a>
            </div>

        </div>
    );
}

export default ProjectContent;