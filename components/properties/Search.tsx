/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import React, { useState, useEffect } from "react";
import { IoSearch } from "react-icons/io5";
import ListingCard from "../home/ListingCard";
import { PaginationNav } from "../common";
import { useAPI } from "@/app/lib/useApi";
import { listings, getAreas } from "@/app/api/UseUser";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import Cookies from "js-cookie";
import { useSearchParams } from "next/navigation";

const PROPERTY_COOKIE_NAME = "propertyType";
const AREA_COOKIE_NAME = "area";

const Search = () => {
  const { useQuery, queryClient } = useAPI();
  const searchParams = useSearchParams();
  const [area, setArea] = useState("");
  const [market, setMarket] = useState("");
  const [property, setProperty] = useState("");
  const [price, setPrice] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [order, setOrder] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  useEffect(() => {
    const prop = Cookies.get(PROPERTY_COOKIE_NAME);
    const item = searchParams.get("filter");
    const selectedArea = Cookies.get(AREA_COOKIE_NAME);

    if (prop) {
      setProperty(prop);
      Cookies.remove(PROPERTY_COOKIE_NAME);
    }

    if (item) {
      setMarket(item);
    }

    if (selectedArea) {
      setArea(selectedArea);
      Cookies.remove(AREA_COOKIE_NAME);
    }
  }, [searchParams]);

  const { data: areas } = useQuery({
    queryKey: ["areas"],
    queryFn: () => getAreas(),
  });


  const uniqueAreas = Array.from(new Set(areas && areas.data));

  const { data: lists } = useQuery({
    queryKey: ["lists", area, market, property, price, sortBy, order],
    queryFn: () =>
      listings(sortBy ? sortBy : undefined, order ? order : "asc", {
        filters: {
          marketType: market ? market : undefined,
          propertyType: property ? property : undefined,
          area: area ? area : undefined,
          price: {
            min: price ? Number(price) : undefined,
            max: 10000000,
          },
          category: undefined,
        },
      }),
  });

  const totalItems = lists?.properties?.length || 0;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = lists?.properties?.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handlePageClick = (page: number) => {
    setCurrentPage(page);
  };

  const handleClick = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    queryClient
      .invalidateQueries({
        queryKey: ["lists"],
      })
      .then();
  };

  useEffect(() => {
    queryClient
      .invalidateQueries({
        queryKey: ["lists"],
      })
      .then();
  }, [area, market, property, price, queryClient, order, sortBy, handleClick]);

  // let states = []
  //  states = NaijaStates.states();

  return (
    <div className="text-secondary  flex justify-center">
      <div className=" w-[90%] md:w-[85%] max-w-[1150px]">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between mt-[1em] md:mt-[4em] w-full ">
          <p className="font-semibold text-center lg:text-left text-[32px] md:text-[40px]">
            Explore our <br className="lg:hidden" /> properties in Nigeria
          </p>

          <div className="lg:flex items-center overflow-hidden gap-2 hidden">
            <select
              className="focus:outline-none p-4 rounded-xl w-[1/2] border-2 border-[#D9E2E6]text-[18px] font-bold"
              onChange={(e) => setSortBy(e.target.value)}
              value={sortBy}
            >
              <option value="" disabled >
                Sort by
              </option>
              <option className="text-[18px] font-bold" value="rank">
                Rank
              </option>{" "}
              <option className="text-[18px] font-bold" value="time">
                Time
              </option>{" "}
              <option className="text-[18px] font-bold" value="price">
                Price
              </option>
            </select>
            <select
              className="focus:outline-none p-4 rounded-xl w-[1/2] border-2 border-[#D9E2E6]text-[18px] font-bold"
              onChange={(e) => setOrder(e.target.value)}
              value={order}
            >
              <option value="" disabled >
                Filter by
              </option>
              <option className="text-[18px] font-bold" value="asc">
                Ascending
              </option>
              <option className="text-[18px] font-bold" value="desc">
                Descending
              </option>
            </select>
          </div>

          <div className="rounded-xl flex items-center border-2 overflow-hidden border-[#D9E2E6] pr-2 lg:hidden w-full">
            <div className="flex items-center gap-4 mt-1 w-full">
              <select
                className="focus:outline-none flex-1 p-3 lg:p-4 w-full text-[12px] lg:text-[18px] font-[500] text-[#000929]"
                value={area}
                onChange={(e) => setArea(e.target.value)}
              >
                <option value="" disabled >
                  Select Area
                </option>
                {uniqueAreas.map((location: any, i: any) => (
                  <option key={i} value={location} className="text-black">
                    {location}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="rounded-xl flex items-center border-2 overflow-hidden border-[#D9E2E6] pr-2 lg:hidden w-full">
            <div className="flex items-center gap-4 mt-1 w-full">
              <select
                className="focus:outline-none flex-1 p-3 lg:p-4 w-full text-[12px] lg:text-[18px] font-[500] text-[#000929]"
                onChange={(e) => setMarket(e.target.value)}
                value={market}
              >
                <option
                  className=" text-[18px] font-medium"
                  value=""
                  disabled
                  
                >
                  Market type
                </option>
                <option className="text-[18px] font-bold" value={"RESIDENTIAL"}>
                  Residential
                </option>
                <option className=" text-[18px] font-bold" value={"COMMERCIAL"}>
                  Commercial
                </option>
              </select>
            </div>
          </div>

          <div className="rounded-xl flex items-center border-2 overflow-hidden border-[#D9E2E6] pr-2 lg:hidden w-full">
            <div className="flex items-center gap-4 mt-1 w-full">
              <select
                className="focus:outline-none flex-1 p-3 lg:p-4 w-full text-[12px] lg:text-[18px] font-[500] text-[#000929]"
                value={property}
                onChange={(e) => setProperty(e.target.value)}
              >
                <option
                  className=" text-[18px] font-bold"
                  value=""
                  disabled
                  // 
                >
                  Property type
                </option>{" "}
                <option
                  className=" text-[18px] font-bold"
                  value={"FULLY_DETACHED_DUPLEX"}
                >
                  Fully Detached Duplex
                </option>
                <option
                  className=" text-[18px] font-bold"
                  value={"SEMI_DETACHED_HOUSE"}
                >
                  Semi Detached House
                </option>
                <option
                  className=" text-[18px] font-bold"
                  value={"ACCOMMODATION_BLOCK"}
                >
                  Accommodation Block
                </option>
                <option
                  className=" text-[18px] font-bold"
                  value={"FLATS_AND_APARTMENT"}
                >
                  Flats and Apartment
                </option>
                <option
                  className=" text-[18px] font-bold"
                  value={"STUDIO_APARTMENT"}
                >
                  Studio Apartment
                </option>
                <option className=" text-[18px] font-bold" value={"MINI_FLATS"}>
                  Mini Flats
                </option>
                <option
                  className=" text-[18px] font-bold"
                  value={"RENTAL_SPACES"}
                >
                  Rental Spaces
                </option>
                <option
                  className=" text-[18px] font-bold"
                  value={"WAREHOUSE_AND_INDUSTRIAL"}
                >
                  Warehouse and Industrial
                </option>
                <option
                  className=" text-[18px] font-bold"
                  value={"OFFICE_COMPLEX"}
                >
                  Office Complex
                </option>
                <option
                  className=" text-[18px] font-bold"
                  value={"SPECIALIZED"}
                >
                  Specialized
                </option>
              </select>
            </div>
          </div>

          <div className="rounded-xl flex items-center border-2 overflow-hidden border-[#D9E2E6] pr-2 lg:hidden w-full">
            <input
              onChange={(e) => setPrice(e.target.value)}
              value={price}
              placeholder="Enter minimum price"
              type="number"
              className="focus:outline-none w-full text-[12px] lg:text-[18px] font-[500] text-[#000929] p-3 lg:p-4 rounded-xl"
            />
          </div>
          <button
            className="bg-primary w-full h-[50px] rounded-[14px] text-[16px] font-[600] text-white lg:hidden"
            onClick={(e) => handleClick(e)}
          >
            Refine
          </button>
        </div>
        <div className="p-6 rounded-xl border-[#D9E2E6] border-2 lg:flex items-center justify-between mt-[1em] md:mt-[3em] hidden flex-wrap">
          <div className="px-4">
            <p className="font-[400] text-[#414141]">Search Area</p>
            <div className="flex items-center gap-4 mt-1">
              <select
                name=""
                id=""
                className="focus:outline-none flex-1 py-4 text-[18px] text-[#000929]  font-semibold"
                value={area}
                onChange={(e) => setArea(e.target.value)}
              >
                <option value="" disabled >
                  Select Area
                </option>
                {uniqueAreas.map((location: any, i: any) => (
                  <option key={i} value={location} className="text-black">
                    {location}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="bg-secondary w-[2px] h-[80px]"></div>
          <div className="px-4">
            <p className="font-[400] text-[#414141]">Market Type</p>
            <div className="flex items-center gap-4 mt-1">
              <select
                className="focus:outline-none flex-1 py-4 text-[18px] text-[#000929]  font-semibold"
                onChange={(e) => setMarket(e.target.value)}
                value={market}
              >
                <option
                  className=" text-[18px] font-medium"
                  value=""
                  disabled
                  
                >
                  Filter market type
                </option>
                <option className="text-[18px] font-bold" value={"RESIDENTIAL"}>
                  Residential
                </option>
                <option className=" text-[18px] font-bold" value={"COMMERCIAL"}>
                  Commercial
                </option>
              </select>
            </div>
          </div>
          <div className="bg-secondary w-[2px] h-[80px]"></div>

          <div className="px-4">
            <p className="font-[400] text-[#414141]">Property Type</p>
            <div className="flex items-center gap-4 mt-1">
              <select
                className="focus:outline-none flex-1 py-4 text-[18px] text-[#000929]  font-semibold"
                value={property}
                onChange={(e) => setProperty(e.target.value)}
              >
                <option
                  className=" text-[18px] font-bold"
                  value=""
                  disabled
                  // 
                >
                  Filter property type
                </option>{" "}
                <option
                  className=" text-[18px] font-bold"
                  value={"FULLY_DETACHED_DUPLEX"}
                >
                  Fully Detached Duplex
                </option>
                <option
                  className=" text-[18px] font-bold"
                  value={"SEMI_DETACHED_HOUSE"}
                >
                  Semi Detached House
                </option>
                <option
                  className=" text-[18px] font-bold"
                  value={"ACCOMMODATION_BLOCK"}
                >
                  Accommodation Block
                </option>
                <option
                  className=" text-[18px] font-bold"
                  value={"FLATS_AND_APARTMENT"}
                >
                  Flats and Apartment
                </option>
                <option
                  className=" text-[18px] font-bold"
                  value={"STUDIO_APARTMENT"}
                >
                  Studio Apartment
                </option>
                <option className=" text-[18px] font-bold" value={"MINI_FLATS"}>
                  Mini Flats
                </option>
                <option
                  className=" text-[18px] font-bold"
                  value={"RENTAL_SPACES"}
                >
                  Rental Spaces
                </option>
                <option
                  className=" text-[18px] font-bold"
                  value={"WAREHOUSE_AND_INDUSTRIAL"}
                >
                  Warehouse and Industrial
                </option>
                <option
                  className=" text-[18px] font-bold"
                  value={"OFFICE_COMPLEX"}
                >
                  Office Complex
                </option>
                <option
                  className=" text-[18px] font-bold"
                  value={"SPECIALIZED"}
                >
                  Specialized
                </option>
              </select>
            </div>
          </div>
          <div className="bg-secondary w-[2px] h-[80px]"></div>

          <div className="px-4 pl-4  ">
            <p className="font-[400] text-[#414141]">Price</p>
            <div className="flex items-center gap-4 mt-1">
              <input
                onChange={(e) => setPrice(e.target.value)}
                value={price}
                placeholder="Enter minimum price"
                type="number"
                className="focus:outline-none p-4 rounded-xl border-2  border-[#D9E2E6]"
              />
            </div>
          </div>
        </div>{" "}
        <div className="mt-[4em] w-full flex items-center gap-x-[48px] gap-y-[48px] justify-center lg:justify-between flex-wrap">
          {lists &&
            currentItems.map((list: any) => {
              return <ListingCard key={list.id} lists={list} />;
            })}
          {currentItems && currentItems.length < 1 && (
            <p className="font-semibold text-center flex justify-center items-center w-full py-10 text-red-500 text-[20px]">
              No available listing
            </p>
          )}
        </div>
        {/* <PaginationNav /> */}
        <div className="flex items-center justify-center mt-[1em] md:mt-[4em]">
          <div className="font-bold flex items-center gap-4 ">
            <BiChevronLeft
              size={28}
              className="cursor-pointer"
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            />

            <div className="flex gap-2">
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index + 1}
                  className={`p-4 py-[0.55rem] rounded-full text-white shadow-sm ${
                    currentPage === index + 1 ? "bg-primary" : "bg-gray-300"
                  }`}
                  onClick={() => handlePageClick(index + 1)}
                >
                  {index + 1}
                </button>
              ))}
            </div>

            <BiChevronRight
              size={28}
              className="cursor-pointer"
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
