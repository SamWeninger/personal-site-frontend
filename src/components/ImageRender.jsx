import React from "react";
// import React, { useEffect, useState } from "react";
// import axios from "axios";

function ImageRender(props) {
  // const [img, setImg] = useState();

    const url = "http://ec2-13-59-91-83.us-east-2.compute.amazonaws.com/";
    // const url = "http://localhost:5000/";

  // useEffect(() => {
  //   axios.get(url + props.ext, {
  //       responseType: "arraybuffer"
  //     })
  //     .then((res) => {
  //     const base64 = btoa(
  //       new Uint8Array(res.data).reduce(
  //         (data, byte) => data + String.fromCharCode(byte),
  //         ''
  //       )
  //     )
  //     setImg(base64)
  //   })
  // }, [props.ext]); // '[]' param => only use effect once on page render

  return (
    // <img src={`data:image/png;charset=utf-8;base64,${img}`} className="image" alt="img"/>
    <img src={url + props.ext} className="image" alt="img"/>
  );
}

export default ImageRender;