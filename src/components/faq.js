"use client";
import { BsStarFill, BsArrowDown } from "react-icons/bs";
import React from "react";
import Image from "next/image";
import { Accordion, AccordionItem } from "@nextui-org/react";

const questions = [
    {
        ques: "I am a creator. How can I start working with brands?",
        ans: "Join the CelebFarm creator community by filling up the registration form. We will verify your profile suggest brand collaborations according to your niche and audience.",
    },
    {
        ques: "Why should I choose Chakraa?",
        ans: "In the fast-paced world of marketing, our approach is driven by technology and data. Our team is up-to-date with trends and ever-changing algorithms, giving us an edge.",
    },
    {
        ques: "What’s the difference between a paid and barter campaign?",
        ans: "In a barter campaign, the creator is compensated for their content creation with free product. In a paid campaign, creators receive monetary payment in exchange for collaboration.",
    },
    {
        ques: "How can I qualify for brand collaborations?",
        ans: "We work with creators from all niches. There is no minimum follower number to qualify; you only need to have an authentic following and share genuine content.",
    },
    {
        ques: "How can my brand benefit from influencer marketing?",
        ans: "Influencer marketing delivers 11x more ROI than paid ads and is more affordable in comparison to celebrity endorsements. It is the best way to increase brand awareness and generate sales, especially on a budget.",
    },
];
export default function Faq() {
    return (
        <section className="bg-black min-h-screen text-white py-20">
            <div className="max-w-7xl m-auto flex flex-col sm:flex-row">
                <div className="w-6/12">
                    <h1 className="opacity-50 text-lg">FAQ</h1>
                    <h1 className=" text-6xl font-bold">
                        Most frequently asked questions
                    </h1>
                    <Image
                        className="relative -mb-96 bottom-52 place-self-center opacity-10"
                        src="/blob.svg"
                        width={400}
                        height={400}
                        alt="blog"
                    />
                    <div className="flex flex-row gap-3 mt-5">
                        <BsStarFill
                            className=""
                            color="gold"
                            size={50}
                        />
                        <div>
                            <h1 className="text-lg">Rated 5/5</h1>
                            <h1 className="opacity-50">For over 40 Reviews</h1>
                        </div>
                    </div>
                </div>
                <div className="w-1/2 px-5">
                    {/* accordian */}
                    <Accordion
                        motionProps={{
                            variants: {
                                enter: {
                                    y: 0,
                                    opacity: 1,
                                    height: "auto",
                                    transition: {
                                        height: {
                                            type: "spring",
                                            stiffness: 500,
                                            damping: 30,
                                            duration: 1,
                                        },
                                        opacity: {
                                            easings: "ease",
                                            duration: 1,
                                        },
                                    },
                                },
                                exit: {
                                    y: -10,
                                    opacity: 0,
                                    height: 0,
                                    transition: {
                                        height: {
                                            easings: "ease",
                                            duration: 0.25,
                                        },
                                        opacity: {
                                            easings: "ease",
                                            duration: 0.3,
                                        },
                                    },
                                },
                            },
                        }}
                    >
                        {questions.map((el) => (
                            <AccordionItem
                                className="py-5 font-medium"
                                key={el.ques}
                                aria-label={el.ques}
                                indicator={<BsArrowDown />}
                                title={el.ques}
                            >
                                <h1 className="opacity-60">{el.ans}</h1>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    );
}
