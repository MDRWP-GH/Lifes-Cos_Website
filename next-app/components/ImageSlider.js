"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import "../app/slider.css";

const images = [

  "/ImageSlider/Lifes'Cos-5118.JPG",
  "/ImageSlider/Lifes'Cos-4885.JPG",
  "/ImageSlider/Lifes'Cos-4376.JPG",
  "/ImageSlider/IMG_8109.jpg",
  "/ImageSlider/IMG_3595.jpg",
];

export default function ImageSlider() {
  return (
    <div className="w-full px-0 p-30">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{
          clickable: true,
          bulletClass: "swiper-pagination-bullet custom-bullet",
          bulletActiveClass: "swiper-pagination-bullet-active custom-bullet-active",
        }}
        autoplay={{ delay: 3000 }}
        loop
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full aspect-[21/9] overflow-hidden">
              <Image
                src={src}
                alt={`Slide ${index + 1}`}
                fill
                sizes="200vw"
                className="object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
