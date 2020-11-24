import React from "react";
import { Link } from "react-router-dom";
import Grow from "@material-ui/core/Grow";
import Slide from "@material-ui/core/Slide";
import Paper from "@material-ui/core/Paper";
import myPic from "./img/mypic.jpg";
import myPicPlaceHolder from "./img/mypicplaceholder.jpg";

// import { makeStyles } from "@material-ui/core/styles";

// const useStyles = makeStyles((theme) => ({}));

const viewProjects = "< View Projects />";
const aboutMe = "< About_Me />";

function Body(props) {
  // const style = useStyles();
  return (
    <div>
      <div className="mobile-only-header">
        {/* <div className="container-sm" style={{ width: "60%" }}> */}
        <div className="headshot" data-src={myPic}>
          <img
            className="blur rounded"
            src={myPicPlaceHolder}
            alt="headshot"
            style={{ width: "100%", height: "100%" }}
          />
          <noscript>
            <img src={myPic} alt="headshot" />
          </noscript>
          {/* </div> */}
        </div>
      </div>
      <div className="container body-div">
        <Grow in={true}>
          <Paper elevation={3} style={{ padding: "2rem" }}>
            <h1 className="body">{aboutMe}</h1>
            <p className="header mt-2">
              I'm a full stack web developer.
              <br />
              What does that mean?
              <br />
              I build and deploy user-friendly, responsive websites with my
              clients best interests at heart.
              <br />
              The best part about programming is that I am never done learning.
              The field is always evolving, changing, and growing and my duty to
              utilize & create products that people will want to come back too,
              day after day. There are several projects I am working on at any
              one time, and a few have been made publicy available on{" "}
              <a href="https://github.com/jacobmccaskey">GitHub</a>
            </p>
            <br />
            <div className="header" style={{ textAlign: "center" }}>
              <p>
                <a href="mailto:mccaskey316@gmail.com">Get In Touch</a>
              </p>
            </div>
            <br />
            <span className="header">
              <i>Before software can be reusable it first has to be usable.</i>-
              Ralph Johnson
            </span>
            <hr />
          </Paper>
        </Grow>
        <Slide direction="left" in={true} mountOnEnter unmountOnExit>
          <Link to="/projects">
            <p
              className="body mt-2 project-link"
              style={{ fontSize: "45px", textDecoration: "underline" }}
            >
              {viewProjects}
            </p>
          </Link>
        </Slide>
      </div>
    </div>
  );
}
export default Body;
