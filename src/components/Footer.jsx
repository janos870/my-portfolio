import { Container, Row, Col } from "react-bootstrap";
import MailchimpForm from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col >
            <img src={logo} alt="Logo" />
          </Col>
          <Col className="text-center text-sm-end">
            <div className="social-icon">
              <a href="#">
                <img src={navIcon1} alt="Icon" />
              </a>
              <a href="#">
                <img src={navIcon2} alt="Icon" />
              </a>
              <a href="#">
                <img src={navIcon3} alt="Icon" />
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
