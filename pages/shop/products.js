import Head from "next/head";
import { Container, Sidebar, Products } from "../../components";
import url from "../../strapi_url/url";

import productsMock from "../../products.json";

const products = ({ products }) => {
  console.log(products[0]);

  return (
    <>
      <Head>
        <title>Malis.</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Container>
          {/* Grid */}
          <div className="grid grid-cols-[1fr] sm:grid-cols-[240px_1fr] ">
            <Sidebar />
            <Products products={products} />
          </div>
        </Container>
      </main>
    </>
  );
};

export default products;

export async function getStaticProps() {
  try {
    // const res = await fetch(`${url}/products?populate=*`);
    // const { data } = await res.json();

    const { data } = productsMock;

    // Clean-up response
    const products = data.map(({ id, attributes }) => ({
      id,
      product_description: attributes.product_description,
      product_in_stock: attributes.product_in_stock,
      product_name: attributes.product_name,
      product_price: attributes.product_price.toFixed(2),
      product_img: attributes.product_img.data.map((img) => ({
        name: img.attributes.name,
        url: img.attributes.url,
      })),
      categories: attributes.categories.data.map((category) => ({
        id: category.id,
        name: category.attributes.name,
      })),
    }));

    return {
      props: { products },
    };
  } catch (e) {
    console.warn(e.message);

    return { props: {} };
  }
}
