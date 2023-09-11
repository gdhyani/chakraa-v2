"use client";
import { useState } from "react";
import { Cross as Hamburger } from "hamburger-react";
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";
import { Link as SLink, animateScroll as scroll } from "react-scroll";
const Pages = ["home", "about", "services", "brand", "influencer"];

export default function Navbar() {
    const [isOpen, setOpen] = useState(false);
    return (
        <div className="flex relative px-3 sm:px-0 justify-between max-w-7xl m-auto py-5 bg-black items-center">
            <h1 className="text-3xl z-50 gap-2 font-bold flex items-center">
                <Image
                    className="rounded-full"
                    src="/logo.jpeg"
                    width={50}
                    height={50}
                    alt="logo"
                />
                Chakraa
            </h1>
            <button className="sm:hidden bg-transparent z-50">
                <Hamburger toggled={isOpen} toggle={setOpen} />
            </button>
            <div className="hidden sm:flex flex-row gap-7 text-white">
                {Pages.map((el) => (
                    <Link
                        className="capitalize hover:bg-[#212121] rounded hover:opacity-100 transition-all py-1 px-3 font-bold opacity-70 text-lg"
                        href="/"
                        key={el}
                    >
                        {el}
                    </Link>
                ))}
            </div>
            <div className="hidden sm:flex flex-row gap-3">
                <SLink
                    smooth={true}
                    to="contact"
                    duration={1500}
                    className="px-5 py-1 transition-all hover:bg-white hover:text-black rounded bg-[#6100ff] font-semibold text-lg"
                >
                    Influencer
                </SLink>
                <SLink
                    smooth={true}
                    to="contact"
                    duration={1500}
                    className="px-10 py-1 border transition-all hover:bg-white hover:text-black rounded font-semibold text-lg"
                >
                    Brand
                </SLink>
            </div>
            <div
                className={`${
                    isOpen ? "absolute" : "hidden"
                } sm:hidden flex flex-col top-0 left-0 z-40 gap-10 px-5 justify-center h-screen w-screen bg-black`}
            >
                {Pages.map((el) => (
                    <Link
                        href={`/${el}`}
                        className="capitalize text-4xl underline underline-offset-8 hover:opacity-60 font-bold"
                    >
                        {el}
                    </Link>
                ))}
                <div className="flex w-full items-center justify-center mt-10 flex-row gap-10">
                    <SLink
                        smooth={true}
                        to="contact"
                        duration={1500}
                        className="px-5 py-1 scale-125 transition-all hover:bg-white hover:text-black rounded bg-[#6100ff] font-semibold text-lg"
                    >
                        Influencer
                    </SLink>
                    <SLink
                        smooth={true}
                        to="contact"
                        duration={1500}
                        className="px-10 py-1 scale-125 border transition-all hover:bg-white hover:text-black rounded font-semibold text-lg"
                    >
                        Brand
                    </SLink>
                </div>
            </div>
        </div>
    );
}
