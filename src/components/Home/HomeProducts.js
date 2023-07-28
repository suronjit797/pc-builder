import { categoryList } from "@/_server/constant";
import React from "react";
import { Col, Row } from "react-bootstrap";
import ProductCard from "../Shared/ProductCard";

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
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default HomeProducts;
