import CategoryLayout from "@/components/Layouts/CategoryLayout";
import Layout1 from "@/components/Layouts/Layout1";
import CategoryCard from "@/components/category/CategoryCard";

const CategoryPage = ({ products }) => {
  return (
    <Layout1>
      <CategoryLayout>
        {products?.length > 0 &&
          products.map((product) => (
            <CategoryCard key={product.id} product={product} />
          ))}
      </CategoryLayout>
    </Layout1>
  );
};

export default CategoryPage;

// This function gets called at build time
export async function getStaticPaths() {
  const res = await fetch(`${process.env.BASE_URL}/products?limit=100`);
  const products = await res.json();

  const paths = products?.data?.map((product) => ({
    params: { category: product.category },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps(context) {
  const res = await fetch(
    `${process.env.BASE_URL}/products?category=${context?.params?.category}`
  );
  const products = await res.json();

  return {
    props: { products: products?.data },
    revalidate: 30,
  };
}
