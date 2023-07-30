import CategoryLayout from "@/components/Layouts/CategoryLayout";
import Layout1 from "@/components/Layouts/Layout1";
import CategoryCard from "@/components/category/CategoryCard";
import { base_url_api } from "@/constant/constant";
import { Button } from "antd";
import { useRouter } from "next/router";
import { Container } from "react-bootstrap";

const CategoryPage = ({ products }) => {
  const router = useRouter();
  return (
    <Layout1>
      <Container>
        {products?.length > 0 ? (
          products.map((product) => (
            <CategoryCard key={product.id} product={product} />
          ))
        ) : (
          <div className=" my-3">
            <p className="text-danger"> No data found </p>
            <Button type="primary" onClick={() => router.back()}>
              {" "}
              Go Back{" "}
            </Button>
          </div>
        )}
      </Container>
    </Layout1>
  );
};

export default CategoryPage;

// This gets called on every request
export async function getServerSideProps({ params }) {
  // Fetch data from external API
  const res = await fetch(
    `${base_url_api}/products?category=${params?.category}`
  );
  const { data } = await res.json();
  // console.log(data);

  // Pass data to the page via props
  return { props: { products: data } };
}
