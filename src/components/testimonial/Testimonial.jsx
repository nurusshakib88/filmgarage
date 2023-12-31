import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
// import "./Carousel.scss";
import "./Testimonial.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

import {
  faAngleLeft,
  faAngleRight,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { Col, Container, Row } from "react-bootstrap";

function Testimonial() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="testimonial">
      <Container>
        <h1>Testimonials</h1>
        <h2>Some Reviews</h2>
        <p className="testimonial_text">
          Here are some Reviews to Look at for our Future Customers
        </p>

        <Carousel
          className="d-none d-lg-block"
          interval={2000}
          activeIndex={index}
          onSelect={handleSelect}
          nextIcon={<FontAwesomeIcon icon={faAngleRight} />}
          prevIcon={<FontAwesomeIcon icon={faAngleLeft} />}
        >
          <Carousel.Item>
            <Carousel.Caption>
              <Row>
                <Col>
                  <div className="s_item">
                    <div className="social-star">
                      <FontAwesomeIcon icon={faLinkedinIn} />
                      <div className="rating">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                      </div>
                    </div>

                    <p className="comment">
                      "As a small business owner, I was looking for someone who
                      could help me create engaging video content for my social
                      media. FILM GARAGE was the perfect choice. Their video
                      editing helped me reach a wider audience and also
                      increased my brand's visibility."
                    </p>

                    <div className="commentor">
                      <img
                        src="../../src/assets/testimonial/test1.jpg"
                        alt="filmgarage"
                      />

                      <div className="commentor-desc">
                        <h3>Caleb Bennett</h3>
                        <span>CEO</span>
                      </div>
                    </div>
                  </div>
                </Col>

                <Col>
                  <div className="s_item">
                    <div className="social-star">
                      <FontAwesomeIcon icon={faLinkedinIn} />
                      <div className="rating">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                      </div>
                    </div>

                    <p className="comment">
                      "FILM GARAGE and their team transformed our outdated
                      website into a modern, user-friendly platform. Their web
                      development skills are top-notch. The new website has
                      improved our online presence and customer engagement,
                      ultimately boosting our company's success."
                    </p>

                    <div className="commentor">
                      <img
                        src="../../src/assets/testimonial/test1.jpg"
                        alt="filmgarage"
                      />

                      <div className="commentor-desc">
                        <h3>Amr Barbarawi</h3>
                        <span>Creative Professionals</span>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div className="s_item">
                    <div className="social-star">
                      <FontAwesomeIcon icon={faLinkedinIn} />
                      <div className="rating">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                      </div>
                    </div>

                    <p className="comment">
                      "Working with FILM GARAGE was an absolute pleasure. Their
                      video editing skills brought our promotional video to
                      life. The attention to detail and creativity they applied
                      to our project was remarkable. I can confidently say that
                      FILM GARAGE played a significant role in our marketing
                      success."
                    </p>

                    <div className="commentor">
                      <img
                        src="../../src/assets/testimonial/test1.jpg"
                        alt="filmgarage"
                      />

                      <div className="commentor-desc">
                        <h3>Caleb Bennett</h3>
                        <span>CEO</span>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Carousel.Caption>
              <Row>
                <Col>
                  <div className="s_item">
                    <div className="social-star">
                      <FontAwesomeIcon icon={faLinkedinIn} />
                      <div className="rating">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                      </div>
                    </div>

                    <p className="comment">
                      "I've hired many video editors in the past, but the team
                      from FILM GARAGE stands out as the best. They have a keen
                      eye for detail, an excellent understanding of
                      storytelling, and a commitment to delivering high-quality
                      work on time."
                    </p>

                    <div className="commentor">
                      <img
                        src="../../src/assets/testimonial/test1.jpg"
                        alt="filmgarage"
                      />

                      <div className="commentor-desc">
                        <h3>Caleb Bennett</h3>
                        <span>CEO</span>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div className="s_item">
                    <div className="social-star">
                      <FontAwesomeIcon icon={faLinkedinIn} />
                      <div className="rating">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                      </div>
                    </div>

                    <p className="comment">
                      "If you're in search of a graphics designer who can bring
                      your brand to life, look no further than FILM GARAGE.
                      Their design skills are outstanding, and their commitment
                      to delivering excellence is unwavering."
                    </p>

                    <div className="commentor">
                      <img
                        src="../../src/assets/testimonial/test1.jpg"
                        alt="filmgarage"
                      />

                      <div className="commentor-desc">
                        <h3>Caleb Bennett</h3>
                        <span>CEO</span>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div className="s_item">
                    <div className="social-star">
                      <FontAwesomeIcon icon={faLinkedinIn} />
                      <div className="rating">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                      </div>
                    </div>

                    <p className="comment">
                      "Working with FILM GARAGE was an absolute game-changer for
                      our projects. Their motion graphics skills are off the
                      charts. They took our ideas and turned them into visually
                      stunning, dynamic content that left a lasting impression."
                    </p>

                    <div className="commentor">
                      <img
                        src="../../src/assets/testimonial/test1.jpg"
                        alt="filmgarage"
                      />

                      <div className="commentor-desc">
                        <h3>Caleb Bennett</h3>
                        <span>CEO</span>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <Carousel
          className="d-sm-block d-lg-none"
          interval={2000}
          activeIndex={index}
          onSelect={handleSelect}
          nextIcon={<FontAwesomeIcon icon={faAngleRight} />}
          prevIcon={<FontAwesomeIcon icon={faAngleLeft} />}
        >
          <Carousel.Item>
            <Carousel.Caption>
              <Row>
                <Col>
                  <div className="s_item">
                    <div className="social-star">
                      <FontAwesomeIcon icon={faLinkedinIn} />
                      <div className="rating">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                      </div>
                    </div>

                    <p className="comment">
                      "As a small business owner, I was looking for someone who
                      could help me create engaging video content for my social
                      media. FILM GARAGE was the perfect choice. Their video
                      editing helped me reach a wider audience and also
                      increased my brand's visibility."
                    </p>

                    <div className="commentor">
                      <img
                        src="../../src/assets/testimonial/test1.jpg"
                        alt="filmgarage"
                      />

                      <div className="commentor-desc">
                        <h3>Caleb Bennett</h3>
                        <span>CEO</span>
                      </div>
                    </div>
                  </div>
                </Col>

                <Col>
                  <div className="s_item">
                    <div className="social-star">
                      <FontAwesomeIcon icon={faLinkedinIn} />
                      <div className="rating">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                      </div>
                    </div>

                    <p className="comment">
                      "FILM GARAGE and their team transformed our outdated
                      website into a modern, user-friendly platform. Their web
                      development skills are top-notch. The new website has
                      improved our online presence and customer engagement,
                      ultimately boosting our company's success."
                    </p>

                    <div className="commentor">
                      <img
                        src="../../src/assets/testimonial/test1.jpg"
                        alt="filmgarage"
                      />

                      <div className="commentor-desc">
                        <h3>Amr Barbarawi</h3>
                        <span>Creative Professionals</span>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Carousel.Caption>
              <Row>
                <Col>
                  <div className="s_item">
                    <div className="social-star">
                      <FontAwesomeIcon icon={faLinkedinIn} />
                      <div className="rating">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                      </div>
                    </div>

                    <p className="comment">
                      "If you're in search of a graphics designer who can bring
                      your brand to life, look no further than FILM GARAGE.
                      Their design skills are outstanding, and their commitment
                      to delivering excellence is unwavering."
                    </p>

                    <div className="commentor">
                      <img
                        src="../../src/assets/testimonial/test1.jpg"
                        alt="filmgarage"
                      />

                      <div className="commentor-desc">
                        <h3>Caleb Bennett</h3>
                        <span>CEO</span>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div className="s_item">
                    <div className="social-star">
                      <FontAwesomeIcon icon={faLinkedinIn} />
                      <div className="rating">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                      </div>
                    </div>

                    <p className="comment">
                      "Working with FILM GARAGE was an absolute game-changer for
                      our projects. Their motion graphics skills are off the
                      charts. They took our ideas and turned them into visually
                      stunning, dynamic content that left a lasting impression."
                    </p>

                    <div className="commentor">
                      <img
                        src="../../src/assets/testimonial/test1.jpg"
                        alt="filmgarage"
                      />

                      <div className="commentor-desc">
                        <h3>Caleb Bennett</h3>
                        <span>CEO</span>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Carousel.Caption>
              <Row>
                <Col>
                  <div className="s_item">
                    <div className="social-star">
                      <FontAwesomeIcon icon={faLinkedinIn} />
                      <div className="rating">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                      </div>
                    </div>

                    <p className="comment">
                      "I've hired many video editors in the past, but the team
                      from FILM GARAGE stands out as the best. They have a keen
                      eye for detail, an excellent understanding of
                      storytelling, and a commitment to delivering high-quality
                      work on time."
                    </p>

                    <div className="commentor">
                      <img
                        src="../../src/assets/testimonial/test1.jpg"
                        alt="filmgarage"
                      />

                      <div className="commentor-desc">
                        <h3>Caleb Bennett</h3>
                        <span>CEO</span>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div className="s_item">
                    <div className="social-star">
                      <FontAwesomeIcon icon={faLinkedinIn} />
                      <div className="rating">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                      </div>
                    </div>

                    <p className="comment">
                      "Working with FILM GARAGE was an absolute pleasure. Their
                      video editing skills brought our promotional video to
                      life. The attention to detail and creativity they applied
                      to our project was remarkable. I can confidently say that
                      FILM GARAGE played a significant role in our marketing
                      success."
                    </p>

                    <div className="commentor">
                      <img
                        src="../../src/assets/testimonial/test1.jpg"
                        alt="filmgarage"
                      />

                      <div className="commentor-desc">
                        <h3>Caleb Bennett</h3>
                        <span>CEO</span>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <Carousel
          className="d-block d-sm-none"
          interval={2000}
          activeIndex={index}
          onSelect={handleSelect}
          nextIcon={<FontAwesomeIcon icon={faAngleRight} />}
          prevIcon={<FontAwesomeIcon icon={faAngleLeft} />}
        >
          <Carousel.Item>
            <Carousel.Caption>
              <Row>
                <Col>
                  <div className="s_item">
                    <div className="social-star">
                      <FontAwesomeIcon icon={faLinkedinIn} />
                      <div className="rating">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                      </div>
                    </div>

                    <p className="comment">
                      "As a small business owner, I was looking for someone who
                      could help me create engaging video content for my social
                      media. FILM GARAGE was the perfect choice. Their video
                      editing helped me reach a wider audience and also
                      increased my brand's visibility."
                    </p>

                    <div className="commentor">
                      <img
                        src="../../src/assets/testimonial/test1.jpg"
                        alt="filmgarage"
                      />

                      <div className="commentor-desc">
                        <h3>Caleb Bennett</h3>
                        <span>CEO</span>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Carousel.Caption>
              <Row>
                <Col>
                  <div className="s_item">
                    <div className="social-star">
                      <FontAwesomeIcon icon={faLinkedinIn} />
                      <div className="rating">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                      </div>
                    </div>

                    <p className="comment">
                      "Working with FILM GARAGE was an absolute game-changer for
                      our projects. Their motion graphics skills are off the
                      charts. They took our ideas and turned them into visually
                      stunning, dynamic content that left a lasting impression."
                    </p>

                    <div className="commentor">
                      <img
                        src="../../src/assets/testimonial/test1.jpg"
                        alt="filmgarage"
                      />

                      <div className="commentor-desc">
                        <h3>Caleb Bennett</h3>
                        <span>CEO</span>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Carousel.Caption>
              <Row>
                <Col>
                  <div className="s_item">
                    <div className="social-star">
                      <FontAwesomeIcon icon={faLinkedinIn} />
                      <div className="rating">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                      </div>
                    </div>

                    <p className="comment">
                      "Working with FILM GARAGE was an absolute pleasure. Their
                      video editing skills brought our promotional video to
                      life. The attention to detail and creativity they applied
                      to our project was remarkable. I can confidently say that
                      FILM GARAGE played a significant role in our marketing
                      success."
                    </p>

                    <div className="commentor">
                      <img
                        src="../../src/assets/testimonial/test1.jpg"
                        alt="filmgarage"
                      />

                      <div className="commentor-desc">
                        <h3>Caleb Bennett</h3>
                        <span>CEO</span>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Carousel.Caption>
              <Row>
                <Col>
                  <div className="s_item">
                    <div className="social-star">
                      <FontAwesomeIcon icon={faLinkedinIn} />
                      <div className="rating">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                      </div>
                    </div>

                    <p className="comment">
                      "FILM GARAGE and their team transformed our outdated
                      website into a modern, user-friendly platform. Their web
                      development skills are top-notch. The new website has
                      improved our online presence and customer engagement,
                      ultimately boosting our company's success."
                    </p>

                    <div className="commentor">
                      <img
                        src="../../src/assets/testimonial/test1.jpg"
                        alt="filmgarage"
                      />

                      <div className="commentor-desc">
                        <h3>Amr Barbarawi</h3>
                        <span>Creative Professionals</span>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Carousel.Caption>
              <Row>
                <Col>
                  <div className="s_item">
                    <div className="social-star">
                      <FontAwesomeIcon icon={faLinkedinIn} />
                      <div className="rating">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                      </div>
                    </div>

                    <p className="comment">
                      "If you're in search of a graphics designer who can bring
                      your brand to life, look no further than FILM GARAGE.
                      Their design skills are outstanding, and their commitment
                      to delivering excellence is unwavering."
                    </p>

                    <div className="commentor">
                      <img
                        src="../../src/assets/testimonial/test1.jpg"
                        alt="filmgarage"
                      />

                      <div className="commentor-desc">
                        <h3>Caleb Bennett</h3>
                        <span>CEO</span>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Carousel.Caption>
              <Row>
                <Col>
                  <div className="s_item">
                    <div className="social-star">
                      <FontAwesomeIcon icon={faLinkedinIn} />
                      <div className="rating">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                      </div>
                    </div>

                    <p className="comment">
                      "I've hired many video editors in the past, but the team
                      from FILM GARAGE stands out as the best. They have a keen
                      eye for detail, an excellent understanding of
                      storytelling, and a commitment to delivering high-quality
                      work on time."
                    </p>

                    <div className="commentor">
                      <img
                        src="../../src/assets/testimonial/test1.jpg"
                        alt="filmgarage"
                      />

                      <div className="commentor-desc">
                        <h3>Caleb Bennett</h3>
                        <span>CEO</span>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
    </div>
  );
}

export default Testimonial;
