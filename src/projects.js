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
      </div>
    </React.Fragment>
  );
}

export default Projects;
