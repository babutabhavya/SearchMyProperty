import React, { useEffect } from "react";
import Header from "../../components/Header/index";
import Footer from "../../components/Footer/index";
import { Container, Row, Col } from "react-bootstrap";
import ContactUsStrip from "../../components/ContactUsStrip/index";
import "./styles.scss";

export default function AboutUs() {
  useEffect(() => {
    document.title = "AboutUs|SearchMyProperty";
  });

  const isMobile = window.innerWidth < 575;
  return (
    <div className="h-100 w-100 designer-background">
      <Header />
      <Container className={`${isMobile ? "w-100" : "w-50"} mt-2 text-left`}>
        <Row className="mr-3 ml-3 mb-5">
          <Col>
            <div className="about-us-title">
              <h2>Who Are We ? </h2>
            </div>
            <p className="mt-4 justify-text-center">
              We are a growing organization based in Delhi / NCR who set foot in
              the Real Estate Business in the year 2011. Our presence is spread
              across Bangalore, Delhi, Gurgaon & Noida.
            </p>
          </Col>
        </Row>
        <hr className="sep-3" />
        <Row className="mr-3 ml-3 mb-5">
          <Col>
            <div className="about-us-title">
              <h2>Our Beliefs</h2>
            </div>
            <p className="mt-4 justify-text-center">
              We believe “Not only is the Client always right but they are also
              the Best Teacher“, Over the period of time we have improvised our
              services basis our clients requirements and we now proudly offer
              end to end solution / services to all your Real estate
              requirements. We are your One Stop Shop for Buying, Selling,
              corporate Leasing, Commercial and Residential Property, Loan
              Assistance and Interior Assistance.
            </p>
          </Col>
        </Row>
        <hr className="sep-3" />

        <Row className="mr-3 ml-3 mb-5">
          <Col>
            <div className="about-us-title">
              <h2>Vision</h2>
            </div>
            <p className="mt-4 justify-text-center">
              Building long lasting relationships and experiences that you
              cherish for a lifetime.
            </p>
          </Col>
        </Row>
        <hr className="sep-3" />

        <Row className="mr-3 ml-3 mb-5">
          <Col>
            <div className="about-us-title">
              <h2>Mission</h2>
            </div>
            <p className="mt-4 justify-text-center">
              To be the clear choice for our clients in their journey of
              discovering renting, buying, selling and financing a home. We do
              that with complete honesty and transparency.
            </p>
          </Col>
        </Row>
        <hr className="sep-3" />

        <Row className="mr-3 ml-3 mb-5">
          <Col>
            <div className="about-us-title">
              <h2>Why Us?</h2>
            </div>
            <p className="mt-4 justify-text-center">
              With our expert team we always strive to create an unmatched
              experience for our Clients through a competitive pricing, honest &
              trust worthy assistant and transparency in dealing.
            </p>
          </Col>
        </Row>
        <hr className="sep-3" />
      </Container>
      <ContactUsStrip />
      <Footer />
    </div>
  );
}
