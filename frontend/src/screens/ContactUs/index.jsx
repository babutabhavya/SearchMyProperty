import React, { useEffect } from "react";
import { Container, Col, Row } from "react-bootstrap";
import Header from "../../components/Header/index";
import Footer from "../../components/Footer/index";
import "./styles.scss";
import ContactUsForm from "../../components/ContactUsForm/index";
import strings from "../../strings";
import { FaEnvelopeOpenText, FaPhoneVolume } from "react-icons/fa";

export default function ContactUs() {
  useEffect(() => {
    document.title = "ContactUs|SearchMyProperty";
  });

  const isMobile = window.innerWidth <= 575;

  return (
    <div className="w-100 h-100 designer-background">
      <Header />
      <Container className="mt-1">
        <Row>
          <Col sm={4} className="border-right border-primary">
            <div className="d-block text-left contact-us-col1">
              <div className="contact-us-text mr-4">
                <h2>Contact Us</h2>
                <hr />
              </div>
              <div className="contact-info mt-5">
                <div className="d-flex mb-5">
                  <FaPhoneVolume color="#eca829" size={isMobile ? 40 : 55} />
                  <a
                    className="mt-2 ml-4"
                    href={`mob:${strings.CONTACT_PHONE_NUMBER}`}
                  >
                    {strings.CONTACT_PHONE_NUMBER}
                  </a>
                </div>
                <div className="d-flex mt-3">
                  <FaEnvelopeOpenText color="#eca829" size={50} />
                  <a
                    className="mt-3 ml-4"
                    href="mailto:info@luxuryresidences.in"
                  >
                    {strings.EMAIL}
                  </a>
                </div>
              </div>
            </div>
          </Col>
          <Col className={`text-left ${isMobile ? "mt-5" : ""}`} sm={8}>
            <ContactUsForm />
          </Col>
        </Row>
      </Container>
      <div className="d-block mt-5">
        <h2 className="mb-2">Corporate Office</h2>
        <p>
          # 476, Udyog Vihar Phase V Phase V, Udyog Vihar, Sector 19 Gurugram,
          Haryana 122022
        </p>
        <div className="mt-4 h-100">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5897.055316587121!2d77.08459496477299!3d28.49730769852273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1946db8d0955%3A0x12881a5de73ddb44!2s476%2C%20Udyog%20Vihar%20Phase%20V%2C%20Phase%20V%2C%20Udyog%20Vihar%2C%20Sector%2019%2C%20Gurugram%2C%20Haryana%20122008!5e0!3m2!1sen!2sin!4v1599756518728!5m2!1sen!2sin"
            frameBorder="0"
            aria-hidden="false"
            tabIndex="0"
            title="map"
            className="w-100 mt-2 map"
          ></iframe>
        </div>
      </div>
      <Footer />
    </div>
  );
}
