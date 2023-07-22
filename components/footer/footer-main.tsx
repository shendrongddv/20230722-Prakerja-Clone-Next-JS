import Image from "next/image";
import Link from "next/link";

import {
  Clock,
  Facebook,
  Instagram,
  LucideIcon,
  MailPlus,
  MessageSquare,
  Phone,
  QuoteIcon,
  Youtube,
} from "lucide-react";

// Data
import { footerLinks } from "@/data";
const dataFooterBottomLinks = [
  { id: 1, label: "Kebijakan Privasi", href: "/" },
  { id: 2, label: "Syarat & Ketentuan", href: "/" },
];
const dataFooterSocialLinks = [
  {
    id: 1,
    label: "YouTube",
    href: "/",
    icon: Youtube,
  },
  {
    id: 2,
    label: "Instagram",
    href: "/",
    icon: Instagram,
  },
  {
    id: 3,
    label: "Facebook",
    href: "/",
    icon: Facebook,
  },
];

const FooterMain = () => {
  return (
    <footer className="px-6 pt-20 bg-[url(/bg/bg-footer.svg)] bg-no-repeat bg-cover bg-center">
      <div className="container">
        <div className="flex flex-col gap-12">
          {/* # Footer Top */}
          <div className="flex flex-col md:flex-row md:justify-between gap-12">
            {/* ## Col */}
            <div className="md:w-1/4 w-full">
              <PancasilaText />
            </div>

            {/* ## Col */}
            <div className="md:w-3/4 w-full">
              <Quote />
            </div>
          </div>

          {/* # Footer Main */}
          <div className="flex flex-col md:flex-row md:justify-between gap-12">
            <FooterMainLinks />
            <FooterMainLinkExtra />
          </div>

          {/* # Footer Bottom */}
          <div className="py-6 border-t border-white/25 flex flex-col-reverse items-center md:flex-row md:justify-between md:items-center gap-6">
            {/* # */}
            <span className="text-sm text-white/80">
              © Kartu Prakerja 2023
            </span>

            {/* # */}
            <div className="flex flex-col-reverse items-center gap-6 md:flex-row md:justify-center md:items-center">
              {/* ## */}
              <FooterBottomLinks />

              {/* ## */}
              <ul className="flex justify-center items-center gap-4">
                {dataFooterSocialLinks.map((item) => (
                  <FooterSocialLinks
                    key={item.id}
                    label={item.label}
                    href={item.href}
                    icon={item.icon}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterMain;

// Components
// PancasilaText
const PancasilaText = () => {
  return (
    <div className="flex gap-4 items-center">
      <Image
        src="/pancasila.png"
        alt="Pancasila"
        width={44}
        height={44}
        className="h-11 w-11 shrink-0"
      />
      <span className="text-white font-bold font-display text-sm">
        Kementerian Koordinator Bidang Perekonomian Republik Indonesia
      </span>
    </div>
  );
};

// Quote
const Quote = () => {
  return (
    <div className="rounded-xl bg-white/75 p-6 md:p-8 flex flex-col">
      {/* # */}
      <div className="flex">
        <QuoteIcon className="h-6 w-6 flex-none mr-2 text-secondary-foreground" />
        <p className="text-primary-foreground flex-1 text-sm italic">
          Program Kartu Prakerja berlanjut pada tahun 2023 dengan skema normal,
          di mana bantuan pelatihan akan fokus kepada pengembangan kompetensi
          angkatan kerja, peningkatan produktivitas, dan daya saing angkatan
          kerja; serta pengembangan kewirausahaan. Pelaksanaan skema normal
          diatur dalam Peraturan Presiden Nomor 113 Tahun 2022 yang aturan
          pelaksanaannya tertera pada Permenko Perekonomian Nomor 17 Tahun 2022.
        </p>
      </div>

      {/* # */}
      <span className="w-6 h-0.5 bg-secondary-foreground mt-6 mb-2"></span>

      {/* # */}
      <h4 className="text-sm text-primary-foreground font-display font-bold">
        Airlangga Hartarto
        <small className="text-secondary-foreground font-normal">
          , Menteri Koordinator Bidang Perekonomian Republik Indonesia
        </small>
      </h4>
    </div>
  );
};

// FooterBottomLinks
const FooterBottomLinks = () => {
  return (
    <>
      <ul className="flex items-center justify-center gap-4">
        {dataFooterBottomLinks.map((item) => (
          <li
            key={item.id}
            className="text-white/80 text-sm hover:text-white hover:underline"
          >
            <Link href={item.href} aria-label={item.label}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

// FooterSocialLinks
interface FooterSocialLinksProps {
  id?: number;
  label: string;
  href: string;
  icon: LucideIcon;
}

// FooterSocialLinks
const FooterSocialLinks: React.FC<FooterSocialLinksProps> = ({
  label,
  href,
  icon: Icon,
}) => {
  const items = dataFooterSocialLinks;

  return (
    <li className="w-8 h-8 flex justify-center items-center rounded-lg bg-white">
      <Link href={href} aria-label={label} className="text-primary-foreground">
        <Icon className="h-4 w-4" />
      </Link>
    </li>
  );
};

// FooterMainLinks
const FooterMainLinks = () => {
  const items = footerLinks;

  return (
    <>
      {items.map((item) => (
        <div key={item.id} className="w-full md:flex-1">
          {/* # */}
          <h4 className="text-white font-bold font-display">{item.title}</h4>

          {/* # */}
          <ul className="mt-4 space-y-3">
            {item.links.map((subitem) => (
              <li key={subitem.id}>
                <Link
                  href={subitem.href}
                  aria-label={subitem.label}
                  className="text-white/80 hover:text-white text-sm"
                >
                  {subitem.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};

// FooterMainLinkExtra
const FooterMainLinkExtra = () => {
  return (
    <div className="md:w-2/6">
      <div className="flex flex-col relative bg-slate-50 rounded-xl p-6 md:p-8 overflow-hidden">
        {/* # */}
        <div className="flex flex-col gap-12">
          {/* ## */}
          <div className="flex flex-col">
            <h4 className="text-primary-foreground font-bold font-display">
              Layanan Contact Center Prakerja
            </h4>

            <div className="flex mt-4 flex-col space-y-3">
              <Link
                href="/"
                className="text-primary-foreground/80 hover:text-primary-foreground flex items-center gap-2 text-sm"
              >
                <Phone className="h-4 w-4" />
                <span className="font-bold">08001503001 (Gratis)</span>
              </Link>
              <Link
                href="/"
                className="text-primary-foreground/80 hover:text-primary-foreground flex items-center gap-2 text-sm"
              >
                <MailPlus className="h-4 w-4" />
                Formulir Pengaduan
              </Link>
              <Link
                href="/"
                className="text-primary-foreground/80 hover:text-primary-foreground flex items-center gap-2 text-sm"
              >
                <MessageSquare className="h-4 w-4" />
                Live Chat
              </Link>
            </div>
          </div>

          {/* ## */}
          <div className="flex flex-col">
            <h4 className="text-primary-foreground font-bold font-display">
              Jam Operasional
            </h4>

            <div className="flex mt-4 flex-col space-y-3">
              <Link
                href="/"
                className="text-primary-foreground/80 hover:text-primary-foreground flex items-center gap-2 text-sm"
              >
                <Clock className="h-4 w-4" />
                <div className="flex flex-col">
                  <span className="">Senin - Minggu</span>
                  <span className="text-muted-foreground text-xs">
                    Pukul 08.00 - 20.00 WIB
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* # Decoration */}
        <Image
          src="/bg/decoration-3.svg"
          alt="Decoration"
          width={160}
          height={180}
          className="absolute -bottom-1 right-2 w-40 h-auto z-0"
        />
      </div>
    </div>
  );
};
