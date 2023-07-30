import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SideNav from "../Shared/SideNav";

const CategoryLayout = ({ children }) => {
  return (
    <Container fluid>
      <Row>
        <Col lg={2} md={4} className='py-3'>
          <SideNav />
        </Col>
        <Col lg={10} md={8}>
          {children}
        </Col>
      </Row>
    </Container>
  );
};

export default CategoryLayout;
