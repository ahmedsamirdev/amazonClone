import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";
import ProductFeed from "../components/ProductFeed";
import { useState, useEffect } from "react";

export default function Home({ products }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  return (
    <>
       {mounted && ( 
        <div className="bg-gray-100">
          <Head>
            <title>Amazon Clone</title>
          </Head>
          <Header />
          <main className="mx-auto max-w-screen-2xl">
            {/* Banner */}
            <Banner />
            {/* Products */}
            <ProductFeed products={products} />
          </main>
        </div>
      )} 
    </>
  );
}

export async function getServerSideProps(context) {
  const products = await fetch("https://fakestoreapi.com/products").then(
    (res) => res.json()
  );
  return { props: { products } };
}
