import Link from "next/link";
import { IconButton } from "..";
import { CgMenuRight as MenuIcon } from "react-icons/cg";

export const Header = () => {
  return (
    <header className="max-w-[1440px] mx-auto h-[60px] flex items-center ">
      <Link href="#" passHref>
        <a className="text-2xl font-medium flex-1 ">Malis.</a>
      </Link>
      <IconButton>
        Menu <MenuIcon size={24} />
      </IconButton>
    </header>
  );
};
