import { useContext } from "react";
import Link from "next/link";
import { AuthContext } from "../../context";
import { IconButton } from "..";
import { CgMenuRight as MenuOpen } from "react-icons/cg";
import { IoClose as MenuClose } from "react-icons/io5";
import { BsCart4 as ShoppingCart } from "react-icons/bs";

export const Header = ({ navOpen, toggleNavigation, closeNavigation }) => {
  const { isLoggedIn, logout } = useContext(AuthContext);

  return (
    <header className="max-w-[1440px] mx-auto px-[10px] h-[60px] flex items-center container:px-0 ">
      <Link href="/" passHref>
        <a onClick={closeNavigation} className="text-2xl font-medium flex-1 ">
          Malis.
        </a>
      </Link>
      {isLoggedIn ? (
        <button
          onClick={logout}
          className="pr-3 font-medium opacity-70 hover:opacity-100 transition-colors"
        >
          Log Out
        </button>
      ) : (
        <Link href="/login">
          <a className="pr-3 font-medium opacity-70 hover:opacity-100 transition-colors">
            Log In
          </a>
        </Link>
      )}
      {isLoggedIn && (
        <div className="pr-3">
          <IconButton>
            <ShoppingCart size={20} />
          </IconButton>
        </div>
      )}

      <IconButton onClick={toggleNavigation}>
        {navOpen ? <MenuClose size={24} /> : <MenuOpen size={24} />}
      </IconButton>
    </header>
  );
};
