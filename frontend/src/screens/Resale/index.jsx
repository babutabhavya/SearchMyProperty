import React, { useEffect, useState } from "react";
import { Dropdown, Container, Row, Col, Form } from "react-bootstrap";
import Header from "../../components/Header/index";
import Footer from "../../components/Footer/index";
import SearchBar from "../../components/SearchBar/index";
import RESALE from "../../data/resale";
import ResaleRow from "../../components/ResaleRow";
import FILTERS from "../../data/filters";
import ContactUsForm from "../../components/ContactUsForm";
import CustomButton from "../../components/CustomButton/index";
import "./styles.scss";

export default function Resale() {
  const [searchString, setSearchString] = useState("");
  const [location, setLocation] = useState("Gurgaon");
  const [bedrooms, setBedrooms] = useState(null);
  const [furnishing, setFurnishing] = useState(null);
  const [budget, setBudget] = useState(null);
  const [furnishingStatus, setFurnishingStatus] = useState(null);
  const [size, setSize] = useState(null);
  const [scroll, setScroll] = useState(null);

  function onScroll() {
    if (window.scrollY > 10) {
      setScroll(true);
    }
    if (window.scrollY < 10) {
      setScroll(false);
    }
  }

  useEffect(() => {
    onScroll();
    document.addEventListener("scroll", onScroll);
    return () => document.removeEventListener("scroll", onScroll);
  });

  return (
    <div className="w-100 h-100 designer-background">
      <Header />
      <div className="d-flex justify-content-center">
        <div className="d-flex align-items-center">
          <div className="location-dropdown-container mr-1">
            <Dropdown id="location">
              <Dropdown.Toggle>{location}</Dropdown.Toggle>
              <Dropdown.Menu className="w-100">
                {["Gurgaon", "Noida", "Bangalore", "Delhi"].map((element) => (
                  <Dropdown.Item
                    active={location === element ? "true" : "false"}
                    onClick={() => setLocation(element)}
                  >
                    {element}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <SearchBar
            searchString={searchString}
            setSearchString={setSearchString}
          />
        </div>
      </div>
      <div className="d-flex custom-filters justify-content-center mt-2">
        <Dropdown id="bedrooms">
          <Dropdown.Toggle className="text-capitalize">
            bedrooms
          </Dropdown.Toggle>
          <Dropdown.Menu className="w-100">
            {FILTERS["bedrooms"].map((element) => (
              <Dropdown.Item active={location === element ? "true" : "false"}>
                {element}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown id="furnishing">
          <Dropdown.Toggle className="text-capitalize">
            furnishing
          </Dropdown.Toggle>
          <Dropdown.Menu className="w-100">
            {FILTERS["furnishing"].map((element) => (
              <Dropdown.Item active={location === element ? "true" : "false"}>
                {element}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown id="budget">
          <Dropdown.Toggle className="text-capitalize">budget</Dropdown.Toggle>
          <Dropdown.Menu className="w-100">
            {FILTERS["budget"].map((element) => (
              <Dropdown.Item active={location === element ? "true" : "false"}>
                {element}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown id="furnishing_status">
          <Dropdown.Toggle className="text-capitalize">
            furnishing status
          </Dropdown.Toggle>
          <Dropdown.Menu className="w-100">
            {FILTERS["furnishing_status"].map((element) => (
              <Dropdown.Item active={location === element ? "true" : "false"}>
                {element}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown id="furnishing_status">
          <Dropdown.Toggle className="text-capitalize">size</Dropdown.Toggle>
          <Dropdown.Menu className="w-100">
            {FILTERS["size"].map((element) => (
              <Dropdown.Item active={location === element ? "true" : "false"}>
                {element}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <Container className="resale-container mt-5 p-3">
        <Row>
          <Col xs={8}>
            {RESALE.map((resale) => (
              <ResaleRow resale={resale} />
            ))}
          </Col>
          <Col
            xs={4}
            className={`position-fixed right-resale-col${
              scroll ? " scrolled-top-resale" : ""
            }`}
          >
            <div className="w-100 mb-5">
              <Form.Group className="text-center d-flex justify-content-center w-100">
                <CustomButton
                  customClassName="submit-button w-75"
                  buttonText="Post a New Resale"
                />
              </Form.Group>
            </div>
            <div>
              <ContactUsForm customContainerClassName="text-left resale-contact" />
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}
