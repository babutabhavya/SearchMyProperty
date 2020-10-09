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
import SocialMediaButtons from "../SocialMediaButtons/index";

export default function Footer() {
  const isMobile = window.innerWidth < 575;
  return (
    <div className="text-center footer-container">
      <Container className={isMobile ? "d-block" : "d-flex"}>
        <Col className="footer-col">
          <Row className="footer-title text-left">
            <p>SearchMyProperty</p>
          </Row>
          <Row className="text-left">
            <p className="primary-color">Some Content</p>
          </Row>
        </Col>
        <Col className="footer-col">
          <Row className="footer-title">
            <p>Company Links</p>
          </Row>
          <Row className="footer-links">
            <Link to="/about-us">About Us</Link>
          </Row>
          <Row className="footer-links">
            <Link to="/blogs">Blogs</Link>
          </Row>
          <Row className="footer-links">
            <Link to="/contact-us">Contact Us</Link>
          </Row>
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
            <p>Follow</p>
          </Row>
          <SocialMediaButtons />
        </Col>
      </Container>
    </div>
  );
}
