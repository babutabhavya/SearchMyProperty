import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CustomButton from "../../components/CustomButton/index";
import "./styles.scss";

export default function ProjectBannerOverlay(props) {
  const {
    title,
    location,
    priceValue,
    possessionValue,
    sizesValue,
    handleSiteVisit,
  } = props;
  return (
    <Container className="project-detail position-absolute">
      <div className="inner text-left pt-5 pl-5 pr-5 pb-4">
        <div>
          <h2>
            <strong>{title}</strong>
          </h2>
        </div>
        <div>{location}</div>
      </div>
      <Row>
        <Col>
          <div className="text-center">
            <h2>Sizes</h2>
            <p>{sizesValue}</p>
          </div>
        </Col>
        <Col>
          <div className="text-center">
            <h2>Configuration</h2>
            <p>Apts. & Penthouses</p>
          </div>
        </Col>
      </Row>
      <div className="text-left pt-5 pl-5 pr-5 pb-5">
        <div className="price">
          <p>
            <strong>Price {priceValue}</strong>
          </p>
        </div>
        <div className="schedule-visit-button-container text-center pt-2 pb-1">
          <CustomButton
            customClassName="schedule-visit-button position-relative"
            buttonText="Schedule Site Visit"
            onClick={() => handleSiteVisit()}
          />
        </div>
        <div>
          <p>Status: {possessionValue}</p>
        </div>
      </div>
    </Container>
  );
}
