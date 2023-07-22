import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";
import Link from "next/link";
import Image from "next/image";

export const CTAFooter = () => {
  return (
    <section
      id="cta-footer"
      className="px-4  bg-[url(/bg/bg-4.svg)] bg-cover bg-no-repeat bg-center"
    >
      <div className="container">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
          {/* # Col */}
          <div className="md:w-5/12 pt-16 max-md:text-center">
            <h2 className="h2 text-white">
              Yuk, persiapkan masa depanmu bersama-sama!
            </h2>
            <Link
              href="/"
              className={cn(
                buttonVariants({
                  variant: "destructive",
                  size: "lg",
                  className:
                    "transition duration-300 ease-linear hover:shadow-xl w-max mt-6 text-white rounded-full max-md:order-last",
                })
              )}
            >
              Lihat Semua
            </Link>
          </div>
          {/* # Col */}
          <div className="md:w-6/12 pt-6 overflow-hidden">
            <Image
              src="/img-6.png"
              alt="Image"
              width={400}
              height={300}
              className="w-full h-auto -mb-7"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
