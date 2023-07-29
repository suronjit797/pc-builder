import { categoryList } from "@/_server/constant";
import Link from "next/link";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="mt-auto bg_primary pt-5 pb-4 text-light">
      <Container>
        <Row className="g-4">
          <Col lg={3} md={6}>
            <h1> Logo </h1>
          </Col>

          <Col lg={5} md={6}>
            <h4> About </h4>
            <div>
              Welcome to our computer website! We are passionate about
              technology and offer the latest hardware, software, and
              accessories. Our expert team provides valuable insights, reviews,
              and tips to enhance your computing experience. Whether you&apos;re
              a beginner or tech enthusiast, we are here to help you stay
              informed and empowered in the digital world.
            </div>
          </Col>

          <Col lg={4} md={6}>
            <h4> Categories </h4>
            <ul className="">
              {categoryList.slice(0, 6).map((category, index) => (
                <li key={index}>
                  <Link
                    href={category?.link}
                    style={{ textDecoration: "none" }}
                    className="text-white text-decoration-none"
                  >
                    {category?.name}
                  </Link>
                </li>
              ))}
            </ul>
          </Col>
        </Row>
      </Container>
      <hr />
      <p className="text-center mb-0">
        © {new Date().getFullYear()} suronjit797 | All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
