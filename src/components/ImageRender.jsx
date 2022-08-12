import React, { useEffect, useState } from "react";
import axios from "axios";

function ImageRender(props) {
  const [img, setImg] = useState();

  useEffect(() => {
    axios.get("http://localhost:5000/" + props.ext, {
        responseType: "arraybuffer"
      })
      .then((res) => {
      const base64 = btoa(
        new Uint8Array(res.data).reduce(
          (data, byte) => data + String.fromCharCode(byte),
          ''
        )
      )
      setImg(base64)
    })
  }, [props.ext]); // '[]' param => only use effect once on page render

  return (
    <img src={`data:image/png;charset=utf-8;base64,${img}`} className="image" alt="img"/>
  );
}

export default ImageRender;