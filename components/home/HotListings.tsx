"use client";
import Image from "next/image";
import React from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import ListingCard from "./ListingCard";
import { useRouter } from "next/navigation";
import { useAPI } from "@/app/lib/useApi";
import { listings } from "@/app/api/UseUser";

const HotListings = () => {
  const router = useRouter();
  const { useQuery } = useAPI();

    const { data: lists } = useQuery({
      queryKey: ["lists"],
      queryFn: () =>
        listings("rank", "asc", {
          filters: {
            marketType: undefined,
            propertyType: undefined,
            area: undefined,
            price: {
              min: undefined,
              max: undefined,
            },
            category: undefined
          },
        }),
    });


  return (
    <div className="bg-white flex  justify-center py-[1em] lg:py-[8em] ">
      <div className="w-[90%] lg:w-[85%] max-w-[1200px]">
        <div className="flex gap-3 flex-col lg:flex-row items-start justify-center lg:justify-between">
          <div className="flex justify-center w-full lg:justify-start flex-col lg:flex-row items-start gap-[20px] lg:gap-[25px]">
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
            {/*<button className="rounded-md bg-primary p-2  ">*/}
            <button className="rounded-md bg-gray-300 p-2 text-primary" disabled={true} >
              <BiChevronLeft size={30} />
              {/*<BiChevronLeft color="white" size={30} />*/}
            </button>
            <button className="rounded-md bg-gray-300 p-2 text-primary" disabled={true} >
              <BiChevronRight size={30} />
            </button>
          </div>
        </div>

        <div className="mt-[3em] lg:mt-[4em] flex-wrap flex items-center gap-10 justify-center ">
          {lists &&
            lists.properties &&
            lists.properties.slice(0, 3).map((list: any, i: any) => {
              return (
                <ListingCard
                  // propertyId={list.propertyId}
                  // streetAddress={list.streetAddress}
                  // unitNumber={list.unitNumber}
                  // city={list.city}
                  // state={list.state}
                  // zipcode={list.zipcode}
                  lists={list}
                  key={i}
                />
              );
            })}
          {/* <ListingCard lists={lists} /> */}
          {/* <ListingCard lists={lists} /> */}
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
