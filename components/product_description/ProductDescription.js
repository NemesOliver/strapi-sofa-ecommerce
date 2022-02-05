import { FilledButton } from "../../components";

export const ProductDescription = ({ product }) => {
  return (
    <section className="relative">
      <h1 className="font-medium text-[36px]">{product.product_name}</h1>
      <p className="font-regular text-[24px] mb-6 ">£{product.product_price}</p>
      <p className="text-[18px] mb-6">{product.product_description}</p>
      <FilledButton>ADD TO BASKET</FilledButton>
    </section>
  );
};
