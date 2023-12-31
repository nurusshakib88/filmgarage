import React from "react";
import "./TestimonialPage.scss";
import AdBanner from "../../components/adBanner/AdBanner";

import PageBanner from "../../components/pageBanner/PageBanner";
import PageBannerImg from "../../assets/banner/banner.jpg";
import Testimonial from "../../components/testimonial/Testimonial";

const TestimonialPage = () => {
  return (
    <>
      <PageBanner page_title="Testimonials" b_img={PageBannerImg} />

      <Testimonial />

      <AdBanner />
    </>
  );
};

export default TestimonialPage;
