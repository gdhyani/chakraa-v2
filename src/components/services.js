"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";
import "../app/globals.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const services = [
    {
        name: "Barter Instagram Creators",
        url: "https://images.unsplash.com/photo-1572573309811-48474d1891b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
    },
    {
        name: "Barter Youtube Creators",
        url: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    },
    {
        name: "Paid Instagram Creators",
        url: "https://images.unsplash.com/photo-1596526131090-bcbe09e432d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    },
    {
        name: "Paid Youtube Creators",
        url: "https://images.unsplash.com/photo-1576097383839-4bedeef62543?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHlvdXR1YmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
        name: "ECom Ordering and Reviewing",
        url: "https://images.unsplash.com/photo-1554774853-7f03caeb4b15?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGUlMjBjb21tZXJjZSUyMHByb2R1Y3R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
        name: "Campaigns",
        url: "https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2FtcGFpZ258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
        name: "Store Visit",
        url: "https://images.unsplash.com/photo-1604565065781-b83750669144?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c3RvcmUlMjB2aXNpdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
        name: "Macro/ Celebrities",
        url: "https://images.unsplash.com/photo-1578776704351-d900ace79a76?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2VsZWJyaXRpZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
        name: "Event Management",
        url: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZXZlbnQlMjBtYW5hZ2VtZW50fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    },
    {
        name: "Seo",
        url: "https://images.unsplash.com/photo-1616469829718-0faf16324280?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fFNFT3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
        name: "Social Media Marketing",
        url: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c29jaWFsJTIwbWVkaWElMjBtYXJrZXRpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
        name: "Social Media Creatives",
        url: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNvY2lhbCUyMG1lZGlhJTIwbWFya2V0aW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    },
    {
        name: "Lead Generation",
        url: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGVhZCUyMGdlbmVyYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
        name: "Email Marketing",
        url: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZW1haWwlMjBtYXJrZXRpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
        name: "Newsletters/ Articles",
        url: "https://images.unsplash.com/photo-1512236258305-32fb110fdb01?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG5ld3NsZXR0ZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    },
];

export default function Services() {
    const [swiper, setSwiper] = useState(null);
    return (
        <section className="bg-black min-h-screen px-3 sm:px-0 text-white py-24">
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
                <div className="flex sm:flex-col flex-col-reverse reverse">
                    {/* buttons */}
                    <div className="flex justify-end gap-5 mt-10 sm:mr-20">
                        <button
                            onClick={() => swiper.slidePrev()}
                            className="prevEl hover:bg-white border-4 p-2 bg-black rounded-full"
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
                                slidesPerView: 2,
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
                        className="max-w-6xl mx-auto mt-10 mb-10 sm:mb-20 transition-all"
                    >
                        {services.map((el) => (
                            <SwiperSlide
                                className="group"
                                key={services.indexOf(el) + 1}
                            >
                                <div className="relative w-96 sm:w-auto h-96 flex flex-col pb-5 justify-between">
                                    <Image
                                        className="sm:opacity-30 opacity-60 group-hover:opacity-50 rounded-3xl object-cover w-full h-96"
                                        src={el.url}
                                        alt=""
                                        width={1000}
                                        height={1000}
                                    />
                                    <div className="absolute w-full flex p-3 justify-between flex-col h-full pb-10">
                                        <h1 className="text-7xl newFont opacity-40 font-extrabold">
                                            {services.indexOf(el) + 1}
                                        </h1>
                                        <h1 className="text-5xl font-bold text-center">
                                            {el.name}
                                        </h1>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
}
