import React from "react";
import "./Banner.scss";
import { Col, Container, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Lottie from "lottie-react";
import animationData from "../../assets/banner/banner.json";

const Banner = () => {
  return (
    <div className="banner">
      <Container>
        <Row className="align-items-center justify-content-space-between">
          <Col md={7} className="order-1 order-md-0">
            <div className="banner_text">
              <span>We are Film Garage</span>
              <h1>Expand your brand with our visuals</h1>

              <p>
                Elevate your brand with top-notch video editing, stunning
                thumbnail and graphics design, captivating photography and
                videography, custom web development, and results-driven digital
                marketing services. Let's bring your vision to life!
              </p>

              <NavLink to="/contact" className="getStarted">
                Get Started
              </NavLink>
            </div>
          </Col>
          <Col md={5} className="order-0 order-md-1">
            <div className="banner_img">
              <Lottie className="lootie-img" animationData={animationData} />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner;
