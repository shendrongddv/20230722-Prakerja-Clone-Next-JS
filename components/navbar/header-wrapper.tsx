// Components
import { BrandLogo } from "./navbar-items";
import { NavbarButtonGroups, NavbarLinks } from "./navbar-links";
import ToggleMenu from "./toggle-menu";
// import SelectLanguage from "./select-language";

const HeaderWrapper = () => {
  return (
    <header className="fixed px-6 bg-white top-0 left-0 w-full z-50">
      <div className="container">
        <div className="flex h-16 justify-between items-center">
          {/* # Brand Logo */}
          <BrandLogo />

          {/* # */}
          <div className="flex justify-center items-center gap-6">
            {/* ## Nav */}
            <NavbarLinks />

            {/* ## Button Languages */}
            {/* <SelectLanguage /> */}

            {/* ## Button Groups */}
            <NavbarButtonGroups />

            {/* Toggle Menu */}
            <ToggleMenu />
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderWrapper;
