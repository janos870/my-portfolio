import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";

function Contact() {
  const formInitialDetails = {
    firstName: "",
    lestName: "",
    email: "",
    phone: "",
    message: "",
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("send");
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      formDetails.firstName === "" ||
      formDetails.lastName === "" ||
      formDetails.email === "" ||
      formDetails.phone === "" ||
      formDetails.message === ""
    ) {
      setStatus({ success: false, message: "Please fill out all fields." });
      return;
    }
    setButtonText("Sending...");
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(formDetails),
    });
    setButtonText("Send");
    let result = await response.json();
    setFormDetails(formInitialDetails);
    if (result.code === 200) {
      setStatus({ succes: true, message: "Message sent successfully" });
    } else {
      setStatus({
        succes: false,
        message: "Something went wrong, please try again later.",
      });
    }
  };
  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <img src={contactImg} alt="contact us!" />
          </Col>
          <Col md={6}>
            <h2>Get in touch</h2>
            <form onSubmit={handleSubmit}>
              <Row>
                <Col md={6} className="px-1">
                  <input
                    type="text"
                    value={formDetails.firstName}
                    placeholder="First Name"
                    onChange={(e) => onFormUpdate("firstName", e.target.value)}
                  />
                </Col>
                <Col md={6} className="px-1">
                  <input
                    type="text"
                    value={formDetails.lestName}
                    placeholder="Lest Name"
                    onChange={(e) => onFormUpdate("lestName", e.target.value)}
                  />
                </Col>
                <Col md={6} className="px-1">
                  <input
                    type="email"
                    value={formDetails.email}
                    placeholder="Email Adress"
                    onChange={(e) => onFormUpdate("email", e.target.value)}
                  />
                </Col>
                <Col md={6} className="px-1">
                  <input
                    type="tel"
                    value={formDetails.phone}
                    placeholder="Phone No."
                    onChange={(e) => onFormUpdate("phone", e.target.value)}
                  />
                </Col>
                <Col md={6} className="px-1">
                  <textarea
                    rows="6"
                    value={formDetails.message}
                    placeholder="Message"
                    onChange={(e) => onFormUpdate("message", e.target.value)}
                  ></textarea>
                  <button type="submit">
                    <span>{buttonText}</span>
                  </button>
                  {status.message && (
                    <p
                      className={
                        status.success === false ? "danger" : "success"
                      }
                    >
                      {status.message}
                    </p>
                  )}
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;
