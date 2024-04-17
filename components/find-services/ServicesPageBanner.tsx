"use client";

import React from "react";
import { IoChevronForward } from "react-icons/io5";
import { useRouter } from "next/navigation";

const ServicesPageBanner = () => {
        const router = useRouter();

  return (
    <div className="text-secondary">
      <div className="bg-[#E6E6E6] relative p-4 py-[3em] md:py-[6em] col-span-2 flex items-center justify-center text-center">
        <div className="bg-[url('/img/showcase-card-bg.png')] absolute w-full inset-0  bg-no-repeat bg-contain bg-right" />

        <div>
          <button className="bg-[#13718A] px-8 py-2 rounded-full text-white ">
            Find a service
          </button>
          <p className="text-[30px] md:text-[68px] leading-[120%] font-inter font-semibold">
            Start your property <br /> success story
          </p>
          <p className="text-[16px] lg:text-[18px] pt-[10px]">
            We are more than just a real estate company; we empower individuals
            in creating <br className="hidden md:inline-block" /> enduring value
            for our stakeholders, while striving to be a catalyst for positive
            change.
          </p>

          <button
            className="bg-primary px-8  font-bold py-3 rounded-xl text-white mt-8"
            onClick={() => router.push("/request_form")}
          >
            Make a Request
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServicesPageBanner;
