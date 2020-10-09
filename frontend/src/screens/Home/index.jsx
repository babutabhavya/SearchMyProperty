import React, { useEffect } from "react";
import { Carousel, Image } from "react-bootstrap";
import "./styles.scss";
import CustomButton from "../../components/CustomButton/index";
import strings from "../../strings";

export default function Home(props) {
  useEffect(() => {
    document.title = "Home|SearchMyProperty";
  });

  const isMobile = window.innerWidth <= 575;
  return (
    <div>
      <div className="frame" />
      <div className="overlay"></div>
      <div style={{ height: "100vh", width: "100vw" }}>
        <Carousel
          className="h-100"
          indicators={false}
          controls={false}
          fade={true}
          interval={10000}
        >
          <Carousel.Item className="h-100">
            <Image
              src={require("../../assets/background/home1.jpg")}
              className="w-100 h-100"
              fluid
            />
          </Carousel.Item>
          <Carousel.Item className="h-100">
            <Image
              src={require("../../assets/background/home2.jpg")}
              className="w-100 h-100"
              fluid
            />
          </Carousel.Item>
          <Carousel.Item className="h-100">
            <Image
              src={require("../../assets/background/home3.jpg")}
              className="w-100 h-100"
              fluid
            />
          </Carousel.Item>
          <Carousel.Item className="h-100">
            <Image
              src={require("../../assets/background/home4.jpg")}
              className="w-100 h-100"
              fluid
            />
          </Carousel.Item>
        </Carousel>
        <div>
          <CustomButton
            customClassName="mobile-home"
            buttonText={strings.CONTACT_PHONE_NUMBER}
          />
        </div>
        <div
          className={`position-fixed home-btn-container ${
            isMobile
              ? "home-btn-container-mobile"
              : "home-btn-container-desktop"
          } mx-auto`}
        >
          <CustomButton
            customClassName={isMobile ? "home-btn-mobile" : "home-btn"}
            buttonText="Search my locations"
            onClick={() => props.history.push("/locations")}
          />
        </div>
      </div>
    </div>
  );
}
