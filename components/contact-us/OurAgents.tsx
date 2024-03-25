import Image from "next/image";
import React from "react";
import { PaginationNav } from "../common";

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
  return (
    <div className="text-center flex flex-col gap-4 items-center justify-center rounded-xl shadow-md p-6 group">
      <Image
        src={imgSrc}
        alt={name}
        height={200}
        width={200}
        className="group-hover:scale-110 pri-anim"
      />
      <p className="text-[28px] font-semibold ">{name}</p>
      <p>{jobDesc}</p>
      <p className="text-sm">{email}</p>
      <hr />
      <button className="border border-primary rounded-md text-secondary px-4 py-2 font-semibold text-sm">
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
    name: "Yomife Ade",
    email: "egbemodeyomi@gmail.com",
    jobDesc: "Real Estate Broker",
    imgSrc: "/img/agent_1.png",
  },
  {
    name: "Yomife Ade",
    email: "egbemodeyomi@gmail.com",
    jobDesc: "Real Estate Broker",
    imgSrc: "/img/agent_1.png",
  },
  {
    name: "Yomife Ade",
    email: "egbemodeyomi@gmail.com",
    jobDesc: "Real Estate Broker",
    imgSrc: "/img/agent_1.png",
  },
  {
    name: "Yomife Ade",
    email: "egbemodeyomi@gmail.com",
    jobDesc: "Real Estate Broker",
    imgSrc: "/img/agent_1.png",
  },
  {
    name: "Yomife Ade",
    email: "egbemodeyomi@gmail.com",
    jobDesc: "Real Estate Broker",
    imgSrc: "/img/agent_1.png",
  },
  {
    name: "Yomife Ade",
    email: "egbemodeyomi@gmail.com",
    jobDesc: "Real Estate Broker",
    imgSrc: "/img/agent_1.png",
  },
  {
    name: "Yomife Ade",
    email: "egbemodeyomi@gmail.com",
    jobDesc: "Real Estate Broker",
    imgSrc: "/img/agent_1.png",
  },
  {
    name: "Yomife Ade",
    email: "egbemodeyomi@gmail.com",
    jobDesc: "Real Estate Broker",
    imgSrc: "/img/agent_1.png",
  },
  {
    name: "Yomife Ade",
    email: "egbemodeyomi@gmail.com",
    jobDesc: "Real Estate Broker",
    imgSrc: "/img/agent_1.png",
  },
];

const OurAgents = () => {
  return (
    <div className=" p-[1em] md:p-[5em]">
      <div className="flex items-center justify-between ">
        <p className="font-semibold text-[25px] md:text-[40px] text-secondary">
          Our Agents
        </p>

        <p>
          Explore our collection of handpicked, featured properties that{" "}
          <br className="hidden md:inline-block" /> stand out for their
          exceptional features and prime locations.
        </p>
      </div>

      <div className="flex flex-wrap gap-8 mt-8 justify-center items-center">
        {agents.map((item) => (
          <AgentCard
            imgSrc={item.imgSrc}
            email={item.email}
            jobDesc={item.jobDesc}
            name={item.name}
          />
        ))}
      </div>

      <PaginationNav />
    </div>
  );
};

export default OurAgents;
