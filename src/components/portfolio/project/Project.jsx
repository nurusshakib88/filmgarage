import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Project.scss";
import { Col } from "react-bootstrap";

const Project = ({ group, title, projectImg }) => {
  return (
    <Col lg={3} md={4} sm={6} xs={12} className={group}>
      <div className="portfolio-item">
        <img src={projectImg} className="img-fluid" alt="Project Title" />

        <div className="desc">
          <h3>{title}</h3>

          <div className="goto-project">
            <span>
              Project-details{" "}
              <FontAwesomeIcon className="icon" icon={faArrowRight} />
            </span>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default Project;
