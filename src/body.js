import React from "react";
import Projects from "./projects";
import Slide from "react-reveal/Slide";

function Body() {
  return (
    <div className="container body-div">
      <Slide right>
        <h1 className="body" style={{ textDecoration: "underline" }}>
          About Me
        </h1>
        <p className="header mt-2">
          I am a full stack web developer. I build and deploy user friendly,
          responsive websites with my clients best interests at heart. The best
          part about programming is that I am never done learning. There is
          always something evolving, changing, and growing within our world and
          I love every moment of it. I am a self taught learner, and I know the
          journey has just begun. There are several projects I am working on,
          and a few have been made publicy available on my GitHub. Please take a
          look and leave some feedback! My strongest language is Javascript and
          I am familiar with React and Node. Most of my projects as of recently
          are in React. I have used AWS EC2 instanaces & Firebase extensively on
          the backend for many projects.
        </p>
        <span className="body mt-2">View Projects</span>
      </Slide>
      <Projects />
    </div>
  );
}
export default Body;
