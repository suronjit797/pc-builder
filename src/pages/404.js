import React from "react";
import styles from "@/styles/NotFound.module.css";
import { useRouter } from "next/router";
import { Button } from "antd";

const NotFoundPage = () => {
  const router = useRouter();
  return (
    <section className={styles.container}>
      <div>
        <h1 className={`${styles.header} `}>404</h1>
        <h4 className={styles.title}> Not found </h4>
        <div className="mt-3">
          <Button
            type="primary"
            ghost
            shape="round"
            onClick={() => router.back()} className="mx-1"
          >
            Go Back
          </Button>
          <Button type="primary" className="mx-1" shape="round" onClick={() => router.push("/")}>
            Go to home
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NotFoundPage;
