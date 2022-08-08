import React from "react";

function WorkContent(props) {
    return (
        <div className="work-text">
            <div className="work-header">
            <h1>{props.role} @ {props.company}</h1>
                <h3>{props.location}</h3>
                <h3>{props.timeline}</h3>
            </div>
            <div className="work-description">
                <p>{props.description}</p>
            </div>

        </div>
    );
}

export default WorkContent;