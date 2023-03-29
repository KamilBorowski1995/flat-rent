import Head from "next/head";
import Header from "../Header";

const Layout = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || "FlatRent"}</title>
        <meta name="description" content="FlatRent App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className="max-w-screen-2xl mx-auto mt-20 mb-10 ">{children}</main>
    </>
  );
};

export default Layout;
