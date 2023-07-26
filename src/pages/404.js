import React from "react";
import styles from "@/styles/NotFound.module.css";
import { Bungee_Spice } from "next/font/google";
import { useRouter } from "next/router";

const bungee = Bungee_Spice({ subsets: ["latin"], weight: ["400"] });

const NotFoundPage = () => {
  const router = useRouter();
  return (
    <section className={styles.container}>
      <div>
        <h1 className={`${styles.header} ${bungee.className}`}>404</h1>
        <h4 className={styles.title}> Not found </h4>
        <div>
          <button onClick={() => router.back()}>Go Back</button>
          <button onClick={() => router.push("/")}>Go to home</button>
        </div>
      </div>
    </section>
  );
};

export default NotFoundPage;
