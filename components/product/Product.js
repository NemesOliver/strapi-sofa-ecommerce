import Image from "next/image";
import { ColorPicker } from "./libs";
import { IoArrowBackOutline as ArrowBack } from "react-icons/io5";

export const Product = () => {
  return (
    <section>
      <button className="hover:opacity-60 hover:scale-95 active:scale-105 transition-all">
        <ArrowBack size={24} />
      </button>
      <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px]">
        <Image
          src={"/landing-page-picutre-no-bg.webp"}
          alt="mock picture"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <ColorPicker />
    </section>
  );
};
