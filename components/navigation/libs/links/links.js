import { useRouter } from "next/router";
import Link from "next/link";

export const Links = () => {
  const router = useRouter();

  const navLinks = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "About",
      href: "/about",
    },
    {
      name: "Contact",
      href: "contact",
    },
  ];

  return (
    <ul>
      {navLinks.map(({ name, href }, i) => (
        <Link href={href} passHref key={i}>
          <li
            key={i}
            className={`${
              router.pathname == href ? "text-primary" : ""
            } mb-3 text-[24px] font-medium antialiased cursor-pointer hover:text-primary hover:scale-110 transition-all`}
          >
            {`${i + 1}. ${name}`}
          </li>
        </Link>
      ))}
    </ul>
  );
};
