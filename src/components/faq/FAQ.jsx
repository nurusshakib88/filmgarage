import React from "react";
import "./FAQ.scss";
import { Accordion, Container } from "react-bootstrap";

const FAQ = () => {
  return (
    <div className="faq">
      <Container>
        <h1>Frequently Asked Questions</h1>

        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              What is the process for collaborating on a project?
            </Accordion.Header>
            <Accordion.Body>
              We will start with a consultation to understand your goals and
              requirements. From there, we'll develop a plan and timeline for
              your project.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              What sets FILM GARAGE Team apart from other service providers in
              this industry?
            </Accordion.Header>
            <Accordion.Body>
              FILM GARAGE Team prides itself on a combination of creativity,
              expertise, and a commitment to delivering outstanding results that
              elevate your brand.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              How can I get a quote for the services I need?
            </Accordion.Header>
            <Accordion.Body>
              You can request a quote by filling out the contact form on our
              website or by contacting us directly. We will provide you with a
              customized quote based on your project requirements.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </div>
  );
};

export default FAQ;
