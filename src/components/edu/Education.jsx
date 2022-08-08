import React from "react";
import Stack from '@mui/material/Stack';

import uoft from "../../img/uoft.png";

import "./edu.css";

function Education() {
  const props = {
    school: "University of Toronto",
    degree: "Bachelor of Applied Science",
    major: "Computer Engineering, Minor in A.I. Engineering",
    gpa: "3.72/4",
    courses: [
      "ECE 444",
      "ECE 297",
      "ECE 444"
    ],
    awards: [
      "heehee",
      "hoohoo"
    ]
  }

  const buutt = "https://www.google.com/search?q=butts&rlz=1C5CHFA_enUS751US751&oq=butts&aqs=chrome..69i57j46i512j46i10i131i433j0i512j46i175i199i512j46i10i131i199i433i465j46i10i131i433j0i512j46i175i199i512.863j0j7&sourceid=chrome&ie=UTF-8";

  return (
    <div className="page">
      <h1 className="page-title">
        <span>Education</span>
      </h1>
      <div className="container edu-wrapper">

        <div className="edu-logo">
          <img src={uoft} className="image" alt="uoft" />
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
                  {props.courses.map((course) => <li>
                    <a href={buutt} target="_blank" rel="noreferrer">{course}</a>
                  </li>)}
                </ul>
              </p>
              <p style={{marginLeft: "1%"}}>Awards:
                <ul>
                  {props.awards.map((award) => <li>{award}</li>)}
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