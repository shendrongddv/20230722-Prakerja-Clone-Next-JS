import Image from "next/image";
import Link from "next/link";

// Data
import { footerLinks } from "@/data";
import { LucideIcon } from "lucide-react";

export const FooterLinks = () => {
  const items = footerLinks.slice(0, 4);

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
                  className="opacity-90 text-white hover:text-secondary-foreground"
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

export const FooterLinksBeta = () => {
  return (
    <div className="md:w-2/6">
      <div className="flex flex-col relative bg-slate-50 rounded-xl p-6 md:p-8 overflow-hidden">
        {/* # */}
        <div className="flex flex-col gap-10">
          <div className="flex flex-col">
            <h4 className="text-primary-foreground font-bold font-display">
              Footer Title
            </h4>

            <ul className="mt-4 space-y-3">
              <li>
                <Link href="/">Likn Item</Link>
              </li>
            </ul>
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
