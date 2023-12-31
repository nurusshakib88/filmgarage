import React from "react";
import "./Footer.scss";
import { Logo } from "../logo/Logo";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { Col, Container, Row } from "react-bootstrap";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <Link to="/" className="logo">
          <Logo />
        </Link>

        <div className="contact_links">
          <a href="">
            <FontAwesomeIcon icon={faEnvelope} /> Email:
            contact@filmgaragebd.com
          </a>
          <a href="">
            <FontAwesomeIcon icon={faPhone} /> Phone: +8801902564742
          </a>
          <a href="">
            <FontAwesomeIcon icon={faLocationDot} /> We are virtual agency
          </a>
        </div>

        <p className="f_text">
          We design innovative branding solutions for business, professional and
          workstation needs. Our experienced creative team has four years of
          expertise in delivering customised solutions that stand out from the
          crowd. We create futuristic brand identity for your bussiness,
          profession & workstation purpose.
        </p>

        <div className="social">
          <a href="#https://www.facebook.com/FilmGarageBD" target="_blank">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="https://www.instagram.com/filmgaragebd" target="_blank">
            <FontAwesomeIcon icon={faInstagram} />
          </a>

          <a href="#" target="_blank">
            <FontAwesomeIcon icon={faXTwitter} />
          </a>
          <a href="#" target="_blank">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
          <a href="#" target="_blank">
            <FontAwesomeIcon icon={faYoutube} />
          </a>
        </div>
      </Container>

      <Container>
        <div className="copyright">
          <Row className="justify-content-between ">
            <Col sm={6} xs={12}>
              <p className="c_text">
                © 2023 <Link to="/">FILM GARAGE</Link> All Rights Reserved.
              </p>
            </Col>

            <Col sm={6} xs={12}>
              <div className="quick_pages">
                <NavLink className="quick_links" to="/refund">
                  Refund Policy
                </NavLink>
                <NavLink className="quick_links" to="/privacy-policy">
                  Privacy Policy
                </NavLink>
                <NavLink className="quick_links" to="/terms-of-service">
                  Terms & Conditions
                </NavLink>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
