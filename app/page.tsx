"use client";
import Image from "next/image";
import { useState } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { BsArrowDown } from "react-icons/bs";
import { IoChevronDownOutline, IoSearch } from "react-icons/io5";

export default function Home() {
  const [activeNav, setActiveNav] = useState("1");
  const activeButtonStyle = "";
  return (
    <main>
      <div className="h-screen bg-[url('/img/home-landing-bg.png')] bg-no-repeat bg-cover bg-position-y-[-100px] bg-position-x-[50px] flex flex-col items-center justify-center">
        <div className="text-white text-center">
          <p className="font-semibold text-[70px] ">
            Turn your property <br /> goals{" "}
            <span className="text-[#FFF9D3]">into reality</span>
          </p>
          <p className=" text-[18px] mt-4 leading-[1.8em]">
            Pentstone provides{" "}
            <span className="font-bold">end-to-end solutions</span> for{" "}
            <span className="font-bold">
              seamless property <br /> transactions and investment journey
            </span>{" "}
            s, sourcing deals and maximizing <br /> investment yield.
          </p>
        </div>

        <div className="mt-[5em] w-[70%]">
          <div className="font-bold">
            <button
              onClick={() => setActiveNav("1")}
              className={`${
                activeNav === "1"
                  ? "bg-white text-black"
                  : "backdrop-blur-sm mx-2 text-white"
              } rounded-tl-md rounded-tr-md px-5 py-2 transition-all ease-out duration-200  hover:scale-95`}
            >
              Buy a Home
            </button>
            <button
              onClick={() => setActiveNav("2")}
              className={`${
                activeNav === "2"
                  ? "bg-white text-black"
                  : "backdrop-blur-sm mx-2 text-white"
              } rounded-tl-md rounded-tr-md px-5 py-2 transition-all ease-out duration-200  hover:scale-95`}
            >
              Rent a Home
            </button>
            <button
              onClick={() => setActiveNav("3")}
              className={`${
                activeNav === "3"
                  ? "bg-white text-black"
                  : "backdrop-blur-sm mx-2 text-white"
              } rounded-tl-md rounded-tr-md px-5 py-2 transition-all ease-out duration-200  hover:scale-95`}
            >
              Sell Property
            </button>
          </div>

          <div className="w-full rounded-bl-md rounded-br-md rounded-tr-md bg-white p-4 px-10">
            <div className="flex items-end w-full">
              <div className="flex-[0.4] mr-[3em]">
                <p className="font-bold">Select Area</p>
                <div className="flex items-center justify-between mt-2">
                  <p className="text-gray-300 text-[18px] ">
                    Ikeja Long Bridge
                  </p>

                  <div className="p-1 rounded-full bg-gray-300">
                    <IoChevronDownOutline />
                  </div>
                </div>
              </div>
              <div className=" flex-[0.3] border-l-2 border-l-gray-300  pl-[3em]  mr-[3em]">
                <p className="font-bold">Choose Type</p>
                <div className="flex items-center justify-between mt-2">
                  <p className="text-gray-300 text-[18px] ">Residential</p>

                  <div className="p-1 rounded-full bg-gray-300">
                    <IoChevronDownOutline />
                  </div>
                </div>
              </div>
              <div className=" flex-[0.3] border-l-2 border-l-gray-300  pl-[3em]">
                <p className="font-bold">I am a ... </p>
                <div className="flex items-center justify-between mt-2">
                  <p className="text-gray-300 text-[18px] ">Occupant</p>

                  <div className="p-1 rounded-full bg-gray-300">
                    <IoChevronDownOutline />
                  </div>
                </div>
              </div>

              <button className="p-3  h-full bg-primary rounded-md ml-8 hover:scale-90 ">
                <IoSearch color="white" size={20} />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 flex items-center  justify-between w-[90%]">
          <div />

          <div className="flex gap-4">
            <button className="rounded-md bg-primary p-2  ">
              <BiChevronLeft color="white" size={30} />
            </button>
            <button className="rounded-md bg-white p-2 text-primary  ">
              <BiChevronRight size={30} />
            </button>
          </div>

          <button className="border-dotted p-3 border-white border-2 rounded-full text-white">
            <BsArrowDown />
          </button>
        </div>
      </div>
    </main>
  );
}
