import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import CustomButton from "../CustomButton/index";

import "./styles.scss";

export default function ContactUsStrip() {
  let history = useHistory();

  return (
    <div className="w-100" style={{ backgroundColor: "black" }}>
      <Container className="contact-us-container text-left">
        <Row className="position-relative">
          <Col>
            <p style={{ color: "white", fontSize: "3rem", fontWeight: "700" }}>
              Get in touch with us
            </p>
          </Col>
          <div className="contact-us-button">
            <CustomButton
              customClassName="contact-us-strip-button position-relative"
              buttonText="Contact Us"
              onClick={() => history.push("/contact-us")}
            />
          </div>
        </Row>
      </Container>
    </div>
  );
}
