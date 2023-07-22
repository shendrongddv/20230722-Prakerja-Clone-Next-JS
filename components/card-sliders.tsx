"use client";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
// Swiper CSS
import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// Swiper Modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";

// Data
import { dataExperts, dataAlumni } from "@/data";
import Image from "next/image";

export const ExpertSlider = () => {
  const items = dataExperts;

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      loop
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      // navigation={true}
      // pagination={{ clickable: true, type: "fraction" }}
      breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 16,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 16,
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 24,
        },

        1140: {
          slidesPerView: 3,
          spaceBetween: 32,
        },
      }}
    >
      {items.map((item) => (
        <SwiperSlide key={item.id} className="max-md:px-6">
          <SliderCard
            nama={item.nama}
            jabatan={item.jabatan}
            foto={item.foto}
            organisasi={item.organisasi}
            review={item.review}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

// SliderCard
interface SliderCardProps {
  id?: number;
  nama: string;
  jabatan: string;
  foto: string;
  organisasi: string;
  review: string;
}

const SliderCard: React.FC<SliderCardProps> = ({
  id,
  nama,
  jabatan,
  foto,
  organisasi,
  review,
}) => {
  return (
    <div className="w-full rounded-3xl bg-white overflow-hidden flex flex-col p-4 h-full">
      {/* # */}
      <div className="flex">
        {/* ## */}
        <div className="h-24 aspect-square shrink-0 mr-4 rounded-2xl overflow-hidden shadow-xl flex justify-center items-center">
          <Image
            src={foto}
            alt={nama}
            width={80}
            height={80}
            className="h-24 w-auto mix-blend-multiply"
          />
        </div>

        {/* ## */}
        <div className="space-y-1">
          <h3 className="h3 text-primary-foreground leading-tight">{nama}</h3>
          <span className="text-muted-foreground text-sm flex">
            <span className="line-clamp-2">{jabatan},</span>
            <small></small>
          </span>
          <Image
            src={organisasi}
            alt="Image"
            width={100}
            height={40}
            className="h-8 w-auto mt-2"
          />
        </div>
      </div>

      {/* # */}
      <div className="mt-4">
        <p>{review}</p>
      </div>
    </div>
  );
};
