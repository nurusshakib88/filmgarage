import React, { useState } from "react";
import "./ServiceStyle.scss";
import AdBanner from "../../components/adBanner/AdBanner";
import PageBanner from "../../components/pageBanner/PageBanner";
import PageBannerImg from "../../assets/banner/banner.jpg";
import { Col, Container, Row } from "react-bootstrap";

const DigitalMarketing = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const openModal = (photo) => {
    setSelectedPhoto(photo);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
    setModalOpen(false);
  };

  return (
    <div className="video">
      <PageBanner b_img={PageBannerImg} page_title="Digital Marketing" />

      <div className="about_page">
        <Container>
          <Row className="align-items-center">
            <Col md={7}>
              <h1>About Digital Marketing</h1>
              <p>
                At FILM GARAGE, our Digital Marketing service is your strategic
                partner in navigating the dynamic digital landscape. We
                understand that a strong online presence is vital for success,
                and our team of digital marketing experts is dedicated to
                crafting tailored strategies that drive results. From increasing
                your website's visibility through search engine optimization
                (SEO) to creating engaging social media campaigns, we offer a
                comprehensive suite of services. Our approach integrates
                data-driven insights with creative marketing techniques to reach
                your target audience effectively. Whether you're looking to
                enhance brand awareness, drive traffic, or boost conversions,
                our digital marketing strategies are designed to align with your
                business objectives. Let FILM GARAGE be the catalyst for your
                digital success, ensuring your message resonates in the right
                channels and with the right audience.
              </p>
            </Col>
            <Col md={5}>
              <img src={PageBannerImg} className="img-fluid" alt="filmgarage" />
            </Col>
          </Row>
        </Container>
      </div>

      <div className="process">
        <Container>
          <h2>Our Digital Marketing process</h2>
          <p>
            <span>Strategy and Goal Setting</span> Our Digital Marketing process
            begins with a comprehensive understanding of your business, target
            audience, and objectives. We collaborate with you to define
            specific, measurable, achievable, relevant, and time-bound (SMART)
            goals that align with your overall business strategy.
            <span>Market Research and Audience Analysis</span> In-depth market
            research and audience analysis guide our strategy. We identify key
            demographics, trends, and competitor landscapes to inform our
            approach and ensure your digital marketing efforts stand out in the
            competitive landscape.
            <span>Search Engine Optimization (SEO)</span> We optimize your
            online presence through SEO strategies, ensuring that your website
            ranks prominently in search engine results. This involves keyword
            research, on-page optimization, content creation, and technical
            enhancements to enhance visibility and organic traffic.
            <span>Content Development</span> Compelling content is at the core
            of successful digital marketing. We create engaging and relevant
            content, including blog posts, articles, videos, and social media
            posts, tailored to resonate with your target audience and reinforce
            your brand message.
            <span>Social Media Marketing</span> Leveraging the power of social
            media, we develop and execute targeted campaigns across platforms
            such as Facebook, Instagram, Twitter, and LinkedIn. Our strategies
            encompass content creation, audience engagement, and analytics to
            maximize reach and interaction.
            <span>Email Marketing</span> We design and implement effective email
            marketing campaigns to nurture leads, retain customers, and drive
            conversions. Our approach includes personalized content, automation,
            and analytics to optimize campaign performance.
            <span>Paid Advertising (PPC)</span> For instant visibility, we
            employ Pay-Per-Click (PPC) advertising strategies. This involves
            creating and optimizing ads on platforms like Google Ads and social
            media, ensuring your message reaches the right audience at the right
            time.
            <span>Analytics and Performance Measurement</span> Data-driven
            decision-making is paramount in our process. We continuously monitor
            and analyze key performance indicators (KPIs) to assess the success
            of our strategies. Regular reports and insights allow for ongoing
            refinement and optimization.
            <span>Conversion Optimization</span> We focus on maximizing the
            conversion rate of visitors into customers. Through A/B testing,
            user experience enhancements, and targeted strategies, we
            continually optimize your digital assets to drive desired actions.
            <span>Continuous Improvement</span>Digital marketing is an
            ever-evolving landscape. We stay ahead of trends, adapt to algorithm
            changes, and implement industry best practices to ensure your
            digital marketing strategies remain effective and aligned with your
            business goals.
          </p>

          <p>
            With a holistic and data-driven approach, our Digital Marketing
            process is designed to not only boost your online presence but also
            deliver measurable results. Let [Your Company Name] be your partner
            in navigating the complexities of the digital landscape, driving
            meaningful engagement and achieving your business objectives.
          </p>
        </Container>
      </div>

      <AdBanner />
    </div>
  );
};

export default DigitalMarketing;
