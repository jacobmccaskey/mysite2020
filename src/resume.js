import React from "react";
import backarrow from "./img/backarrow.png";
import Paper from "@material-ui/core/Paper";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Grow from "@material-ui/core/Grow";

const useStyles = makeStyles((theme) => ({
  backArrow: {
    height: "auto",
    transition: "height 0.5s",
    "&:hover": {
      height: "55px",
      width: "auto",
    },
  },
}));

export default function Resume() {
  const style = useStyles();
  return (
    <div className="mt-4 container mb-5">
      <Grow in>
        <Paper
          elevation={3}
          style={{ padding: "2rem" }}
          className="mobile-wrapper"
        >
          {/* <h2
            className="body mb-2"
            style={{textAlign: 'center', color:'rgb(126, 154, 154)' }}
          >
            Resume
          </h2> */}
          <h4 className="resumeheader">Contact</h4>
          <ul>
            <li>
              <a className="body" href="mailto:mccaskey316@gmail.com">
                mccaskey316@gmail.com
              </a>
            </li>
            <li>
              <a href="tel:8135160468" className="body">813-516-0468</a>
            </li>
          </ul>
          <h4 className="body resumeheader">Skills</h4>
          <br />
          <div className="header container">
            <ul>
              <li>Javascript</li>
              <li>React</li>
              <li>Node/Express</li>
              <li>Python3</li>
              <li>HTML/CSS</li>
              <li>Material-UI | Bootstrap | ReactJSS | Sass</li>
              <li>AWS | EC2 | Lightsail</li>
              <li>Firebase</li>
              <li>Docker</li>
              <li>Git</li>
              <li>Automation Testing</li>
              <li>Linux Distros</li>
              <li>
                <a href="https://github.com/jacobmccaskey">view github</a>
              </li>
            </ul>
          </div>
          <br />
          {/* <h4 className="body resumeheader">Experience</h4>
          <br />
          <div className="header container">
            <ul>
              <li>
                Developed, tested, and deployed dynamic websites for companies
                and startups in the Tampa area.
              </li>
              <li>
                Keller Williams Tampa Central- Operation Director – Oct 2016-
                present
              </li>
              <li>Freelance 2019-present</li>
            </ul>
          </div> */}
          <br />
          <div className="container">
            <Link to="/">
              <img
                src={backarrow}
                alt="back arrow"
                className={style.backArrow}
              />
            </Link>
          </div>
        </Paper>
      </Grow>
    </div>
  );
}
