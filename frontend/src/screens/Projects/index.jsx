import React, { useEffect } from "react";
import Header from "../../components/Header/index";
import projects from "../../data/projects";
import { Container, Row, Col, Image } from "react-bootstrap";
import "./styles.scss";

const isMobile = window.innerWidth < 575;

const getProjectCards = (props) => {
  const retval = [];
  for (let i = 0; i < projects.length; i += 3) {
    retval.push(
      <Container
        className={`${
          isMobile
            ? "projects-card-container-mobile-size"
            : "projects-card-container-size"
        } card-container`}
      >
        <Row sm={1} md={1} lg={3} xs={1} className="locations-row">
          <Col
            className="card-element text-center"
            onClick={() =>
              props.history.push({
                pathname: `/projects/${projects[i].title
                  .toLowerCase()
                  .replace(" ", "-")}`,
                project: projects[i],
              })
            }
          >
            <div className="position-absolute overlay overlay-strong"></div>
            <Image className="card-image" src={projects[i]["cardImage"]} />
            <div className="card-text-container">
              <p className="text-capitalize">{projects[i]["title"]}</p>
              <h5>{projects[i]["location"]}</h5>
            </div>
          </Col>
          {i + 1 < projects.length ? (
            <Col
              className="card-element text-center"
              onClick={() =>
                props.history.push({
                  pathname: `/projects/${projects[i].title
                    .toLowerCase()
                    .replace(" ", "-")}`,
                  project: projects[i],
                })
              }
            >
              <div className="position-absolute overlay"></div>
              <Image
                className="card-image"
                src={projects[i + 1]["cardImage"]}
              />
              <div className="card-text-container">
                <p className="text-capitalize">{projects[i + 1]["title"]}</p>
                <h5>{projects[i + 1]["location"]}</h5>
              </div>
            </Col>
          ) : null}
          {i + 2 < projects.length ? (
            <Col
              className="card-element text-center"
              onClick={() =>
                props.history.push({
                  pathname: `/projects/${projects[i].title
                    .toLowerCase()
                    .replace(" ", "-")}`,
                  project: projects[i],
                })
              }
            >
              <div className="position-absolute overlay"></div>
              <Image
                className="card-image"
                src={projects[i + 2]["cardImage"]}
              />
              <div className="card-text-container">
                <p className="text-capitalize">{projects[i + 2]["title"]}</p>
                <h5>{projects[i + 2]["location"]}</h5>
              </div>
            </Col>
          ) : null}
        </Row>
      </Container>
    );
  }
  return retval;
};

export default function Projects(props) {
  useEffect(() => {
    document.title = "Projects|SearchMyProperty";
  });
  return (
    <div className="h-100 w-100 designer-background">
      <Header />
      {getProjectCards(props)}
    </div>
  );
}
