import React from "react";
import Stack from '@mui/material/Stack';
import ImageRender from "../ImageRender";


import "./edu.css";

function Education(props) {
  return (
    <div className="page">
      <h1 className="page-title">
        <span>Education</span>
      </h1>
      <div className="container edu-wrapper">

        <div className="edu-logo">
          <div className="image">
            <ImageRender ext={props.image}/>
          </div>
          
          {/* <img src={uoft} className="image" alt="uoft" /> */}
        </div>

        <div className="edu-label">
          <h1>{props.school}</h1>
          <h2>Toronto, ON, Canada</h2>
          <h2>2017 - 2022</h2>
        </div>

        <div className="overlay">
          <div className="edu-description">
            <h1>{props.school}</h1>
            <h2>{props.degree}</h2>
            <h2>{props.major}</h2>

            <Stack className="edu-stack" spacing={3}>
              <p>GPA: {props.gpa}</p>
              <p style={{marginLeft: "1%"}}>Special Courses:
                <ul>
                  {props.courses && props.courses.map((course) => <li>
                    <a href={course.code} target="_blank" rel="noreferrer">{course.class}</a>
                  </li>)}
                </ul>
              </p>
              <p style={{marginLeft: "1%"}}>Awards:
                <ul>
                  {props.awards && props.awards.map((award) => <li>{award}</li>)}
                </ul>
              </p>
            </Stack>
          </div>
        </div>

      </div>
      <div className="page-anchor" id="education"></div>
    </div>
  );
}

export default Education;