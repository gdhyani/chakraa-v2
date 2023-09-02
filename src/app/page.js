import Services from "@/components/services";
import Image from "next/image";
import Link from "next/link";

const services = [];

export default function Home() {
    return (
        <main className="flex m-auto overflow-hidden flex-col">
            <section className="flex max-w-7xl items-center m-auto relative min-h-screen">
                <video
                    className="absolute -z-50 overflow-y-hidden h-max -right-80 opacity-70"
                    loop
                    muted
                    autoPlay
                    width={1200}
                    height={1200}
                    alt="vid"
                    src="/vid.mp4"
                ></video>
                <div className="flex  flex-col gap-8 z-10 w-2/5">
                    <h1 className="text-7xl font-black">
                        Reshape the world of Influencer Marketing.
                    </h1>
                    <h1 className="">
                        Our vision is built on progressive technology, industry
                        expertise, and passion for data. We transform marketing
                        and media companies to work with creators on their
                        fullest market potential.
                    </h1>
                    <div className="flex flex-row gap-3">
                        <button className="px-7 py-2 transition-all hover:bg-white hover:text-black rounded bg-blue-800 font-semibold text-lg">
                            Influencer
                        </button>
                        <button className="px-12 py-2 border transition-all hover:bg-white hover:text-black rounded font-semibold text-lg">
                            Brand
                        </button>
                    </div>
                </div>
            </section>
            <section className="bg-white py-24 text-black ">
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
                    <div className="my-10 flex flex-row m-auto w-4/6">
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
            
        </main>
    );
}
