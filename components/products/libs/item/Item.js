import Image from "next/image";

export const Item = ({ product, onClick }) => {
  // Generates random number for mocking
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  return (
    <div
      onClick={onClick}
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
        <h3 className="text-[24px] font-medium">{product.product_name}</h3>
        <p className="mb-5 ">£{product.product_price}</p>
        <p>{product.product_description.substring(0, 200)}</p>
      </div>
    </div>
  );
};
