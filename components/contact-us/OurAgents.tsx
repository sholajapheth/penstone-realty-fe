"use client";

import Image from "next/image";
import React, { useState } from "react";
import { PaginationNav } from "../common";
import { useRouter } from "next/navigation";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

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
      className="w-[100%] lg:w-[360px] text-center flex flex-col gap-4 items-center justify-center rounded-xl shadow-md p-6 group"
      onClick={() => router.push("/listing")}
    >
      <div className="text-center flex flex-col gap-1 items-center justify-center cursor-pointer">
        <Image
          src={imgSrc}
          alt={name}
          height={250}
          width={250}
          className="group-hover:scale-105 pri-anim"
        />
        <p className="text-[28px] font-semibold pt-2">{name}</p>
        <p>{jobDesc}</p>
        <p className="text-sm">{email}</p>
      </div>
      <div className="bg-[#F4F4F4] h-[1px] w-full"></div>
      <button
        className="border border-primary rounded-md text-secondary px-4 py-2 font-semibold text-sm"
        onClick={() => router.push("/listing")}
      >
        See Listings
      </button>
    </div>
  );
};

const agents = [
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
  },
  // {
  //   name: "Yomife Ade",
  //   email: "egbemodeyomi@gmail.com",
  //   jobDesc: "Real Estate Broker",
  //   imgSrc: "/img/agent_3.png",
  // },
  // {
  //   name: "Yomife Ade",
  //   email: "egbemodeyomi@gmail.com",
  //   jobDesc: "Real Estate Broker",
  //   imgSrc: "/img/agent_2.png",
  // },
  // {
  //   name: "Yomife Ade",
  //   email: "egbemodeyomi@gmail.com",
  //   jobDesc: "Real Estate Broker",
  //   imgSrc: "/img/agent_1.png",
  // },
];

const OurAgents = () => {
     const [currentPage, setCurrentPage] = useState(1);
     const itemsPerPage = 10;

      const totalItems = agents.length || 0;
      const totalPages = Math.ceil(totalItems / itemsPerPage);

      const startIndex = (currentPage - 1) * itemsPerPage;
      const currentItems = agents.slice(
        startIndex,
        startIndex + itemsPerPage
      );

      const handlePageClick = (page: number) => {
        setCurrentPage(page);
      };

  return (
    <div className="bg-white flex  justify-center">
      <div className="w-[90%] lg:w-[85%] py-[1em] md:py-[5em]">
        <div className="flex items-center justify-between gap-2 flex-wrap">
          <p className="font-semibold text-[25px] md:text-[40px] text-secondary">
            Our Agents
          </p>

          <p>
            Explore our collection of handpicked, featured properties that{" "}
            <br className="hidden md:inline-block" /> stand out for their
            exceptional features and prime locations.
          </p>
        </div>

        <div className="flex flex-wrap mt-8 justify-center items-center gap-10">
          {currentItems.map((item, i) => (
            // eslint-disable-next-line react/jsx-key
            <AgentCard
              imgSrc={item.imgSrc}
              email={item.email}
              jobDesc={item.jobDesc}
              name={item.name}
              key={i}
            />
          ))}
        </div>

        {/* <PaginationNav /> */}
        <div className="flex items-center justify-center mt-[1em] md:mt-[4em]">
          <div className="font-bold flex items-center gap-4 ">
            <BiChevronLeft
              size={28}
              className="cursor-pointer"
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            />

            <div className="flex gap-2">
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index + 1}
                  className={`p-4 py-[0.55rem] rounded-full text-white shadow-sm ${
                    currentPage === index + 1 ? "bg-primary" : "bg-gray-300"
                  }`}
                  onClick={() => handlePageClick(index + 1)}
                >
                  {index + 1}
                </button>
              ))}
            </div>

            <BiChevronRight
              size={28}
              className="cursor-pointer"
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurAgents;
