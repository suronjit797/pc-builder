import Head from "next/head";
import NavbarCustom from "../Shared/Navbar";
import Footer from "../Shared/Footer";

const Layout1 = ({ children, title }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="suronjit797" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <NavbarCustom />
      </header>
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout1;
