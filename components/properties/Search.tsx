/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import React, {useState, useEffect, Suspense, useMemo} from "react";
import ListingCard from "../home/ListingCard";
import {useAPI} from "@/app/lib/useApi";
import {listings, getAreas} from "@/app/api/UseUser";
import {BiChevronLeft, BiChevronRight} from "react-icons/bi";
import {useDeviceType} from "@/hooks/useDeviceType";
import {useSearchParams} from "next/navigation";

const Search = () => {
    const {useQuery, queryClient} = useAPI();
    const params = useSearchParams();
    const deviceType = useDeviceType();

    const [area, setArea] = useState<string>(params.get("area") || "");
    const [market, setMarket] = useState<string>(params.get("market") || "");
    const [category, setCategory] = useState<string>(params.get("category") || "");
    const [property, setProperty] = useState<string>(params.get("property") || "");
    const [min, setMax] = useState<string>(params.get("min") || "");
    const [max, setMin] = useState<string>(params.get("max") || "");
    const [sortBy, setSortBy] = useState("");
    const [order, setOrder] = useState("");

    const [currentPage, setCurrentPage] = useState(1);

    function scrollTo(element_id: string) {
        const element = document.getElementById(element_id)
        element?.scrollIntoView({ behavior: "smooth", block: "start", inline: "start" });
    }

    const itemsPerPage = useMemo(() => {
        switch (deviceType) {
            case "desktop":
                return 9;
            case "tablet":
                return 6;
            default:
                return 3;
        }
    }, [deviceType])

    const {data: areas} = useQuery({
        queryKey: ["areas"],
        queryFn: () => getAreas()
    });

    const uniqueAreas = Array.from(new Set(areas && areas.data));

    const {data: lists} = useQuery({
        queryKey: ["lists", area, market, property, sortBy, order, category, min, max],
        queryFn: () =>
            listings(undefined, undefined, {
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

    function clearFilters() {
        setArea("");
        setMarket("");
        setCategory("");
        setProperty("");
        setMin("");
        setMax("");
    }

    useEffect(() => scrollTo("listing-box"), [currentPage]);

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

                    <button className={"px-6 py-3 rounded-md bg-slate-200 self-end mt-4 ml-4 lg:ml-0 lg:mt-0 lg:mb-1"} onClick={clearFilters}>Clear filters</button>
                </div>
                {" "}
                <div className={"flex pt-[4em] w-full items-center justify-center"} id={"listing-box"} >
                    {!currentItems || currentItems.length < 1 && (
                        <div className="font-semibold text-start w-full py-10 text-red-500 text-[20px]">
                            No available listing
                        </div>
                    )}
                    <div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full"} >
                        {lists &&
                            currentItems.map((list: any) => {
                                return <ListingCard key={list.id} lists={list}/>;
                            })}
                    </div>
                </div>
                {/* <PaginationNav /> */}
                <div className="flex items-center justify-center my-[4em]">
                    <div className="font-bold flex items-center gap-4 ">
                        <BiChevronLeft
                            size={28}
                            className={`cursor-pointer ${currentPage <= 1 ? "text-gray-300" : ""}`}
                            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                        />

                        <div className="flex gap-2 items-center">
                            {Array.from({length: Math.min(totalPages, 5)}, (_, index) => (
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
                            {
                                totalPages > 5 && (
                                    <>
                                        {
                                            ((totalPages - 5) > 1) && (
                                                <>
                                                    <p>•</p>
                                                    <p>•</p>
                                                    <p>•</p>
                                                </>
                                            )
                                        }
                                        <button
                                            key={totalPages}
                                            className={`p-4 py-[0.55rem] rounded-full text-white shadow-sm ${
                                                currentPage === totalPages ? "bg-primary" : "bg-gray-300"
                                            }`}
                                            onClick={() => handlePageClick(totalPages)}
                                        >
                                            {totalPages}
                                        </button>
                                    </>
                                )
                            }
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
