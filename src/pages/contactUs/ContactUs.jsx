import React from "react";
import "./ContactUs.scss";

import AdBanner from "../../components/adBanner/AdBanner";

import PageBanner from "../../components/pageBanner/PageBanner";
import PageBannerImg from "../../assets/banner/banner.jpg";
import Contact from "../../components/contact/Contact";

const ContactUs = () => {
  return (
    <div className="contactUs">
      <PageBanner page_title="Contact" b_img={PageBannerImg} />

      <Contact />

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233667.49930775515!2d90.2548766539323!3d23.781067235925395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1699529812939!5m2!1sen!2sbd"
        allowfullscreen="true"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default ContactUs;
