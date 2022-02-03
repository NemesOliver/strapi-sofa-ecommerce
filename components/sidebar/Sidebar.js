import { Categories } from "./libs";

export const Sidebar = () => {
  return (
    <section className="hidden sm:flex h-[calc(100vh-60px)] flex-col justify-between">
      <div>
        <h2 className="text-[1.8rem] my-5">Category</h2>
        <Categories />
      </div>
      <div>
        <p className="text-[18px]">
          All our sofas are made from premium materials. They are spill-proof,
          fire-proof and pet safe. Since all sofas are made to order, please
          expect longer waiting time than usual.
        </p>
        <p className="my-5 text-[14px] text-center ">&copy;2022 Malis.</p>
      </div>
    </section>
  );
};
