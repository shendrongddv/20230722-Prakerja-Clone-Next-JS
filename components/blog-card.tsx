// Data
import { dataBlogs } from "@/data";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { ArrowRight } from "lucide-react";

const BlogCard = () => {
  const items = dataBlogs;

  return (
    <>
      {items.map((item) => (
        <div
          key={item.id}
          className="rounded-xl overflow-hidden bg-white group transition ease-linear duration-300 hover:shadow-xl"
        >
          {/* # */}
          <div className="aspect-[4/3] flex justify-center items-center overflow-hidden">
            <Image
              src={`/blogs/${item.img}`}
              alt={item.title}
              width={400}
              height={300}
              className="h-full group-hover:scale-105 scale-100 w-auto object-cover transition ease-linear duration-300"
            />
          </div>

          {/* # */}
          <div className="p-6 flex flex-col">
            {/* ## */}
            <Link href={item.href}>
              <h3 className="h3 text-primary-foreground line-clamp-2 hover:underline transition ease-linear duration-200">
                {item.title}
              </h3>
            </Link>

            {/* ## */}
            <p className="mt-4 text-primary-foreground/80 line-clamp-3">
              {item.text}
            </p>

            {/* ## */}

            <Link
              href="/"
              className={cn(
                buttonVariants({
                  variant: "link",
                  size: "default",
                  className:
                    "transition duration-300 ease-linear hover:underline w-max mt-4 text-secondary-foreground rounded-full px-0 py-0",
                })
              )}
            >
              Baca Selengkapnya <ArrowRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};

export default BlogCard;
