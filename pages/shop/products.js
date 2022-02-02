import Head from "next/head";
import { Container } from "../../components";
import url from "../../strapi_url/url";

const products = ({ products }) => {
  console.log(products);

  return (
    <>
      <Head>
        <title>Malis.</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Container>
          <div className="grid grid-cols-[1fr] sm:grid-cols-[280px_1fr] ">
            {/* Sidebar */}
            <section className="hidden sm:flex h-[calc(100vh-60px)] flex-col justify-between">
              <div>
                <h2 className="text-[1.8rem] my-5">Category</h2>
                <ul>
                  <li className="cursor-pointer hover:text-primary transition">
                    All
                  </li>
                  <li className="cursor-pointer hover:text-primary transition">
                    Sofa beds
                  </li>
                  <li className="cursor-pointer hover:text-primary transition">
                    Corner sofas
                  </li>
                </ul>
              </div>
              <div>
                <p className="text-[18px]">
                  All our sofas are made from premium materials. They are
                  spill-proof, fire-proof and pet safe. Since all sofas are made
                  to order, please expect longer waiting time than usual.
                </p>
                <p className="my-5 text-[14px] text-center ">
                  &copy;2022 Malis.
                </p>
              </div>
            </section>

            {/* Products */}
            <section className="bg-blue-300 "> main</section>
          </div>
        </Container>
      </main>
    </>
  );
};

export default products;

// export async function getStaticProps() {
//   try {
//     const res = await fetch(`${url}/products?populate=*`);
//     const { data } = await res.json();

//     // Clean-up response
//     const products = data.map(({ id, attributes }) => ({
//       id,
//       product_description: attributes.product_description,
//       product_in_stock: attributes.product_in_stock,
//       product_name: attributes.product_name,
//       product_price: attributes.product_price,
//       product_img: attributes.product_img.data.map((img) => ({
//         name: img.attributes.name,
//         url: img.attributes.url,
//       })),
//       categories: attributes.categories.data.map((category) => ({
//         id: category.id,
//         name: category.attributes.name,
//       })),
//     }));

//     return {
//       props: { products },
//     };
//   } catch (e) {
//     console.warn(e.message);

//     return { props: {} };
//   }
// }
