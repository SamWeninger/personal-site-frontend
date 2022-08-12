import React from "react";
import Content from "../card/Content";
import ImageRender from "../ImageRender";

function Image(props) {
    return (
        <div className="container">
            {/* <img src={props.img} alt="" class="image" /> */}
            <ImageRender ext={props.img}/>
            <div className="overlay">
                <Content {...props} />
            </div>
        </div>
    )
}

export default Image;