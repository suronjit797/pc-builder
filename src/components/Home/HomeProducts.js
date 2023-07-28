import { categoryList } from "@/_server/constant";
import React from "react";
import styles from "@/styles/Home.module.css";
import { Col, Row } from "react-bootstrap";
import Image from "next/image";
import { Card } from "antd";
import Link from "next/link";
const { Meta } = Card;

const HomeProducts = ({ products }) => {
  return (
    <div className="mt-4 mb-5">
      <div className="heading">
        <h4 className="title"> Products </h4>
        <p> Check & Get Your Desired Product! </p>
      </div>

      <Row className="g-3">
        {products.map((product, ind) => (
          <Col lg={3} md={4} sm={6} key={ind}>
            <Link
              href={`/product/${product._id}`}
              style={{ textDecoration: "none" }}
            >
              <Card
                className={styles.homeCard}
                hoverable
                cover={
                  <Image
                    alt="pc"
                    src="/images/slider1.webp"
                    layout="responsive"
                    width={250}
                    height={300}
                  />
                }
              >
                <Meta
                  className="text-capitalize mb-1"
                  title={
                    <span className="fw-bold fs-5"> {product?.name} </span>
                  }
                />
                <div className="text-capitalize">
                  <p className="mb-1">
                    <b>Price:</b> {product?.price}
                  </p>
                  <p className="mb-1">
                    <b>Category:</b> {product?.category}
                  </p>
                  <p className="mb-1">
                    <b>Status:</b>
                    {product?.quantity > 0 ? (
                      <span className="text-success"> In Stock </span>
                    ) : (
                      <span className="text-danger"> Out of Stock </span>
                    )}
                  </p>
                </div>
                <p className="mb-1">
                  <b>Rating:</b> {product?.individualRating || 0} of 5
                </p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default HomeProducts;
