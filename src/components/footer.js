import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <section className="bg-white border-t-8  border-black text-black ">
            <div className="max-w-7xl  m-auto flex flex-col sm:flex-row ">
                <div className="flex flex-col  sm:w-1/2 p-10 sm:p-20">
                    <h1 className="font-extrabold text-5xl sm:text-7xl mt-5 mb-5 sm:mb-10">
                        Chakraa
                    </h1>
                    <p className="text-lg sm:text-xl">
                        We are dedicated to establishing brand communication
                        through sharp cutting-edge approaches, first-hand
                        storytelling, strategic engagement and polished
                        influencer marketing.
                    </p>
                    <div className="flex flex-row mt-5 sm:mt-10 gap-5">
                        <Link
                            className=""
                            href="https://www.facebook.com/profile.php?id=100092988917374"
                        >
                            <Image
                                height={30}
                                width={30}
                                className=""
                                alt="icon"
                                src="/facebook.svg"
                            />
                        </Link>
                        <Link
                            className=""
                            href="https://www.instagram.com/chakraa360marketing/ "
                        >
                            <Image
                                height={30}
                                width={30}
                                className=""
                                alt="icon"
                                src="/instagram.svg"
                            />
                        </Link>
                        <Link className="" href="/">
                            <Image
                                height={30}
                                width={30}
                                className=""
                                alt="icon"
                                src="/twitter.svg"
                            />
                        </Link>
                        <Link
                            className=""
                            href="https://api.whatsapp.com/send/?phone=918506072348"
                        >
                            <Image
                                height={30}
                                width={30}
                                className=""
                                alt="icon"
                                src="/whatsapp.svg"
                            />
                        </Link>
                    </div>
                </div>
                <div className="flex sm:w-1/2 gap-10 p-10 sm:p-0">
                    <div className="flex sm:w-1/3 mt-0 sm:mt-10 py-0  sm:py-20 flex-col">
                        <h1 className="font-extrabold text-xl mb-3  ">
                            Quick Links
                        </h1>
                        <div className="flex flex-col sm:text-lg gap-1">
                            <Link className=" " href="/">
                                Home
                            </Link>
                            <Link className=" " href="/services">
                                Our Service
                            </Link>
                            <Link className=" " href="/influencer">
                                Influencer
                            </Link>
                            <Link className=" " href="/brand">
                                Brand
                            </Link>
                            <Link className=" " href="/contact">
                                Contact
                            </Link>
                        </div>
                    </div>
                    <div className="flex flex-col w-1/2 mt-0 sm:mt-10 py-0 sm:py-20">
                        <h1 className="font-extrabold text-xl mb-3  ">
                            Contact Details
                        </h1>
                        <div className="flex flex-col gap-2">
                            <div className="flex flex-row gap-2">
                                <Image
                                    height={25}
                                    width={25}
                                    className=""
                                    alt="icon"
                                    src="/phone.svg"
                                />
                                <h1>8506072348</h1>
                            </div>
                            <div className="flex flex-row gap-2">
                                <Image
                                    height={25}
                                    width={25}
                                    className=""
                                    alt="icon"
                                    src="/mail.svg"
                                />

                                <h1>Chakraa.01@gmail.com</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
