import React from "react";
import "./AdBanner.scss";
import { NavLink } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";

const AdBanner = () => {
  return (
    <div className="adbanner">
      <Container>
        <Row className="align-items-center justify-content-between">
          <Col lg={9}>
            <div className="ad_text">
              <h1>Do You Need Any Kind of Professional Services?</h1>
              <p>
                Boost your brand with expert video editing, striking graphics,
                captivating visuals, custom web development, and impactful
                digital marketing. Let's bring your vision to fruition!
              </p>
            </div>
          </Col>

          <Col xl={2} lg={3} >
            <NavLink to="/contact" className="get-started">
              Get Started
            </NavLink>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AdBanner;
