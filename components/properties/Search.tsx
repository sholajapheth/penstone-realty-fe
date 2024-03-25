import React from "react";
import { CgChevronDown } from "react-icons/cg";
import { IoChevronDownOutline } from "react-icons/io5";
import ListingCard from "../home/ListingCard";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { PaginationNav } from "../common";

const Search = () => {
  return (
    <div className="text-secondary  flex  justify-center">
      <div className=" w-[96%] md:w-[90%]  ">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between mt-[1em] md:mt-[4em] w-full ">
          <p className="font-semibold text-[20px] md:text-[40px] ">
            Explore our properties in Nigeria
          </p>

          <div className="rounded-xl flex items-center border-2 overflow-hidden border-[#D9E2E6] pr-4">
            <input
              placeholder="Search with filter"
              type="search"
              className="focus:outline-none flex-1 p-4"
            />

            <div className="rounded-full p-1 bg-[#D9E2E6]">
              <CgChevronDown />
            </div>
          </div>
        </div>
        <div className="p-6 rounded-xl border-[#D9E2E6] border-2 flex items-center justify-between mt-[1em] md:mt-[3em]">
          <div className="px-4 pl-8 w-full border-r-2 border-secondary ">
            <p className="font-bold text-gray-300">Select Area</p>
            <div className="flex items-center gap-4 mt-1">
              <p className=" text-[18px] font-bold ">Lekki, Lagos state</p>

              <div className="p-1 rounded-full bg-gray-300 text-secondary ">
                <IoChevronDownOutline size={13} />
              </div>
            </div>
          </div>
          <div className="px-4 pl-8 w-full border-r-2 border-secondary ">
            <p className="font-bold text-gray-300">Market Type</p>
            <div className="flex items-center gap-4 mt-1">
              <p className=" text-[18px] font-bold ">Residential</p>

              <div className="p-1 rounded-full bg-gray-300 text-secondary ">
                <IoChevronDownOutline size={13} />
              </div>
            </div>
          </div>
          <div className="px-4 pl-8 w-full border-r-2 border-secondary ">
            <p className="font-bold text-gray-300">Property Type</p>
            <div className="flex items-center gap-4 mt-1">
              <p className=" text-[18px] font-bold ">Fully Detached Duplex</p>

              <div className="p-1 rounded-full bg-gray-300 text-secondary ">
                <IoChevronDownOutline size={13} />
              </div>
            </div>
          </div>
          <div className="px-4 pl-8 w-full border-r-2 border-secondary ">
            <p className="font-bold text-gray-300">Price</p>
            <div className="flex items-center gap-4 mt-1">
              <p className=" text-[18px] font-bold ">N250K-N1M</p>

              <div className="p-1 rounded-full bg-gray-300 text-secondary ">
                <IoChevronDownOutline size={13} />
              </div>
            </div>
          </div>

          <button className="bg-primary text-white font-semibold rounded-xl h-full px-[2em] py-[1em] ml-8">
            Refine
          </button>
        </div>{" "}
        <div className="mt-[4em] grid grid-cols-4 align-middle gap-8 items-center  justify-center w-full">
          <ListingCard />
          <ListingCard />
          <ListingCard />
          <ListingCard />
          <ListingCard />
          <ListingCard />
          <ListingCard />
          <ListingCard />
        </div>
        <PaginationNav />
      </div>
    </div>
  );
};

export default Search;
