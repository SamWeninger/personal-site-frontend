import React from "react";
import Content from "../card/Content";

function Image(props) {
    return (
        <div class="container">
            <img src={props.img} alt="" class="image" />
            <div class="overlay">
                <Content {...props} />
            </div>
        </div>
    )
}

export default Image;