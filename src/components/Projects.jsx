import React from "react";
import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png"
import projImage1 from "../assets/img/projImage1.png"

function Projects() {
  const projects = [
    {
      title: "React Project, Portfolio",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed rutrum dui. Aliquam erat volutpat. Pellentesque vehicula ornare eleifend. Nullam in ligula massa.",
      imgUrl: projImage1,
    },
    {
      title: "My Blog",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed rutrum dui. Aliquam erat volutpat. Pellentesque vehicula ornare eleifend. Nullam in ligula massa.",
      imgUrl: projImage1,
    },
    {
      title: "Help Desk",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed rutrum dui. Aliquam erat volutpat. Pellentesque vehicula ornare eleifend. Nullam in ligula massa.",
      imgUrl: projImage1,
    },
  ];
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
              rutrum dui. Aliquam erat volutpat. Pellentesque vehicula ornare
              eleifend. Nullam in ligula massa. Aliquam cursus ipsum at nisl
              porta eleifend. In molestie sodales quam, non accumsan sem commodo
              id. Praesent ac imperdiet risus.{" "}
            </p>
            <Tab.Container id="projects-tab" defaultActiveKey="first">
              <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-item-center" id="pills-tab">
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab one</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab two</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Tab three</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => {
                      return (
                        <ProjectCard 
                            key={index}
                            {...project}
                        />
                      )
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">Lorem Ipsun</Tab.Pane>
                <Tab.Pane eventKey="third">Lorem Ipsun</Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="..."/>
    </section>
  );
}

export default Projects;
