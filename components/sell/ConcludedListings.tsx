import React from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import ListingCard from "./ListingCard";

const ConcludedListings = () => {
  return (
    <div className="bg-white flex  justify-center py-[4em] ">
      <div className="w-[90%] ">
        <div className="flex flex-col lg:flex-row gap-[20px] items-center justify-between ">
          <p className="text-[#212226] text-center lg:text-left font-semibold text-[40px] ">
            Recently concluded Listings
          </p>
          <p className="text-[#5A5A5A] text-[20px] ">
            Everything we touch turns to <span className="underline text-primary font-bold">SOLD</span>
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

        <div className="mt-[4em] flex items-center gap-10 justify-center flex-wrap">
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

export default ConcludedListings;