"use client";

import { Comment } from "@/lib/content";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

interface Props {
  items: Comment[];
}

export default function ReviewsSlider({ items }: Props) {
  return (
    <Swiper
      modules={[Pagination]}
      spaceBetween={24}
      loop
      pagination={{ clickable: true }}
      breakpoints={{
        0: { slidesPerView: 1 },
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
      className="pb-10"
    >
      {items.map((c, i) => (
        <SwiperSlide key={i}>
          <div className="rounded-xl w-full h-56 border border-divider bg-surface p-6 shadow-sm hover:bg-card-inner-bg transition-colors   flex flex-col">
            <div className="flex items-center justify-between  ">
              <h3 className="font-semibold text-lg text-text-primary">{c.name}</h3>
             
            </div>
            <div className="flex items-center gap-0.5" aria-label={`امتیاز ${c.star} از 5`}>
                {[1,2,3,4,5].map((n) => (
                  <span key={n} className={n <= c.star ? "text-yellow" : "text-divider"}>★</span>
                ))}
              </div>
            <p className="mt-7 text-text-primary whitespace-pre-line">{c.comment}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
