import React from "react";

import "./OurProjects.scss";

import AdBanner from "../../components/adBanner/AdBanner";

import PageBanner from "../../components/pageBanner/PageBanner";
import PageBannerImg from "../../assets/banner/banner.jpg";
import Projects from "../../components/portfolio/Projects";

const OurProjects = () => {
  return (
    <>
      <PageBanner page_title="Projects" b_img={PageBannerImg} />

      <Projects />

      <AdBanner />
    </>
  );
};

export default OurProjects;
