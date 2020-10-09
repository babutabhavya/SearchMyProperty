import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./styles.scss";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";
import SocialMediaButtons from "../SocialMediaButtons";

export default function ProjectFooter() {
  const isMobile = window.innerWidth < 575;
  return (
    <div className="text-center project-footer footer-container">
      <Container className={isMobile ? "d-block" : "d-flex"}>
        <Col className="footer-col">
          <Row className="footer-title text-left">
            <p>SearchMyProperty</p>
          </Row>
          <SocialMediaButtons />
        </Col>
        <Col className="footer-col">
          <Row className="footer-title">
            <p>Explore</p>
          </Row>
          <Row className="footer-links">
            <Link to="/projects">Projects</Link>
          </Row>
          <Row className="footer-links">
            <Link to="/home">SiteMap</Link>
          </Row>

          <Row className="footer-links">
            <Link to="/resale">Resale</Link>
          </Row>
          <Row className="footer-links">
            <Link to="/locations">Locations</Link>
          </Row>
        </Col>
        <Col className="footer-col">
          <Row className="footer-title">
            <p>Gurgaon Projects</p>
          </Row>
          <div className="text-left d-flex pl-2"></div>
        </Col>
        <Col className="footer-col">
          <Row className="footer-title">
            <p>Delhi Projects</p>
          </Row>
          <div className="text-left d-flex pl-2"></div>
        </Col>
        <Col className="footer-col">
          <Row className="footer-title">
            <p>Bangalore Projects</p>
          </Row>
          <div className="text-left d-flex pl-2"></div>
        </Col>
      </Container>
    </div>
  );
}
