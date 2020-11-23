import React, { useState, useEffect } from "react";
import ImageGallery from "react-image-gallery";
import bookFinder from "./img/book-finder.jpg";
import socialist from "./img/socialist.jpg";
import kwsite from "./img/kwtech.jpg";
import githublogo from "./img/github.svg";
import { RingLoader } from "react-spinners";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "grid",
  },
  card: {
    border: "solid black",
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
      <div className="container mt-4">
        <ImageGallery items={images} />
        <div className="github-body">
          <p className="body">GitHub</p>
          <img
            src={githublogo}
            onClick={() => {
              window.open("https://github.com/jacobmccaskey?tab=repositories");
            }}
            alt="github"
          />
          <br className="mt-2" />
        </div>
        <div className="body container">
          <div className={style.root}>
            {repos.length === 0 || !repos ? (
              <RingLoader />
            ) : (
              repos.map((item) => (
                <div key={item.id} className={style.card}>
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
    </React.Fragment>
  );
}

export default Projects;
// item.name, item.html_url, item.des
