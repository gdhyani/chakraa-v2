"use client";
// import AnimatedCursor from "react-animated-cursor";
import { NextUIProvider } from "@nextui-org/react";
import dynamic from "next/dynamic";

const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
    ssr: false,
});
export function Providers({ children }) {
    return (
        <NextUIProvider>
            {/* <AnimatedCursor/> */}
            {children}
        </NextUIProvider>
    );
}
