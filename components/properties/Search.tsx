"use client";

import React, {useState, useEffect} from "react";
import { CgChevronDown } from "react-icons/cg";
import { IoChevronDownOutline, IoSearch } from "react-icons/io5";
import ListingCard from "../home/ListingCard";
import { BsArrowDown } from "react-icons/bs";
import { PaginationNav } from "../common";
import { useAPI } from "@/app/lib/useApi";
import { listings } from "@/app/api/UseUser";
import NaijaStates from "naija-state-local-government";
import { list } from "firebase/storage";

const Search = () => {
  const { useQuery, queryClient } = useAPI();
const [area, setArea] = useState('')
const [market, setMarket] = useState('')
const [property, setProperty] = useState('')
const [price, setPrice] = useState('')
const [sortBy, setSortBy] = useState("");
const [order, setOrder] = useState("");

  const { data: lists } = useQuery({
    queryKey: ["lists", area, market, property, price, sortBy, order],
    queryFn: () =>
      listings(
        sortBy ? sortBy : undefined,
        order ? order : 'asc',
        {
          filters: {
            area : area ? area : undefined,
            marketType: market ? market : undefined,
            propertyType: property ? property : undefined,
            price: {
              'min': price ? Number(price) : undefined,
              'max': 30000,
            },
          },
        }
      ),
  });

      useEffect(() => {
        queryClient
          .invalidateQueries({
            queryKey: ["lists"],
          })
          .then();
      }, [area, market, property, price, queryClient, order, sortBy]);

  // let states = []
  //  states = NaijaStates.states();

  console.log(lists);

  return (
    <div className="text-secondary  flex justify-center">
      <div className=" w-[90%] md:w-[85%]">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between mt-[1em] md:mt-[4em] w-full ">
          <p className="font-semibold text-[20px] md:text-[40px] hidden lg:block">
            Explore our properties in Nigeria
          </p>
          <p className="font-semibold text-[32px] md:text-[40px] lg:hidden">
            Search Properties
          </p>

          <div className="flex items-center overflow-hidden pr-4 w-full lg:w-[22%] gap-2">
            <select
              className="focus:outline-none p-4 rounded-xl w-[1/2] border-2 border-[#D9E2E6]text-[18px] font-bold"
              onChange={(e) => setSortBy(e.target.value)}
              value={sortBy}
            >
              <option value="" disabled selected>
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
              <option value="" disabled selected>
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
            <input
              placeholder="Search location"
              type="search"
              className="focus:outline-none flex-1 p-4"
            />

            <button className="p-3 lg:h-full bg-primary rounded-md lg:ml-8 hover:scale-90">
              <IoSearch color="white" size={20} />
            </button>
          </div>
        </div>
        <div className="p-6 rounded-xl border-[#D9E2E6] border-2 lg:flex items-center justify-between mt-[1em] md:mt-[3em] hidden flex-wrap">
          <div className="px-4 pl-4 border-r-2 border-secondary ">
            <p className="font-bold text-gray-300">Select Area</p>
            <div className="flex items-center gap-4 mt-1">
              {/* <select className="focus:outline-none flex-1 p-4 text-[18px] font-bold"> */}
              {/* <option className=" text-[18px] font-bold" disabled selected>
                  Search with filter
                </option> */}
              {/* {states.map((state: string) => {
                  return (
                    <option key={state} className=" text-[18px] font-bold">
                      {state}
                    </option>
                  );
                })} */}
              {/* </select> */}
              <input
                onChange={(e) => setArea(e.target.value)}
                value={area}
                placeholder="Search street location"
                type="search"
                className="focus:outline-none p-4 rounded-xl border-2 border-[#D9E2E6]"
              />
            </div>
          </div>
          <div className="px-4 pl-4 border-r-2 border-secondary ">
            <p className="font-bold text-gray-300">Market Type</p>
            <div className="flex items-center gap-4 mt-1">
              <select
                className="focus:outline-none flex-1 p-4 text-[18px] font-bold"
                onChange={(e) => setMarket(e.target.value)}
                value={market}
              >
                <option
                  className=" text-[18px] font-medium"
                  value=""
                  disabled
                  selected
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
          <div className="px-4 pl-4 border-r-2 border-secondary ">
            <p className="font-bold text-gray-300">Property Type</p>
            <div className="flex items-center gap-4 mt-1">
              <select
                className="focus:outline-none flex-1 p-4 text-[18px] font-bold"
                value={property}
                onChange={(e) => setProperty(e.target.value)}
              >
                <option
                  className=" text-[18px] font-bold"
                  value=""
                  disabled
                  selected
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
          <div className="px-4 pl-4  ">
            <p className="font-bold text-gray-300">Price</p>
            <div className="flex items-center gap-4 mt-1">
              {/* <p className=" text-[18px] font-bold ">N250K-N1M</p> */}
              {/* <select
                className="focus:outline-none flex-1 p-4 text-[18px] font-bold"
                onChange={(e) => setPrice(e.target.value)}
                value={price}
              >
                <option className=" text-[18px] font-bold" disabled selected>
                  Filter Price
                </option>
                <option className=" text-[18px] font-bold ">Search</option>
              </select> */}
              <input
                onChange={(e) => setPrice(e.target.value)}
                value={price}
                placeholder="Enter minimum price"
                type="number"
                className="focus:outline-none p-4 rounded-xl border-2  border-[#D9E2E6]"
              />
              {/* <div className="p-1 rounded-full bg-gray-300 text-secondary ">
                <IoChevronDownOutline size={13} />
              </div> */}
            </div>
          </div>

          {/* <button className="bg-primary text-white font-semibold rounded-xl h-full px-[2em] py-[1em] ml-4">
            Refine
          </button> */}
        </div>{" "}
        <div className="mt-[4em] w-full flex items-center gap-[32px] justify-center lg:justify-between flex-wrap">
          {lists &&
            lists.properties.map((list: any) => {
              return <ListingCard key={list.id} lists={list} />;
            })}
          {/* <ListingCard lists={lists} />
          <ListingCard lists={lists} />
          <ListingCard lists={lists} />
          <ListingCard lists={lists} />
          <ListingCard lists={lists} />
          <ListingCard lists={lists} />
          <ListingCard lists={lists} />
          <ListingCard lists={lists} />
          <ListingCard lists={lists} /> */}
        </div>
        <PaginationNav />
      </div>
    </div>
  );
};

export default Search;
