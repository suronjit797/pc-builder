import CategoryLayout from "@/components/Layouts/CategoryLayout";
import Layout1 from "@/components/Layouts/Layout1";
import { Table } from "antd";
import axios from "axios";

const columns = [
  {
    title: "No",
    render: (text, rec, ind) => <a>{ind + 1}</a>,
    dataIndex: "name",
  },
  {
    title: "Name",
    render: (text) => <a>{text}</a>,
    dataIndex: "name",
  },
  {
    title: "Category",
    render: (text) => <a>{text}</a>,
    dataIndex: "category",
  },
  {
    title: "Price",
    render: (text) => <a>{text}</a>,
    dataIndex: "price",
  },
];

const CategoryPage = ({ products }) => {
  return (
    <Layout1>
      <CategoryLayout>
        {products?.data?.length > 0 && (
          <Table
            dataSource={products.data}
            columns={columns}
            pagination={false}
            className="my-3 text-capitalize"
          />
        )}
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
    props: { products },
    revalidate: 30,
  };
}
