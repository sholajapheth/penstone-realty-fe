"use client";

import React from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import ListingCard from "./ListingCard";
import { useRouter } from "next/navigation";
import { useAPI } from "@/app/lib/useApi";
import { listings } from "@/app/api/UseUser";

const ConcludedListings = () => {
  const router = useRouter();
  const { useQuery } = useAPI();

  const { data: lists } = useQuery({
    queryKey: ["lists"],
    queryFn: () =>
      listings("rank", "asc", {
        filters: {
          area: undefined,
          marketType: undefined,
          propertyType: undefined,
          price: {
            min: undefined,
            max: undefined,
          },
        },
      }),
  });

  return (
    <div className="flex justify-center">
      <div className="w-[90%] lg:w-[85%] max-w-[1200px]">
        <div className="bg-white flex  justify-center pt-[3em] lg:pt-[5em] pb-[2em] ">
          {" "}
          <div className="w-full">
            <div className="flex flex-col lg:flex-row gap-[20px] items-center justify-between ">
              <div className="flex flex-col lg:flex-row gap-[10px] items-center justify-between ">
                <p className="text-[#212226] text-center lg:text-left font-semibold text-[32px] lg:text-[40px] ">
                  Recently concluded Listings
                </p>
                <p className="text-[#5A5A5A] text-[20px] ">
                  Everything we touch turns to{" "}
                  <span className="underline text-primary font-bold">SOLD</span>
                </p>
              </div>
              <div className="hidden lg:flex gap-4">
                <button className="rounded-md bg-primary p-2  ">
                  <BiChevronLeft color="white" size={30} />
                </button>
                <button className="rounded-md bg-gray-300 p-2 text-primary  ">
                  <BiChevronRight size={30} />
                </button>
              </div>
            </div>

            <div className="mt-[4em] flex items-center gap-10 justify-center flex-wrap ">
              {lists &&
                lists.properties &&
                lists.properties.slice(0, 3).map((list: any, i: any) => {
                  return <ListingCard lists={list} key={i} />;
                })}
            </div>
            <div className="flex items-center justify-center mt-12">
              <button
                className="bg-primary px-8 py-3 text-white font-medium  rounded-md"
                onClick={() => router.push("/search")}
              >
                View active listings
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConcludedListings;
