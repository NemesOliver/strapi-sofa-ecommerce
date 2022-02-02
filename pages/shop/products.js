import url from "../../strapi_url/url";

const products = ({ products }) => {
  console.log(products);

  return <div>products all</div>;
};

export default products;

export async function getStaticProps() {
  try {
    const res = await fetch(`${url}/products?populate=*`);
    const { data } = await res.json();

    // Clean-up response
    const products = data.map(({ id, attributes }) => ({
      id,
      product_description: attributes.product_description,
      product_in_stock: attributes.product_in_stock,
      product_name: attributes.product_name,
      product_price: attributes.product_price,
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
