import { FilledButton } from "../../components";

export const ProductDescription = () => {
  return (
    <section className="relative">
      <h1 className="font-medium text-[36px]">Otto Corner Sofa</h1>
      <p className="font-regular text-[24px] mb-6 ">£2366.00</p>
      <p className="text-[18px] mb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus sapien
        hendrerit diam augue vel. Odio nunc sagittis lacinia quisque. Ornare
        amet.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus
        sapien hendrerit diam augue vel. Odio nunc sagittis lacinia quisque.
        Ornare amet.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Risus sapien hendrerit diam augue vel. Odio nunc sagittis lacinia
        quisque. Ornare amet.
      </p>
      <FilledButton>ADD TO BASKET</FilledButton>
    </section>
  );
};
