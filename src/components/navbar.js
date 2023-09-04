"use client";
import { useState } from "react";
import { Cross as Hamburger } from "hamburger-react";
import { BsArrowRight } from "react-icons/bs";
export default function Navbar() {
    const [isOpen, setOpen] = useState(false);

    return (
        <div className="flex px-3 sm:px-0 justify-between max-w-7xl m-auto py-5 bg-black items-center">
                <h1 className="text-4xl font-bold">chakraa</h1>
            <div className="flex flex-row gap-4">
                <button className="hidden sm:flex border rounded-3xl px-2 sm:px-4 py-0 flex-row items-center gap-1">
                    Let's Talk
                    <BsArrowRight className="sm:block hidden" size={25} />
                </button>
                <button className="sm:border rounded-3xl px-3 py-0">
                    <Hamburger toggled={isOpen} size={24} toggle={setOpen} />
                </button>
            </div>
        </div>
    );
}
