import React from "react";
import backarrow from "./img/backarrow.png";

import { Link } from "react-router-dom";

export default function Resume() {
  return (
    <div className="mt-4 container">
      <h1
        className="body resumeheader mb-2"
        style={{ textDecoration: "underline" }}
      >
        Resume
      </h1>
      <h4 className="body">Contact:</h4>
      <ul>
        <li>
          <a className="body" href="mailto:mccaskey316@gmail.com">
            mccaskey316@gmail.com
          </a>
        </li>
        <li>
          <p className="body">813-516-0468</p>
        </li>
      </ul>
      <h4 className="body resumeheader">Skills</h4>
      <br />
      <div className="header container">
        <ul>
          <li>Javascript</li>
          <li>React</li>
          <li>Node</li>
          <li>Express</li>
          <li>HTML/CSS</li>
          <li>AWS | EC2 | Lightsail</li>
          <li>Automation Testing</li>
        </ul>
      </div>
      <br />
      <h4 className="body resumeheader">Experience</h4>
      <br />
      <div className="header container">
        <ul>
          <li>
            Developed, tested, and deployed dynamic websites for companies and
            startups in the Tampa area.
          </li>
          <li>
            Keller Williams Tampa Central- Operation Director – Oct 2016-
            present
          </li>
          <li>Freelance 2019-present</li>
        </ul>
      </div>
      <br />
      <div className="container">
        <img
          as={Link}
          to="/"
          src={backarrow}
          alt="back arrow"
          className="img-link"
          onClick={() => window.open("/")}
        />
      </div>
    </div>
  );
}
