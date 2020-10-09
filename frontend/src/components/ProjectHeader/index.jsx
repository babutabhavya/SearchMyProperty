import React from "react";
import { Navbar, Nav, Image } from "react-bootstrap";
import CustomButton from "../../components/CustomButton/index";
import { Link, animateScroll as scroll } from "react-scroll";
import strings from "../../strings";
import "./styles.scss";

export default function Header(props) {
  const { projectLogo } = props;
  const isMobile = window.innerWidth < 575;
  const { pathname } = window.location;
  return (
    <Navbar
      className={`project-header-container position-fixed w-100`}
      expand="lg"
      sticky="top"
    >
      <Navbar.Brand className={isMobile ? "ml-1" : "ml-5"}>
        <Image src={projectLogo} onClick={() => scroll.scrollToTop()} />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto mr-auto h-100">
          <Link to="about" offset={-100} smooth={true}>
            <Nav.Link
              className={`ml-3 mr-auto ${
                pathname === "/projects" ? "active-nav-link" : ""
              }`}
            >
              About
            </Nav.Link>
          </Link>
          <Link to="highlights" offset={-100} smooth={true}>
            <Nav.Link
              className={`ml-3 mr-auto ${
                pathname === "/locations" ? "active-nav-link" : ""
              }`}
            >
              Highlights
            </Nav.Link>
          </Link>
          <Link to="gallery" offset={-100} smooth={true}>
            <Nav.Link
              className={`ml-3 mr-auto ${
                pathname === "/locations" ? "active-nav-link" : ""
              }`}
            >
              Gallery
            </Nav.Link>
          </Link>
          <Link to="floor-plan" offset={-100} smooth={true}>
            <Nav.Link
              className={`ml-3 mr-auto ${
                pathname === "/resale" ? "active-nav-link" : ""
              }`}
            >
              Floor Plan
            </Nav.Link>
          </Link>
          <Link to="features" offset={-100} smooth={true}>
            <Nav.Link
              className={`ml-3 mr-auto ${
                pathname === "/blogs" ? "active-nav-link" : ""
              }`}
            >
              Features
            </Nav.Link>
          </Link>
          <Link to="developer" offset={-100} smooth={true}>
            <Nav.Link
              className={`ml-3 mr-auto ${
                pathname === "/about-us" ? "active-nav-link" : ""
              }`}
            >
              Developer
            </Nav.Link>
          </Link>
          <Link to="location" offset={-100} smooth={true}>
            <Nav.Link
              className={`ml-3 mr-auto ${
                pathname === "/contact-us" ? "active-nav-link" : ""
              }`}
            >
              Location
            </Nav.Link>
          </Link>
        </Nav>
        <div>
          <CustomButton
            customClassName="header-button"
            buttonText={strings.CONTACT_PHONE_NUMBER}
          />
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
}
