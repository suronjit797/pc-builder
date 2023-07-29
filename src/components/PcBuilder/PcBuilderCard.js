import { Button } from "antd";
import Link from "next/link";
import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import Image from "next/image";

const PcBuilderCard = ({ category }) => {
  return (
    <div className="my-3">
      <Card
        className=" px-4 py-2"
        style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px -3px 8px" }}
      >
        <div className="d-flex flex-row align-items-center justify-content-between">
          <div> {category.name}</div>
          <div>
            <Link href={category.link} className="d-block w-100">
              <Button type="primary"> Choose </Button>
            </Link>
          </div>
        </div>
      </Card>
      {Object.keys(category?.item).length > 0 && (
        <Card
          className=" px-4 py-2 pt-4 mx-5 position-relative"
          style={{
            marginTop: "-15px",
            zIndex: "-1",
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          }}
        >
          <Row className=" align-items-center">
            <Col md={4} xs={12} className="pe-4 py-3">
              <Image
                src={category?.item?.image}
                height={100}
                width={100}
                layout="responsive"
                style={{ maxWidth: "100px" }}
                alt={category?.item?.name}
              />
            </Col>
            <Col
              md={4}
              xs={12}
              className="px-4 py-3 text-capitalize pc-builder-card"
            >
              <div className="fw-bold text-primary">{category?.item?.name}</div>
              <div> {category?.item?.price}</div>
              <div> {category?.item?.category}</div>
              <div>
                {category?.item?.status > 0 ? (
                  <span className="text-success"> In Stock </span>
                ) : (
                  <span className="text-danger"> Out of stock</span>
                )}
              </div>
              <div> {category?.item?.individualRating} of 5</div>
            </Col>
            <Col md={4} xs={12} className="px-4 py-3 ">
              <div className="text-capitalize fw-bold fs-5">
                $ {category?.item?.price}
              </div>
            </Col>
          </Row>
        </Card>
      )}
    </div>
  );
};

export default PcBuilderCard;
