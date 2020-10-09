import React, { useState, useEffect } from "react";
import {
  Image,
  Container,
  Row,
  Col,
  Tabs,
  Tab,
  Carousel,
} from "react-bootstrap";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import ReactPlayer from "react-player";
import {
  getEmbeddedMap,
  getLocationAdvantages,
  getFeaturesCols,
  getValueFromKey,
  getFloorPlanCarousel,
} from "../../helper";
import CustomButton from "../../components/CustomButton/index";
import ProjectHeader from "../../components/ProjectHeader/index";
import ProjectContactForm from "../../components/ProjectContactForm/index";
import AttributeStack from "../../components/AttributStack/index";
import ProjectBannerOverlay from "../../components/ProjectBannerOverlay/index";
import EnquireNowModal from "../../components/EnquireNowModal/index";
import ProjectFooter from "../../components/ProjectFooter/index";
import { FaImages } from "react-icons/fa";
import strings from "../../strings";
import "./styles.scss";

export default function Project(props) {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [lightBoxOpen, setLightBoxOpen] = useState(false);

  const [showEnquireNowModal, setEnquireNowModalShow] = useState(false);
  const handleModalClose = () => setEnquireNowModalShow(false);
  const handleModalShow = () => setEnquireNowModalShow(true);

  const { project } = props.history.location;
  useEffect(() => {
    if (project) {
      document.title = `${project.title}|SearchMyProperty`;
    } else {
      props.history.push("/projects");
    }
  });

  function getImageGalleryCols(images, startIndex, endIndex, isMobile) {
    let retval = [];
    for (let i = startIndex; i <= endIndex; i++) {
      retval.push(
        <Col
          className="gallery-image"
          style={isMobile ? { maxWidth: "95%", marginLeft: "7.5%" } : {}}
          onClick={() => {
            setPhotoIndex(i);
            setLightBoxOpen(true);
          }}
        >
          <Image className="h-100 w-100" src={images[i]} />
          <div class="item-overlay top d-flex justify-content-center align-items-center">
            <div>
              <FaImages size={50} color="#eca829" />
            </div>
          </div>
        </Col>
      );
    }
    return retval;
  }

  function getImageGalleryRows(images, isMobile) {
    let retval = [];
    const numColsPerRow = 4;
    let numCells = images.length;
    const numRows = Number(Math.ceil(images.length / numColsPerRow));
    for (var i = 0; i < numRows; i += 1) {
      if (numCells > numColsPerRow) {
        retval.push(
          <Container className="w-100">
            <Row
              sm={1}
              md={4}
              lg={4}
              xs={1}
              style={{
                height: isMobile ? "25%" : "100%",
              }}
              className={isMobile ? "d-block" : undefined}
            >
              {getImageGalleryCols(
                images,
                i * numColsPerRow,
                i * numColsPerRow + (numColsPerRow - 1),
                isMobile
              )}
            </Row>
          </Container>
        );
        numCells -= numColsPerRow;
      } else if (numCells <= numColsPerRow) {
        retval.push(
          <Container className="w-100">
            <Row
              sm={1}
              md={4}
              lg={4}
              xs={1}
              style={{
                height: isMobile ? "25%" : "100%",
              }}
              className={isMobile ? "d-block" : undefined}
            >
              {getImageGalleryCols(
                images,
                i * numColsPerRow,
                i * numColsPerRow + (numCells - 1),
                isMobile
              )}
            </Row>
          </Container>
        );
      }
    }
    return retval;
  }

  return project ? (
    <div className="w-100 h-100">
      <ProjectHeader projectLogo={project.logoImage} />
      <div className="position-relative">
        <Image className="project-banner-image" src={project.bannerImage} />
        <ProjectBannerOverlay
          title={project.title}
          location={project.location}
          priceValue={getValueFromKey(project.attributes, "Price")}
          possessionValue={getValueFromKey(project.attributes, "Possession")}
          sizesValue={getValueFromKey(project.attributes, "Sizes")}
          handleSiteVisit={() => handleModalShow()}
        />
      </div>
      <AttributeStack attributes={project.attributes} />
      <Container className="project-description-container" id="about">
        <Row md={1} sm={1} lg={2} xs={1}>
          <Col className="text-left">
            <h2>{project.title}</h2>
            <hr className="sep-3" />
            <p className="justify-text-center">{project.aboutText}</p>
            <div className="pt-5 text-center schedule-visit-button-container">
              <CustomButton
                customClassName="schedule-visit-button position-relative"
                buttonText="Schedule Site Visit"
                onClick={() => handleModalShow()}
              />
            </div>
          </Col>
          <Col className="video-column">
            <ReactPlayer
              url={project.video}
              width="100%"
              height="100%"
              controls={true}
            />
          </Col>
        </Row>
      </Container>
      <Container
        className="project-highlights-container"
        style={{ backgroundImage: `url(${project.backgroundImage1})` }}
        id="highlights"
      >
        <h2>{project.title} Highlights & Amenities</h2>
        <Row className="w-100" sm={1} md={1} lg={2} xs={1}>
          <Col style={{ backgroundColor: "white" }}>
            <Tabs
              defaultActiveKey="highlights"
              style={{ backgroundColor: "#eca829" }}
            >
              <Tab eventKey="highlights" title="Highlights">
                <div>
                  <p>Highlights</p>
                </div>
              </Tab>
              <Tab eventKey="amenities" title="Amenities">
                <div>
                  <p>Amenities</p>
                </div>
              </Tab>
            </Tabs>
          </Col>
          <Col>
            <Image
              className="w-100 h-100"
              src={project.highlightsAmentitiesImage}
            />
          </Col>
        </Row>
      </Container>
      <Container className="project-image-gallery-container" id="gallery">
        <div className="d-flex justify-content-center align-items-center flex-column-reverse">
          <h2>{project.title} Images</h2>
        </div>
        {getImageGalleryRows(project.gallery, false)}
        {lightBoxOpen && (
          <Lightbox
            mainSrc={project.gallery[photoIndex]}
            nextSrc={project.gallery[(photoIndex + 1) % project.gallery.length]}
            prevSrc={
              project.gallery[
                (photoIndex + project.gallery.length - 1) %
                  project.gallery.length
              ]
            }
            onCloseRequest={() => setLightBoxOpen(false)}
            onMovePrevRequest={() =>
              setPhotoIndex(
                (photoIndex + project.gallery.length - 1) %
                  project.gallery.length
              )
            }
            onMoveNextRequest={() =>
              setPhotoIndex((photoIndex + 1) % project.gallery.length)
            }
          />
        )}
      </Container>
      <Container className="project-floor-plan-container" id="floor-plan">
        <Row className="h-100" sm={1} md={1} lg={1} xs={1}>
          <Col className="h-100">
            <div className="w-100 h-100 p-5">
              <h2 className="project-title">Floor Plan</h2>
              <hr className="sep-3" />
            </div>
            <Carousel>{getFloorPlanCarousel(project.floorPlanImages)}</Carousel>
          </Col>
        </Row>
      </Container>
      <Container className="project-features-container" id="features">
        <Row className="h-100" sm={1} md={1} lg={2} xs={1}>
          <Col>
            <Image className="h-100 w-100" src={project.featureImage} />
          </Col>
          <Col className="text-left features-content-container">
            <div className="w-100">
              <h2 className="project-title">{project.title} Features</h2>
              <hr className="sep-3" />
            </div>
            <div className="features-sub-content-container">
              {getFeaturesCols(project.features)}
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="about-the-developer-container" id="developer">
        <Row className="h-100" sm={1} md={1} lg={2} xs={1}>
          <Col>
            <div>
              <h2 className="project-title text-left">About The Developer</h2>
              <hr className="sep-3" />
              <p className="mt-4 justify-text-center">
                {project.aboutTheDeveloperText}
              </p>
            </div>
          </Col>
          <Col>
            <Image
              className="h-100 w-100"
              src={project.aboutTheDeveloperImage}
            />
          </Col>
        </Row>
      </Container>
      <Container className="location-advantages-container" id="location">
        <Row className="h-100" sm={1} md={1} lg={2} xs={1}>
          <Col>{getEmbeddedMap(project.location)}</Col>
          <Col className="h-100">
            <div>
              <h2 className="text-left">Location Advantages</h2>
              <hr className="sep-3" />
            </div>
            <div className="text-left location-advantages-description-container mt-3">
              {getLocationAdvantages(project.locationAdvantages)}
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row
          sm={1}
          md={1}
          lg={3}
          xs={1}
          style={{ backgroundColor: "orange", padding: "10vh" }}
        >
          <Col className="w-100">
            <Image
              className="project-logo-contact-strip"
              src={project.logoImage}
            />
          </Col>
          <Col
            lg={4}
            className="d-flex justify-content-center align-items-center"
          >
            <div className="project-subtitle-container">
              <p className="align-items-center">{project.subtitle}</p>
            </div>
          </Col>
          <Col>
            <div>
              <CustomButton
                customClassName="project-custom-button"
                buttonText="Schedule Site Visit"
              />
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="project-contact-container">
        <Image className="w-100" src={project.contactImage} />
        <Row className="w-100 position-relative" sm={1} md={1} lg={2} xs={1}>
          <Col sm={4}>
            <div className="text-left p-4">
              <h2>Location Details</h2>
              <hr />
              <h3 className="mt-5">Address</h3>
              <p>{project.location}</p>
              <h3 className="mt-4">Phone</h3>
              <p>{strings.CONTACT_PHONE_NUMBER}</p>
              <h3 className="mt-4">Email</h3>
              <p>{strings.EMAIL}</p>
            </div>
          </Col>
          <Col sm={8}>
            <ProjectContactForm />
          </Col>
        </Row>
      </Container>
      <EnquireNowModal
        show={showEnquireNowModal}
        handleModalClose={handleModalClose}
      />
      <ProjectFooter />
    </div>
  ) : (
    null & props.history.push("/projects")
  );
}
