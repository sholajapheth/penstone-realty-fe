"use client";
import React from "react";
import Image from "next/image";
import { useState } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { BsArrowDown } from "react-icons/bs";
import { IoChevronDownOutline, IoSearch } from "react-icons/io5";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAPI } from "@/app/lib/useApi";
import { getAreas, listings } from "@/app/api/UseUser";
import { useAppToast } from "@/app/lib/useAppToast";
import ListingCard from "./ListingCard";
import Cookies from "js-cookie";

const Landing = () => {
  const { useQuery, useAPIMutation } = useAPI();
  const toast = useAppToast();

  const [activeNav, setActiveNav] = useState("1");
  const router = useRouter();
  const [property, setProperty] = useState("");
  const [role, setRole] = useState("");
  const [area, setArea] = useState("");
  const [lists, setLists] = useState([]);
  const [category, setCategory] = useState("")
const [showLists, setShowLists] = useState(false);

  const { data: areas } = useQuery({
    queryKey: ["areas"],
    queryFn: () => getAreas(),
  });

  const uniqueAreas = Array.from(new Set(areas && areas.data));

  const update = useAPIMutation({
    mutationFunction: (x: any) =>
      listings("", "asc", {
        filters: {
          marketType: undefined,
          propertyType: property ? property : undefined,
          area: area ? area : undefined,
          price: {
            min: undefined,
            max: undefined,
          },
          category: category.length < 1 ? "SALE" : category,
        },
      }),
    onSuccessFn: (data) => {
      toast({
        status: "success",
        description: data.message || "Request Successful",
      });
      setShowLists(true)
      setLists(data.properties);
    },
    onErrorFn: (data) => {
      // Custom error handler
      toast({
        status: "error",
        description: data.message || "Request Unsuccessful",
      });
    },
  });


  const handleSubmit = () => {
    Cookies.set("propertyType", property);
    Cookies.set('area', area)
    // update.mutate({});
    router.push('/search')
  };

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setArea(event.target.value);
  };

  return (
    <>
      <div className="bg-[url('/img/home-landing-bg.png')] bg-no-repeat bg-cover lg:bg-position-y-[-80px] bg-center lg:bg-position-x-[50px]">
        <div className="px-[1em] pt-[36px] pb-[50px] lg:pt-[130px] flex flex-col items-center justify-center bg-secondary/25">
          <div
            className="text-white text-center cursor-pointer"
            onClick={() => router.push("/about")}
          >
            <p className="font-semibold text-[40px] leading-[3rem] lg:leading-[72px] lg:text-[70px]">
              Turn your <br className="lg:hidden" /> property{" "}
              <br className="hidden lg:block" /> goals{" "}
              <span className="text-[#FFF9D3]">
                {" "}
                <br className="lg:hidden" />
                into reality
              </span>
            </p>
            <p className=" text-[20px] mt-5 leading-[29px] lg:leading-[1.8em]">
              Pentstone provides{" "}
              <span className="font-bold">
                end-to-end
                <br className="lg:hidden" /> solutions
              </span>{" "}
              for{" "}
              <span className="font-bold">
                seamless property <br /> transactions and investment
                <br className="lg:hidden" /> journey
              </span>{" "}
              , sourcing deals and
              <br className="lg:hidden" /> maximizing{" "}
              <br className="hidden lg:block" /> investment yield.
            </p>
          </div>
          <div className="hidden lg:block mt-[5em] w-[70%]  max-w-[1000px]">
            <div className="font-bold">
              <button
                onClick={() => {
                  setActiveNav("1");
                  setCategory("SALE");
                }}
                className={`${
                  activeNav === "1"
                    ? "bg-white text-black"
                    : "backdrop-blur bg-white/20 mx-2 text-white"
                } rounded-tl-md rounded-tr-md px-5 py-2 transition-all ease-out duration-200  hover:scale-95`}
              >
                Buy a Home
              </button>
              <button
                onClick={() => {
                  setActiveNav("2");
                  setCategory("RENT");
                }}
                className={`${
                  activeNav === "2"
                    ? "bg-white text-black"
                    : "backdrop-blur bg-white/20 mx-2 text-white"
                } rounded-tl-md rounded-tr-md px-5 py-2 transition-all ease-out duration-200  hover:scale-95`}
              >
                Rent a Home
              </button>
              <button
                onClick={() => {
                  setActiveNav("3");
                  router.push("/sell");
                }}
                className={`${
                  activeNav === "3"
                    ? "bg-white text-black"
                    : "backdrop-blur bg-white/20 mx-2 text-white"
                } rounded-tl-md rounded-tr-md px-5 py-2 transition-all ease-out duration-200  hover:scale-95`}
              >
                Sell Property
              </button>
            </div>
            {activeNav === "1" && (
              <div className="w-full rounded-bl-md rounded-br-md rounded-tr-md bg-white p-4 px-0 py-4">
                <div className="flex items-center w-full">
                  <div className=" flex-[0.3] pl-[3em]  mr-[3em]">
                    <p className="font-bold text-[14px]">Select Area</p>
                    <div className="flex items-center justify-between mt-0">
                      <select
                        name=""
                        id=""
                        className="focus:outline-none flex-1 p-4 text-[18px] text-[#9A9A9A]"
                        value={area}
                        onChange={handleChange}
                      >
                        <option value="" disabled>
                          Select Area
                        </option>
                        {uniqueAreas.map((location: any, i: any) => (
                          <option
                            key={i}
                            value={location}
                            className="text-black"
                          >
                            {location}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className=" flex-[0.3] border-l-2 border-l-gray-300  pl-[3em]  mr-[3em]">
                    <p className="font-bold text-[14px]">Choose Type</p>
                    <div className="flex items-center justify-between mt-0">
                      {/* <p className="text-gray-300 text-[18px] ">Residential</p> */}
                      <select
                        className="focus:outline-none flex-1 p-4 text-[18px] text-[#9A9A9A]"
                        value={property}
                        onChange={(e) => setProperty(e.target.value)}
                      >
                        <option
                          className=" text-[18px] font-bold"
                          value=""
                          disabled

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
                        <option
                          className=" text-[18px] font-bold"
                          value={"MINI_FLATS"}
                        >
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
                      {/* <div className="p-1 rounded-full bg-gray-300 text-secondary">
                    <IoChevronDownOutline size={13} />
                  </div> */}
                    </div>
                  </div>
                  <div className=" flex-[0.3] border-l-2 border-l-gray-300  pl-[3em]">
                    <p className="font-bold text-[14px]">I am a ... </p>
                    <div className="flex items-center justify-between mt-0">
                      {/* <p className="text-gray-300 text-[18px] ">Occupant</p> */}
                      <select
                        className="focus:outline-none flex-1 p-4 text-[18px] text-[#9A9A9A]"
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                      >
                        <option
                          className=" text-[18px] font-bold"
                          value=""
                          disabled

                        >
                          Filter role
                        </option>{" "}
                        <option
                          className=" text-[18px] font-bold"
                          value={"Occupant"}
                        >
                          Occupant
                        </option>
                        <option
                          className=" text-[18px] font-bold"
                          value={"Investor"}
                        >
                          Investor
                        </option>
                        <option
                          className=" text-[18px] font-bold"
                          value={"Developer"}
                        >
                          Developer
                        </option>
                        <option
                          className=" text-[18px] font-bold"
                          value={"Agent"}
                        >
                          Agent
                        </option>
                      </select>
                      {/* <div className="p-1 rounded-full bg-gray-300 text-secondary">
                    <IoChevronDownOutline size={13} />
                  </div> */}
                    </div>
                  </div>
                  <button
                    className="p-3  h-full bg-primary rounded-md ml-8 hover:scale-90 "
                    onClick={handleSubmit}
                  >
                    <IoSearch color="white" size={20} />
                  </button>
                </div>
              </div>
            )}
            {activeNav === "2" && (
              <div className="w-full rounded-bl-md rounded-br-md rounded-tr-md bg-white p-4 px-0 py-4">
                <div className="flex items-center w-full">
                  <div className=" flex-[0.3] pl-[3em]  mr-[3em]">
                    <p className="font-bold text-[14px]">Select Area</p>
                    <div className="flex items-center justify-between mt-0">
                      <select
                        name=""
                        id=""
                        className="focus:outline-none flex-1 p-4 text-[18px] text-[#9A9A9A]"
                        value={area}
                        onChange={handleChange}
                      >
                        <option value="" disabled >
                          Select Area
                        </option>
                        {uniqueAreas.map((location: any, i: any) => (
                          <option
                            key={i}
                            value={location}
                            className="text-black"
                          >
                            {location}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className=" flex-[0.3] border-l-2 border-l-gray-300  pl-[3em]  mr-[3em]">
                    <p className="font-bold text-[14px]">Choose Type</p>
                    <div className="flex items-center justify-between mt-0">
                      {/* <p className="text-gray-300 text-[18px] ">Residential</p> */}
                      <select
                        className="focus:outline-none flex-1 p-4 text-[18px] text-[#9A9A9A]"
                        value={property}
                        onChange={(e) => setProperty(e.target.value)}
                      >
                        <option
                          className=" text-[18px] font-bold"
                          value=""
                          disabled

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
                        <option
                          className=" text-[18px] font-bold"
                          value={"MINI_FLATS"}
                        >
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
                      {/* <div className="p-1 rounded-full bg-gray-300 text-secondary">
                    <IoChevronDownOutline size={13} />
                  </div> */}
                    </div>
                  </div>
                  <div className=" flex-[0.3] border-l-2 border-l-gray-300  pl-[3em]">
                    <p className="font-bold text-[14px]">I am a ... </p>
                    <div className="flex items-center justify-between mt-0">
                      {/* <p className="text-gray-300 text-[18px] ">Occupant</p> */}
                      <select
                        className="focus:outline-none flex-1 p-4 text-[18px] text-[#9A9A9A]"
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                      >
                        <option
                          className=" text-[18px] font-bold"
                          value=""
                          disabled

                        >
                          Filter role
                        </option>{" "}
                        <option
                          className=" text-[18px] font-bold"
                          value={"Occupant"}
                        >
                          Occupant
                        </option>
                        <option
                          className=" text-[18px] font-bold"
                          value={"Investor"}
                        >
                          Investor
                        </option>
                        <option
                          className=" text-[18px] font-bold"
                          value={"Developer"}
                        >
                          Developer
                        </option>
                        <option
                          className=" text-[18px] font-bold"
                          value={"Agent"}
                        >
                          Agent
                        </option>
                      </select>
                      {/* <div className="p-1 rounded-full bg-gray-300 text-secondary">
                    <IoChevronDownOutline size={13} />
                  </div> */}
                    </div>
                  </div>
                  <button
                    className="p-3  h-full bg-primary rounded-md ml-8 hover:scale-90 "
                    onClick={handleSubmit}
                  >
                    <IoSearch color="white" size={20} />
                  </button>
                </div>
              </div>
            )}
          </div>
          <div className="lg:hidden mt-[30px] bg-white rounded-[10px] w-[100%] flex justify-between flex-col px-[14px]">
            <div className="font-bold text-[#414141] flex justify-between items-center gap-[14px]  pt-[14px]">
              <button
                onClick={() => {
                  setActiveNav("1");
                  setCategory("SALE");
                }}
                className={`${
                  activeNav === "1"
                    ? "border-b-[3px] border-primary font-semibold text-[16px] text-secondary"
                    : "text-[#414141] font-normal"
                } py-3 `}
              >
                Buy a Home
              </button>
              <button
                onClick={() => {
                  setActiveNav("2");
                  setCategory("RENT");
                }}
                className={`${
                  activeNav === "2"
                    ? "border-b-[3px] border-primary font-semibold text-[16px] text-secondary"
                    : "text-[#414141] font-normal"
                } py-3 `}
              >
                Rent a Home
              </button>
              <button
                onClick={() => {
                  setActiveNav("3");
                  router.push("/sell");
                }}
                className={`${
                  activeNav === "3"
                    ? "border-b-[3px] border-primary font-semibold text-[16px] text-secondary"
                    : "text-[#414141] font-normal"
                } py-3 `}
              >
                Sell Property
              </button>
            </div>
            <div className="w-full h-[1px] bg-[#D0103A] opacity-10"></div>
            <div className="w-full bg-white  py-[14px]">
              <div className="flex items-center justify-between ">
                <select
                  name=""
                  id=""
                  className="focus:outline-none flex-1 p-4 text-[18px] text-black"
                  value={area}
                  onChange={handleChange}
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
                <button
                  className="p-3  lg:h-full bg-primary rounded-md lg:ml-8 hover:scale-90"
                  onClick={handleSubmit}
                >
                  <IoSearch color="white" size={20} />
                </button>
              </div>
            </div>
          </div>
          <div className="mt-14 hidden lg:flex items-center justify-between w-[90%]  max-w-[1200px]">
            <div />
            <div className="flex gap-4">
              <button className="rounded-md bg-primary p-2  ">
                <BiChevronLeft color="white" size={30} />
              </button>
              <button className="rounded-md bg-white p-2 text-primary  ">
                <BiChevronRight size={30} />
              </button>
            </div>
            <Link
              href="#offering"
              className="border-dotted p-3 border-white border-2 rounded-full text-white"
            >
              <BsArrowDown />
            </Link>
          </div>
        </div>
      </div>

      {/* {showLists && lists.length > 0 && (
        <div className="bg-white flex  justify-center py-[1em] ">
          <div className="my-5 w-[90%] lg:w-[85%]">
            <div className="mt-[3em] lg:mt-[4em] flex-wrap flex items-center gap-10 justify-center ">
              {lists &&
                lists.slice(0, 9).map((list: any, i: any) => {
                  return <ListingCard lists={list} key={i} />;
                })}
            </div>
            <div className="flex items-center justify-center mt-12">
              <button
                className="bg-primary w-full lg:w-fit px-8 py-3 text-white font-medium  rounded-md"
                onClick={() => router.push("/search")}
              >
                View listings
              </button>
            </div>{" "}
          </div>
        </div>
      )}
      {lists.length < 1 && showLists && (
        <p className="font-semibold text-center py-10 text-red-500 text-[20px]">
          No available listing
        </p>
      )} */}
    </>
  );
};

export default Landing;
