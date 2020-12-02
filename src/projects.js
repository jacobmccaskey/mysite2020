import React, { useState, useEffect } from "react";
import ImageGallery from "react-image-gallery";
import bookFinder from "./img/book-finder.jpg";
import socialist from "./img/socialist.jpg";
import kwsite from "./img/kwtech.jpg";
import githublogo from "./img/github.svg";
import { RingLoader } from "react-spinners";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  imageGallery: {
    [theme.breakpoints.down("sm")]: {
      display: "relative",
    },
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  desktopGallery: {
    width: "100%",
    textAlign: "left",
    [theme.breakpoints.down("sm")]: {
      display: "none",
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
    backgroundColor: "purple",
    borderWidth: "0px",
    color: "black",
    fontSize: "15px",
    marginLeft: "1rem",
    width: "30%",
    transition: "1s",
    "&:hover": {
      width: "40%",
      backgroundColor: "white",
    },
  },
}));

const images = [
  {
    original: `${kwsite}`,
  },
  {
    original: `${bookFinder}`,
  },

  {
    original: `${socialist}`,
  },
];

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
            <div className={style.textContainer}>
              <h2>Websites that meet your needs</h2>
              <p className="header" style={{ fontSize: "18px" }}>
                Whether you need a clean website with easy to find resources, a
                few interactive display elements, or something more visually
                stunning:
                <br />I can work with clients to bring their vision to reality.
              </p>
            </div>
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
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      {/* 2nd project */}
      <Paper elevation={3}>
        <div className={style.blockContainer}>
          <div
            className={style.desktopGallery}
            style={{ backgroundColor: "	#0e1111", color: "#F8F8FF" }}
          >
            <div
              className={style.projectVideo}
              style={{
                paddingTop: "2rem",
              }}
            >
              <div className="videoWrapper" style={{ marginLeft: "10%" }}>
                <iframe
                  title="book finder demo"
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/yT9MpGRJvLw"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
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
                  One of the most important parts of creating data rich content
                  is the ability to work with existing and third party
                  application programming interfaces.
                  <br />
                  The ability to sort, organize and paint data to the screen is
                  paramount. It can also be fun!
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
      </Paper>

      <div className=" container mt-4">
        <div className="mobile-wrapper">
          <div className={style.imageGallery}>
            <ImageGallery items={images} />
          </div>

          <div className="github-body">
            <p className="body">GitHub</p>
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
          <div className="body container">
            <div className="row row-cols-3">
              {repos.length === 0 || !repos ? (
                <RingLoader />
              ) : (
                repos.map((item) => (
                  <div key={item.id} className=" dotted-border col m-1">
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
