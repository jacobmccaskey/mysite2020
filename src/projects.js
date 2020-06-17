import React, { useState, useEffect } from "react";
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
  const [repos, setRepos] = useState([]);

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
  console.log(repos);
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
          {repos.map((item) => (
            <div
              key={item.id}
              className="container-sm rounded border border-success mb-2"
            >
              <p>
                <a key={item.name} href={item.html_url}>
                  {item.name}
                </a>
              </p>
              <span>{item.description}</span>
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
}

export default Projects;
