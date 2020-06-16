import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import ContactModal from "./contact-modal";
import { Link } from "react-router-dom";
import myPic from "./img/mypic.jpg";
import phone from "./img/phone.png";
import email from "./img/email.png";
import githublogo from "./img/github.svg";

function NavBar() {
  const [showMod, display] = useState(false);
  return (
    <div className="sidenav">
      {/* MODAL FOR PHONE NUMBER */}
      <Modal
        className="modal-dialog-centered"
        size="lg"
        show={showMod}
        ref={React.createRef()}
        onHide={() => display(false)}
      >
        <Modal.Header closeButton className="body text-center">
          Call or Text
        </Modal.Header>
        <p className="text-center">813-516-0468</p>
      </Modal>
      <div className="container-sm">
        <img
          src={myPic}
          alt="Jacob McCaskey"
          className="border-bottom-0 round-pic"
        />
        <p
          className="mt-2 cursive"
          style={{ color: "white", fontSize: "30px" }}
        >
          Jacob McCaskey
        </p>
        <div className="container">
          <img src={githublogo} alt="github logo" className="img-link mr-1" />

          <img
            src={phone}
            alt="phone icon"
            className="img-link mr-1"
            onClick={() => display(true)}
          />

          <img
            className="img-link mr-1"
            src={email}
            alt="email"
            onClick={() => {
              window.open("mailto:mccaskey316@gmail.com");
            }}
          />
          <Link className="body" to="/">
            Home
          </Link>

          <Link className="body" to="/resume">
            Resume
          </Link>

          {/* <a className="body" href="#">
            Contact Me
          </a> */}
          <ContactModal />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
