import React from "react";
import Content from "./Content";

import "./card.css";

function ContentCard(props) {

    return (
        <div className="container">
            <div className="card-image">
                <img src={props.img} alt="" className="image" />
            </div>
            <div className="overlay">
                <Content {...props} />
            </div>
        </div>
    )
}

export default ContentCard;