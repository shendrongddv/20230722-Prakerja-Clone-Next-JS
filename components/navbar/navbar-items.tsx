import Link from "next/link";
import Image from "next/image";

// Image
import imgLogo from "../../public/logo.svg";
import imgLogoAlt from "../../public/logo-white.svg";

// Brand Logo
export const BrandLogo = () => {
  return (
    <Link href="/">
      <Image
        src={imgLogo}
        priority
        alt="Prakerja"
        width={138}
        height={45}
        className="h-10 w-auto"
      />
    </Link>
  );
};

// Brand Logo Alt
export const BrandLogoAlt = () => {
  return (
    <Link href="/">
      <Image
        src={imgLogoAlt}
        priority
        alt="Prakerja"
        width={138}
        height={45}
        className="h-10 w-auto"
      />
    </Link>
  );
};
