import { FiClock } from "react-icons/fi";
import { MdPunchClock } from "react-icons/md";
import ContactForm from "./contactForm";
import Image from "next/image";
import "../app/globals.css"
export default function Contact() {
    return (
        <section
            id="contact"
            className="py-20 px-3 sm:px-0 text-black bg-white  transition-all"
        >
            <div className="max-w-7xl m-auto flex sm:flex-row flex-col">
                <div className="flex flex-col sm:w-1/2">
                    <h1 className="text-lg opacity-60">Contact</h1>
                    <h1 className="text-6xl font-bold z-10">Get in Touch</h1>
                    <div className="flex sm:mt-8 mt-5 items-center gap-2">
                        <FiClock size={50} />
                        <div className="flex flex-col">
                            <h1 className="text-lg z-10">We'll reach you back </h1>
                            <h1 className="text-lg z-10">within 24 hrs.</h1>
                        </div>
                    </div>
                            <Image
                                className="relative -mb-96 bottom-52 place-self-center opacity-40"
                                src="/blob.svg"
                                width={400}
                                height={400}
                                alt="blog"
                            />
                    {/* <Image className="h-max w-[500px] rounded-3xl mr-20" src="https://images.unsplash.com/photo-1593819467694-f0bd57744f14?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHBhdHRlcm4lMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" width={1000} height={1000} alt="img"/> */}
                </div>
                <div className="sm:w-1/2 mt-20 sm:mt-0 flex">
                    <ContactForm />
                </div>
            </div>
        </section>
    );
}
