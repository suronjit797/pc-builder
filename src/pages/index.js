import Head from "next/head";
import Image from "next/image";
import { Josefin_Sans } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Layout1 from "@/components/Layouts/Layout1";

const josefin = Josefin_Sans({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout1>
        Home
    </Layout1>
  );
}
