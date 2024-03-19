import React from "react";
import { IoArrowForward } from "react-icons/io5";

const HeroSection = () => {
  return (
    <div className="bg-[url('/img/hero-bg.png')]  relative mt-[1em] md:mt-[3em]">
      <div className="bg-black/75  w-full h-full flex justify-center text-center  p-[1em] md:p-[5em] text-white">
        <div className="w-[98%] md:w-[50%] lg:w-[40%] flex flex-col items-center">
          <p className="font-semibold text-[30px] md:text-[70px] leading-[1em] ">
            Market your <br /> property with us
          </p>

          <p className="text-[18px] mt-10 ">
            Sell your property with us. We'll expertly showcase it on leading
            property listing platforms to attract potential buyers, ensuring a
            seamless and efficient sales process for you.
          </p>

          <div className="mt-[1em] md:mt-[2em] flex items-center gap-8">
            <button className="bg-primary text-white font-semibold rounded-xl h-full px-[2em] py-[1em] ml-8">
              Arrange a Valuation
            </button>

            <button className="flex items-center gap-4 ">
              <p>Selling Guide</p>

              <IoArrowForward />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
