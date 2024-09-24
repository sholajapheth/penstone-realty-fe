"use client";

import Image from "next/image";
import React, {useEffect, useMemo, useState} from "react";
import {PaginationNav} from "../common";
import {useRouter} from "next/navigation";
import {BiChevronLeft, BiChevronRight} from "react-icons/bi";
import {useAPI} from "@/app/lib/useApi";
import {getAgents} from "@/app/api/UseUser";
import {useDeviceType} from "@/hooks/useDeviceType";

const AgentCard = ({
                       imgSrc,
                       name,
                       jobDesc,
                       email,
                   }: {
    imgSrc: string;
    name: string;
    jobDesc: string;
    email: string;
}) => {
    const router = useRouter();

    return (
        <div
            className="w-[100%] lg:w-[360px] text-center flex flex-col gap-4 items-center justify-center rounded-xl shadow-2xl p-6 group"
        >
            <div className="text-center flex flex-col gap-1 items-center justify-center cursor-pointer">
                <div className={"rounded-full overflow-hidden w-[20em] h-[20em]"}>
                    <img
                        src={imgSrc || "/img/agent_1.png"}
                        alt={"agent image"}
                        className="group-hover:scale-105 pri-anim bg-cover bg-center bg-no-repeat w-full h-full"
                    />
                </div>
                <p className="text-[28px] font-semibold pt-2">{name}</p>
                <p>{jobDesc || "Pentstone Agent"}</p>
                <p className="text-sm text-slate-500">{email}</p>
            </div>
            <div className="bg-[#F4F4F4] h-[1px] w-full"></div>
            <button
                className="border-2 border-primary rounded-md text-secondary px-4 py-2 font-semibold text-sm"
                onClick={() => router.push("/listing?" + new URLSearchParams({agentEmail: email}).toString())}
            >
                See Listings
            </button>
        </div>
    );
};

const _agents = [
    {
        name: "Yomife Ade",
        email: "egbemodeyomi@gmail.com",
        jobDesc: "Real Estate Broker",
        imgSrc: "/img/agent_1.png",
    },
    {
        name: "Joe Daniel",
        email: "egbemodeyomi@gmail.com",
        jobDesc: "Real Estate Broker",
        imgSrc: "/img/agent_2.png",
    },
    {
        name: "Ogundipe Tosin",
        email: "egbemodeyomi@gmail.com",
        jobDesc: "Real Estate Broker",
        imgSrc: "/img/agent_3.png",
    },
    {
        name: "Badejo Bayo",
        email: "egbemodeyomi@gmail.com",
        jobDesc: "Real Estate Broker",
        imgSrc: "/img/agent_4.png",
    },
    {
        name: "Tope Bello",
        email: "egbemodeyomi@gmail.com",
        jobDesc: "Real Estate Broker",
        imgSrc: "/img/agent_5.png",
    },
    {
        name: "Chioma Thompson",
        email: "egbemodeyomi@gmail.com",
        jobDesc: "Real Estate Broker",
        imgSrc: "/img/agentt_6.png",
    }
];

const OurAgents = () => {
    const {useAPIQuery} = useAPI();
    const deviceType = useDeviceType();
    const [currentPage, setCurrentPage] = useState(1);

    function scrollTo(element_id: string) {
        const element = document.getElementById(element_id)
        element?.scrollIntoView({behavior: "smooth", block: "start", inline: "start"});
    }

    const itemsPerPage = useMemo(() => {
        switch (deviceType) {
            case "desktop":
                return 9;
            case "tablet":
                return 6;
            default:
                return 3;
        }
    }, [deviceType])

    const {data: agents} = useAPIQuery({
        queryKey: ["agents"],
        queryFn: getAgents
    })

    // @ts-ignore
    const totalItems = agents?.agents?.length || 0;
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const startIndex = (currentPage - 1) * itemsPerPage;
    // @ts-ignore
    const currentItems = agents?.agents?.slice(
        startIndex,
        startIndex + itemsPerPage
    );

    const handlePageClick = (page: number) => {
        setCurrentPage(page);
    };

    return (
        <div className="bg-white flex  justify-center">
            <div className="w-[90%] lg:w-[85%] max-w-[1200px] py-[1em] md:py-[5em]">
                <div className="flex items-center justify-between gap-2 flex-wrap">
                    <p className="font-semibold text-[25px] md:text-[40px] text-secondary">
                        Our Agents
                    </p>

                    <p>
                        Explore our collection of handpicked, featured properties that{" "}
                        <br className="hidden md:inline-block"/> stand out for their
                        exceptional features and prime locations.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full pt-20">
                    {agents && currentItems.map((item: any, i: any) => (
                        // eslint-disable-next-line react/jsx-key
                        <AgentCard
                            imgSrc={item.image}
                            email={item.email}
                            jobDesc={item.jobTitle}
                            name={item.name}
                            key={i}
                        />
                    ))}
                </div>

                {/* <PaginationNav /> */}
                <div className="flex items-center justify-center my-[4em]">
                    <div className="font-bold flex items-center gap-4 ">
                        <BiChevronLeft
                            size={28}
                            className={`cursor-pointer ${currentPage <= 1 ? "text-gray-300" : ""}`}
                            onClick={() => {
                                scrollTo("listing-box");
                                setCurrentPage((prev) => Math.max(prev - 1, 1));
                            }}
                        />

                        <div className="flex gap-2 items-center">
                            {Array.from({length: Math.min(totalPages, 5)}, (_, index) => (
                                <button
                                    key={index + 1}
                                    className={`p-4 py-[0.55rem] rounded-full text-white shadow-sm ${
                                        currentPage === index + 1 ? "bg-primary" : "bg-gray-300"
                                    }`}
                                    onClick={() => {
                                        scrollTo("listing-box");
                                        handlePageClick(index + 1);
                                    }}
                                >
                                    {index + 1}
                                </button>
                            ))}
                            {
                                totalPages > 5 && (
                                    <>
                                        {
                                            ((totalPages - 5) > 1) && (
                                                <>
                                                    <p>•</p>
                                                    <p>•</p>
                                                    <p>•</p>
                                                </>
                                            )
                                        }
                                        <button
                                            key={totalPages}
                                            className={`p-4 py-[0.55rem] rounded-full text-white shadow-sm ${
                                                currentPage === totalPages ? "bg-primary" : "bg-gray-300"
                                            }`}
                                            onClick={() => {
                                                scrollTo("listing-box");
                                                handlePageClick(totalPages);
                                            }}
                                        >
                                            {totalPages}
                                        </button>
                                    </>
                                )
                            }
                        </div>

                        <BiChevronRight
                            size={28}
                            className={`cursor-pointer ${currentPage >= totalPages ? "text-gray-300" : ""}`}
                            onClick={() => {
                                scrollTo("listing-box");
                                setCurrentPage((prev) => Math.min(prev + 1, totalPages));
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurAgents;
