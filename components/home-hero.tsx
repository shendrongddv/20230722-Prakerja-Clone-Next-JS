import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const HomeHero = () => {
  return (
    <div className="flex flex-col items-center relative isolate">
      {/* # Front */}
      <div className="md:w-1/2 z-[1] pt-28 md:py-40 text-center flex flex-col items-center">
        {/* # */}
        <h1 className="text-white h1">
          Gali potensi dirimu dengan Kartu Prakerja
        </h1>
        {/* # */}
        <p className="mt-6 text-white">
          Galau cari kerja? Ingin lebih kompeten? Mau mengembangkan diri tanpa
          pusing memikirkan biaya? Bekali dirimu dengan Kartu Prakerja dan{" "}
          <span className="font-bold">#SiapDariSekarang</span>
        </p>

        {/* # HeroForm */}
        <HeroForm />

        {/* # */}
        <span className="text-sm mt-4 text-white">
          Masukkan e-mail untuk membuat akun Prakerja
        </span>

        {/* # Image only Mobile */}
        <div className="flex md:hidden w-full mt-10">
          <ImageWoman />
        </div>
      </div>

      {/* # Back */}
      <div className="md:flex md:justify-between z-0 w-full hidden absolute bottom-0 left-0 right-0">
        {/* ## Col */}
        <div className="md:w-1/3">
          <ImageWoman />
        </div>
        {/* ## Col */}
        <div className="md:w-1/3">
          <ImageMan />
        </div>
      </div>
    </div>
  );
};

export default HomeHero;

// Components
// Image Woman
const ImageWoman = () => {
  return (
    <Image
      src="/img-1.png"
      priority
      alt="Image"
      width={600}
      height={600}
      className="w-full h-auto"
    />
  );
};

// Image Man
const ImageMan = () => {
  return (
    <Image
      src="/img-2.png"
      priority
      alt="Image"
      width={600}
      height={600}
      className="w-full h-auto"
    />
  );
};

// HeroForm
const HeroForm = () => {
  return (
    <div className="flex mt-8 w-full md:w-4/5 items-center space-x-2 p-1.5 bg-white rounded-full">
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
  );
};
