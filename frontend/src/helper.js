import React from "react";
import { FaThumbtack } from "react-icons/fa";
import { Row, Col, Image, Carousel } from "react-bootstrap";

export function getEmbeddedMap(address) {
  return (
    <iframe
      title={`${address}-map`}
      className="h-100 w-100"
      frameborder="0"
      scrolling="no"
      marginheight="0"
      marginwidth="0"
      src={`https://maps.google.com/maps/embed?q=${encodeURIComponent(
        address
      )}`}
    ></iframe>
  );
}

export function getLocationAdvantages(advantages) {
  return advantages.map((element) => (
    <Row className="location-desc d-flex">
      <FaThumbtack size={20} className="mr-4" color="#eca829" />
      <p className="justify-text-center">{element}</p>
    </Row>
  ));
}

export function getFeaturesCols(features) {
  console.log("Features: ", features);
  const retval = [];
  for (let i = 0; i < features.length; i += 2) {
    retval.push(
      <Row className="features-row">
        <Col>
          <div>
            <h2 className="features-title">{features[i].title}</h2>
            <p className="features-subtitle justify-text-center">
              {features[i].subtitle}
            </p>
          </div>
        </Col>
        {i + 1 < features.length ? (
          <Col>
            <div>
              <h2 className="features-title">{features[i + 1].title}</h2>
              <p className="features-subtitle justify-text-center">
                {features[i + 1].subtitle}
              </p>
            </div>
          </Col>
        ) : null}
      </Row>
    );
  }
  return retval;
}

export function getValueFromKey(arr, key) {
  return (arr.find((x) => Object.keys(x)[0] === key) || {})[key];
}

export function getFloorPlanCarousel(floorPlanImages) {
  return floorPlanImages.map((element) => (
    <Carousel.Item className="w-100 h-100">
      <Image className="w-100 h-100" src={element} />
    </Carousel.Item>
  ));
}
