import React from "react";
import "./PageBanner.scss";
import { NavLink } from "react-router-dom";
import { Container } from "react-bootstrap";

const PageBanner = ({ b_img, page_title }) => {
  return (
    <div className="pageBanner">
      <img src={b_img} className="img-fluid" alt="filmgarage" />
      <Container>
        <div className="page_title">
          <h1>{page_title}</h1>
          <span>
            <NavLink to="/">Home</NavLink> / {page_title}
          </span>
        </div>
      </Container>
    </div>
  );
};

export default PageBanner;
