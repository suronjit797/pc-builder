import Layout1 from "@/components/Layouts/Layout1";
import ProductCard from "@/components/Shared/ProductCard";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const ProductPage = ({ products }) => {
  return (
    <Layout1>
      <Container className="my-4">
        <Row className="g-4">
          {products.map((product) => (
            <Col key={product.id} lg={3} md={4} sm={6}>
              <ProductCard product={product} />
            </Col>
          ))}
        </Row>
      </Container>
    </Layout1>
  );
};

export default ProductPage;

export async function getStaticProps() {
  const res = await fetch(`${process.env.BASE_URL}/products?limit=1000`);
  const { data } = await res.json();

  return {
    props: {
      products: data,
    },
    revalidate: 30,
  };
}
