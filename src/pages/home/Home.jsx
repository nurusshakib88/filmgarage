import React from "react";
import "./Home.scss";
import Banner from "../../components/banner/Banner";
import About from "../../components/about/About";
import Services from "../../components/services/Services";
import Testimonial from "../../components/testimonial/Testimonial";
import Contact from "../../components/contact/Contact";
import AdBanner from "../../components/adBanner/AdBanner";
import FAQ from "../../components/faq/FAQ";
import Projects from "../../components/portfolio/Projects";

const Home = () => {
  return (
    <>
      <Banner />

      <div className="dual_tone">
        <About />
      </div>

      <Services />

      <div className="dual_tone">
        <Projects />
      </div>

      <Testimonial />

      <AdBanner />
      <FAQ />

      <div className="dual_tone">
        <Contact />
      </div>
    </>
  );
};

export default Home;
