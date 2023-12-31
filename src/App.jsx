import React, { useEffect, useState } from "react";
import "./App.scss";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./pages/home/Home";
import AboutUs from "./pages/about/AboutUs";
import Ourservices from "./pages/ourservices/Ourservices";
import VideoEdit from "./pages/servicePages/VideoEdit";
import WebDev from "./pages/servicePages/WebDev";
import GraphicsDesign from "./pages/servicePages/GraphicsDesign";
import OurProjects from "./pages/ourprojects/OurProjects";
import ContactUs from "./pages/contactUs/ContactUs";
import TestimonialPage from "./pages/testimonialPage/TestimonialPage";
import PrivacyPolicy from "./pages/privacyPolicy/PrivacyPolicy";
import Refund from "./pages/refund/Refund";
import TermsOfService from "./pages/termsOfService/TermsOfService";
import Error from "./pages/error/Error";
import ThumbnailDesign from "./pages/servicePages/ThumbnailDesign";
import MotionGraphics from "./pages/servicePages/MotionGraphics";
import DigitalMarketing from "./pages/servicePages/DigitalMarketing";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { Container } from "react-bootstrap";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {
  const initiallightMode = localStorage.getItem("lightMode") === "true";
  const [lightMode, setlightMode] = useState(initiallightMode);

  const togglelightMode = () => {
    const newlightMode = !lightMode;
    setlightMode(newlightMode);
    localStorage.setItem("lightMode", newlightMode);
  };

  useEffect(() => {
    if (lightMode) {
      document.documentElement.classList.add("light");
    } else {
      document.documentElement.classList.remove("light");
    }
  }, [lightMode]);
  return (
    <div className={`app ${lightMode ? "light" : ""}`}>
      <Container className="mode_toggler">
        <button className="theme" onClick={togglelightMode}>
          {lightMode ? (
            <FontAwesomeIcon icon={faMoon} />
          ) : (
            <FontAwesomeIcon icon={faSun} />
          )}
        </button>
      </Container>

      <BrowserRouter>
        <ScrollToTop />
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Ourservices />} />
          <Route path="/video-edit" element={<VideoEdit />} />
          <Route path="/motion-graphics" element={<MotionGraphics />} />
          <Route path="/thumbnail" element={<ThumbnailDesign />} />
          <Route path="/graphics-design" element={<GraphicsDesign />} />
          <Route path="/web-dev" element={<WebDev />} />
          <Route path="/digital" element={<DigitalMarketing />} />
          <Route path="/projects" element={<OurProjects />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/testimonial" element={<TestimonialPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/refund" element={<Refund />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="*" element={<Error />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
