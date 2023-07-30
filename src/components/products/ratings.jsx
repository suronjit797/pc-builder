import { base_url_api } from "@/constant/constant";
import { UserOutlined } from "@ant-design/icons";
import { Button, Form, Input, Rate } from "antd";
import axios from "axios";
import React, { useState } from "react";
import { Card, Col, Row } from "react-bootstrap";

const Ratings = ({ product }) => {
  const [form] = Form.useForm();
  const onFinish = async (values) => {
    try {
      await axios.post(
        `${base_url_api}/products/comment/${product.id}`,
        values
      );
      form.resetFields();
    } catch (error) {
      console.lgo(error);
    }
  };
  return (
    <div className="mt-5">
      <Row className="g-4">
        <Col md={4}>
          <Form
            form={form}
            name="comment"
            onFinish={onFinish}
            autoComplete="off"
          >
            <h4> Review This Products </h4>
            <div className="">
              <div>
                <Form.Item
                  label="Name"
                  name="name"
                  rules={[
                    { required: true, message: "Please input your name!" },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label="Comment"
                  name="comment"
                  rules={[
                    { required: true, message: "Please input your comment!" },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="Rating"
                  name="rating"
                  rules={[
                    { required: true, message: "Please input your rating!" },
                  ]}
                >
                  <Rate
                    className="ms-2"
                    required
                    // onChange={() => setRating(setRating)}
                  />
                </Form.Item>
              </div>
              <Button type="primary" htmlType="submit">
                Send
              </Button>
            </div>
          </Form>
        </Col>
        <Col md={8}>
          {product?.review?.length > 0 &&
            product?.review
              ?.reverse()
              ?.slice(0, 10)
              ?.map((item, ind) => (
                <Card key={ind} className="px-4 py-3 my-3">
                  <div className="d-flex align-items-center text-capitalize gap-3">
                    <span
                      className="d-inline-flex align-items-center justify-content-center bg-secondary text-white"
                      style={{
                        height: "30px",
                        width: "30px",
                        borderRadius: "50%",
                      }}
                    >
                      <UserOutlined />
                    </span>
                    <b> {item.name} </b>
                  </div>
                  <div>
                    <Rate value={item.rating} disabled allowHalf={true} />
                  </div>
                  Comment: {item.comment}
                </Card>
              ))}
        </Col>
      </Row>
    </div>
  );
};

export default Ratings;
