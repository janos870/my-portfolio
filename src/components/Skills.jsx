import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";
import ReactProgress from "./progress/ReactProgress";
import HtmlProgress from "./progress/HtmlProgress";
import CssProgress from "./progress/CssProgress";
import JsProgress from "../components/progress/JsProgress";
import BootstrapProgress from "./progress/BootstrapProgress";
import NodeProgress from "./progress/NodeProgress";
import html from "../assets/img/html.png";
import css from "../assets/img/css-3.png";
import js from "../assets/img/js.png";
import atom from "../assets/img/atom.png";
import bootstrap from "../assets/img/bootstrap.png"
import nodejs from "../assets/img/nodejs.png"


function Skills() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <section className="skill" id="skills">
      <Container fluid="xs">
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                nunc sapien, auctor nec imperdiet et, dictum sed elit. Aliquam
                rutrum interdum lacus at vestibulum.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider animate__animated animate__fadeInLeft"
              >
                <div className="item">
                  <HtmlProgress />
                  <h5>Html</h5>
                  <img src={html} alt="htm img" width="50" />
                </div>
                <div className="item">
                  <CssProgress />
                  <h5>Css</h5>
                  <img src={css} alt="css img" />
                </div>
                <div className="item">
                  <JsProgress />
                  <h5>JavaScript</h5>
                  <img src={js} alt="js img"/>
                </div>
                <div className="item">
                  <NodeProgress />
                  <h5>Nodejs-Express</h5>
                  <img src={nodejs} alt="js img"/>
                </div>
                <div className="item">
                  <ReactProgress />
                  <h5>React</h5>
                  <img src={atom} alt="atom img" />
                </div>
                <div className="item">
                  <BootstrapProgress />
                  <h5>BootStrap</h5>
                  <img src={bootstrap} alt="atom img" />
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp} alt="" />
    </section>
  );
}

export default Skills;
