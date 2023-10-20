import { Container, Row, Col } from "react-bootstrap";
import MailchimpForm from "./MailchimpForm";
import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col>
            <img src={logo} alt="Logo" />
            <h3 className="ms-2 mt-4">My Folio</h3>
          </Col>
          <Col className="text-center text-sm-end">
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/janos-balogh-412657257/?originalSubdomain=hu"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={navIcon1} alt="" />
              </a>
              <a
                href="https://www.facebook.com/janos.balogh.5205/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={navIcon2} alt="" />
              </a>
              <a
                href="https://www.instagram.com/janosbalogh87/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={navIcon3} alt="" />
              </a>
            </div>
            <p>Copyright 2023. by My Folio Personal Webpage</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
