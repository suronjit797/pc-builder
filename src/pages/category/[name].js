const CategoryPage = ({ products }) => {
  return <div> category {products?.length} </div>;
};

export default CategoryPage;

// This function gets called at build time
// export async function getStaticPaths() {
//   const res = await fetch("http://localhost:3000/api/v1/products");
//   const products = await res.json();

//   const paths = products?.data?.map((product) => ({
//     params: { name: product.category },
//   }));
//   return { paths, fallback: false };
// }

// export async function getStaticProps(context) {
//   const res = await fetch(
//     `http://localhost:3000/api/v1/products?name=${context?.params?.name}`
//   );
//   const products = await res.json();

//   return {
//     props: { products: products.data }, // will be passed to the page component as props
//   };
// }
