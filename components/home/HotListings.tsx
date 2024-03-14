import Image from "next/image";
import React from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

const HotListings = () => {
  return (
    <div className="bg-white min-h-screen flex  justify-center py-[4em] ">
      <div className="w-[90%] ">
        <div className="flex items-start justify-between  ">
          <p className="text-[#212226] font-semibold text-[40px] ">
            Hot Featured Listings
          </p>
          <p className="text-[#5A5A5A] text-[20px] ">
            Explore handpicked Nigeria properties with exceptional <br />{" "}
            features in prime locations.
          </p>
          <div className="flex gap-4">
            <button className="rounded-md bg-primary p-2  ">
              <BiChevronLeft color="white" size={30} />
            </button>
            <button className="rounded-md bg-gray-300 p-2 text-primary  ">
              <BiChevronRight size={30} />
            </button>
          </div>
        </div>

        <div className="mt-[4em] flex items-center gap-10 justify-center ">
          <div className="rounded-2xl overflow-hidden w-[354px] bg-white shadow-md">
            <div className="bg-[url('/img/hl-1.png')] bg-cover bg-center  bg-no-repeat   h-[312px]"></div>
            <div className="relative bg-white flex-1 text-center ">
              <div className="w-full flex items-center justify-center absolute -top-8">
                <div className="trapez w-[230px] "></div>
              </div>

              <div className="absolute -top-6  flex items-center justify-center w-full">
                {" "}
                <div>
                  {" "}
                  <p className="font-bold text-[28px] ">₦ 144,900,000</p>
                  <p className="text-[14px]">PER PROPERTY</p>
                </div>
              </div>
            </div>
            <div className=" text-center mt-10">
              <p className="text-[20px] mt-4">Lekki Phase 1, Lagos State</p>
              <div className="bg-[#F6F6F6] rounded-lg p-4  flex items-center justify-center m-4">
                <div className=" gap-2 flex items-center">
                  {" "}
                  <div className="flex items-center gap-1">
                    <Image
                      src={"/img/icons/bed.png"}
                      height={20}
                      width={20}
                      alt="bed"
                    />
                    <p>3 beds</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <Image
                      src={"/img/icons/bath.png"}
                      height={20}
                      width={20}
                      alt="bed"
                    />
                    <p>2 baths</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <Image
                      src={"/img/icons/vector.png"}
                      height={20}
                      width={20}
                      alt="bed"
                    />
                    <p>1500 sqft</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden w-[354px] bg-white shadow-md">
            <div className="bg-[url('/img/hl-2.png')] bg-cover bg-center  bg-no-repeat   h-[312px]"></div>
            <div className="relative bg-white flex-1 text-center ">
              <div className="w-full flex items-center justify-center absolute -top-8">
                <div className="trapez w-[230px] "></div>
              </div>

              <div className="absolute -top-6  flex items-center justify-center w-full">
                {" "}
                <div>
                  {" "}
                  <p className="font-bold text-[28px] ">₦ 95,900</p>
                  <p className="text-[14px]">PER MONTH</p>
                </div>
              </div>
            </div>
            <div className=" text-center mt-10">
              <p className="text-[20px] mt-4">Lekki Phase 1, Lagos State</p>
              <div className="bg-[#F6F6F6] rounded-lg p-4  flex items-center justify-center m-4">
                <div className=" gap-2 flex items-center">
                  {" "}
                  <div className="flex items-center gap-1">
                    <Image
                      src={"/img/icons/bed.png"}
                      height={20}
                      width={20}
                      alt="bed"
                    />
                    <p>3 beds</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <Image
                      src={"/img/icons/bath.png"}
                      height={20}
                      width={20}
                      alt="bed"
                    />
                    <p>2 baths</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <Image
                      src={"/img/icons/vector.png"}
                      height={20}
                      width={20}
                      alt="bed"
                    />
                    <p>1500 sqft</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden w-[354px] bg-white shadow-md">
            <div className="bg-[url('/img/hl-3.png')] bg-cover bg-center  bg-no-repeat   h-[312px]"></div>
            <div className="relative bg-white flex-1 text-center ">
              <div className="w-full flex items-center justify-center absolute -top-8">
                <div className="trapez w-[230px] "></div>
              </div>

              <div className="absolute -top-6  flex items-center justify-center w-full">
                {" "}
                <div>
                  {" "}
                  <p className="font-bold text-[28px] ">₦ 95,900</p>
                  <p className="text-[14px]">PER MONTH</p>
                </div>
              </div>
            </div>
            <div className=" text-center mt-10">
              <p className="text-[20px] mt-4">Lekki Phase 1, Lagos State</p>
              <div className="bg-[#F6F6F6] rounded-lg p-4  flex items-center justify-center m-4">
                <div className=" gap-2 flex items-center">
                  {" "}
                  <div className="flex items-center gap-1">
                    <Image
                      src={"/img/icons/bed.png"}
                      height={20}
                      width={20}
                      alt="bed"
                    />
                    <p>3 beds</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <Image
                      src={"/img/icons/bath.png"}
                      height={20}
                      width={20}
                      alt="bed"
                    />
                    <p>2 baths</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <Image
                      src={"/img/icons/vector.png"}
                      height={20}
                      width={20}
                      alt="bed"
                    />
                    <p>1500 sqft</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center mt-12">
          <button className="bg-primary px-8 py-3 text-white font-medium  rounded-md">
            View all listings
          </button>
        </div>
      </div>
    </div>
  );
};

export default HotListings;
