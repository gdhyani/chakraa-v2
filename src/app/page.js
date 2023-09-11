"use client"
import Contact from "@/components/contact";
import Faq from "@/components/faq";
import Services from "@/components/services";
import Testimo from "@/components/testimo";
import Image from "next/image";
import Link from "next/link";
import { Link as SLink, animateScroll as scroll} from 'react-scroll'


const services = [];

export default function Home() {
    return (
        <main className="flex m-auto overflow-hidden flex-col">
            <section className="flex px-3 sm:px-0 max-w-7xl items-center py-36 sm:py-0 m-auto relative sm:min-h-screen">
                <video
                    className="sm:block hidden absolute -z-50 overflow-y-hidden h-max -right-80 opacity-80"
                    loop
                    muted
                    autoPlay
                    width={1200}
                    height={1200}
                    alt="vid"
                    src="/vid.mp4"
                ></video>
                <div className="flex flex-col gap-8 z-10 sm:w-2/5">
                    <h1 className="sm:text-7xl text-6xl w-10/12 sm:w-auto font-black">
                        Reshape the world of <span className="animate-text bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100 bg-clip-text text-transparent">Influencer Marketing</span>.
                    </h1>
                    <h1 className="">
                        Our vision is built on progressive technology, industry
                        expertise, and passion for data. We transform marketing
                        and media companies to work with creators on their
                        fullest market potential.
                    </h1>
                    <div className="flex flex-row gap-3">
                    <SLink smooth={true} to='contact'  duration={1500} className="px-5 py-1 transition-all hover:bg-white hover:text-black rounded bg-[#6100ff] font-semibold text-lg">
                    Influencer
                </SLink>
                <SLink smooth={true} to="contact" duration={1500} className="px-10 py-1 border transition-all hover:bg-white hover:text-black rounded font-semibold text-lg">
                    Brand
                </SLink>
                    </div>
                </div>
            </section>
            <section className="w-screen h-24 bg-white"></section>
            <section className="pt-10 px-3 sm:px-0 min-h-screen  bg-black text-white">
                <div className="flex flex-col-reverse max-w-7xl m-auto gap-40 pt-24 pb-16 sm:pb-40">
                    <div className="flex relative gap-5 overflow-hidden sm:flex-row flex-col">
                        <Image
                            className="sm:absolute -left-80 overflow-hidden"
                            // src="/data.webp"
                            src="https://images.unsplash.com/photo-1501526029524-a8ea952b15be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGRhdGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                            width={1000}
                            height={1000}
                            alt=""
                        />
                        <div className="flex flex-col mt-5 pb-10 gap-3 sm:w-5/12 ml-auto">
                            <h1 className="text-5xl font-bold">
                                Data is your best friend to enhance your ROI!
                            </h1>
                            <h1 className="text-xl opacity-60">
                                Get beyond just an overall impression when
                                evaluating influencers. Post For Rent provides
                                interfaces that reveal the key data points
                                behind their social performance. Use this data
                                to maximize your ROI with the most relevant
                                influencers. 
                            </h1>
                            <h1 className="text-xl opacity-60">The Agency ERP software serves as
                                the hub for all third-party integrations and
                                marketing stack, offering a highly sophisticated
                                and comprehensive solution for influencer
                                marketing.</h1>
                            <button className="bg-[#6100ff] rounded px-4 py-2 w-fit my-3 hover:border-[#6100ff] hover:bg-transparent hover:text-white">
                                CHECKOUT OUR TOOL
                            </button>
                        </div>
                    </div>
                     <div className="flex relative gap-5 sm:flex-row-reverse flex-col overflow-hidden">
                        <Image
                            className="overflow-hidden sm:absolute -right-72"
                            // src="/data2.webp"
                            src="https://images.unsplash.com/photo-1495592822108-9e6261896da8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGRhdGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                            width={1000}
                            height={1000}
                            alt=""
                        />
                        <div className="flex mt-20 pb-10 flex-col gap-3 sm:w-5/12 mr-auto">
                            <h1 className="text-5xl font-bold">
                                Based on your goals!
                            </h1>
                            <h1 className="text-xl opacity-60">
                                You set the objectives, and we deliver the plan
                                that matches your brand values and tone of
                                voice.
                            </h1>
                            <div className="ml-4 flex flex-col gap-5">
                                <h1 className="border-l-2 border-[#6100ff] pl-2">
                                    Dedicated campaign experts: Our team of
                                    experts focus on a tailored approach for
                                    each client. We dive into your brand's
                                    campaign goals, challenges, and we frame the
                                    roadmap to the desired results. 
                                </h1>
                                <h1 className="border-l-2 border-[#6100ff] pl-2">
                                    Competitor Analysis: We analyze relevant
                                    market players, so we can help you stay
                                    ahead of the game.
                                </h1>
                                <h1 className="border-l-2 border-[#6100ff] pl-2">
                                    Estimated results: We use complex
                                    calculations based on multiple audience data
                                    points to give you estimated campaign
                                    results before committing to the campaign.
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="px-3 sm:px-0 bg-white py-24 text-black ">
                <div className="flex flex-col text-center max-w-7xl m-auto">
                    <h1 className="text-7xl font-bold z-10">Platforms</h1>
                    <Image
                        className="relative -mb-96 bottom-52 place-self-center opacity-40"
                        src="/blob.svg"
                        width={400}
                        height={400}
                        alt="blog"
                    />
                    <h1 className="text-2xl opacity-80">We operates in</h1>
                    <div className="my-20 scale-115 flex flex-row m-auto sm:w-4/6">
                        <Image
                            className="z-10"
                            src="/js.png"
                            width={1000}
                            height={1000}
                            alt="img"
                        ></Image>
                    </div>
                    <h1 className="text-xl m-auto max-w-5xl opacity-50">
                        Every platform has its own demographics, rules and
                        styles, and knowing which platforms are right for the
                        brand is very important. We have a huge pool of
                        influencers in the above - mentioned platforms, which we
                        deploy for our campaigns.
                    </h1>
                </div>
            </section>
            {/* <section>
              <Image className="w-screen bg-black" src="/gwp.svg" width={100} height={100} alt="gwp"/>
            </section> */}

            {/* services */}
            <Services />
            <Testimo />
            <Faq/>
            <Contact/>
        </main>
    );
}
