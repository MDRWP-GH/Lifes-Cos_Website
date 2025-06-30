"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import "../app/slider.css";

const images = [

  "/ImageSlider/Lifes'Cos-5118.JPG",
  "/ImageSlider/IMG_9856Copy.png",
  "/ImageSlider/Lifes'Cos-4376.JPG",
  "/ImageSlider/IMG_9984.png",
  "/ImageSlider/IMG_9992.png",
];

export default function ImageSlider() {
  return (
    <div className="w-full px-0 mt-30">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{
          clickable: true,
          bulletClass: "swiper-pagination-bullet custom-bullet",
          bulletActiveClass: "swiper-pagination-bullet-active custom-bullet-active",
        }}
        autoplay={{ delay: 2000 }}
        loop
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full aspect-[21/10] overflow-hidden">
              <Image
                src={src}
                alt={`Slide ${index + 1}`}
                fill
                sizes="300vw"
                className="object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
