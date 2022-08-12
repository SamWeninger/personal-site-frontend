import React from "react";
import Content from "./Content";
import ImageRender from "../ImageRender";

import "./card.css";

function ContentCard(props) {

    return (
        <div className="container">
            <div className="card-image">
                <ImageRender ext={props.img}/>
                {/* {props.type === "project" && <img src={props.img} alt="" className="image" />} */}
            </div>
            <div className="overlay">
                <Content {...props} />
            </div>
        </div>
    )
}

export default ContentCard;