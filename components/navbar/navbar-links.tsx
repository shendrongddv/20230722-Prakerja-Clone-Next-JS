import Link from "next/link";

import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "../ui/button";
import Image from "next/image";

// Data
const dataNavbarLinks = [
  {
    id: 1,
    label: "Publikasi",
    href: "/",
    type: "default",
  },
  {
    id: 2,
    label: "Lembaga Pelatihan",
    href: "/",
    type: "default",
  },
  {
    id: 3,
    label: "Tren Rekrutmen",
    href: "/",
    type: "default",
  },
  {
    id: 4,
    label: "Artikel",
    href: "/",
    type: "default",
  },
  {
    id: 5,
    label: "Tanya Jawab",
    href: "/",
    type: "default",
  },
];

export const NavbarLinks = () => {
  const items = dataNavbarLinks;

  return (
    <nav className="hidden md:flex justify-center items-center gap-0">
      {items.map((item) => (
        <Link
          key={item.id}
          href={item.href}
          className={cn(
            buttonVariants({
              variant: "link",
              size: "default",
              className:
                "font-semibold text-secondary-foreground hover:text-primary-foreground transition ease-linear duration-300",
            })
          )}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
};

// NavbarButtonGroups
export const NavbarButtonGroups = () => {
  return (
    <div className="hidden md:flex justify-center items-center gap-4">
      <Link
        href="/"
        className={cn(
          buttonVariants({
            variant: "outline",
            size: "default",
            className:
              "font-semibold rounded-full border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground hover:text-white hover:shadow-lg",
          })
        )}
      >
        Masuk
      </Link>
      <Link
        href="/"
        className={cn(
          buttonVariants({
            variant: "destructive",
            size: "default",
            className: "font-semibold rounded-full text-white hover:shadow-lg",
          })
        )}
      >
        Daftar Sekarang
      </Link>
    </div>
  );
};
