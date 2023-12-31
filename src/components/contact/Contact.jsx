import React from "react";
import "./Contact.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import Form from "./form/Form";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { Col, Container, Row } from "react-bootstrap";

const Contact = () => {
  return (
    <div className="contact">
      <Container>
        <h1>Any Question? Feel Free to Contact</h1>

        <Row className="align-items-center">
          <Col lg={6}>
            <div className="contact_info">
              <h3>
                Ready to get started? We're here to assist with all your service
                needs!
              </h3>

              <a href="https://wa.me/+8801902564742" target="_blank">
                <FontAwesomeIcon className="icon" icon={faWhatsapp} />{" "}
                +8801902564742
              </a>
              <a href="mailto:contact@filmgaragebd.com">
                <FontAwesomeIcon className="icon" icon={faEnvelope} />
                contact@filmgaragebd.com
              </a>
            </div>
          </Col>

          <Col lg={6}>
            <div className="contact_form">
              <Form />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
