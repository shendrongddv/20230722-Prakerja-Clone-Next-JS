import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { it } from "node:test";
import { buttonVariants } from "./ui/button";

const caraPakai = [
  {
    id: 1,
    title: "Daftar",
    desc: "Buat akun Prakerja dengan data diri kamu. Siapkan e-mail, NIK, nomor KK, nomor HP yang masih aktif dan selesaikan tes kemampuan dasar untuk menyelesaikan proses pendaftaran.",
    img: "icon-1.svg",
  },
  {
    id: 2,
    title: "Gabung Gelombang",
    desc: "Ikut Seleksi dengan gabung gelombang. Tunggu pengumuman hasil seleksinya.",
    img: "icon-2.svg",
  },
  {
    id: 3,
    title: "Pilih Pelatihan",
    desc: "Gunakan saldo pelatihan sebesar Rp 3,5 juta, pilih yang kamu butuhkan di Mitra Platform Digital dan bayar dengan nomor Kartu Prakerjamu. Pastikan rekening bank/e-wallet kamu sudah tersambung sebelum membeli pelatihan.",
    img: "icon-3.svg",
  },
  {
    id: 4,
    title: "Ikuti Pelatihan",
    desc: "Kerjakan pre-test dan post-test selesaikan pelatihan dan dapatkan sertifikat.",
    img: "icon-4.svg",
  },
  {
    id: 5,
    title: "Beri Rating dan Ulasan",
    desc: "Berikan rating dan ulasan terhadap pelatihan yang telah kamu selesaikan di dashboard Prakerjamu.",
    img: "icon-5.svg",
  },
  {
    id: 6,
    title: "Dapatkan Insentif",
    desc: "Tunggu beberapa hari, kamu akan menerima insentif Rp.600.000 di rekening bank/e-walletmu.",
    img: "icon-6.svg",
  },
  {
    id: 7,
    title: "Isi Survey Evaluasi",
    desc: "Jawab 2 survei evaluasi di dashboard Prakerjamu dan dapatkan insentif Rp.50.000 untuk setiap survei.",
    img: "icon-7.svg",
  },
];

const HowToCard = () => {
  const items = caraPakai;

  return (
    <>
      {items.map((item) => (
        <div key={item.id} className="pt-3.5 relative">
          {/* # */}
          <div className="pl-3.5 absolute top-0 left-3">
            {/* ## */}
            <div className="bg-white flex justify-center items-center h-14 w-14 rounded-full z-[1]">
              <Image
                src={`/icons/${item.img}`}
                alt={item.title}
                width={30}
                height={30}
                className="h-7 w-7"
              />
            </div>
            {/* ## */}
            <span className="rounded-full z-[2] bg-secondary-foreground h-7 w-7 flex justify-center items-center -ml-3.5 -mt-14">
              <span className="text-white leading-none">{item.id}</span>
            </span>
          </div>

          {/* # */}
          <div className="bg-slate-50 group transition ease-linear duration-200 hover:shadow-xl hover:bg-primary-foreground rounded-3xl px-6 pt-16 pb-8 h-full">
            <h3 className="h3 text-primary-foreground transition ease-linear duration-200 group-hover:text-white">
              {item.title}
            </h3>
            <p className="mt-2 text-primary-foreground/80 transition ease-linear duration-200 group-hover:text-white">
              {item.desc}
            </p>
          </div>
        </div>
      ))}
    </>
  );
};

export default HowToCard;

// Additional Card

export const AdditionalCard = () => {
  return (
    <div className="md:col-span-2 pt-3.5 relative">
      <div className="rounded-3xl overflow-hidden bg-[url(/bg/bg-3.webp)] bg-cover bg-no-repeat bg-center">
        {/* # */}
        <div className="md:w-3/5 mx-6 my-8 flex flex-col z-10">
          <h2 className="h2 text-primary-foreground">Tunggu apa lagi?</h2>
          <p className="mt-4 text-primary-foreground/80">
            Belajar gratis, dapat sertifikat dan insentif pula. Dengan Kartu
            Prakerja, raih masa depan lebih cerah!
          </p>
          <Link
            href="/"
            className={cn(
              buttonVariants({
                variant: "destructive",
                size: "lg",
                className:
                  "transition duration-300 ease-linear hover:shadow-xl w-max mt-6 text-white rounded-full",
              })
            )}
          >
            Daftar Sekarang
          </Link>
        </div>

        {/* # */}
        <div className="md:absolute md:top-0 md:bottom-0 md:right-6 max-md:-mt-24">
          <Image
            src="/img-5.webp"
            alt="Image"
            width={200}
            height={200}
            className="md:h-full md:w-auto z-0 w-3/5 float-right"
          />
        </div>
      </div>
    </div>
  );
};
