import React from "react";
import ImageGallery from "react-image-gallery";

import bookFinder from "./img/book-finder.jpg";
import nodeScraper from "./img/node-web-scraper.jpg";
import socialist from "./img/socialist.jpg";
import kwsite from "./img/kwtech.jpg";
import githublogo from "./img/github.svg";

const images = [
  {
    original: `${kwsite}`,
  },
  {
    original: `${bookFinder}`,
  },
  {
    original: `${nodeScraper}`,
  },
  {
    original: `${socialist}`,
  },
];

function Projects() {
  let repo = [];
  fetch("https://api.github.com/users/jacobmccaskey/repos")
    .then((response) => response.json())
    .then((data) => data.forEach((item) => repo.push(item)));

  console.log(repo.forEach((item) => item));
  return (
    <React.Fragment>
      <div className="container">
        <ImageGallery items={images} />
        <div className="github-body">
          <p className="body">GitHub</p>
          <img src={githublogo} alt="github" />
          <br className="mt-2" />
          <ul></ul>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Projects;
