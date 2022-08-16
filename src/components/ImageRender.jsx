import React from "react";
// import React, { useEffect, useState } from "react";
// import axios from "axios";

function ImageRender(props) {
  // const [img, setImg] = useState();

    // const url = "http://ec2-13-59-91-83.us-east-2.compute.amazonaws.com/";
    // const url = "http://localhost:5000/";
    // const url = "https://yx5zqe1vr1.execute-api.us-east-2.amazonaws.com/dev/";
    // const url = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAilBMVEX+AAD2AAD8AAjWkZP1AADemZnyAADurbT8AwPno6L5AwX9AAf5BAD6AAjdmpzVkpbzt7zrsLTtAADZkIvZkIfd+/7+2ub719f60dj6zMz8wMD8vs/tqanmoqHdl53fmJz3trH0tcH6rrfh4ub5qKTbhX3tp53bj5HtnZzbjJD4ARH0AxPYjpblxs41BTSdAAADR0lEQVR4nO3dbW/aMBiFYdu4rrGdAil7h0LbMUbW/f+/N4dAodPKyzTUncfn+hJVCiR3nJiqRI169/7Dx0+fvwyz0Wg06U/709ZN66pzlw0Gg965Bq272dUh6+1Mj+n3+5Pr40aj4b758H7+8Ki+1pnbZ611VtsdnXT+Wf+V9mX2CG3dkTXcaV6uV7s2baG+uRCSCkopH2P0Zs2bKrSLTuyYc21eF/3r2tXWmzoqnCB61dq8t1XWaTtWExcboxqzTthWVJ3nd/c+pXTKNl7YHqBDO/7blg4esM1B2y3MbhG7FbqF93nrplJV4+0yj2GOztnqdZs9PbDG/2W3v1HpsZrWunG++uPR7y6l1Nkuz3fgMk2bLZ19fpzA+VAle6u+2xTsNvsfO3oZXpRTKazH0EWjEs4peDqffIi6p/rOGBVkFqpgWAiNhfjKKcyfFpGFmHZnqfRC+WN4Yz0LQZVTeGW9UVp8YXjrvbmEl2P41ntzCSzEx+sQHwvxFVbImQYSC/EVVsiZBhIL8RVWyJkGEgvxFVbImQbSXmEl+6/6Mx291Hui9gvjW+/OBWwLezbXCS/0wsdwIP4sZSGu5+tQy72DdltoAgsxsRAfC/GxEB8L8bEQHwvxsRAfC/GxEB8L8bEQHwvxlVM40FF+YZL93RMLcZXzDenAGumF2gg/S2faC/+0KOLOPRaC4h20+FiIr7BCzjSQWIivsELONJBYiK+wQs40kFiIj9chPhbiK6yQMw0kFuIrrJAzDaRy/mP5zfosZSGivcJKduHMGumFmoWonp8zY6U/70n+E61YiIuF+FiIj4X4WIiPhfhYiI+F+FiIj4X4WIiPhfhYiI+F+FiIj4X4yimciC+8diHKvnOPhbj2CoXfX8pCXCzEx0J8LMTHQnwsxMdCfCzEx0J8LMTHQnwsxMdCfCzEx0J85RSOrBf+DenI+eiFF0bhYzh00s9SFuLaL5Q90+RCw0JMLMTHQny7wpQLZd5B67vC2lXKOS9P7VMVbE/NXZurkjz5dzUT06obwyDwEY/5Mkwh2bG6r+vGV0GgptI/Gvek5nWeZvKIGnFCTE2wK/VQO62tlsdabZ12C/W4GC/Ht+OePMvV+Gm1+PkLM1yKzVSza6MAAAAASUVORK5CYII="
    const url = "https://personal-site-backend-pictures.s3.us-east-2.amazonaws.com/";


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