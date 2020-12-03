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
      <div className="container body-div mb-5">
        <Grow in={true}>
          <Paper elevation={3} style={{ padding: "2rem", marginTop: "10px" }}>
            <h1 className="body">{aboutMe}</h1>
            <p className="header mt-2 mb-2">
              My name is Jake McCaskey and I build and deploy user-friendly,
              responsive sites with my clients best interests at heart. Websites
              that perform, impress, & keep your users coming back for more.
              <br />
              <br />
              E-commerce websites, SPA's, and heavy on the backend apps are my
              bread and butter. Creating a visually stunning app with the
              backend to match is what I do from the ground up.
              <br /> <br />
              Subscription based services, E-Commerce & apps centered around
              user input/user experience are a few examples of what I shine in.
              <br />
              <br />
              The best part about programming is that the only limit is the
              boundary of one's imagination. Any idea can come to life with a
              little bit of time and code.
              <br /> <br />I am never done learning. The field is always
              evolving and my passion is to create products that people will
              want to come back too, day after day.
              <br />
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
          <Link to="/">
            <p
              className="body mt-2 project-link"
              style={{
                fontSize: "45px",
                textDecoration: "underline",
                margin: "2rem",
              }}
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
