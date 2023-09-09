"use client";
import { useState } from "react";
import { Cross as Hamburger } from "hamburger-react";
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";
import { Link as SLink, animateScroll as scroll} from 'react-scroll'
const Pages = ["home", "about", "services", "brand", "influencer"];

export default function Navbar() {
    const [isOpen, setOpen] = useState(false);
    return (
        <div className="flex px-3 sm:px-0  justify-between max-w-7xl m-auto py-5 bg-black items-center">
            <h1 className="text-3xl gap-2 font-bold flex items-center">
                <Image className="rounded-full" src="/logo.jpeg" width={50} height={50} alt="logo" />
                Chakraa
            </h1>
            <div className="flex flex-row gap-7 text-white">
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
            <div className="flex flex-row gap-3">
                <SLink smooth={true} to='contact'  duration={1500} className="px-5 py-1 transition-all hover:bg-white hover:text-black rounded bg-[#6100ff] font-semibold text-lg">
                    Influencer
                </SLink>
                <SLink smooth={true} to="contact" duration={1500} className="px-10 py-1 border transition-all hover:bg-white hover:text-black rounded font-semibold text-lg">
                    Brand
                </SLink>
            </div>
        </div>
    );
}
