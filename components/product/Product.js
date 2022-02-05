import Image from "next/image";
import { useRouter } from "next/router";
import { ColorPicker } from "./libs";
import { IoArrowBackOutline as ArrowBack } from "react-icons/io5";

export const Product = ({ product }) => {
  const router = useRouter();

  return (
    <section>
      <button
        onClick={() => router.back()}
        className="hover:opacity-60 hover:scale-95 active:scale-105 transition-all"
      >
        <ArrowBack size={24} />
      </button>
      <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px]">
        <Image
          src={product.product_img[2].url}
          alt="mock picture"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <ColorPicker />
    </section>
  );
};
