import React, { useState } from "react";
import "./ServiceStyle.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import PhotoModal from "../../components/modal/PhotoModal";
import AdBanner from "../../components/adBanner/AdBanner";
import PageBanner from "../../components/pageBanner/PageBanner";
import PageBannerImg from "../../assets/banner/banner.jpg";
import { Col, Container, Row } from "react-bootstrap";

const MotionGraphics = () => {
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
      <PageBanner b_img={PageBannerImg} page_title="Motion Graphics" />

      <div className="about_page">
        <Container>
          <Row className="align-items-center">
            <Col md={7}>
              <h1>About Motion Graphics</h1>
              <p>
                Elevate your visual storytelling with our Motion Graphics
                service at FILM GARAGE. We specialize in bringing static
                concepts to dynamic life, creating engaging and immersive visual
                experiences for your audience. Our skilled motion graphics
                artists combine artistry with technology to craft animations
                that go beyond the ordinary. Whether it's adding flair to your
                brand logo, incorporating visual effects into videos, or
                creating captivating animated content, we infuse creativity and
                innovation into every frame. Our process involves meticulous
                planning, conceptualization, and execution to ensure that each
                motion graphic element aligns seamlessly with your brand
                identity and message. Let FILM GARAGE be the creative force that
                transforms your content into a visually compelling journey,
                leaving a lasting impact on your audience.
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
          <h2>Our Motion Graphics process</h2>

          <p>
            <span>Project Briefing and Conceptualization</span>
            Our Motion Graphics process kicks off with a thorough understanding
            of your project goals. We collaborate closely to grasp your brand
            identity, message, and the specific visual elements you envision.
            This sets the foundation for our creative journey.
            <span>Scripting and Storyboarding</span>
            Every captivating motion graphic begins with a well-crafted script
            and storyboard. We outline the narrative, plan transitions, and
            sketch visual concepts to ensure a coherent and engaging storyline
            that aligns with your objectives.
            <span>Design Development</span>
            With a solid plan in place, our talented designers bring concepts to
            life digitally. This phase involves creating the visual elements,
            such as characters, backgrounds, and other graphical components,
            ensuring they resonate with your brand and message.
            <span>Animation Process</span>
            The magic happens during the animation process. Using
            industry-leading software, our motion graphics artists breathe life
            into the visuals, creating seamless and dynamic animations.
            Attention is given to timing, transitions, and effects to enhance
            the overall impact.
            <span>Sound Design Integration</span>
            Sound is a crucial element in motion graphics. We integrate sound
            effects, music, or voiceovers to complement the visuals and enhance
            the emotional resonance of your content. This step contributes to a
            holistic and immersive viewer experience.
            <span>Client Collaboration and Feedback</span>
            We believe in a collaborative approach. Regular check-ins and
            feedback sessions allow you to review our progress and provide
            input. This ensures that the final motion graphics align precisely
            with your vision and expectations.
            <span>Finalization and Delivery</span>
            Once the motion graphics meet your approval, we proceed to finalize
            the project. We provide you with the necessary files in the required
            formats, ensuring compatibility for various platforms and
            applications.
          </p>

          <p>
            From concept to delivery, our Motion Graphics process is a
            collaborative journey aimed at transforming your ideas into visually
            stunning and impactful animations. Let [Your Company Name] be your
            creative partner in motion, bringing your narratives to life with
            dynamic and engaging visuals.
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
                          videoURL:
                            "https://www.youtube.com/embed/QGjoQwlG5Mg?si=Tfvj7gLX6YOU8IQd",
                          title: "Image 1",
                        })
                      }
                    >
                      <img
                        src="../../src/assets/video-edit/thumb-4.jpg"
                        className="img-fluid"
                        alt="filmgarage"
                      />
                      <div className="desc">
                        <h3>Motion Graphics</h3>

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
                          videoURL:
                            "https://www.youtube.com/embed/QGjoQwlG5Mg?si=Tfvj7gLX6YOU8IQd",
                          title: "Image 1",
                        })
                      }
                    >
                      <img
                        src="../../src/assets/video-edit/thumb-4.jpg"
                        className="img-fluid"
                        alt="filmgarage"
                      />
                      <div className="desc">
                        <h3>Motion Graphics</h3>

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
                          videoURL:
                            "https://www.youtube.com/embed/QGjoQwlG5Mg?si=Tfvj7gLX6YOU8IQd",
                          title: "Image 1",
                        })
                      }
                    >
                      <img
                        src="../../src/assets/video-edit/thumb-4.jpg"
                        className="img-fluid"
                        alt="filmgarage"
                      />
                      <div className="desc">
                        <h3>Motion Graphics</h3>

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
                      videoURL:
                        "https://www.youtube.com/embed/QGjoQwlG5Mg?si=Tfvj7gLX6YOU8IQd",
                      title: "Image 1",
                    })
                  }
                >
                  <img
                    src="../../src/assets/video-edit/thumb-4.jpg"
                    className="img-fluid"
                    alt="filmgarage"
                  />
                  <div className="desc">
                    <h3>Motion Graphics</h3>

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
                          videoURL:
                            "https://www.youtube.com/embed/QGjoQwlG5Mg?si=Tfvj7gLX6YOU8IQd",
                          title: "Image 1",
                        })
                      }
                    >
                      <img
                        src="../../src/assets/video-edit/thumb-4.jpg"
                        className="img-fluid"
                        alt="filmgarage"
                      />
                      <div className="desc">
                        <h3>Motion Graphics</h3>

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
                          videoURL:
                            "https://www.youtube.com/embed/QGjoQwlG5Mg?si=Tfvj7gLX6YOU8IQd",
                          title: "Image 1",
                        })
                      }
                    >
                      <img
                        src="../../src/assets/video-edit/thumb-4.jpg"
                        className="img-fluid"
                        alt="filmgarage"
                      />
                      <div className="desc">
                        <h3>Motion Graphics</h3>

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

export default MotionGraphics;
