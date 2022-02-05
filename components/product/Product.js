import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { ColorPicker } from "./libs";
import { IoArrowBackOutline as ArrowBack } from "react-icons/io5";

export const Product = ({ product }) => {
  const [imageIndex, setImageIndex] = useState(0);
  const router = useRouter();

  // Set image index to be equal to the clicked button index
  const changeImage = (buttonIndex) => {
    setImageIndex(buttonIndex);
  };

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
          src={product.product_img[imageIndex].url}
          alt="mock picture"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <ColorPicker colors={product.product_img} changeImage={changeImage} />
    </section>
  );
};
