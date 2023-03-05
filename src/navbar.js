import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import ContactModal from "./contact-modal";
import { Link } from "react-router-dom";
import myPic from "./img/mypic.jpg";
import myPicPlaceHolder from "./img/mypicplaceholder.jpg";
import PhoneIphoneIcon from "@material-ui/icons/PhoneIphone";
import forest from "./img/forest.jpg";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";

const about = "< About Me />";
const projects = "< Projects />";
const resume = "< Resume />";

const useStyles = makeStyles((theme) => ({
  backgroundPic: {
    height: "100%",
    width: "100%",
    zIndex: "-1000",
    position: "absolute",
    left: 0,
    top: 0,
  },
  iconWrapper: {
    display: "block",
    textAlign: "center",
    width: "100%",
  },
  iconContainer: {
    display: "flex",
    textAlign: "center",
  },
  btn: {
    color: "white",
    flex: 1,
    textAlign: "center",
    transition: "height 0.5s",
    width: "auto",
    height: "35px",
    "&:hover": {
      height: "42px",
    },
  },
}));
function ModalPhoneNumber(props) {
  return (
    <Modal
      className="modal-dialog-centered"
      size="lg"
      show={props.showMod}
      ref={React.createRef()}
      onHide={() => props.setDisplay(false)}
    >
      <Modal.Header closeButton className="body text-center">
        Call or Text
      </Modal.Header>
      <p className="text-center">813-516-0468</p>
    </Modal>
  );
}

function NavBar() {
  const [showMod, setDisplay] = useState(false);
  const style = useStyles();
  return (
    <div className="sidenav">
      <img src={forest} alt="background" className={style.backgroundPic} />
      {/* MODAL FOR PHONE NUMBER */}
      <ModalPhoneNumber showMod={showMod} setDisplay={setDisplay} />
      <div className="container-sm">
        {/* progressive image loading, inspired by medium website */}
        <div className="container-sm" style={{ width: "60%" }}>
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
          </div>
        </div>
        <p
          className="mt-2 cursive"
          style={{ color: "white", fontSize: "30px" }}
        >
          Jacob McCaskey
        </p>
        <Box className={style.iconWrapper}>
          <div className={style.iconContainer}>
            <Box className={style.btn} />
            <GitHubIcon
              className={style.btn}
              onClick={() => window.open("https://github.com/jacobmccaskey")}
            />
            <PhoneIphoneIcon
              className={style.btn}
              onClick={() => setDisplay(true)}
            />
            <EmailIcon
              className={style.btn}
              onClick={() => window.open("mailto:mccaskey316@gmail.com")}
            />
            <Box className={style.btn} />
          </div>
        </Box>
        <Link className="nav-title" to="/">
          Projects
        </Link>
        {/* <Link className="nav-title" to="/about">
          {about}
        </Link> */}

        <Link className="nav-title" to="/resume">
          Resume
        </Link>

        <ContactModal />
      </div>
    </div>
  );
}

export default NavBar;
