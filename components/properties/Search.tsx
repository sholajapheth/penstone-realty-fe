/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import React, {useState, useEffect, Suspense} from "react";
import {IoSearch} from "react-icons/io5";
import ListingCard from "../home/ListingCard";
import {PaginationNav} from "../common";
import {useAPI} from "@/app/lib/useApi";
import {listings, getAreas} from "@/app/api/UseUser";
import {BiChevronLeft, BiChevronRight} from "react-icons/bi";
import Cookies from "js-cookie";
import {useSearchParams} from "next/navigation";
import {useHorizontalScroll} from "@/hooks/useHorizontalScroll";

const PROPERTY_COOKIE_NAME = "propertyType";
const AREA_COOKIE_NAME = "area";

const Search = () => {
    const {useQuery, queryClient} = useAPI();
    const searchParams = useSearchParams();
    const [area, setArea] = useState("");
    const [market, setMarket] = useState("");
    const [category, setCategory] = useState("");
    const [property, setProperty] = useState("");
    const [price, setPrice] = useState("");
    const [min, setMax] = useState("");
    const [max, setMin] = useState("");
    const [sortBy, setSortBy] = useState("");
    const [order, setOrder] = useState("");

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 9;

    const scrollRef = useHorizontalScroll();

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

    const {data: areas} = useQuery({
        queryKey: ["areas"],
        queryFn: () => getAreas(),
    });


    const uniqueAreas = Array.from(new Set(areas && areas.data));

    const {data: lists} = useQuery({
        queryKey: ["lists", area, market, property, price, sortBy, order, category, min, max],
        queryFn: () =>
            listings( undefined, undefined, {
                filters: {
                    marketType: market ? market : undefined,
                    propertyType: property ? property : undefined,
                    area: area ? area : undefined,
                    price: {
                        min: min ? Number(min) : undefined,
                        max: max ? Number(max) : undefined,
                    },
                    category: category ? category : undefined,
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

    useEffect(() => {
        queryClient
            .invalidateQueries({
                queryKey: ["lists"],
            })
            .then();
    }, [area, market, property, min, queryClient, order, sortBy, category, min, max]);

    return (
        <div className="text-secondary  flex justify-center">
            <div className=" w-[90%] md:w-[85%] max-w-[1150px]">
                <div className="flex flex-col md:flex-row gap-4 items-center justify-between mt-[1em] md:mt-[4em] w-full ">
                    <p className="font-semibold text-center lg:text-left text-[32px] md:text-[40px]">
                        Explore our <br className="lg:hidden"/> properties in Nigeria
                    </p>
                </div>
                <div className="p-3 pb-6 md:p-6 rounded-xl border-[#D9E2E6] border-2 lg:flex items-center justify-start gap-5 mt-[1em] md:mt-[3em] flex-wrap">
                    <div className="px-4 w-full md:w-1/2 lg:w-1/5">
                        <p className="font-[400] text-[#414141] mt-3 ">City</p>
                        <div className="flex items-center gap-4 mt-3">
                            <select
                                className="focus:outline-none flex-1 py-1 text-[18px] text-[#000929] border-b-2 font-semibold"
                                value={area}
                                onChange={(e) => setArea(e.target.value)}
                            >
                                <option value="">
                                    -
                                </option>
                                {uniqueAreas.map((location: any, i: any) => (
                                    <option key={i} value={location} className="text-black">
                                        {location}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className="px-4 w-full md:w-1/2 lg:w-1/5">
                        <p className="font-[400] text-[#414141] mt-3 ">Category</p>
                        <div className="flex items-center gap-4 mt-3">
                            <select
                                className="focus:outline-none flex-1 py-1 text-[18px] text-[#000929] border-b-2 font-semibold"
                                onChange={(e) => setCategory(e.target.value)}
                                value={category}
                            >
                                <option
                                    className=" text-[18px] font-medium"
                                    value=""
                                >
                                    -
                                </option>
                                <option className="text-[18px] font-bold" value={"RENT"}>
                                    Rent
                                </option>
                                <option className=" text-[18px] font-bold" value={"SALE"}>
                                    Sale
                                </option>
                                <option className=" text-[18px] font-bold" value={"SHORTLET"}>
                                    Shortlet
                                </option>
                            </select>
                        </div>
                    </div>

                    <div className="px-4 w-full md:w-1/2 lg:w-1/5">
                        <p className="font-[400] text-[#414141] mt-3 ">Market Type</p>
                        <div className="flex items-center gap-4 mt-3">
                            <select
                                className="focus:outline-none flex-1 py-1 text-[18px] text-[#000929] border-b-2 font-semibold"
                                onChange={(e) => setMarket(e.target.value)}
                                value={market}
                            >
                                <option
                                    className=" text-[18px] font-medium"
                                    value=""
                                >
                                    -
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

                    <div className="px-4 w-full md:w-1/2 lg:w-1/5">
                        <p className="font-[400] text-[#414141] mt-3 ">Property Type</p>
                        <div className="flex items-center gap-4 mt-3">
                            <select
                                className="focus:outline-none flex-1 py-1 text-[18px] text-[#000929] border-b-2 font-semibold"
                                value={property}
                                onChange={(e) => setProperty(e.target.value)}
                            >
                                <option
                                    className=" text-[18px] font-bold"
                                    value=""
                                >
                                    -
                                </option>
                                {" "}
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

                    <div className="px-4">
                        <p className="font-[400] text-[#414141] mt-3 ">Price</p>
                        <div className="flex items-center gap-4 mt-1">
                            <input
                                onChange={(e) => setMin(e.target.value)}
                                value={min}
                                placeholder="Min"
                                type="number"
                                className="focus:outline-none p-3 w-full lg:max-w-[10em] md:w-1/2 rounded-xl border-2  border-[#D9E2E6]"
                            />
                            <input
                                onChange={(e) => setMax(e.target.value)}
                                value={max}
                                placeholder="Max"
                                type="number"
                                className="focus:outline-none p-3 w-full lg:max-w-[10em] md:w-1/2 rounded-xl border-2  border-[#D9E2E6]"
                            />
                        </div>
                    </div>
                </div>
                {" "}
                <div ref={scrollRef as any} className={"flex mt-[4em] w-full overflow-x-auto gap-x-[48px] items-center px-[48px] md:pl-0 "}>
                    {lists &&
                        currentItems.map((list: any) => {
                            return <ListingCard key={list.id} lists={list}/>;
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
                            className={`cursor-pointer ${currentPage <= 1 ? "text-gray-300" : ""}`}
                            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                        />

                        <div className="flex gap-2">
                            {Array.from({length: totalPages}, (_, index) => (
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
                            className={`cursor-pointer ${currentPage >= totalPages ? "text-gray-300" : ""}`}
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

const SearchPage = () => {
    return (
        <Suspense fallback={<div>Loading search results...</div>}>
            <Search/>
        </Suspense>
    );
};

export default SearchPage;
