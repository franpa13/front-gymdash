"use client"
import { usePathname } from "next/navigation";

export const useLocation = () => {
  const pathname = usePathname();

  const determineLocation = (href: string) => {
    if (!href) return false;

    // Caso especial: root "/"
    if (href === "/") {
      return pathname === "/";
    }

    // Para todo lo demás, revisa que empiece con href
    return pathname.startsWith(href);
  };

  return { pathname, determineLocation };
};
