import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { useStyles } from "./projects";
import Button from "@material-ui/core/Button";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

// FOR MOBILE VIEW ONLY

export default function ProjectSlider() {
  const style = useStyles();
  return (
    <div style={{ width: "100%" }}>
      <CarouselProvider
        naturalSlideWidth={100}
        // naturalSlideHeight={180}
        isIntrinsicHeight={true}
        totalSlides={3}
      >
        <Slider>
          <Slide index={0}>
            <KwtcDemo style={style} />
          </Slide>
          <Slide index={1}>
            <BookFinderDemo style={style} />
          </Slide>
          <Slide index={2}>
            <OneDAMDEMO style={style} />
          </Slide>
        </Slider>
        <div
          style={{
            textAlign: "center",
            marginBottom: "1rem",
          }}
        >
          <ButtonBack className="carouselBtn">
            <ArrowBackIosIcon
              style={{ fontSize: "40px", marginRight: "2rem" }}
            />
          </ButtonBack>
          <ButtonNext className="carouselBtn">
            <ArrowForwardIosIcon
              style={{ fontSize: "40px", marginLeft: "2rem" }}
            />
          </ButtonNext>
        </div>
      </CarouselProvider>
    </div>
  );
}

function KwtcDemo(props) {
  const { style } = props;
  return (
    // <div className={style.blockContainer} style={{ marginBottom: "1rem" }}>
    //   <div className={style.desktopGallery}>
    <React.Fragment>
      <div>
        <div style={{ paddingLeft: "1rem", paddingTop: "2rem" }}>
          <h2 style={{ color: "#483D8B" }}>Websites that meet your needs</h2>
          <p className="header" style={{ fontSize: "18px" }}>
            Whether you need a clean website with easy to find resources, a few
            interactive display elements, or something more visually stunning:
            <br />I can work with clients to bring their vision to reality.
          </p>
          <a href="https://kwtctech.com" style={{ textDecoration: "none" }}>
            <Button variant="contained" className={style.projectBtn}>
              <span style={{ fontSize: "15px" }}>Live Site </span>
            </Button>
          </a>
        </div>
      </div>
      <div
        className={style.projectVideo}
        style={{
          paddingTop: "2rem",
        }}
      >
        <div className="videoWrapper">
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
    </React.Fragment>
    //   </div>
    // </div>
  );
}

function BookFinderDemo(props) {
  const { style } = props;
  return (
    <React.Fragment>
      <div>
        <div style={{ paddingLeft: "1rem", paddingTop: "3rem" }}>
          <h2 style={{ color: "#7e9a9a" }}>
            Have existing or third party API's to work with?
          </h2>
          <p className="header" style={{ fontSize: "18px" }}>
            One of the most important parts of creating data rich content is the
            ability to work with existing and third party application
            programming interfaces.
            <br />
            The ability to sort, organize and paint data on the screen is
            paramount. It can also be fun!
          </p>
          <a
            href="https://flamboyant-northcutt-525d4e.netlify.app"
            style={{ textDecoration: "none" }}
          >
            <Button variant="contained" className={style.projectBtn}>
              <span style={{ fontSize: "15px" }}>Demo </span>
            </Button>
          </a>
        </div>
      </div>
      <div className={style.projectVideo} style={{ marginTop: "1rem" }}>
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
    </React.Fragment>
  );
}

function OneDAMDEMO(props) {
  const { style } = props;
  return (
    <React.Fragment>
      <div>
        <div style={{ paddingLeft: "1rem", paddingTop: "2rem" }}>
          <h2 style={{ color: "#2a6592" }}>
            Developing scalable E-commerce apps from scratch
          </h2>
          <p className="header" style={{ fontSize: "18px" }}>
            Extensive database and API development, user authentication and
            authorization, microservices, admin consoles for managing a store
            and database, order fulfillment API, analytics, and real time
            updates during development. I create scalable apps that are modular
            in nature and easy to mantain or update without breaking changes.
          </p>
        </div>
      </div>
      <div
        className={style.projectVideo}
        style={{
          paddingTop: "2rem",
        }}
      >
        <div className="videoWrapper">
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
    </React.Fragment>
  );
}
