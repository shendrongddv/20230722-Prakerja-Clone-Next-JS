import { Button, buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { BrandLogoAlt } from "./navbar-items";
import Link from "next/link";
import { cn } from "@/lib/utils";

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

const ToggleMenu = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="rounded-full border-secondary-foreground text-secondary-foreground"
        >
          <Menu className="h-4 w-4" />
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full border border-secondary-foreground bg-secondary-foreground p-0 md:max-w-md">
        {/* <SheetHeader className="h-16 px-6 flex flex-row justify-between items-center">
          <BrandLogoAlt />
        </SheetHeader> */}
        {/* Content */}
        <div className="h-full flex flex-col justify-between">
          <div className="flex flex-col gap-2 px-6 py-10">
            {dataNavbarLinks.map((item) => (
              <SheetClose key={item.id} asChild>
                <Link
                  href={item.href}
                  aria-label={item.label}
                  className={cn(
                    buttonVariants({
                      variant: "secondary",
                      size: "default",
                      className:
                        "justify-start text-base font-semibold bg-transparent hover:bg-transparent -translate-x-4 hover:translate-x-0 duration-300 ease-linear transition w-max",
                    })
                  )}
                >
                  {item.label}
                </Link>
              </SheetClose>
            ))}
          </div>

          {/* # */}
          <div className="flex flex-col gap-2 px-6 pb-10">
            {/* ## */}
            <SheetClose asChild>
              <Link
                href="/"
                aria-label="Masuk"
                className={cn(
                  buttonVariants({
                    variant: "default",
                    size: "lg",
                    className:
                      "text-base font-semibold border border-white text-white bg-transparent hover:bg-white hover:text-primary-foreground",
                  })
                )}
              >
                Masuk
              </Link>
            </SheetClose>

            {/* ## */}
            <SheetClose asChild>
              <Link
                href="/"
                aria-label="Daftar Sekarang"
                className={cn(
                  buttonVariants({
                    variant: "destructive",
                    size: "lg",
                    className: "text-base font-semibold text-white",
                  })
                )}
              >
                Daftar Sekarang
              </Link>
            </SheetClose>
          </div>
        </div>
        {/* ./ Content */}
        {/* <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter> */}
      </SheetContent>
    </Sheet>
  );
};

export default ToggleMenu;
