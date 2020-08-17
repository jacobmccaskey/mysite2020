import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import emailjs from "emailjs-com";

class ContactModal extends Component {
  state = {
    showMod: false,
    user_name: "",
    email: "",
    message: "",
    completedMessage: false,
  };

  setShow(value) {
    this.setState({
      showMod: value,
    });
  }
  formSubmit = (e) => {
    const { user_name, email, message } = this.state;

    let templateParams = {
      email: email,
      name: user_name,
      message: message,
    };
    emailjs
      .sendForm(
        "default service",
        "template_NGLdFCtJ",
        templateParams,
        "user_fU2I16AUegqrB9U5h5Hx1"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    this.setState({
      showMod: false,
      user_name: "",
      email: "",
      message: "",
      completedMessage: true,
    });
    e.preventDefault();
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
          Contact Me
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
            Contact Me
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
                submit
              </button>
            </form>
          </Modal.Body>
        </Modal>
      </React.Fragment>
    );
  }
}

export default ContactModal;
