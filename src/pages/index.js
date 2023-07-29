import Layout1 from "@/components/Layouts/Layout1";
import HomeSlider from "@/components/Home/HomeSlider";
import HomeCategory from "@/components/Home/HomeCategory";
import { Container } from "react-bootstrap";
import HomeProducts from "@/components/Home/HomeProducts";


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
  const res = await fetch(`${process.env.BASE_URL}/products?limit=8&page=1`);
  const products = await res.json();
  return {
    props: {
      products,
    },
    revalidate: 30,
  };
}
