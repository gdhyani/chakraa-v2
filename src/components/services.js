"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";

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
        name: "Macro/ Celebrities",
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
    const [swiper, setSwiper] = useState(null);
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
                <h1 className="text-7xl z-10 font-semibold">Services</h1>
                <h1 className="text-2xl z-10 opacity-50">What we do</h1>
                {/* <hr></hr> */}
                <div className="flex md:flex-col flex-col-reverse reverse">
                    {/* buttons */}
                    <div className="flex justify-end gap-5 mt-10 mr-20">
                        <button
                            onClick={() => swiper.slidePrev()}
                            className="prevEl bg-white border-4 p-2 hover:bg-black rounded-full"
                        >
                            <FiArrowLeft color="grey" size="50" />
                        </button>
                        <button
                            onClick={() => swiper.slideNext()}
                            className="nextEl bg-white border-4 p-2 hover:bg-black rounded-full"
                        >
                            <FiArrowRight color="grey" size="50" />
                        </button>
                    </div>
                    {/* slider */}
                    <Swiper
                        // spaceBetween={20}
                        // slidesPerView={3}
                        onSwiper={(s) => {
                            console.log("initialize swiper", s);
                            setSwiper(s);
                        }}
                        loop={true}
                        autoplay={{
                            delay: 1500,
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
                        className="max-w-6xl mx-auto mt-10 mb-20 transition-all"
                    >
                        {services.map((el) => (
                            <SwiperSlide
                                className="bg-[#f1f1f1] rounded-3xl text-black "
                                key={services.indexOf(el) + 1}
                            >
                                <div className="h-80 flex flex-col px-5 pb-5 justify-between">
                                    <h1 className="text-7xl opacity-30 font-extrabold">
                                        {services.indexOf(el) + 1}
                                    </h1>
                                    <h1 className="text-5xl font-bold text-center">
                                        {el.name}
                                    </h1>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
}
