/* eslint-disable no-console */
import React from "react";
import styles from "@/styles/Auth.module.css";
import { Button, Card, Form, Input } from "antd";
import Link from "next/link";
import { GoogleOutlined, GithubOutlined } from "@ant-design/icons";

const onFinish = (values) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const RegisterPage = () => {
  return (
    <section className={styles.main}>
      <div className={styles.container}>
        <Card className={styles.card}>
          <div className={styles.switch}>
            <Link href="/login" className={styles.heading}>
              Login
            </Link>
            <h2 className={`${styles.heading} ${styles.active}`}> Register </h2>
          </div>
          <Form
            name="register"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            layout="vertical"
            scrollToFirstError
          >
            <Form.Item
              label="Name"
              name="name"
              rules={[
                {
                  required: true,
                  message: "Please input your name!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  type: "email",
                  message: "The input is not valid E-mail!",
                },
                {
                  required: true,
                  message: "Please input your E-mail!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
                {
                  min: 6,
                  message: "Minimum length 6",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              label="Confirm Password"
              dependencies={["password"]}
              name="confirmPassword"
              rules={[
                {
                  required: true,
                  message: "Please input your confirm password!",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error("The new password does not match!")
                    );
                  },
                }),
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              className="text-center"
              style={{ marginBottom: "10px", marginTop: "5px" }}
            >
              <Button
                type="primary"
                htmlType="submit"
                shape="round"
                style={{ width: "60%", marginBottom: "10px" }}
              >
                Register
              </Button>
            </Form.Item>
          </Form>

          <hr />
          <div className={styles.social}>
            <Button type="primary" shape="circle" icon={<GoogleOutlined />} />
            <Button type="primary" shape="circle" icon={<GithubOutlined />} />
          </div>
        </Card>
      </div>
    </section>
  );
};

export default RegisterPage;
