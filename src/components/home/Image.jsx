import React from "react";
import Content from "../card/Content";

function Image(props) {
    return (
        <div className="container">
            <img src={props.img} alt="" class="image" />
            <div className="overlay">
                <Content {...props} />
            </div>
        </div>
    )
}

export default Image;