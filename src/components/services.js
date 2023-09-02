"use client";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const services = [
    {
        name: "Barter Instagram Creators",
    },
    {
        name: "Barter Youtube Creators",
    },
    {
        name: "Paid Instagram Creators",
    },
    {
        name: "Paid Youtube Creators",
    },
    {
        name: "ECom Ordering and Reviewing",
    },
    {
        name: "Campaigns",
    },
    {
        name: "Store Visit",
    },
    {
        name: "Macro/Celebrities",
    },
    {
        name: "Event Management",
    },
    {
        name: "Seo",
    },
    {
        name: "Social Media Marketing",
    },
    {
        name: "Social Media Creatives",
    },
    {
        name: "Lead Generation",
    },
    {
        name: "Email Marketing",
    },
    {
        name: "Newsletters/ Articles",
    },
];

export default function Services() {
    return (
        <section className="bg-black min-h-screen text-white py-24">
            <div className="relative max-w-7xl m-auto">
                <Image
                    className="absolute -top-52 opacity-10"
                    src="/blob.svg"
                    width={500}
                    height={500}
                    alt="blob"
                />
                <h1 className="text-7xl z-10 font-semibold">What we do</h1>
                <Swiper
                    // spaceBetween={20}
                    // slidesPerView={3}
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: true,
                    }}
                    breakpoints={{
                        640: {
                          slidesPerView: 1,
                          spaceBetween: 20,
                        },
                        768: {
                          slidesPerView: 2,
                          spaceBetween: 20,
                        },
                        1024: {
                          slidesPerView: 3,
                          spaceBetween: 20,
                        },
                      }}
                    modules={[Autoplay]}
                    className="max-w-6xl mx-auto my-40 transition-all"
                >
                    {services.map((el) => (
                        <SwiperSlide
                            className="bg-[#f1f1f1] rounded-3xl text-black "
                            key={services.indexOf(el)+1}
                        >
                            <div className="h-80 flex flex-col py-5 pb-5 justify-between">
                                <h1 className="text-7xl opacity-30 font-extrabold">
                                    {services.indexOf(el)+1}
                                </h1>
                                <h1 className="text-5xl font-bold text-center">
                                    {el.name}
                                </h1>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
