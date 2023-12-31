import React, { useState } from "react";
import "./ServiceStyle.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import PhotoModal from "../../components/modal/PhotoModal";
import AdBanner from "../../components/adBanner/AdBanner";
import PageBanner from "../../components/pageBanner/PageBanner";
import PageBannerImg from "../../assets/banner/banner.jpg";
import { Col, Container, Row } from "react-bootstrap";

const WebDev = () => {
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
      <PageBanner b_img={PageBannerImg} page_title="Web Development" />

      <div className="about_page">
        <Container>
          <Row className="align-items-center">
            <Col md={7}>
              <h1>About Web Development</h1>
              <p>
                At FILM GARAGE, we specialize in crafting exceptional digital
                spaces. Our web development team is dedicated to creating
                responsive, user-friendly websites that seamlessly blend form
                and function. From sleek portfolios to dynamic e-commerce
                platforms, we focus on bringing your unique vision to life. Our
                approach combines cutting-edge technology with visually
                appealing design, ensuring your online presence is both stunning
                and effective. Let FILM GARAGE be your partner in building a
                website that not only reflects your brand identity but also
                provides a seamless and memorable experience for your visitors.
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
          <h2>Our Web Development process</h2>

          <p>
            <span>Discovery and Planning</span>
            Our web development journey begins with a thorough understanding of
            your goals, target audience, and unique requirements. We collaborate
            closely with you to define the project scope, functionalities, and
            design preferences. This phase sets the foundation for a tailored
            web solution.
            <span>Design Conceptualization</span>
            With insights gathered, our design team creates wireframes and
            design mockups that translate your vision into a visual concept. We
            prioritize user experience (UX) and user interface (UI) design,
            ensuring your website not only looks visually appealing but also
            offers intuitive navigation. 3. **Development Kickoff:** Once the
            design is approved, our development team springs into action. We use
            the latest technologies and coding practices to build a robust,
            scalable, and responsive website. Regular check-ins and updates keep
            you informed about the development progress.
            <span>Functionality Integration</span>
            Your website's functionality is paramount. Whether it's e-commerce
            capabilities, contact forms, or interactive elements, we seamlessly
            integrate features to enhance user engagement and meet your business
            objectives. Rigorous testing ensures everything functions smoothly.
            <span>Responsive Design Implementation</span>
            In an era where users access websites from various devices, we
            prioritize responsive design. Your website is optimized to deliver a
            seamless experience across desktops, tablets, and smartphones,
            ensuring accessibility and engagement on all platforms.
            <span>Performance Optimization</span>
            Speed matters. We optimize your website for performance, employing
            techniques such as image compression, caching, and code
            optimization. This ensures swift loading times and a positive user
            experience, crucial for retaining visitors.
            <span>Quality Assurance Testing</span>
            Before the big reveal, our quality assurance team rigorously tests
            every aspect of your website. From functionality and compatibility
            to security and performance, we leave no stone unturned to ensure
            your website meets the highest standards.
            <span> Deployment and Launch</span>
            Once everything gets the green light, we deploy your website to the
            live environment. Our team oversees the launch process, making sure
            everything transitions smoothly from development to the public
            domain.
            <span> Post-Launch Support</span>
            Our commitment doesn't end with the launch. We provide ongoing
            support, addressing any issues, updates, or enhancements needed.
            Whether it's technical support or additional features, we're here to
            ensure your website remains a powerful tool for your business. From
            concept to deployment, our web development process is a
            collaborative journey focused on turning your digital aspirations
            into a tangible and effective online presence.
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
                        src="../../src/assets/video-edit/thumb-4.jpg"
                        className="img-fluid"
                        alt="filmgarage"
                      />
                      <div className="desc">
                        <h3>Web Development</h3>

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
                        src="../../src/assets/video-edit/thumb-4.jpg"
                        className="img-fluid"
                        alt="filmgarage"
                      />
                      <div className="desc">
                        <h3>Web Development</h3>

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
                        src="../../src/assets/video-edit/thumb-4.jpg"
                        className="img-fluid"
                        alt="filmgarage"
                      />
                      <div className="desc">
                        <h3>Web Development</h3>

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
                  <img
                    src="../../src/assets/video-edit/thumb-4.jpg"
                    className="img-fluid"
                    alt="filmgarage"
                  />
                  <div className="desc">
                    <h3>Web Development</h3>

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
                        src="../../src/assets/video-edit/thumb-4.jpg"
                        className="img-fluid"
                        alt="filmgarage"
                      />
                      <div className="desc">
                        <h3>Web Development</h3>

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
                        src="../../src/assets/video-edit/thumb-4.jpg"
                        className="img-fluid"
                        alt="filmgarage"
                      />
                      <div className="desc">
                        <h3>Web Development</h3>

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

export default WebDev;
