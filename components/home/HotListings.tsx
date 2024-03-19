import Image from "next/image";
import React from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import ListingCard from "./ListingCard";

const HotListings = () => {
  return (
    <div className="bg-white min-h-screen flex  justify-center py-[4em] ">
      <div className="w-[90%] ">
        <div className="flex items-start justify-between  ">
          <p className="text-[#212226] font-semibold text-[40px] ">
            Hot Featured Listings
          </p>
          <p className="text-[#5A5A5A] text-[20px] ">
            Explore handpicked Nigeria properties with exceptional <br />{" "}
            features in prime locations.
          </p>
          <div className="flex gap-4">
            <button className="rounded-md bg-primary p-2  ">
              <BiChevronLeft color="white" size={30} />
            </button>
            <button className="rounded-md bg-gray-300 p-2 text-primary  ">
              <BiChevronRight size={30} />
            </button>
          </div>
        </div>

        <div className="mt-[4em] flex items-center gap-10 justify-center ">
          <ListingCard />
          <ListingCard />
          <ListingCard />
        </div>
        <div className="flex items-center justify-center mt-12">
          <button className="bg-primary px-8 py-3 text-white font-medium  rounded-md">
            View all listings
          </button>
        </div>
      </div>
    </div>
  );
};

export default HotListings;
