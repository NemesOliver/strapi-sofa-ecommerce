import Head from "next/head";
import { Container, Product, ProductDescription } from "../../../components";
import { strapi } from "../../../libs";

const ProductPage = ({ product }) => {
  return (
    <>
      <Head>
        <title>Malis.</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="h-[calc(100vh-60px)] grid place-items-center">
        <Container>
          <div className="grid lg:grid-cols-2 gap-4">
            <Product product={product} />
            <ProductDescription product={product} />
          </div>
        </Container>
      </main>
    </>
  );
};

export default ProductPage;

export async function getStaticPaths() {
  try {
    const { data } = await strapi("/products?populate=*");

    const paths = data.data.map(({ id }) => ({
      params: { id: id.toString() },
    }));

    return { paths, fallback: "blocking" };
  } catch (e) {
    console.warn(e.message);
    return { props: {} };
  }
}

export async function getStaticProps({ params }) {
  try {
    const { data } = await strapi(`/products/${params.id}?populate=*`);

    const product = [data.data].map(({ id, attributes }) => ({
      id,
      product_description: attributes.product_description,
      product_in_stock: attributes.product_in_stock,
      product_name: attributes.product_name,
      product_price: attributes.product_price.toFixed(2),
      product_img: attributes.product_img.data.map((img) => ({
        name: img.attributes.name,
        url: img.attributes.url,
        color: img.attributes.caption,
      })),
      categories: attributes.categories.data.map((category) => ({
        id: category.id,
        name: category.attributes.name,
      })),
    }));

    return { props: { product: product[0] } };
  } catch (e) {
    console.warn(e.message);

    return { props: {} };
  }
}
