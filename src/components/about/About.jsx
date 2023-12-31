import React, { useEffect, useRef, useState } from "react";
import "./About.scss";
import { Col, Container, Row } from "react-bootstrap";
import CountUp from "react-countup";

const About = () => {
  const [counterOn, setCounterOn] = useState(true); // Adjust the initial state if needed
  const aboutSectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        console.log(entries[0].isIntersecting);
        if (entries[0].isIntersecting) {
          setCounterOn(true);
        } else {
          setCounterOn(false);
        }
      },
      { threshold: 0.5 }
    );

    if (aboutSectionRef.current) {
      observer.observe(aboutSectionRef.current);
    }

    return () => {
      if (aboutSectionRef.current) {
        observer.unobserve(aboutSectionRef.current);
      }
    };
  }, []);

  return (
    <div className="about" ref={aboutSectionRef}>
      <Container>
        <Row>
          <Col lg={6}>
            <div className="about_img">
              <iframe
                src="https://www.youtube.com/embed/zV2-iPkV3_I?si=Up-p7jPgmXMyRHGw"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
              ></iframe>
            </div>
          </Col>
          <Col lg={6}>
            <div className="about_text">
              <h1>About US</h1>
              <p>
                At Film Garage, we're not just a digital agency; we're a
                collective of passionate creators and strategic minds dedicated
                to making your brand shine. Our journey began with a simple yet
                profound idea: to blend the art of storytelling with the
                precision of digital technology.
              </p>

              <p>
                Our mission is to bridge the gap between your dreams and
                reality, harnessing our expertise in video editing, motion
                graphics, thumbnail design, graphics design, web development,
                and digital marketing to make your digital aspirations come
                true. Let's collaborate, innovate, and together, we'll create
                something extraordinary. Welcome to Film Garage, where
                imagination knows no bounds, and the digital world becomes your
                canvas.
              </p>

              <div className="experience">
                <div className="exp">
                  <h1>
                    {counterOn ? (
                      <CountUp start={0} end={10} duration={5} delay={0.05} />
                    ) : null}
                    +
                  </h1>
                  <span>Years in the Industries</span>
                </div>
                <div className="exp">
                  <h1>
                    {counterOn ? (
                      <CountUp start={0} end={55} duration={5} delay={0.05} />
                    ) : null}
                    +
                  </h1>
                  <span>Projects Completed</span>
                </div>
                <div className="exp">
                  <h1>
                    {counterOn ? (
                      <CountUp start={0} end={40} duration={5} delay={0.05} />
                    ) : null}
                    +
                  </h1>
                  <span>Happy Clients</span>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
