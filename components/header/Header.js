import Link from "next/link";
import { IconButton } from "..";
import { CgMenuRight as MenuOpen } from "react-icons/cg";
import { IoClose as MenuClose } from "react-icons/io5";

export const Header = ({ navOpen, toggleNavigation }) => {
  return (
    <header className="max-w-[1440px] mx-auto h-[60px] flex items-center ">
      <Link href="/" passHref>
        <a className="text-2xl font-medium flex-1 ">Malis.</a>
      </Link>
      <IconButton onClick={toggleNavigation}>
        {navOpen ? <MenuClose size={24} /> : <MenuOpen size={24} />}
      </IconButton>
    </header>
  );
};
