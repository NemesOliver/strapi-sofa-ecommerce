import Head from "next/head";
import Image from "next/image";
import { Container, Sidebar } from "../../components";
import url from "../../strapi_url/url";

import productsMock from "../../products.json";

const products = ({ products }) => {
  console.log(products[0]);

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  return (
    <>
      <Head>
        <title>Malis.</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Container>
          <div className="grid grid-cols-[1fr] sm:grid-cols-[240px_1fr] ">
            <Sidebar />
            {/* Products */}
            <section>
              <h2 className="text-[36px] my-4 sm:pl-10 ">Corner Sofas</h2>
              <div className="grid lg:grid-cols-2 gap-4 sm:ml-10 h-[calc(100vh-170px)] overflow-y-scroll mb-24 scrollbar-none">
                {products.map((product, i) => (
                  // Card
                  <div
                    key={i}
                    className="min-w-full max-h-[600px] cursor-pointer rounded-md border border-background hover:border hover:shadow-lg hover:border-primary transition-all"
                  >
                    <div className="relative h-[300px]">
                      <Image
                        src={product.product_img[getRandomInt(3)].url} // Mocking
                        alt={product.product_img[0].name}
                        layout="fill"
                        objectFit="contain"
                      />
                    </div>
                    <div className="px-5 pb-5">
                      <h3 className="text-[24px] font-medium ">
                        {product.product_name}
                      </h3>
                      <p className="mb-5 ">£{product.product_price}</p>
                      <p>{product.product_description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
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
