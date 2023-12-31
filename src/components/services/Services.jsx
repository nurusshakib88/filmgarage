import React from "react";
import "./Services.scss";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Service from "./service/Service";

import Service1 from "../../../src/assets/services/service1.jpg";
import Service2 from "../../../src/assets/services/service2.jpg";
import Service3 from "../../../src/assets/services/service3.jpg";
import Service4 from "../../../src/assets/services/service4.jpg";
import Service5 from "../../../src/assets/services/service5.jpg";
import Service6 from "../../../src/assets/services/service6.jpg";

const Services = () => {
  return (
    <div className="services">
      <Container>
        <h1>Our Services</h1>

        <Row className="g-4">
          <Service srcImage={Service1} title="Video Editing" />
          <Service srcImage={Service2} title="Thumbnail Design" />
          <Service srcImage={Service3} title="Motion Graphics" />
          <Service srcImage={Service4} title="Graphics Design" />
          <Service srcImage={Service5} title="Web Development" />
          <Service srcImage={Service6} title="Digital Marketing" />
        </Row>
      </Container>
    </div>
  );
};

export default Services;
