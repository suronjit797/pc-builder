import { Josefin_Sans } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Layout1 from "@/components/Layouts/Layout1";
import HomeSlider from "@/components/Home/HomeSlider";
import HomeCategory from "@/components/Home/HomeCategory";
import { Container } from "react-bootstrap";
import HomeProducts from "@/components/Home/HomeProducts";
import axios from "axios";

const josefin = Josefin_Sans({ subsets: ["latin"] });

export default function Home({ products }) {
  return (
    <Layout1>
      <HomeSlider />
      <Container>
        <HomeCategory />
        <hr />
        <HomeProducts products={products.data} />
      </Container>
    </Layout1>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    "http://localhost:3000/api/v1/products?limit=6&page=1"
  );
  const products = await res.json();
  return {
    props: {
      products,
    },
  };
}
