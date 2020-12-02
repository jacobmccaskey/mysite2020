import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import emailjs from "emailjs-com";

const hireMe = "< Hire Me />";
const serviceID = "gmail";
const templateID = "template_NGLdFCtJ";
const userID = process.env.REACT_APP_EMAILJS;

class ContactModal extends Component {
  state = {
    formStatus: "submit",
    showMod: false,
    user_name: "",
    email: "",
    message: "",
    completedMessage: false,
  };

  setShow(value) {
    if (this.props.mobile === true) {
      this.props.handleDrawerClose();
    }
    this.setState({
      showMod: value,
    });
  }

  setDefaultFormButton() {
    this.setState({
      formStatus: "submit",
    });
  }

  formSubmit = (e) => {
    e.preventDefault();
    const { user_name, email, message } = this.state;
    this.setState({
      formStatus: "sending...",
    });

    let templateParams = {
      email: email,
      name: user_name,
      message: message,
      reply_to: email,
    };
    emailjs.send(serviceID, templateID, templateParams, userID).then(
      function (response) {
        this.BodysetDefaultFormButton();
        console.log(response.status);
      },
      function (error) {
        console.log("FAILED...", error);
      }
    );

    this.setState({
      showMod: false,
      user_name: "",
      email: "",
      message: "",
      completedMessage: true,
    });
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { showMod, email, user_name, message } = this.state;
    return (
      <React.Fragment>
        <span onClick={() => this.setShow(true)} className="contact-btn body">
          {hireMe}
        </span>
        ;
        <Modal
          className="modal-dialog-centered"
          size="lg"
          show={showMod}
          ref={React.createRef()}
          onHide={() => this.setShow(false)}
        >
          <Modal.Header className="header" ref={React.createRef()} closeButton>
            Message
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={(e) => this.formSubmit(e)} name="contact-form">
              <span className="body">Name</span>
              <br />
              <input
                type="text"
                onChange={(e) => this.handleChange(e)}
                name="user_name"
                value={user_name}
              />
              <br />
              <span className="body">Email</span>
              <br />
              <input
                type="email"
                onChange={(e) => this.handleChange(e)}
                name="email"
                value={email}
              />
              <br />
              <span className="body">Message</span>
              <br />
              <textarea
                type="text"
                onChange={(e) => this.handleChange(e)}
                name="message"
                value={message}
              />
              <br />
              <button
                type="submit"
                className=" btn btn-outline-secondary body"
                value="send"
              >
                {this.state.formStatus}
              </button>
            </form>
          </Modal.Body>
        </Modal>
      </React.Fragment>
    );
  }
}

export default ContactModal;
