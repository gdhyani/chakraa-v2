"use client";
import React from "react";
import {
    Tabs,
    Tab,
    Input,
    Link,
    Button,
    Card,
    CardBody,
    CardHeader,
} from "@nextui-org/react";

export default function ContactForm(props) {
    const [selected, setSelected] = React.useState("login");

    return (
        <div className="light flex flex-col w-full transition-all">
            <Card className="max-w-full  ">
                <CardBody className="overflow-hidden">
                    <Tabs
                        fullWidth
                        size="lg"
                        defaultSelectedKey={props}
                        // variant="underlined"
                        aria-label="Tabs form"
                        selectedKey={selected}
                        onSelectionChange={setSelected}
                    >
                        <Tab
                            className="font-bold"
                            key="influencer"
                            title="Influencer"
                        >
                            <form className="flex flex-col justify-between gap-4">
                                <div className="flex flex-col gap-4">
                                    <Input
                                        isRequired
                                        variant="bordered"
                                        label="Name"
                                        type="text"
                                    />
                                    <Input
                                        isRequired
                                        variant="bordered"
                                        label="Social Media Handle"
                                        type="text"
                                    />
                                    <Input
                                        isRequired
                                        variant="bordered"
                                        label="Followers"
                                        type="text"
                                    />
                                    <Input
                                        isRequired
                                        variant="bordered"
                                        label="Category"
                                        type="text"
                                    />
                                    <Input
                                        isRequired
                                        variant="bordered"
                                        label="City"
                                        type="text"
                                    />
                                    <Input
                                        isRequired
                                        variant="bordered"
                                        label="Email"
                                        type="email"
                                    />
                                    <Input
                                        variant="bordered"
                                        isRequired
                                        label="Phone"
                                        type="number"
                                        startContent={
                                            <div className="pointer-events-none flex items-center">
                                                <span className="text-default-400 text-small">
                                                    +91
                                                </span>
                                            </div>
                                        }
                                    />
                                </div>

                                <Button
                                        fullWidth
                                        variant="shadow"
                                        className="bg-[#6100ff] mt-7 text-white font-bold"
                                    >
                                        Get Started
                                    </Button>
                            </form>
                        </Tab>
                        <Tab
                            className="font-semibold"
                            key="brand"
                            title="Brand"
                        >
                            <form className="flex flex-col gap-4 ">
                                <Input
                                    isRequired
                                    variant="bordered"
                                    label="Brand Name"
                                    type="text"
                                />
                                <Input
                                    isRequired
                                    variant="bordered"
                                    label="Your Name"
                                    type="text"
                                />
                                <Input
                                    isRequired
                                    variant="bordered"
                                    label="Email"
                                    type="email"
                                />
                                <Input
                                    isRequired
                                    variant="bordered"
                                    label="Phone"
                                    type="text"
                                />
                                <Input
                                    isRequired
                                    variant="bordered"
                                    label="Company Description"
                                    type="text"
                                />

                                <div className="flex gap-2 mt-7 justify-end">
                                    <Button
                                        fullWidth
                                        variant="shadow"
                                        className="bg-[#6100ff] text-white font-bold"
                                    >
                                        Get Started
                                    </Button>
                                </div>
                            </form>
                        </Tab>
                    </Tabs>
                </CardBody>
            </Card>
        </div>
    );
}
