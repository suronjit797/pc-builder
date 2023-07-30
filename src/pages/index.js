import Layout1 from "@/components/Layouts/Layout1";
import HomeSlider from "@/components/Home/HomeSlider";
import HomeCategory from "@/components/Home/HomeCategory";
import { Container } from "react-bootstrap";
import HomeProducts from "@/components/Home/HomeProducts";
import { base_url_api } from "@/constant/constant";

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
  const numRes = await fetch(`${base_url_api}/products?limit=1&page=1`);
  const { total } = await numRes.json();

  const totalPage = Math.floor(total / 8);

  let number = Math.ceil(Math.random() * totalPage);

  const res = await fetch(`${base_url_api}/products?limit=8&page=${number}`);
  const products = await res.json();
  console.log(products.data?.length);
  return {
    props: {
      products,
    },
    revalidate: 30,
  };
}
