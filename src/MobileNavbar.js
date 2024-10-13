import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";
import Button from "@material-ui/core/Button";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import forest from "./img/forest.jpg";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";
import Box from "@material-ui/core/Box";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";
// import PhoneIphoneIcon from "@material-ui/icons/PhoneIphone";
// import Modal from "react-bootstrap/Modal";
import ContactModal from "./contact-modal";

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "rgb(28,40,65)",
  },
  drawer: {
    width: "100%",
  },
  btnGroup: {
    textAlign: "center",
    position: "absolute",
    color: "white",
    left: 0,
    right: 0,
    marginTop: "30%",
    // display: "block",
  },
  link: {
    display: "block",
    margin: theme.spacing(1),
    // fontFamily: "Amatic SC, cursive",
    color: "#FFEC8B",
    fontSize: "30px",
  },
  iconWrapper: {
    display: "block",
    textAlign: "center",
    width: "100%",
    marginTop: theme.spacing(2),
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

// const projects = "< Projects />";
// const about = "< About Me />";
// const resume = "< Resume />";

// function ModalPhoneNumber(props) {
//   return (
//     <Modal
//       className="modal-dialog-centered"
//       size="lg"
//       show={props.showMod}
//       ref={React.createRef()}
//       onHide={() => props.setDisplay(false)}
//     >
//       <Modal.Header closeButton className="body text-center">
//         Call or Text
//       </Modal.Header>
//       <p className="text-center"></p>
//     </Modal>
//   );
// }

export default function MobileNavbar() {
  const [open, setOpen] = useState(false);
  // const [showMod, setDisplay] = useState(false);
  const mobile = true;
  // const handleOpenModal = () => {
  //   setDisplay(true);
  //   setOpen(false);
  // };

  const style = useStyles();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <div className="mobile-nav">
        <AppBar position="fixed" className={style.appBar}>
          <Toolbar>
            <Button onClick={handleDrawerOpen}>
              <MenuRoundedIcon style={{ color: "white" }} />
            </Button>
            <p
              className="mt-2 ml-2 cursive"
              style={{ color: "white", fontSize: "20px", textAlign: "center" }}
            >
              Jacob McCaskey
            </p>
          </Toolbar>
        </AppBar>
        <Drawer
          open={open}
          anchor="left"
          variant="persistent"
          className={style.drawer}
        >
          <img
            src={forest}
            alt="forest background"
            style={{
              width: "100%",
              height: "100%",
              zIndex: "-1000",
            }}
          />
          <div className={style.btnGroup}>
            <Button onClick={handleDrawerClose}>
              <CloseRoundedIcon style={{ color: "white", fontSize: "35px" }} />
            </Button>
            <Link to="/" className={style.link} onClick={handleDrawerClose}>
            <span className="nav-title">Projects</span>
            </Link>
            {/* <Link
              to="/about"
              className={style.link}
              onClick={handleDrawerClose}
            >
              <span className="nav-title">About</span>
            </Link> */}

            <Link
              to="/resume"
              className={style.link}
              onClick={handleDrawerClose}
            >
              <span className="nav-title">Resume</span>
            </Link>

            <ContactModal
              mobile={mobile}
              handleDrawerClose={handleDrawerClose}
            />

            <Box className={style.iconWrapper}>
              <div className={style.iconContainer}>
                <Box className={style.btn} />
                <GitHubIcon
                  className={style.btn}
                  onClick={() =>
                    window.open("https://github.com/jacobmccaskey")
                  }
                />
                {/* <PhoneIphoneIcon
                  className={style.btn}
                  onClick={handleOpenModal}
                /> */}
                <EmailIcon
                  className={style.btn}
                  onClick={() => window.open("mailto:mccaskey316@gmail.com")}
                />
                <Box className={style.btn} />
              </div>
            </Box>
          </div>
        </Drawer>
      </div>
      {/* <ModalPhoneNumber showMod={showMod} setDisplay={setDisplay} /> */}
    </React.Fragment>
  );
}
