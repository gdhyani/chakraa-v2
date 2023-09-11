"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
    MdOutlineKeyboardArrowRight,
    MdOutlineKeyboardArrowLeft,
} from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import { RxAvatar } from "react-icons/rx";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function Testimo() {
    const [swiper, setSwiper] = useState(null);

    return (
        <section className="px-3 sm:px-0 bg-white text-black py-20">
            <div className="max-w-7xl flex m-auto flex-col sm:gap-10 sm:flex-row">
                <div className="flex flex-col sm:2/5">
                    <h1 className="text-2xl opacity-70">Testimonials</h1>
                    <h1 className="sm:text-7xl text-6xl font-bold">
                        What our lovely clients have to say
                    </h1>
                </div>
                <div className="sm:w-1/2 mt-5 sm:mt-0">
                    {/* slider */}
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={20}
                        onSwiper={(s) => {
                            setSwiper(s);
                        }}
                        loop={true}
                        // autoplay={{
                        //     delay: 2500,
                        //     disableOnInteraction: true,
                        // }}
                        modules={[Autoplay]}
                        className="max-w-6xl mx-auto mt-10 mb-20 transition-all"
                    >
                        <SwiperSlide className=" rounded-3xl text-black ">
                            <div className="flex flex-row gap-2">
                                <div className=" overflow-hidden">
                                    <Image className="w-40 sm:w-24 rounded-full overflow-hidden" src="/avatar1.jpg" width={400} height={400} alt="avatar"></Image>
                                </div>
                                <div className="">
                                    <h1 className="text-xl font-bold">John Doe</h1>
                                    <h1 className="text-md">Founder @Company</h1>
                                    <h1 className="text-4xl mt-10 font-medium">"Chakraa took our digital marketing efforts to the next level."</h1>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className=" rounded-3xl text-black ">
                            <div className="flex flex-row gap-2">
                            <div className=" overflow-hidden">
                                    <Image className="w-48 sm:w-32 rounded-full overflow-hidden" src="/avatar2.jpg" width={400} height={400} alt="avatar"></Image>
                                </div>
                                <div className="">
                                    <h1 className="text-xl font-bold">John Doe</h1>
                                    <h1 className="text-md">Founder @Company</h1>
                                    <h1 className="text-4xl mt-10 font-medium">"The design and development process was seamless and collaborative."</h1>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
            <div className="flex gap-3 sm:gap-0 justify-end sm:mr-20">
                <button
                    onClick={() => swiper.slidePrev()}
                    className=" scale-125  p-2 h rounded-full"
                >
                    <MdOutlineKeyboardArrowLeft color="black" size="40" />
                </button>
                <button
                    onClick={() => swiper.slideNext()}
                    className=" scale-125 p-2 bg-black rounded-full"
                >
                    <MdOutlineKeyboardArrowRight color="white" size="40" />
                </button>
            </div>
        </section>
    );
}
