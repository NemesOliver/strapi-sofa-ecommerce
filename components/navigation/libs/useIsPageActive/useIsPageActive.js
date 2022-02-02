import { useRouter } from "next/router";

export const useIsPageActive = () => {
  const router = useRouter();

  const highlightCurrentPage = (href) => {
    if (router.pathname === href) {
      return "text-primary";
    }
  };

  return { highlightCurrentPage };
};
