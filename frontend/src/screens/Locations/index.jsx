import React, { useEffect } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import Header from "../../components/Header/index";
import categories from "../../data/categories";
import "./styles.scss";

export default function Locations() {
  useEffect(() => {
    document.title = "Locations|SearchMyProperty";
  });

  const isMobile = window.innerWidth < 575;
  const getImageCards = () => {
    const retval = [];
    for (var i = 0; i < categories.length; i += 2) {
      retval.push(
        <Container
          className={`${
            isMobile
              ? "locations-card-container-mobile-size"
              : "locations-card-container-size"
          } card-container`}
        >
          <Row sm={1} md={1} lg={2} xs={1} className="locations-row">
            <Col className="card-element text-center">
              <div className="position-absolute overlay overlay-strong"></div>
              <Image className="card-image" src={categories[i]["image"]} />
              <div className="card-text-container">
                <p className="text-capitalize">{categories[i]["title"]}</p>
                <h5>{categories[i]["description"]}</h5>
              </div>
            </Col>
            {i + 1 < categories.length ? (
              <Col className="card-element text-center">
                <div className="position-absolute overlay"></div>
                <Image
                  className="card-image"
                  src={categories[i + 1]["image"]}
                />
                <div className="card-text-container">
                  <p className="text-capitalize">
                    {categories[i + 1]["title"]}
                  </p>
                  <h5>{categories[i + 1]["description"]}</h5>
                </div>
              </Col>
            ) : null}
          </Row>
        </Container>
      );
    }
    return retval;
  };
  return (
    <div className="h-100 w-100 designer-background">
      <Header />
      {getImageCards()}
      <Container
        className={`${
          isMobile
            ? "locations-card-container-mobile-size"
            : "locations-card-container-size"
        } card-container`}
      >
        <Row className="other-row locations-row">
          <Col className="h-100 card-element text-center">
            <div className="position-absolute overlay"></div>
            <Image
              className="h-100 w-100"
              src={require("../../assets/locations/other.jpg")}
            />
            <div className="card-text-container">
              <p className="text-capitalize">other locations</p>
              <h5 className="text-capitalize">coming soon</h5>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
