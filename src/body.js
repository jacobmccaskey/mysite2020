import React from "react";
import { Link } from "react-router-dom";
import Slide from "react-reveal/Slide";
import Paper from "@material-ui/core/Paper";

const viewProjects = "< View Projects />";

function Body(props) {
  return (
    <div className="container body-div">
      <Slide right>
        <Paper elevation={3} style={{ padding: "2rem" }}>
          <h1 className="body" style={{ textDecoration: "underline" }}>
            about me
          </h1>
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
            day after day. There are several projects I am working on at any one
            time, and a few have been made publicy available on{" "}
            <a href="https://github.com/jacobmccaskey">GitHub</a>
            <br />
            Please contact me if you have any questions or development ideas you
            would like to explore. Lets make the world better!
            <br />
          </p>
          <span className="header">
            <i>Before software can be reusable it first has to be usable.</i>-
            Ralph Johnson
          </span>
          <hr />
        </Paper>

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
  );
}
export default Body;
