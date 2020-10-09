import React, { useEffect, useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import CustomButton from "../../components/CustomButton/index";
import strings from "../../strings";
import "./styles.scss";

export default function Header() {
  const isMobile = window.innerWidth < 575;
  const [scroll, setScroll] = useState(false);

  function onScroll() {
    if (window.scrollY > 5) {
      setScroll(true);
    }
    if (window.scrollY < 10) {
      setScroll(false);
    }
  }
  const { pathname } = window.location;

  useEffect(() => {
    onScroll();
    document.addEventListener("scroll", onScroll);
    return () => document.removeEventListener("scroll", onScroll);
  });

  return (
    <Navbar
      className={`header-container ${scroll ? "scroll" : "transparent"}`}
      expand="lg"
      sticky="top"
    >
      <Navbar.Brand className={isMobile ? "ml-1" : "ml-5"}>
        <Nav.Link href="/home">Logo</Nav.Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto mr-auto h-100">
          <Nav.Link
            href="/home"
            className={`ml-3 mr-auto ${
              pathname === "/home" ? "active-nav-link" : ""
            }`}
          >
            Home
          </Nav.Link>
          <Nav.Link
            href="/projects"
            className={`ml-3 mr-auto ${
              pathname === "/projects" ? "active-nav-link" : ""
            }`}
          >
            Projects
          </Nav.Link>
          <Nav.Link
            href="/locations"
            className={`ml-3 mr-auto ${
              pathname === "/locations" ? "active-nav-link" : ""
            }`}
          >
            Locations
          </Nav.Link>
          <Nav.Link
            href="/resale"
            className={`ml-3 mr-auto ${
              pathname === "/resale" ? "active-nav-link" : ""
            }`}
          >
            Resale
          </Nav.Link>
          <Nav.Link
            href="/blogs"
            className={`ml-3 mr-auto ${
              pathname === "/blogs" ? "active-nav-link" : ""
            }`}
          >
            Blogs
          </Nav.Link>
          <Nav.Link
            href="/about-us"
            className={`ml-3 mr-auto ${
              pathname === "/about-us" ? "active-nav-link" : ""
            }`}
          >
            About Us
          </Nav.Link>
          <Nav.Link
            href="/contact-us"
            className={`ml-3 mr-auto ${
              pathname === "/contact-us" ? "active-nav-link" : ""
            }`}
          >
            Contact Us
          </Nav.Link>
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
