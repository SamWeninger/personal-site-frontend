import React from "react";
import Grid from "@mui/material/Grid";
import useWindowDimensions from "./Window";
import Image from "./Image";

import "./home.css"

function Home(props) {
  return (
    <div
      className={
        useWindowDimensions().width > 670 ? "home-page" : "home-page-small"
      }
    >
      <div
        className={
          useWindowDimensions().width > 917 ? "grid-large" : "grid-small"
        }
      >
        <Grid container justifyContent="flex-start" alignItems="center">
          {props.pics && props.pics.map((item) => 
            <div className="home-img">
              <Image {...item} />
            </div>
          )}
        </Grid>
      </div>
      <div
        className={
          useWindowDimensions().width > 917
            ? "home-elem-large"
            : "home-elem-small"
        }
      >
        <div className="home-title">
          <h1>{props.fName}</h1>
          <h1>{props.lName}</h1>
          <h2>{props.description}</h2>
        </div>
        {/* <h2>computer engineering @ university of toronto</h2> */}
      </div>
      <div className="page-anchor" id="home"></div>
    </div>
  );
}

export default Home;