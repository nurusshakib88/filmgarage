import React, { useState } from "react";
import "./ServiceStyle.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import PhotoModal from "../../components/modal/PhotoModal";
import AdBanner from "../../components/adBanner/AdBanner";
import PageBanner from "../../components/pageBanner/PageBanner";
import PageBannerImg from "../../assets/banner/banner.jpg";
import { Col, Container, Row } from "react-bootstrap";

import WorkImg from "../../assets/video-edit/thumb-4.jpg";

const GraphicsDesign = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const openModal = (photo) => {
    setSelectedPhoto(photo);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
    setModalOpen(false);
  };

  return (
    <div className="video">
      <PageBanner b_img={PageBannerImg} page_title="Graphics Design" />

      <div className="about_page">
        <Container>
          <Row className="align-items-center">
            <Col md={7}>
              <h1>About Graphics Design</h1>
              <p>
                Our graphics design service at FILM GARAGE is a creative journey
                where ideas come to life visually. Whether you're establishing a
                brand identity or seeking eye-catching visuals, our talented
                designers craft impactful graphics tailored to your unique
                vision. From logos and banners to social media assets, we infuse
                creativity and precision into every design, ensuring it not only
                resonates with your brand but also captivates your audience.
                With a keen understanding of design principles and the latest
                trends, we bring aesthetics and functionality together, creating
                visuals that leave a lasting impression. Let FILM GARAGE be your
                partner in transforming concepts into compelling visual stories.
              </p>
            </Col>
            <Col>
              <img src={PageBannerImg} className="img-fluid" alt="filmgarage" />
            </Col>
          </Row>
        </Container>
      </div>

      <div className="process">
        <Container>
          <h2>Our Graphics design process</h2>
          <p>
            <span>Consultation and Briefing</span>
            Our graphic design process begins with a detailed consultation to
            understand your brand, goals, and design preferences. We work
            closely with you to gather insights, ensuring a clear understanding
            of the project's objectives.
            <span>Research and Inspiration</span>
            Armed with information, our designers embark on a research phase to
            gather inspiration, explore industry trends, and identify unique
            elements that can elevate your design. This phase lays the
            foundation for a creative and informed approach.
            <span>Conceptualization and Sketching</span>
            Ideas take shape through sketches and initial concepts. Our
            designers bring creativity to the drawing board, exploring various
            possibilities before selecting the most promising directions for
            further development.
            <span>Digital Design Creation</span>
            Transitioning from sketches to digital platforms, our designers use
            industry-standard software to create high-quality digital designs.
            This stage involves refining concepts, experimenting with color
            schemes, and ensuring alignment with your brand identity.
            <span>Client Collaboration and Feedback</span>
            We believe in a collaborative design process. Regular check-ins and
            feedback sessions are integral to refining the design according to
            your preferences. This ensures the end result is not just visually
            appealing but also aligns with your vision.
            <span>Finalization and Approval</span>
            Once the design reaches a point of mutual satisfaction, we present
            the final version for your approval. This includes delivering
            various file formats suitable for different applications, ensuring
            versatility and usability.
            <span>Delivery of Design Assets</span>
            We provide you with all the necessary design assets, from
            high-resolution images to vector files. This ensures that you have
            the flexibility to use your designs across various platforms and
            mediums.
          </p>

          <p>
            Through each step of our graphics design process, our goal is to
            deliver not just visuals, but a visual identity that resonates with
            your audience and contributes to the success of your brand.
          </p>
        </Container>
      </div>

      <div className="works">
        <Container>
          <div className="project-gallary">
            <h1>Our previous work</h1>

            {/* whole gallary */}
            <Row className="g-lg-4 g-md-3 g-2">
              {/* left part */}
              <Col lg={6} sm={6}>
                {/* left row 1 */}
                <Row className="g-lg-4 g-md-3 g-2">
                  <Col lg={12}>
                    <div
                      className="g_img"
                      onClick={() =>
                        openModal({
                          url: "../../src/assets/video-edit/thumb-4.jpg",
                          title: "Image 1",
                        })
                      }
                    >
                      <img
                        src={WorkImg}
                        className="img-fluid"
                        alt="filmgarage"
                      />
                      <div className="desc">
                        <h3>Graphics Design</h3>

                        <div className="goto-project">
                          Project-details
                          <FontAwesomeIcon
                            className="icon"
                            icon={faArrowRight}
                          />
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col lg={6}>
                    <div
                      className="g_img"
                      onClick={() =>
                        openModal({
                          url: "../../src/assets/video-edit/thumb-4.jpg",
                          title: "Image 1",
                        })
                      }
                    >
                      <img
                        src={WorkImg}
                        className="img-fluid"
                        alt="filmgarage"
                      />
                      <div className="desc">
                        <h3>Graphics Design</h3>

                        <div className="goto-project">
                          Project-details
                          <FontAwesomeIcon
                            className="icon"
                            icon={faArrowRight}
                          />
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col lg={6}>
                    <div
                      className="g_img"
                      onClick={() =>
                        openModal({
                          url: "../../src/assets/video-edit/thumb-4.jpg",
                          title: "Image 1",
                        })
                      }
                    >
                      <img
                        src={WorkImg}
                        className="img-fluid"
                        alt="filmgarage"
                      />
                      <div className="desc">
                        <h3>Graphics Design</h3>

                        <div className="goto-project">
                          Project-details
                          <FontAwesomeIcon
                            className="icon"
                            icon={faArrowRight}
                          />
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Col>

              {/* middle part */}
              <Col lg={3} sm={6}>
                <div
                  className="g_img g_img2"
                  onClick={() =>
                    openModal({
                      url: "../../src/assets/video-edit/thumb-4.jpg",
                      title: "Image 1",
                    })
                  }
                >
                  <img src={WorkImg} className="img-fluid" alt="filmgarage" />
                  <div className="desc">
                    <h3>Graphics Design</h3>

                    <div className="goto-project">
                      Project-details
                      <FontAwesomeIcon className="icon" icon={faArrowRight} />
                    </div>
                  </div>
                </div>
              </Col>

              {/* right part */}
              <Col lg={3}>
                {/* right row 1 */}
                <Row className="g-lg-4 g-md-3 g-2">
                  <Col lg={12} sm={6}>
                    <div
                      className="g_img"
                      onClick={() =>
                        openModal({
                          url: "../../src/assets/video-edit/thumb-4.jpg",
                          title: "Image 1",
                        })
                      }
                    >
                      <img
                        src={WorkImg}
                        className="img-fluid"
                        alt="filmgarage"
                      />
                      <div className="desc">
                        <h3>Graphics Design</h3>

                        <div className="goto-project">
                          Project-details
                          <FontAwesomeIcon
                            className="icon"
                            icon={faArrowRight}
                          />
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col lg={12} sm={6}>
                    <div
                      className="g_img"
                      onClick={() =>
                        openModal({
                          url: "../../src/assets/video-edit/thumb-4.jpg",
                          title: "Image 1",
                        })
                      }
                    >
                      <img
                        src={WorkImg}
                        className="img-fluid"
                        alt="filmgarage"
                      />
                      <div className="desc">
                        <h3>Graphics Design</h3>

                        <div className="goto-project">
                          Project-details
                          <FontAwesomeIcon
                            className="icon"
                            icon={faArrowRight}
                          />
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>

          {modalOpen && (
            <PhotoModal photo={selectedPhoto} onClose={closeModal} />
          )}
        </Container>
      </div>

      <AdBanner />
    </div>
  );
};

export default GraphicsDesign;
