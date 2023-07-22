import BlogCard from "@/components/blog-card";
import FAQCard from "@/components/faq-card";
import HowToCard, { AdditionalCard } from "@/components/how-to-card";
import PartnerCard from "@/components/partner-card";
import SyaratMendaftar from "@/components/syarat-mendaftar";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section
        id="hero"
        className="px-6 bg-[url(/bg/bg-1.svg)] bg-no-repeat bg-cover bg-center pb-9"
      >
        <div className="container max-md:pt-36 pb-20 md:min-h-screen flex flex-col justify-center items-center">
          <div className="md:w-1/2">
            <div className="flex flex-col items-center text-center">
              <h1 className="text-white h1">
                Gali potensi dirimu dengan Kartu Prakerja
              </h1>
              <p className="mt-6 text-white">
                Galau cari kerja? Ingin lebih kompeten? Mau mengembangkan diri
                tanpa pusing memikirkan biaya? Bekali dirimu dengan Kartu
                Prakerja dan{" "}
                <span className="font-bold">#SiapDariSekarang</span>
              </p>

              {/* Button */}
              <div className="flex mt-8 w-full md:w-10/12 items-center space-x-2 p-1.5 bg-white rounded-full">
                <Input
                  type="email"
                  placeholder="Masukkan e-mail kamu"
                  className="rounded-full"
                />
                <Button
                  type="submit"
                  variant="secondary"
                  size="icon"
                  className="rounded-full aspect-square"
                >
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
              {/* ./ Button */}

              <span className="text-sm mt-4 text-white">
                Masukkan e-mail untuk membuat akun Prakerja
              </span>
            </div>
          </div>
        </div>
      </section>
      {/* ./ Hero */}

      {/* Intro */}
      <section
        id="intro"
        className="md:px-6 bg-white pb-20 pt-12 md:py-20 rounded-tl-[40px] rounded-tr-[40px] -mt-9 z-[1]"
      >
        <div className="container">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-16">
            {/* Col */}
            <div className="md:w-5/12 max-md:px-6">
              <div className="flex flex-col">
                {/* ## */}
                <h2 className="h2 text-primary-foreground">
                  Tentang Kartu Prakerja
                </h2>

                {/* ## */}
                <p className="mt-4">
                  Program Kartu Prakerja adalah program pengembangan kompetensi
                  kerja yang ditujukan untuk pencari kerja, pekerja terkena PHK,
                  dan/atau pekerja yang membutuhkan peningkatan kompetensi.
                </p>

                {/* ## */}
                <Link
                  href="/"
                  className={cn(
                    buttonVariants({
                      variant: "ghost",
                      size: "lg",
                      className:
                        "transition duration-300 ease-linear hover:shadow-xl w-max mt-4 text-secondary-foreground -translate-x-8 hover:translate-x-0 rounded-full",
                    })
                  )}
                >
                  Daftar Sekarang <ArrowRight className="h-4 w-4 ml-1" />
                </Link>

                {/* ## */}
                <Image
                  src="/img-3.png"
                  alt="Image"
                  width={400}
                  height={300}
                  className="w-full h-auto"
                />

                {/* ## */}
                <div className="rounded-3xl p-6 bg-secondary-foreground/25 relative mt-6">
                  <p className="text-sm md:w-4/5 text-primary-foreground">
                    Program Kartu Prakerja merupakan program ramah difabel.
                    Difabel dianjurkan untuk mendaftar dan mengikuti Program
                    Kartu Prakerja.
                  </p>

                  {/* ### */}
                  <Image
                    src="/icons/difable.png"
                    alt="Image"
                    width={40}
                    height={40}
                    className="h-10 w-10 absolute right-3 -top-5"
                  />
                </div>
              </div>
            </div>

            {/* Col */}
            <div className="md:w-6/12">
              <div className="rounded-[40px] flex flex-col bg-slate-100 px-6 py-10 md:px-10 md:py-14">
                {/* ## */}
                <h3 className="h3 underline-offset-8 underline decoration-secondary-foreground decoration-2">
                  Syarat Mendaftar
                </h3>

                {/* ## Syarat Mendaftar */}
                <div className="flex flex-col my-8">
                  <SyaratMendaftar />
                </div>

                {/* ## */}
                <Link
                  href="/"
                  className={cn(
                    buttonVariants({
                      variant: "destructive",
                      size: "lg",
                      className:
                        "transition duration-300 ease-linear hover:shadow-xl w-max mt-4 md:ml-auto text-white rounded-full",
                    })
                  )}
                >
                  Daftar Sekarang
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ./ Intro */}

      {/* Video */}
      <div className="relative bg-white">
        {/* Background Pattern */}
        <Image
          src="/bg/bg-2.svg"
          alt="Background"
          width={100}
          height={100}
          className="w-full h-auto absolute bottom-0 left-0 right-0 z-[1]"
        />
        <section id="video" className="px-6">
          <div className="container relative">
            <div className="flex flex-col items-center">
              <Image
                src="/img-4.webp"
                priority
                alt="Image"
                width={1600}
                height={900}
                className="w-full h-auto z-[3]"
              />
            </div>

            {/* Decoration Pattern 1 */}
            <Image
              src="/bg/img_shape_orange_left.png"
              alt="Decoration"
              width={100}
              height={100}
              className="absolute left-0 bottom-1/4 h-10 md:h-24 w-auto z-[2]"
            />

            {/* Decoration Pattern 2 */}
            <Image
              src="/bg/img_shape_orange_right.png"
              alt="Decoration"
              width={100}
              height={100}
              className="absolute right-0 top-1/4 h-10 md:h-24 w-auto z-[2]"
            />
          </div>
        </section>
      </div>
      {/* ./ Video */}

      {/* How To */}
      <section id="how-to" className="bg-white px-6 py-20">
        <div className="container">
          <div>
            <h2 className="h2 text-primary-foreground">
              Langkah Mudah Kartu Prakerja
            </h2>

            <div className="mt-10 grid md:grid-cols-3 md:grid-flow-row-dense gap-x-6 gap-y-8">
              {/* Component */}
              <HowToCard />
              <AdditionalCard />
            </div>
          </div>
        </div>
      </section>
      {/* ./ How To */}

      {/* Partners */}
      <section id="partners" className="bg-slate-100 px-6 pt-20">
        <div className="container">
          <div>
            <h2 className="h2 text-primary-foreground">Mitra Kartu Prakerja</h2>
          </div>

          {/* Partner Components */}
          <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            <PartnerCard />
          </div>
        </div>
      </section>
      {/* ./ Partners */}

      {/* Experts */}
      <section id="experts" className="bg-slate-100 px-6 pt-20">
        <div className="container">
          <div>
            <h2 className="h2 text-primary-foreground">Menurut Para Pakar</h2>
          </div>
        </div>
      </section>
      {/* ./ Experts */}

      {/* Alumni */}
      <section id="alumni" className="bg-slate-100 px-6 py-20">
        <div className="container">
          <div>
            <h2 className="h2 text-primary-foreground">Apa Kata Alumni?</h2>
          </div>
        </div>
      </section>
      {/* ./ Alumni */}

      {/* Divider */}
      <div className="bg-slate-100 overflow-hidden">
        <Image
          src="/bg/divider-1.svg"
          alt="Divider"
          width={800}
          height={200}
          className="h-full w-auto -mb-1"
        />
      </div>
      {/* ./ Divider */}

      {/* FAQs */}
      <section id="faq" className="bg-white px-6 py-20">
        <div className="container">
          <div className="flex flex-col items-center md:flex-row md:justify-between md:items-start gap-10">
            {/* # */}
            <h2 className="h2 flex-1 text-primary-foreground w-max">
              Pertanyaan Populer
            </h2>

            {/* # */}
            <div className="md:w-9/12 w-full flex flex-col items-center md:items-end">
              {/* ## FAQ Components */}
              <div className="w-full">
                <FAQCard />
              </div>

              {/* ## */}
              <Link
                href="/"
                className={cn(
                  buttonVariants({
                    variant: "link",
                    size: "lg",
                    className:
                      "transition duration-300 ease-linear hover:underline w-max mt-6 text-secondary-foreground py-0 px-0 rounded-full",
                  })
                )}
              >
                Lihat Semua Pertanyaan <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* ./ FAQ */}

      {/* Blogs */}
      <section id="blog" className="bg-slate-100 px-6 py-20">
        <div className="container">
          <div className="flex flex-wrap flex-col md:flex-row md:justify-between md:items-center gap-8 max-md:items-center">
            {/* # */}
            <h2 className="h2 text-primary-foreground md:w-3/5">
              Artikel terbaru
            </h2>

            {/* # */}
            <Link
              href="/"
              className={cn(
                buttonVariants({
                  variant: "secondary",
                  size: "lg",
                  className:
                    "transition duration-300 ease-linear hover:shadow-xl w-max mt-4 text-white rounded-full max-md:order-last",
                })
              )}
            >
              Lihat Semua
            </Link>

            {/* # Blog Components */}
            <div className="w-full max-md:order-2 grid md:grid-cols-3 gap-8">
              <BlogCard />
            </div>
          </div>
        </div>
      </section>
      {/* ./ Blogs */}
    </>
  );
}
