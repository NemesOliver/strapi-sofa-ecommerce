import { useRouter } from "next/router";
import { Item } from "./libs";

export const Products = ({ products }) => {
  const router = useRouter();

  return (
    <section>
      <h2 className="text-[36px] my-4 sm:pl-10 ">Corner Sofas</h2>
      <div className="grid lg:grid-cols-2 gap-4 sm:ml-10 h-[calc(100vh-170px)] overflow-y-scroll scrollbar-none">
        {products.map((product, i) => (
          <Item
            key={i}
            product={product}
            onClick={() => router.push(`/shop/products/${product.id}`)}
          />
        ))}
      </div>
    </section>
  );
};
