import React from "react";
import "./AboutUs.scss";

import About from "../../components/about/About";
import PageBanner from "../../components/pageBanner/PageBanner";

import BannerImg from "../../assets/banner/banner.jpg";
import { Col, Container, Row } from "react-bootstrap";

import Team from "../../components/teamMembers/Team";
import Sagor from "../../assets/team/sagor.jpg";
import Nasir from "../../assets/team/nasir.jpeg";
import Sohan from "../../assets/team/sohan.jpg";
import Hridoy from "../../assets/team/hridoy.jpg";
import Mahfuz from "../../assets/team/mahfuz.jpg";
import WhoWeImg from "../../assets/about/whatwe.jpg";

import AdBanner from "../../components/adBanner/AdBanner";

const AboutUs = () => {
  return (
    <div className="aboutUs">
      <PageBanner page_title="About" b_img={BannerImg} />

      <About />

      <div className="whatdo">
        <Container>
          <h1>What We Do</h1>
          <Row className="align-items-center">
            <Col lg={7}>
              <p>
                At FILM GARAGE, we are your all-encompassing digital solutions
                provider, offering a wide spectrum of creative and technical
                services to help you excel in the digital realm. Our team of
                experts is well-versed in the art of storytelling through video
                editing, ensuring your message shines in every frame. We infuse
                life and vibrancy into your content with our dynamic motion
                graphics, making your visuals engaging and interactive. Our
                designers craft captivating thumbnails and visuals, staying true
                to your brand's identity. From logos to banners, we create
                stunning graphics that help your brand stand out. We build more
                than just websites; we create digital experiences with our
                responsive web development services, ensuring seamless
                navigation and a visually appealing online presence. And to
                drive your business to new heights, we implement tailored
                digital marketing strategies, including SEO, social media
                campaigns, and email marketing. At FILM GARAGE, we're not just a
                service provider; we're your partners in digital success,
                dedicated to bringing your vision to life.
              </p>
            </Col>

            <Col lg={5}>
              <img src={WhoWeImg} alt="filmgarage" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </div>

      <div className="ourteam">
        <Container>
          <h1>Our Team</h1>

          <Row className="g-5 justify-content-center">
            <Team
              m_pic={Sagor}
              m_name="Md. Abdul kaium"
              m_service="Founder (Video Editor)"
            />

            <Team
              m_pic={Nasir}
              m_name="MD. Nasir Uddin"
              m_service="Graphics Designer"
            />
            <Team
              m_pic={Sohan}
              m_name="Sohan Sarker"
              m_service="Digital Marketer"
            />
          </Row>
          <Row className="g-5 justify-content-center">
            <Team
              m_pic={Mahfuz}
              m_name="Najmul Hossain Mahfuz"
              m_service="Business Development Manager"
            />

            <Team
              m_pic={Hridoy}
              m_name="Shawon Hossain Hridoy"
              m_service="Video Editor"
            />
          </Row>
        </Container>
      </div>

      <AdBanner />
    </div>
  );
};

export default AboutUs;
