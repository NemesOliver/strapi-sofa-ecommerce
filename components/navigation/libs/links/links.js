import { useRouter } from "next/router";
import Link from "next/link";

const navLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Explore",
    href: "/shop/products",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

export const Links = ({ closeNavigation }) => {
  const router = useRouter();

  return (
    <ul>
      {navLinks.map(({ name, href }, i) => (
        <li
          key={i}
          onClick={closeNavigation}
          className={`${
            router.pathname == href ? "text-primary" : ""
          } mb-3 text-[24px] font-medium antialiased cursor-pointer hover:text-primary hover:scale-110 transition-all`}
        >
          <Link href={href}>{`${i + 1}. ${name}`}</Link>
        </li>
      ))}
    </ul>
  );
};
