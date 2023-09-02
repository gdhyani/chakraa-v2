"use client";
import { useState } from "react";
import { Cross as Hamburger } from "hamburger-react";
import { BsArrowRight } from "react-icons/bs";
export default function Navbar() {
    const [isOpen, setOpen] = useState(false);

    return (
        <div className="flex justify-between max-w-7xl m-auto py-5 bg-black items-center">
                <h1 className="text-3xl font-bold">Chakraa</h1>
            <div className="flex flex-row gap-4">
                <button className="border rounded-3xl px-4 py-0 flex flex-row items-center gap-1">
                    Let's Talk
                    <BsArrowRight size={25} />
                </button>
                <button className="border rounded-3xl px-3 py-0">
                    <Hamburger toggled={isOpen} size={24} toggle={setOpen} />
                </button>
            </div>
        </div>
    );
}
