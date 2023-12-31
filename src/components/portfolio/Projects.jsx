import React from "react";
import "./Projects.scss";
import { Col, Container, Row } from "react-bootstrap";
import Project from "./project/Project";

import project1 from "../../assets/portfolio/thumb-1.jpg";
import project2 from "../../assets/portfolio/thumb-2.jpg";
import project3 from "../../assets/portfolio/thumb-3.jpg";
import project4 from "../../assets/portfolio/thumb-4.jpg";
import project5 from "../../assets/portfolio/thumb-5.jpg";
import project6 from "../../assets/portfolio/thumb-6.jpg";
import project7 from "../../assets/portfolio/thumb-7.jpg";
import project8 from "../../assets/portfolio/thumb-8.jpg";

const Projects = () => {
  return (
    <div id="portfolio" className="portfolio">
      <Container>
        <h1>Our Projects</h1>
        <div className="categories">
          <ul className="cat">
            <li>
              <ol className="type">
                <li>
                  <a data-filter="*" className="active">
                    All
                  </a>
                </li>
                <li>
                  <a data-filter=".video-edit">Video Edit</a>
                </li>
                <li>
                  <a data-filter=".motion">Motion graphics</a>
                </li>
                <li>
                  <a data-filter=".thumbnail">Thumbnail Design</a>
                </li>

                <li>
                  <a data-filter=".graphics">Graphics Design</a>
                </li>
                <li>
                  <a data-filter=".web-dev">Web Development</a>
                </li>
              </ol>
            </li>
          </ul>

          <div className="clearfix"></div>
        </div>

        <Row className="g-3 portfolio-items">
          <Project
            projectImg={project1}
            title="Video Editing"
            group="video-edit"
          />

          <Project
            projectImg={project2}
            title="Web Development"
            group="web-dev"
          />
          <Project
            projectImg={project3}
            title="Thumbnail Design"
            group="thumbnail"
          />
          <Project
            projectImg={project4}
            title="Motion Graphics"
            group="motion"
          />
          <Project
            projectImg={project5}
            title="Video Editing"
            group="video-edit"
          />
          <Project
            projectImg={project6}
            title="Motion Graphics"
            group="motion"
          />
          <Project
            projectImg={project7}
            title="Web Development"
            group="web-dev"
          />
          <Project
            projectImg={project8}
            title="graphics design"
            group="graphics"
          />
        </Row>
      </Container>
    </div>
  );
};

export default Projects;
