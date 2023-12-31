import React from "react";
import "./Service.scss";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Service = ({ srcImage, title, goTo }) => {
  return (
    <Col md={4} sm={6} xs={12}>
      <div className="service">
        <Link to={goTo}>
          <img src={srcImage} alt="filmgarage" />
          <h2>{title}</h2>
        </Link>
      </div>
    </Col>
  );
};

export default Service;
