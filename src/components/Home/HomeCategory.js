import { categoryList } from "@/_server/constant";
import React from "react";
import styles from "@/styles/Home.module.css";
import { Col, Row } from "react-bootstrap";
import Link from "next/link";

const HomeCategory = () => {
  return (
    <div className="my-5">
      <div className="heading">
        <h4 className="title"> Featured Category </h4>
        <p> Get Your Desired Product from Featured Category! </p>
      </div>

      <Row className="g-2 align-items-stretch">
        {categoryList.slice(0, 6).map((category, ind) => (
          <Col lg={2} md={3} sm={4} xs={6} key={ind}>
            <Link
              href={`/${category?.link}`}
              style={{ textDecoration: "none" }}
              className="text-dark d-block h-100"
            >
              <div className={styles.categoryCard}>
                <div className="fs-2"> {category?.icon} </div>
                <div className="mt-2 fw-bold"> {category?.name} </div>
              </div>
            </Link>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default HomeCategory;
