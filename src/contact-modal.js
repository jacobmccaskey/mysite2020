import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";

class ContactModal extends Component {
  state = {
    showMod: false,
    nameVal: "",
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
    console.log(JSON.stringify(this.state));

    this.setState({
      showMod: false,
      nameVal: "",
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
    const { showMod, email, nameVal, message } = this.state;
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
            <form
              onSubmit={(e) => this.formSubmit(e)}
              name="contact"
              method="POST"
              data-netlify="true"
            >
              <span className="body">Name</span>
              <br />
              <input
                type="text"
                onChange={(e) => this.handleChange(e)}
                name="nameVal"
                value={nameVal}
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
              <button type="submit" className=" btn btn-outline-secondary body">
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
