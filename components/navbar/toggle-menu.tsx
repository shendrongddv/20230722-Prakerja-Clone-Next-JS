import { Button } from "@/components/ui/button";
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
      <SheetContent className="bg-gradient-to-b from-primary-foreground to bg-secondary-foreground p-0 max-w-md">
        <SheetHeader className="h-16 px-6 flex flex-row justify-between items-center">
          <BrandLogoAlt />
        </SheetHeader>
        {/* Content */}
        {/* ./ Content */}
        <SheetFooter>
          {/* <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose> */}
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default ToggleMenu;
