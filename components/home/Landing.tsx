"use client";
import React from "react";
import Image from "next/image";
import { useState } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { BsArrowDown } from "react-icons/bs";
import { IoChevronDownOutline, IoSearch } from "react-icons/io5";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Landing = () => {
  const [activeNav, setActiveNav] = useState("1");
  const router = useRouter();

  return (
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
        <div className="hidden lg:block mt-[5em] w-[70%]">
          <div className="font-bold">
            <button
              onClick={() => setActiveNav("1")}
              className={`${
                activeNav === "1"
                  ? "bg-white text-black"
                  : "backdrop-blur bg-white/20 mx-2 text-white"
              } rounded-tl-md rounded-tr-md px-5 py-2 transition-all ease-out duration-200  hover:scale-95`}
            >
              Buy a Home
            </button>
            <button
              onClick={() => setActiveNav("2")}
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
          <div className="w-full rounded-bl-md rounded-br-md rounded-tr-md bg-white p-4 px-10 py-8">
            <div className="flex items-end w-full">
              <div className="flex-[0.4] mr-[3em]">
                <p className="font-bold">Select Area</p>
                <div className="flex items-center justify-between mt-2">
                  <p className="text-gray-300 text-[18px] ">
                    Ikeja Long Bridge
                  </p>
                  <div className="p-1 rounded-full bg-gray-300 text-secondary ">
                    <IoChevronDownOutline size={13} />
                  </div>
                </div>
              </div>
              <div className=" flex-[0.3] border-l-2 border-l-gray-300  pl-[3em]  mr-[3em]">
                <p className="font-bold">Choose Type</p>
                <div className="flex items-center justify-between mt-2">
                  <p className="text-gray-300 text-[18px] ">Residential</p>
                  <div className="p-1 rounded-full bg-gray-300 text-secondary">
                    <IoChevronDownOutline size={13} />
                  </div>
                </div>
              </div>
              <div className=" flex-[0.3] border-l-2 border-l-gray-300  pl-[3em]">
                <p className="font-bold">I am a ... </p>
                <div className="flex items-center justify-between mt-2">
                  <p className="text-gray-300 text-[18px] ">Occupant</p>
                  <div className="p-1 rounded-full bg-gray-300 text-secondary">
                    <IoChevronDownOutline size={13} />
                  </div>
                </div>
              </div>
              <button className="p-3  h-full bg-primary rounded-md ml-8 hover:scale-90 ">
                <IoSearch color="white" size={20} />
              </button>
            </div>
          </div>
        </div>
        <div className="lg:hidden mt-[30px] bg-white rounded-[10px] w-[90%]flex justify-between flex-col px-[14px]">
          <div className="font-bold text-[#414141] flex justify-between items-center gap-[14px]  pt-[14px]">
            <button
              onClick={() => setActiveNav("1")}
              className={`${
                activeNav === "1"
                  ? "border-b-[2px] border-primary font-semibold text-[16px] text-secondary"
                  : "text-[#414141] font-normal"
              } py-3 `}
            >
              Buy a Home
            </button>
            <button
              onClick={() => setActiveNav("2")}
              className={`${
                activeNav === "2"
                  ? "border-b-[2px] border-primary font-semibold text-[16px] text-secondary"
                  : "text-[#414141] font-normal"
              } `}
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
                  ? "border-b-[2px] border-primary font-semibold text-[16px] text-secondary"
                  : "text-[#414141] font-normal"
              }`}
            >
              Sell Property
            </button>
          </div>
          <div className="w-full h-[1px] bg-[#D0103A] opacity-10"></div>
          <div className="w-full bg-white  py-[14px]">
            <div className="flex items-center justify-between ">
              <input
                type="search"
                placeholder="Search location"
                className="outline-none "
              />
              <button
                className="p-3  lg:h-full bg-primary rounded-md lg:ml-8 hover:scale-90"
                onClick={() => router.push("/search")}
              >
                <IoSearch color="white" size={20} />
              </button>
            </div>
          </div>
        </div>
        <div className="mt-14 hidden lg:flex items-center justify-between w-[90%]">
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
  );
};

export default Landing;
