import Image from "next/image";
import React from "react";

const ListingCard = () => {
  return (
    <div className="items-center justify-center w-full flex">
      {" "}
      <div className="rounded-2xl relative overflow-hidden w-[324px] bg-white shadow-md  hover:shadow-secondary group ease-linear duration-300 transition-all">
        <div className="bg-[url('/img/hl-3.png')] group-hover:scale-105 ease-linear duration-300 transition-all bg-cover bg-center  bg-no-repeat  relative   h-[312px]"></div>

        <div className="backdrop-blur bg-white/20 rounded-2xl absolute top-4 left-4 flex items-center p-2 px-3 border-white gap-3">
          <div className="h-2 w-2 rounded-full bg-[#FFBF00] " />
          <p className="text-[12px] font-semibold">Leisure & Hospitality</p>
        </div>

        <div className="backdrop-blur bg-primary rounded-2xl absolute top-4 right-4 flex items-center p-2 px-4 border-white gap-3">
          <p className="text-[12px] text-white font-semibold">Sold</p>
        </div>

        <div className="relative bg-white flex-1 text-center ">
          <div className="w-full flex items-center justify-center absolute -top-8">
            <div className="trapez rounded-md w-[230px] "></div>
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
        <div className=" text-center mt-[3em]">
          <p className="text-[20px]  font-semibold">
            Lekki Phase 1, Lagos State
          </p>
          <div className="bg-[#F6F6F6] rounded-lg p-4  flex items-center justify-center m-4 group-hover:bg-gray-300 ease-linear duration-300 transition-all">
            <div className=" gap-2 flex items-center w-full justify-between">
              {" "}
              <div className="flex items-end gap-1">
                <Image
                  src={"/img/icons/bed.png"}
                  height={20}
                  width={20}
                  alt="bed"
                />
                <p className="text-[12px]">3 beds</p>
              </div>
              <div className="flex items-end gap-1">
                <Image
                  src={"/img/icons/bath.png"}
                  height={20}
                  width={20}
                  alt="bed"
                />
                <p className="text-[12px]">2 baths</p>
              </div>
              <div className="flex items-end gap-1">
                <Image
                  src={"/img/icons/vector.png"}
                  height={20}
                  width={20}
                  alt="bed"
                />
                <p className="text-[12px]">1500 sqft</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingCard;
