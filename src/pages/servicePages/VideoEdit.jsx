import React, { useState } from "react";
import "./ServiceStyle.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import PhotoModal from "../../components/modal/PhotoModal";
import AdBanner from "../../components/adBanner/AdBanner";
import PageBanner from "../../components/pageBanner/PageBanner";
import PageBannerImg from "../../assets/banner/banner.jpg";
import { Col, Container, Row } from "react-bootstrap";

const VideoEdit = () => {
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
      <PageBanner b_img={PageBannerImg} page_title="Video Editing" />

      <div className="about_page">
        <Container>
          <Row className="align-items-center">
            <Col md={7}>
              <h1>About Video Editing</h1>
              <p>
                Our video editing service is all about turning your raw video
                footage into captivating, professional-quality content. Whether
                you have filmed promotional videos, vlogs, educational content,
                or any other video material, our skilled video editors take your
                footage and work their magic to create videos that stand out in
                the digital landscape.
              </p>
            </Col>
            <Col md={5}>
              <img src={PageBannerImg} className="img-fluid" alt="filmgarage" />
            </Col>
          </Row>
        </Container>
      </div>

      <div className="process">
        <Container>
          <p>
            <h2>Our video editing process</h2>
            <span>Storytelling</span>
            We believe that every video should tell a story. Our editors
            meticulously organize your footage to create a narrative that
            engages your audience and effectively conveys your message. From
            crafting compelling introductions to seamless transitions and
            impactful conclusions, we ensure your videos are a pleasure to
            watch.
            <span>Visual Enhancement</span>
            We enhance the visual quality of your videos, adjusting colors,
            contrast, and brightness to make them visually appealing. We also
            remove any imperfections, such as shaky footage, background noise,
            or unnecessary distractions, to ensure a polished, professional
            look.
            <span>Effects and Graphics</span>
            Depending on your preferences, we can add various effects and
            graphics to make your videos more dynamic. This may include text
            overlays, motion graphics, and visual effects that align with your
            brand or message.
            <span>Sound Enhancement</span>
            Audio is just as crucial as video quality. Our team optimizes the
            audio in your videos, ensuring clear, high-quality sound. We can
            also add background music or sound effects that complement the
            video's mood and message.
            <span>Finalization</span>
            Once the editing process is complete, we make sure your video is in
            the appropriate format and resolution for the platform where you
            intend to share it. Whether it's for YouTube, social media, your
            website, or any other channel, we provide you with a final video
            that's ready to be uploaded and shared.
          </p>

          <p>
            Our video editing service is designed to transform your video
            content into a powerful communication tool. Whether you're looking
            to engage your audience, promote your brand, educate, or entertain,
            we have the expertise to make your video content shine.
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
                        <h3>Video Editing</h3>

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
                        <h3>Video Editing</h3>

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
                        <h3>Video Editing</h3>

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
                    <h3>Video Editing</h3>

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
                        <h3>Video Editing</h3>

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
                        <h3>Video Editing</h3>

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

export default VideoEdit;
