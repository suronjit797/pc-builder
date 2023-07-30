/* eslint-disable no-console */
import React from "react";
import styles from "@/styles/Auth.module.css";
import { Button, Card, Form, Input, Spin } from "antd";
import Link from "next/link";
import {
  GoogleOutlined,
  GithubOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { base_url_app } from "@/constant/constant";

const onFinish = (values) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const LoginPage = () => {
  const { status } = useSession();
  const router = useRouter();

  if (status === "authenticated") {
    router.push("/");
  }

  return (
    <Spin spinning={status === "loading"}>
      <section className={styles.main}>
        <div className={styles.container}>
          <Card className={styles.card}>
            <div className="text-center mb-4">
              <Link href="/">
                <Button type="primary" shape="circle" icon={<HomeOutlined />} />
              </Link>
            </div>
            <div className={styles.switch}>
              <h2 className={`${styles.heading} ${styles.active}`}> Login </h2>
              <Link href="/register" className={styles.heading}>
                Register
              </Link>
            </div>
            <Form
              disabled
              name="login"
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
              layout="vertical"
              scrollToFirstError
            >
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
                ]}
              >
                <Input.Password />
              </Form.Item>
              <Link href="/login" style={{ marginBottom: "15px" }}>
                Forgot Password?
              </Link>

              <Form.Item
                className="text-center"
                style={{ marginBottom: "20px" }}
              >
                <Button
                  type="primary"
                  htmlType="submit"
                  shape="round"
                  style={{ width: "60%" }}
                >
                  Login
                </Button>
              </Form.Item>
            </Form>

            <hr />
            <div className={styles.social}>
              <Button
                type="primary"
                shape="circle"
                onClick={() =>
                  signIn("google", {
                    callbackUrl: base_url_app,
                  })
                }
                icon={<GoogleOutlined />}
              />
              <Button
                type="primary"
                shape="circle"
                onClick={() =>
                  signIn("github", {
                    callbackUrl: base_url_app,
                  })
                }
                icon={<GithubOutlined />}
              />
            </div>
          </Card>
        </div>
      </section>
    </Spin>
  );
};

export default LoginPage;
