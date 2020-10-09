import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./styles.scss";
import { getAttributeIcon } from "../../attribute-icons";

function getAttributesView(attributes) {
  return attributes.map((element) => {
    const key = Object.keys(element)[0];
    console.log("Key: ", key);
    return (
      <Col xs lg="2">
        <Row className="justify-content-center">
          {getAttributeIcon(key, "#eca829")}
        </Row>
        <Row className="justify-content-center">
          <h2 className="text-uppercase">{key}</h2>
        </Row>
        <Row className="justify-content-center">
          <p>{element[key]}</p>
        </Row>
      </Col>
    );
  });
}

export default function AttributeStack(props) {
  const { attributes } = props;
  return (
    <Container className="project-attribute-stack-container">
      <Row sm={1} md={1} xs={1} className="justify-content-center">
        {getAttributesView(attributes)}
      </Row>
    </Container>
  );
}
