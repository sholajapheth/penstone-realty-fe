"use client"
import Image from "next/image";
import React from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import ListingCard from "./ListingCard";
import { useRouter } from "next/navigation";

const HotListings = () => {
      const router = useRouter();

  return (
    <div className="bg-white flex  justify-center py-[1em] lg:py-[8em] ">
      <div className="w-[85%] lg:w-[85%]">
        <div className="flex gap-3 flex-col lg:flex-row items-start justify-center lg:justify-between">
          <div className="flex justify-center w-full lg:justify-start flex-col lg:flex-row items-start gap-[25px]">
            <p className="text-[#212226] text-center lg:text-left font-semibold text-[32px] w-full lg:w-fit lg:text-[40px] ">
              Hot Featured Listings
            </p>
            <p className="text-[#5A5A5A] hidden lg:block text-[20px] ">
              Explore handpicked Nigeria properties with exceptional{" "}
              <br className="hidden lg:block" /> features in prime locations.
            </p>
            <p className="text-[#5A5A5A] w-full text-center lg:hidden text-[16px]">
              Explore our collection of handpicked, <br /> featured properties
              that stand out for their <br /> exceptional features and prime
              locations.
            </p>
          </div>
          <div className="lg:flex w-full lg:w-fit justify-center items-center gap-4 hidden">
            <button className="rounded-md bg-primary p-2  ">
              <BiChevronLeft color="white" size={30} />
            </button>
            <button className="rounded-md bg-gray-300 p-2 text-primary  ">
              <BiChevronRight size={30} />
            </button>
          </div>
        </div>

        <div className="mt-[4em] flex-wrap flex items-center gap-10 justify-center lg:justify-between ">
          <ListingCard />
          <ListingCard />
          <ListingCard />
        </div>
        <div className="flex items-center justify-center mt-12">
          <button
            className="bg-primary w-full lg:w-fit px-8 py-3 text-white font-medium  rounded-md"
            onClick={() => router.push("/search")}
          >
            View all listings
          </button>
        </div>
      </div>
    </div>
  );
};

export default HotListings;
