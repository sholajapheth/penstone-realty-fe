"use client"

import React from "react";
import { IoArrowForward } from "react-icons/io5";
import { useRouter } from "next/navigation";

const HeroSection = () => {
      const router = useRouter();
  return (
    <div className="bg-[url('/img/hero-bg.png')]  relative mt-[1em] md:mt-[3em]">
      <div className="bg-black/75  py-[37px] w-full h-full flex justify-center text-center  p-[1em] md:p-[5em] text-white">
        <div className="w-[100%] md:w-[50%] lg:w-[70%] flex flex-col items-center">
          <p className="font-semibold text-[40px] md:text-[70px] lg:leading-[1em] ">
            Market your <br /> property with us
          </p>

          <p className="text-[18px] mb-8 mt-6 lg:mt-10 ">
            Sell your property with us. We&apos;ll expertly showcase it on
            leading property <br className="hidden lg:block" /> listing
            platforms to attract potential buyers, ensuring a seamless and{" "}
            <br className="hidden lg:block" /> efficient sales process for you.
          </p>

          <div className="mt-[1em] flex-col lg:flex-row md:mt-[2em] flex items-center gap-4 lg:gap-8 w-full lg:w-fit">
            <button
              className="bg-primary text-white font-semibold rounded-xl h-full px-[2em] w-full py-3 lg:py-[1em]"
              onClick={() => router.push("/request_form")}
            >
              Arrange a Valuation
            </button>

            <button className="flex items-center gap-4 ">
              <p className="whitespace-nowrap">Selling Guide</p>

              <IoArrowForward />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
