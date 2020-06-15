import React, { useState } from "react";
import ContactModal from "./contact-modal";
import { Link } from "react-router-dom";
import myPic from "./img/mypic.jpg";
import phone from "./img/phone.png";
import email from "./img/email.png";
import githublogo from "./img/github.svg";

function NavBar() {
  return (
    <div className="sidenav">
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

          <img src={phone} alt="phone icon" className="img-link mr-1" />

          <img className="img-link mr-1" src={email} alt="email" />
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
