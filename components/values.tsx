"use client";

import Image from "next/image";
import SectionTitle from "./ui/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { values, Value } from "@/lib/content";

export default function Values() {
    // Chunk values into groups of 3 to form each slide for <md
    const chunks: Value[][] = [];
    for (let i = 0; i < values.length; i += 3) {
        chunks.push(values.slice(i, i + 3));
    }
    return (
        <section className=" py-16 border-t ">
            <div className="max-w-6xl mx-auto px-4">
                {/* Title */}
                <SectionTitle>ارزش‌های اصلی مانایا</SectionTitle>

                {/* Grid for md and up */}
                <div className="mt-10 hidden md:block">
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {values.map((item, index) => (
                            <div
                                key={index}
                                className="bg-surface shadow-sm rounded-2xl py-10 px-6 text-start flex flex-col gap-3 hover:bg-card-inner-bg transition"
                            >
                                <div className="flex text-start gap-2 mb-3">
                                    <Image src={item.icon ?? "/icons/check.svg"} className="text-primary" alt={item.title} width={20} height={20} />
                                    <h3 className="font-extrabold text-xl text-text-primary">{item.title}</h3>
                                </div>
                                <p className="text-text-secondary text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Slider for <md (base + sm): each slide contains 3 stacked cards */}
                <div className="block md:hidden mt-10">
                    <Swiper
                        modules={[Pagination]}
                        spaceBetween={16}
                        slidesPerView={1}
                        pagination={{ clickable: true }}
                        className="pb-8"
                    >
                        {chunks.map((group, idx) => (
                            <SwiperSlide key={idx}>
                                <div className="flex flex-col gap-6">
                                    {group.map((item, index) => (
                                        <div
                                            key={`${idx}-${index}`}
                                            className="bg-surface shadow-sm rounded-2xl py-10 px-6 text-start flex flex-col gap-3 hover:bg-card-inner-bg transition"
                                        >
                                            <div className="flex text-start gap-2 mb-3">
                                                <Image src={item.icon ?? "/icons/check.svg"} className="text-primary" alt={item.title} width={20} height={20} />
                                                <h3 className="font-extrabold text-xl text-text-primary">{item.title}</h3>
                                            </div>
                                            <p className="text-text-secondary text-sm">{item.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
}
