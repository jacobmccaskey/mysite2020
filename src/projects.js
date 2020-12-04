import React, { useState, useEffect } from "react";
// import ImageGallery from "react-image-gallery";
import githublogo from "./img/github.svg";
import { RingLoader } from "react-spinners";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import ProjectSlider from "./ProjectSlider";
import Slide from "@material-ui/core/Slide";
import Grow from "@material-ui/core/Grow";

export const useStyles = makeStyles((theme) => ({
  // looks better without carousel
  imageGallery: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  desktopGallery: {
    width: "100%",
    textAlign: "left",
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
    [theme.breakpoints.between("md", "sm")]: {
      display: "flex",
    },
    [theme.breakpoints.up("sm")]: {
      display: "flex",
    },
  },
  projectDescription: {
    flex: 1.7,
    padding: "1rem",
  },
  projectVideo: {
    flex: 1.3,
    padding: "1rem",
  },

  textContainer: {
    width: "80%",

    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },
  blockContainer: {
    display: "block",
  },
  projectBtn: {
    textTransform: "none",
    backgroundColor: "#B10DC9",
    borderWidth: "0px",
    color: "black",
    fontSize: "15px",
    marginLeft: "1rem",
    width: "40%",
    transition: "1s",
    "&:hover": {
      width: "50%",
      backgroundColor: "#FFFFFF",
    },
  },

  hideOnMobile: {
    display: "relative",
    [theme.breakpoints.between("md", "sm")]: {
      display: "relative",
    },
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  displayOnMobile: {
    backgroundColor: "#0e1111",
    display: "none",
    [theme.breakpoints.between("sm", "md")]: {
      display: "none",
    },
    [theme.breakpoints.down("sm")]: {
      display: "block",
      textAlign: "center",
      paddingBottom: "1rem",
    },
  },
}));

function Projects() {
  const [repos, setRepos] = useState([]);
  const style = useStyles();

  useEffect(() => {
    function getGitRepos() {
      fetch("https://api.github.com/users/jacobmccaskey/repos")
        .then((response) => {
          return response.json();
        })
        .then((results) => {
          setRepos(results);
        });
    }
    getGitRepos();
  }, []);

  return (
    <React.Fragment>
      {/* 1st project  */}
      <div className={style.blockContainer} style={{ marginBottom: "1rem" }}>
        <div className={style.desktopGallery}>
          <div
            className={style.projectDescription}
            style={{
              paddingTop: "2rem",
            }}
          >
            <Grow in timeout={1000}>
              <div
                className={style.textContainer}
                style={{ paddingLeft: "2rem", paddingTop: "2rem" }}
              >
                <h2>Websites that meet your needs</h2>
                <p className="header" style={{ fontSize: "18px" }}>
                  Whether you need a clean website with easy to find resources,
                  a few interactive display elements, or something more visually
                  stunning:
                  <br />I can work with clients to bring their vision to
                  reality.
                </p>
                <a
                  href="https://kwtctech.com"
                  style={{ textDecoration: "none" }}
                >
                  <Button variant="contained" className={style.projectBtn}>
                    <span style={{ fontSize: "15px" }}>Live Site </span>
                  </Button>
                </a>
              </div>
            </Grow>
          </div>
          <div
            className={style.projectVideo}
            style={{
              paddingTop: "2rem",
            }}
          >
            <div className="videoWrapper" style={{ marginRight: "10%" }}>
              <iframe
                title="KWTC DEMO"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/4TM673GrcE8"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      {/* 2nd project */}
      <Slide
        direction="left"
        in={true}
        timeout={1000}
        mountOnEnter
        unmountOnExit
      >
        <Paper elevation={3}>
          <div className={style.blockContainer}>
            <div
              className={style.desktopGallery}
              style={{ backgroundColor: "#0e1111", color: "#F8F8FF" }}
            >
              <div
                className={style.projectVideo}
                style={{
                  paddingTop: "2rem",
                }}
              >
                <div className={style.hideOnMobile}>
                  <div className="videoWrapper" style={{ marginLeft: "10%" }}>
                    <iframe
                      title="book finder demo"
                      width="560"
                      height="315"
                      src="https://www.youtube.com/embed/yT9MpGRJvLw"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </div>
              <div
                className={style.projectDescription}
                style={{
                  paddingTop: "2rem",
                }}
              >
                <div className={style.textContainer}>
                  <h2>Have existing or third party API's to work with?</h2>
                  <p className="header" style={{ fontSize: "18px" }}>
                    One of the most important parts of creating data rich
                    content is the ability to work with existing and third party
                    application programming interfaces.
                    <br />
                    The ability to sort, organize and paint data on the screen
                    is paramount. It can also be fun!
                  </p>
                  <a
                    href="https://flamboyant-northcutt-525d4e.netlify.app"
                    style={{ textDecoration: "none" }}
                  >
                    <Button variant="contained" className={style.projectBtn}>
                      <span style={{ fontSize: "15px" }}>Live Demo </span>
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            className={style.displayOnMobile}
            style={{ backgroundColor: "#0e1111" }}
          >
            <div className="videoWrapper">
              <iframe
                title="book finder demo"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/yT9MpGRJvLw"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </Paper>
      </Slide>
      {/* 3rd project */}
      <div className={style.blockContainer} style={{ marginBottom: "1rem" }}>
        <div className={style.desktopGallery}>
          <div
            className={style.projectDescription}
            style={{
              paddingTop: "2rem",
            }}
          >
            <Grow in>
              <div
                className={style.textContainer}
                style={{ paddingLeft: "2rem", paddingTop: "2rem" }}
              >
                <h2 style={{ color: "#0e1111" }}>
                  Developing scalable E-commerce apps from scratch
                </h2>
                <p className="header" style={{ fontSize: "18px" }}>
                  Extensive database and API development, user authentication
                  and authorization, microservices, admin consoles for managing
                  a store and database, order fulfillment API, analytics, and
                  real time updates during development. I create scalable apps
                  that are modular in nature and easy to mantain or update
                  without breaking changes.
                </p>
              </div>
            </Grow>
          </div>
          <div
            className={style.projectVideo}
            style={{
              paddingTop: "2rem",
            }}
          >
            <div className="videoWrapper" style={{ marginRight: "10%" }}>
              <iframe
                title="ONEDAM DEMO"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/heP3lUFp2LU"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      <div className=" mt-4 container-fluid mb-5">
        <div className="mobile-wrapper">
          <div className={style.imageGallery}>
            <ProjectSlider />
          </div>

          <div className="github-body">
            <p className="body">GitHub Projects</p>
            <img
              src={githublogo}
              onClick={() => {
                window.open(
                  "https://github.com/jacobmccaskey?tab=repositories"
                );
              }}
              alt="github"
            />
            <br className="mt-2" />
          </div>
          <div className=" body" style={{ width: "100%" }}>
            <div className="container-fluid row row-cols-3">
              {repos.length === 0 || !repos ? (
                <RingLoader />
              ) : (
                repos.map((item) => (
                  <div
                    key={item.id}
                    className="dotted-border col m-1"
                    style={{ textOverflow: "ellipsis" }}
                  >
                    <p>
                      <a key={item.name} href={item.html_url}>
                        {item.name}
                      </a>
                    </p>
                    <span>{item.description}</span>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Projects;
