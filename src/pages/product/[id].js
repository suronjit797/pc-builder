import Layout1 from "@/components/Layouts/Layout1";
import { Tag } from "antd";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const ProductDetailsPage = ({ product }) => {
  return (
    <Layout1>
      <Container className="my-4">
        <Row className="g-4">
          <Col lg={4} md={6}>
            <Image
              alt="pc"
              src={product.image ? product.image : "/images/slider1.webp"}
              layout="responsive"
              width={250}
              height={300}
            />
          </Col>
          <Col lg={4} md={6}>
            <div>
              <b>Name:</b> <span> {product.name} </span>
            </div>
            <div>
              <b>Category:</b> <span> {product.category} </span>
            </div>
            <div>
              <b>Status: </b>
              <span> {product.status ? "In Stock" : "Out of stock"} </span>
            </div>
            <div>
              <b>Price:</b> <span> {product.price} </span>
            </div>
            <div>
              <b>Individual Rating</b>
              <span> {product.individualRating} of 5 </span>
            </div>
            <div>
              <b>Average Rating</b> <span> {product.averageRating} of 5 </span>
            </div>

            <div className="mt-3">
              <b>Description:</b> <span> {product.description} </span>
            </div>

            {product?.keyFeatures?.length > 0 && (
              <div>
                {/* <b>Features: </b> */}
                <span>
                  {product?.keyFeatures?.map((item, key) => (
                    <Tag key={key} color="#87d068">
                      {item}
                    </Tag>
                  ))}
                </span>
              </div>
            )}

            {/* <div>
              <b>Reviews:</b> <span> {product.name} </span>
            </div> */}
          </Col>
        </Row>
      </Container>
    </Layout1>
  );
};

export default ProductDetailsPage;

export async function getStaticPaths() {
  const res = await fetch(`${process.env.BASE_URL}/products?limit=10000`);
  const { data } = await res.json();
  const products = data;

  const paths =
    Array.isArray(products) && products.length > 0
      ? products?.map((product) => ({
          params: { id: product.id },
        }))
      : [];

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const res = await fetch(`${process.env.BASE_URL}/products/${params.id}`);
  const { data } = await res.json();

  return {
    props: {
      product: data,
    },
  };
}
