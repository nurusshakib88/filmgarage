import React from "react";
import "./Header.scss";
import { Logo } from "../logo/Logo";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <Navbar expand="lg" className="header navbar-dark fixed-top">
      <Container>
        <Link to="/" className="navbar-brand logo">
          <Logo />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto menu">
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
            <NavLink className="nav-link" to="/about">
              About
            </NavLink>

            <NavDropdown title="Services" id="basic-nav-dropdown">
              <NavLink className="dropdown-item" to="/video-edit">
                Video Editing
              </NavLink>

              <NavLink className="dropdown-item" to="/motion-graphics">
                Motion Graphics
              </NavLink>

              <NavLink className="dropdown-item" to="/thumbnail">
                Thumbnail Design
              </NavLink>

              <NavLink className="dropdown-item" to="/graphics-design">
                Graphics Design
              </NavLink>

              <NavLink className="dropdown-item" to="/web-dev">
                Web Development
              </NavLink>

              <NavLink className="dropdown-item" to="/digital">
                Digital Marketing
              </NavLink>
            </NavDropdown>

            <NavLink className="nav-link" to="/projects">
              Projects
            </NavLink>
            <NavLink className="nav-link" to="/testimonial">
              Testimonial
            </NavLink>
            <NavLink className="nav-link last_nav_link" to="/contact">
              Contact
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
